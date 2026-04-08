import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

// Initialize the Google Generative AI with the API key from environment variables
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

export async function POST(req: Request) {
    try {
        const { repoFullName, description, language } = await req.json();

        if (!process.env.GEMINI_API_KEY) {
            // Fallback heuristics if no API key
            const genericRoadmap = [
                "Review the existing codebase and README to understand the original author's intent.",
                `Check for outdated dependencies related to ${language || "the tech stack"} and update them to secure versions.`,
                "Fix any failing tests or build scripts to ensure a stable baseline.",
                "Identify top 3 requested features or bugs from the issue tracker to work on.",
            ];
            return NextResponse.json({ roadmap: genericRoadmap });
        }

        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        const prompt = `
You are an expert developer platform AI. We are guiding a new maintainer who is initiating a revival for an abandoned GitHub repository.
Repository details:
Name: ${repoFullName}
Description: ${description || "No description provided."}
Language: ${language || "Unknown"}

Provide a concise 4-step roadmap for reviving this project.
Return ONLY valid JSON in the format:
{
  "roadmap": ["Step 1", "Step 2", "Step 3", "Step 4"]
}
Keep each step actionable, specific (if you can infer from the name/description), and brief (under 15 words).
No markdown formatting, just the raw JSON string.
        `;

        const result = await model.generateContent(prompt);
        const responseText = result.response.text().replace(/```json/g, "").replace(/```/g, "").trim();
        
        try {
            const parsed = JSON.parse(responseText);
            return NextResponse.json({ roadmap: parsed.roadmap });
        } catch (e) {
            // Fallback JSON parsing failure
            return NextResponse.json({ roadmap: [
                "Review codebase",
                "Update dependencies",
                "Fix build",
                "Start development"
            ]});
        }
        
    } catch (error) {
        console.error('AI Roadmap Error:', error);
        return NextResponse.json({ error: 'Failed to generate roadmap' }, { status: 500 });
    }
}
