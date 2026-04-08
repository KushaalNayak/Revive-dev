import { GithubRepo } from "@/backend/actions/github"
import { GoogleGenAI } from "@google/genai"

export interface RepoHealth {
    score: number;
    label: "Healthy" | "At Risk" | "Critical" | "Dormant";
    insights: string[];
    lastCommitDays: number;
    difficulty: "EASY" | "MEDIUM" | "HARD";
    roadmap: string[];
    stoppageReason: string;
    structureExplanation: string;
}

export async function analyzeRepoHealth(repoData: GithubRepo): Promise<RepoHealth> {
    const stars = repoData.stargazers_count || 0;
    const forks = repoData.forks_count || 0;
    const openIssues = repoData.open_issues_count || 0;
    const updatedAt = new Date(repoData.pushed_at || repoData.updated_at);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - updatedAt.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const language = repoData.language || "Unknown";

    let score = 100;

    // Inactivity is the primary killer
    if (diffDays > 730) score -= 60; // 2 years
    else if (diffDays > 365) score -= 40; // 1 year
    else if (diffDays > 180) score -= 20;

    // Issue Pressure
    if (openIssues > 50 && stars < 100) score -= 15;

    // Community Interest Mitigation
    if (stars > 500) score += 10;
    if (forks > 100) score += 5;

    score = Math.max(0, Math.min(100, score));

    let label: RepoHealth["label"] = "Healthy";
    if (score < 40) label = "Dormant";
    else if (score < 60) label = "Critical";
    else if (score < 80) label = "At Risk";

    const difficulty: RepoHealth["difficulty"] = openIssues > 100 ? "HARD" : openIssues > 30 ? "MEDIUM" : "EASY";

    let insights = [
        `Last activity recorded ${diffDays} days ago.`,
        `${stars} developers have starred this repository.`,
        `${openIssues} issues currently require attention.`
    ];

    let roadmap = [
        "Audit current dependencies for security vulnerabilities.",
        "Address the most commented open issues.",
        "Refactor core modules to support modern Node.js versions.",
        "Implement comprehensive unit tests for business logic."
    ];

    let stoppageReason = diffDays > 365
        ? "The project appears to have been abandoned due to the maintainer shifting focus to newer technologies or lacking bandwidth for community PRs."
        : "Development has slowed down significantly, likely due to a high volume of unmanaged issues and breaking changes in the ecosystem.";

    let structureExplanation = `This is a ${language}-based project. It likely follows a standard architectural pattern with source files in 'src' or 'lib'. Key logic is expected to be found in the core handlers.`;

    if (process.env.GEMINI_API_KEY) {
        try {
            const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
            const prompt = `Analyze this GitHub repository for revival.
Repo Name: ${repoData.full_name}
Description: ${repoData.description || "N/A"}
Language: ${language}
Stars: ${stars}
Forks: ${forks}
Open Issues: ${openIssues}
Last Pushed: ${diffDays} days ago

Return a JSON string exactly matching this schema, without any markdown formatting:
{
    "insights": ["insight 1", "insight 2", "insight 3"],
    "roadmap": ["step 1", "step 2", "step 3", "step 4"],
    "stoppageReason": "detailed guess on why it was abandoned",
    "structureExplanation": "brief explanation of expected project structure based on language"
}`;
            
            const response = await ai.models.generateContent({
                model: 'gemini-2.0-flash',
                contents: prompt,
                config: {
                    responseMimeType: "application/json",
                }
            });
            
            if (response.text) {
                const parsed = JSON.parse(response.text);
                insights = parsed.insights || insights;
                roadmap = parsed.roadmap || roadmap;
                stoppageReason = parsed.stoppageReason || stoppageReason;
                structureExplanation = parsed.structureExplanation || structureExplanation;
            }
        } catch (error) {
            console.error("Gemini API Error, falling back to simulated insights:", error);
        }
    }

    return {
        score,
        label,
        insights,
        lastCommitDays: diffDays,
        difficulty,
        roadmap,
        stoppageReason,
        structureExplanation
    };
}
