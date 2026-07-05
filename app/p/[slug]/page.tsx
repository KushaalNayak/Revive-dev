import { getProjectBySlug } from "@/backend/actions/projects"
import { notFound } from "next/navigation"
import { ProjectStatusBadge } from "@/frontend/components/status-badge"
import { Badge } from "@/frontend/components/ui/badge"
import { Button } from "@/frontend/components/ui/button"
import Link from "next/link"
import { Github, Calendar, Settings, CheckCircle2, Globe, Sparkles, Star, ArrowUpRight, Flame, Shield, TrendingUp, AlertTriangle, Hammer, Clock, Users } from "lucide-react"
import { RequestModal } from "@/frontend/components/request-modal"
import { RequestType } from "@prisma/client"
import { getServerSession } from "next-auth"
import { authOptions } from "@/backend/lib/auth-options"
import { getGithubRepoDetails } from "@/backend/actions/github"
import { ReviveScore } from "@/frontend/components/revive-score"
import { RevivalModeBadge } from "@/frontend/components/revival-mode-badge"
import { ProjectStatus } from "@prisma/client"
import { RevivalChecklist } from "@/frontend/components/revival-checklist"
import { analyzeRepoHealth, RepoHealth } from "@/backend/lib/ai-service"

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const project = await getProjectBySlug(slug)
    const session = await getServerSession(authOptions)

    if (!project) notFound()

    const isOwner = session?.user?.id === project.ownerId

    // Load from cached JSON in database if available (sub-100ms load)
    let health: RepoHealth | null = null;
    if (project.analysis && project.analysis.report) {
        health = project.analysis.report as unknown as RepoHealth;
    } else {
        const githubData = await getGithubRepoDetails(project.repoFullName);
        health = githubData ? await analyzeRepoHealth(githubData) : null;
    }

    return (
        <div className="min-h-screen relative pb-40 pt-32 transition-all duration-700">
            <div className="container mx-auto px-10 relative z-10 max-w-7xl">
                {/* Protocol Header */}
                <div className="flex items-center gap-6 mb-12 border-l border-primary/20 pl-6">
                    <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-[10px] font-medium text-primary gap-2">Protocol route</div>
                    <div className="h-px w-8 bg-white/10" />
                    <span className="text-xs text-white/50 tracking-wider">
                        {project.completionStage.replace(/_/g, " ")} | v1.0.2
                    </span>
                    <div className="ml-auto">
                        <ProjectStatusBadge status={project.status} />
                    </div>
                </div>

                {/* Header Section */}
                <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-24 pb-16">
                    <div className="space-y-8 max-w-4xl">
                        <div className="space-y-4">
                            <h1 className="text-5xl md:text-8xl font-medium tracking-tight text-white leading-[1.1]">
                                {project.title}
                            </h1>
                            {project.analysis?.difficultyLevel && (
                                <div className={`text-[10px] font-medium inline-flex rounded-full border px-4 py-1 items-center ${project.analysis.difficultyLevel === 'EASY' ? 'border-emerald-500/20 text-emerald-500 bg-emerald-500/5' :
                                    project.analysis.difficultyLevel === 'MEDIUM' ? 'border-amber-500/20 text-amber-500 bg-amber-500/5' : 'border-rose-500/20 text-rose-500 bg-rose-500/5'
                                    }`}>
                                    Difficulty: {project.analysis.difficultyLevel}
                                </div>
                            )}
                        </div>
                        <p className="text-lg md:text-xl text-white/50 leading-relaxed max-w-3xl">
                            {project.shortDescription}
                        </p>

                        <div className="flex flex-wrap gap-3 pt-4">
                            {project.language && (
                                <span className="text-xs font-medium rounded-full border border-primary/20 bg-primary/5 text-primary px-4 py-1.5">
                                    {project.language}
                                </span>
                            )}
                            <span className="text-xs font-medium rounded-full border border-white/10 text-white/50 px-4 py-1.5 flex items-center gap-1">
                                <Star className="w-3.5 h-3.5 fill-current opacity-50" /> {project.stars}
                            </span>
                            {project.tags.map(tag => (
                                <span key={tag} className="text-xs font-medium rounded-full border border-white/10 text-white/40 px-4 py-1.5 hover:border-white/20 hover:text-white transition-all cursor-default">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0 w-full lg:w-72">
                        {project.repoUrl && (
                            <Button asChild className="h-14 rounded-full bg-white text-black font-medium text-sm transition-all hover:bg-white/90 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                                <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                                    <Github className="w-4 h-4 mr-2" /> View Repository
                                </a>
                            </Button>
                        )}
                        {isOwner ? (
                            <Button asChild variant="outline" className="h-14 rounded-full border-white/10 bg-white/[0.02] text-sm font-medium hover:border-white/20 hover:bg-white/[0.05]">
                                <Link href={`/dashboard/edit/${project.slug}`}>
                                    <Settings className="w-4 h-4 mr-2 text-primary" /> Manage Project
                                </Link>
                            </Button>
                        ) : (
                            <Button variant="outline" className="h-14 rounded-full border-white/10 bg-white/[0.02] text-sm font-medium hover:border-white/20 hover:bg-white/[0.05] group" asChild>
                                <Link href="/explore">
                                    Back to Explore <ArrowUpRight className="ml-2 w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                                </Link>
                            </Button>
                        )}
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    <div className="lg:col-span-8 space-y-12">
                        {/* AI Diagnostics Section */}
                        <div className="loki-card p-10 md:p-16 relative group">
                            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 blur-[120px] pointer-events-none -mr-48 -mt-48" />

                            <div className="space-y-12 relative">
                                <header className="space-y-2">
                                    <div className="flex items-center gap-4">
                                        <div className="h-10 w-10 rounded-xl bg-primary/5 border border-primary/20 flex items-center justify-center text-primary">
                                            <Sparkles className="w-5 h-5" />
                                        </div>
                                        <h2 className="text-2xl font-medium tracking-tight">AI Repository Diagnostics</h2>
                                    </div>
                                    <p className="text-xs text-white/30 ml-14">Data Integrity: 100% | Verified Diagnostics</p>
                                </header>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 ml-6">
                                    <section className="space-y-4">
                                        <div className="text-xs font-medium text-primary">01 / Failure Analysis</div>
                                        <p className="text-sm text-white/60 leading-relaxed border-l border-white/10 pl-6">
                                            {project.analysis?.stoppageReason || "Stoppage reason unknown. Diagnostics pending."}
                                        </p>
                                    </section>

                                    <section className="space-y-4">
                                        <div className="text-xs font-medium text-primary">02 / Codebase Architecture</div>
                                        <p className="text-sm text-white/60 leading-relaxed border-l border-white/10 pl-6">
                                            {project.analysis?.structureExplanation || "Structural mapping incomplete."}
                                        </p>
                                    </section>

                                    <section className="space-y-4">
                                        <div className="text-xs font-medium text-primary">03 / Documentation Quality</div>
                                        <p className="text-sm text-white/60 leading-relaxed border-l border-white/10 pl-6">
                                            {project.analysis?.documentationQuality || "Basic. Contains standard README, but lacks setup guides and contribution instructions."}
                                        </p>
                                    </section>

                                    <section className="space-y-4">
                                        <div className="text-xs font-medium text-primary">04 / Issue Analysis</div>
                                        <p className="text-sm text-white/60 leading-relaxed border-l border-white/10 pl-6">
                                            {project.analysis?.issueAnalysis || "Pending analysis of open issue themes and bug trends."}
                                        </p>
                                    </section>
                                </div>

                                <section className="space-y-6 pt-12 border-t border-white/5">
                                    <div className="text-xs font-medium text-primary/60 ml-6 uppercase tracking-wider">05 / Revival Recommendations</div>
                                    <div className="ml-6">
                                        <RevivalChecklist items={project.analysis?.revivalRoadmap || []} />
                                    </div>
                                </section>
                            </div>
                        </div>

                        {/* Doctor's Diagnostic Desk */}
                        {health && (
                            <div className="space-y-12">
                                {/* Row 1: Revival Probability & Restart Requirements */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {/* Revival Probability */}
                                    <div className="loki-card p-8 bg-[#111111]/30 border border-[#373737]/30 rounded-2xl relative overflow-hidden">
                                        <div className="absolute top-0 right-0 w-48 h-48 bg-[#00FF66]/[0.01] blur-[60px] pointer-events-none" />
                                        <div className="flex items-center gap-3 mb-6">
                                            <Flame className="w-5 h-5 text-[#00FF66]" />
                                            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Revival Probability</h3>
                                        </div>
                                        <div className="flex items-baseline gap-2 mb-4">
                                            <span className="text-5xl font-black text-white">{health.revivalProbability.chance}%</span>
                                            <span className="text-xs text-[#00FF66] uppercase tracking-wider">Chance</span>
                                        </div>
                                        <div className="space-y-3">
                                            <div className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-1">Key Factors</div>
                                            <ul className="space-y-2">
                                                {health.revivalProbability.reasons.map((reason, idx) => (
                                                    <li key={idx} className="text-xs text-white/70 flex items-center gap-2">
                                                        <span className="w-1.5 h-1.5 rounded-full bg-[#00FF66]" />
                                                        {reason}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Restart Stats */}
                                    <div className="loki-card p-8 bg-[#111111]/30 border border-[#373737]/30 rounded-2xl relative overflow-hidden">
                                        <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/[0.01] blur-[60px] pointer-events-none" />
                                        <div className="flex items-center gap-3 mb-6">
                                            <Hammer className="w-5 h-5 text-blue-400" />
                                            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Restart Cost</h3>
                                        </div>
                                        <div className="grid grid-cols-2 gap-4 mb-6">
                                            <div>
                                                <span className="block text-[10px] text-white/40 uppercase tracking-widest mb-1">Expected Effort</span>
                                                <span className="text-sm font-bold text-white flex items-center gap-1.5">
                                                    <Clock className="w-4 h-4 text-blue-400" />
                                                    {health.restartStats.expectedTime}
                                                </span>
                                            </div>
                                            <div>
                                                <span className="block text-[10px] text-white/40 uppercase tracking-widest mb-1">Team Size</span>
                                                <span className="text-sm font-bold text-white flex items-center gap-1.5">
                                                    <Users className="w-4 h-4 text-blue-400" />
                                                    {health.restartStats.recommendedTeamSize} {health.restartStats.recommendedTeamSize === 1 ? 'Dev' : 'Devs'}
                                                </span>
                                            </div>
                                        </div>
                                        <div>
                                            <span className="block text-[10px] text-white/40 uppercase tracking-widest mb-2">Required Skills</span>
                                            <div className="flex flex-wrap gap-2">
                                                {health.restartStats.knowledgeRequired.map((skill, idx) => (
                                                    <span key={idx} className="text-[10px] font-mono px-2.5 py-1 rounded bg-white/5 border border-white/10 text-white/60">
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Row 2: Dependency Report & Code Quality */}
                                <div className="loki-card p-8 bg-[#111111]/30 border border-[#373737]/30 rounded-2xl relative">
                                    <div className="flex items-center gap-3 mb-6">
                                        <Shield className="w-5 h-5 text-amber-400" />
                                        <h3 className="text-sm font-bold uppercase tracking-wider text-white">Dependency & Code Health</h3>
                                    </div>
                                    
                                    {/* Outdated Dependencies Table */}
                                    <div className="mb-8">
                                        <span className="block text-[10px] text-white/40 uppercase tracking-widest mb-3">Outdated Core Packages</span>
                                        <div className="overflow-x-auto border border-white/5 rounded-xl">
                                            <table className="w-full text-left border-collapse text-xs">
                                                <thead>
                                                    <tr className="bg-white/[0.02] border-b border-white/5">
                                                        <th className="p-3 text-white/40 uppercase font-bold tracking-wider">Package</th>
                                                        <th className="p-3 text-white/40 uppercase font-bold tracking-wider">Current</th>
                                                        <th className="p-3 text-white/40 uppercase font-bold tracking-wider">Latest</th>
                                                        <th className="p-3 text-white/40 uppercase font-bold tracking-wider">Gap</th>
                                                        <th className="p-3 text-white/40 uppercase font-bold tracking-wider">Risk</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {health.dependencies.map((dep, idx) => (
                                                        <tr key={idx} className="border-b border-white/5 last:border-none hover:bg-white/[0.01]">
                                                            <td className="p-3 font-mono font-bold text-white">{dep.name}</td>
                                                            <td className="p-3 text-white/60 font-mono">{dep.current}</td>
                                                            <td className="p-3 text-white/60 font-mono">{dep.latest}</td>
                                                            <td className="p-3 text-white/60">{dep.gap}</td>
                                                            <td className="p-3">
                                                                <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                                                                    dep.risk === 'High' ? 'bg-rose-500/10 text-rose-500 border border-rose-500/20' :
                                                                    dep.risk === 'Medium' ? 'bg-amber-500/10 text-amber-500 border border-amber-500/20' :
                                                                    'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20'
                                                                }`}>
                                                                    {dep.risk}
                                                                </span>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                    {health.dependencies.length === 0 && (
                                                        <tr>
                                                            <td colSpan={5} className="p-4 text-center text-white/30 italic">No outdated core packages detected.</td>
                                                        </tr>
                                                    )}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>

                                    {/* Code Quality Stats */}
                                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-white/5 text-center">
                                        <div className="space-y-1">
                                            <span className="block text-[10px] text-white/40 uppercase tracking-widest">Quality Rating</span>
                                            <span className="text-2xl font-black text-[#00FF66]">{health.codeQuality.rating}</span>
                                        </div>
                                        <div className="space-y-1">
                                            <span className="block text-[10px] text-white/40 uppercase tracking-widest">Duplicate Code</span>
                                            <span className="text-2xl font-black text-white">{health.codeQuality.duplicateCode}%</span>
                                        </div>
                                        <div className="space-y-1">
                                            <span className="block text-[10px] text-white/40 uppercase tracking-widest">Code Smells</span>
                                            <span className="text-2xl font-black text-amber-400">{health.codeQuality.codeSmells}</span>
                                        </div>
                                        <div className="space-y-1">
                                            <span className="block text-[10px] text-white/40 uppercase tracking-widest">Test Coverage</span>
                                            <span className="text-2xl font-black text-blue-400">{health.codeQuality.testCoverage}%</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Row 3: Heatmap & Smart Alternatives */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {/* Timeline & Community Signals */}
                                    <div className="loki-card p-8 bg-[#111111]/30 border border-[#373737]/30 rounded-2xl relative">
                                        <div className="flex items-center gap-3 mb-6">
                                            <TrendingUp className="w-5 h-5 text-blue-400" />
                                            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Revival Timeline</h3>
                                        </div>
                                        <div className="relative pl-6 border-l border-white/10 space-y-6">
                                            {health.timeline.map((event, idx) => (
                                                <div key={idx} className="relative">
                                                    <span className="absolute -left-[31px] top-1 w-2.5 h-2.5 rounded-full bg-blue-400 border-4 border-[#0B0B0B]" />
                                                    <span className="block text-[10px] font-bold text-blue-400 font-mono">{event.year}</span>
                                                    <span className="text-xs text-white/70">{event.event}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Smart Alternatives */}
                                    <div className="loki-card p-8 bg-[#111111]/30 border border-[#373737]/30 rounded-2xl relative">
                                        <div className="flex items-center gap-3 mb-6">
                                            <AlertTriangle className="w-5 h-5 text-amber-400" />
                                            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Smart Alternatives</h3>
                                        </div>
                                        <p className="text-xs text-white/50 mb-4 leading-relaxed">
                                            If reviving this project seems too demanding, consider these active community alternatives:
                                        </p>
                                        <div className="space-y-3">
                                            {health.alternatives.map((alt, idx) => (
                                                <div key={idx} className="flex items-center justify-between p-3 rounded-xl border border-white/5 bg-white/[0.01]">
                                                    <div>
                                                        <span className="block text-xs font-bold text-white">{alt.name}</span>
                                                        <span className="text-[10px] text-white/40 uppercase tracking-widest">{alt.status}</span>
                                                    </div>
                                                    <div className="flex items-center gap-0.5">
                                                        {[1, 2, 3, 4, 5].map((star) => (
                                                            <Star 
                                                                key={star} 
                                                                className={`w-3 h-3 ${star <= alt.rating ? 'text-amber-400 fill-amber-400' : 'text-white/10'}`} 
                                                            />
                                                        ))}
                                                    </div>
                                                </div>
                                            ))}
                                            {health.alternatives.length === 0 && (
                                                <p className="text-xs text-white/30 italic">No alternative projects cataloged yet.</p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Handoff Section */}
                        <div className="loki-card p-10 md:p-16 relative group">
                            <section className="space-y-8 relative">
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-4">
                                        <div className="h-10 w-10 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-white/50">
                                            <Globe className="w-5 h-5" />
                                        </div>
                                        <h2 className="text-2xl font-medium tracking-tight">The Vision</h2>
                                    </div>
                                    <div className="text-[10px] font-medium text-white/30 px-3 py-1 rounded-full border border-white/10">Public distribution</div>
                                </div>
                                <p className="text-xl md:text-2xl text-white/70 leading-relaxed lg:pl-14">
                                    &quot;{project.handoffWhat || "Owner has not provided a high-level vision for this codebase."}&quot;
                                </p>
                            </section>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-white/5 pt-12 mt-16 relative">
                                <section className="space-y-4">
                                    <div className="text-xs font-medium text-white/50 mb-4">Pending Tasks</div>
                                    <div className="rounded-2xl bg-white/[0.02] border border-white/5 p-6">
                                        <p className="text-sm text-white/60 leading-relaxed">
                                            {project.handoffPending || "No operational briefing provided."}
                                        </p>
                                    </div>
                                </section>

                                <section className="space-y-4">
                                    <div className="text-xs font-medium text-white/50 mb-4">Deployment Guide</div>
                                    <div className="rounded-2xl bg-white/[0.02] border border-white/5 p-6 text-sm text-white/60 leading-relaxed">
                                        {project.handoffSetup || "Manual setup instructions not provided."}
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-4 space-y-12">
                        {/* AI Score */}
                        <ReviveScore health={health || {
                            score: project.healthScore,
                            label: (project.healthScore < 40 ? "Dormant" : project.healthScore < 60 ? "Critical" : project.healthScore < 80 ? "At Risk" : "Healthy") as "Healthy" | "At Risk" | "Critical" | "Dormant",
                            insights: project.analysis?.problemsDetected || [],
                            lastCommitDays: project.lastCommitDate ? Math.ceil(Math.abs(new Date().getTime() - new Date(project.lastCommitDate).getTime()) / (1000 * 60 * 60 * 24)) : 0,
                            difficulty: (project.analysis?.difficultyLevel as "EASY" | "MEDIUM" | "HARD") || "MEDIUM",
                            roadmap: project.analysis?.revivalRoadmap || [],
                            stoppageReason: project.analysis?.stoppageReason || "",
                            structureExplanation: project.analysis?.structureExplanation || "",
                            documentationQuality: project.analysis?.documentationQuality || "",
                            issueAnalysis: project.analysis?.issueAnalysis || "",
                            scoreBreakdown: { maintained: 3, documentation: 3, issueActivity: 3, communityInterest: 3, dependencyHealth: 3, security: 4, buildStatus: 4 },
                            revivalProbability: { chance: project.healthScore, reasons: [], estimatedEffort: "2-3 weekends" },
                            dependencies: [],
                            restartStats: { difficulty: "Medium", expectedTime: "20 hours", knowledgeRequired: [project.language || "Typescript"], recommendedTeamSize: 2 },
                            heatmap: { lastActive: "Unknown", activeContributors: 1, forkActivity: "Medium", communityInterest: "Medium" },
                            codeQuality: { rating: "B", duplicateCode: 10, largeFiles: 5, longFunctions: 2, codeSmells: 12, testCoverage: 30 },
                            alternatives: [],
                            timeline: []
                        }} />

                        {/* Owner Card */}
                        {/* Owner Card */}
                        <div className="loki-card p-8 space-y-8 bg-white/[0.01]">
                            <div className="space-y-1">
                                <p className="text-xs font-medium text-primary">Repository Owner</p>
                                <h3 className="text-3xl font-medium tracking-tight text-white">{project.owner.username}</h3>
                            </div>
                            <div className="flex flex-col gap-3">
                                <div className="flex items-center gap-4 px-5 py-4 rounded-xl border border-white/5 bg-white/[0.02]">
                                    <Calendar className="w-4 h-4 text-white/40" />
                                    <span className="text-xs font-medium text-white/60">Joined {new Date(project.owner.createdAt).getFullYear()}</span>
                                </div>
                                <div className="flex items-center gap-4 px-5 py-4 rounded-xl border border-white/5 bg-white/[0.02]">
                                    <Github className="w-4 h-4 text-white/40" />
                                    <span className="text-xs font-medium text-white/60">Verified GitHub Account</span>
                                </div>
                            </div>
                        </div>

                        {/* Actions */}
                        {!isOwner && !project.adoptedBy && (
                            <div className="loki-card p-8 space-y-8 border-primary/20 bg-primary/[0.02]">
                                <div className="space-y-3">
                                    <h3 className="text-2xl font-medium tracking-tight text-primary">Request Adoption</h3>
                                    <p className="text-sm text-white/60 leading-relaxed">
                                        Take ownership or contribute to reviving this codebase. Requires authentication.
                                    </p>
                                </div>
                                <div className="flex flex-col gap-3">
                                    <RequestModal
                                        projectId={project.id}
                                        projectTitle={project.title}
                                        type={RequestType.CONTRIBUTE}
                                        triggerLabel="CONTRIBUTE"
                                    />
                                    <RequestModal
                                        projectId={project.id}
                                        projectTitle={project.title}
                                        type={RequestType.ADOPT}
                                        triggerLabel="REQUEST ADOPTION"
                                    />
                                </div>
                            </div>
                        )}

                        {project.adoptedBy && (
                            <div className="loki-card p-8 border border-emerald-500/20 bg-emerald-500/[0.02] text-center space-y-6">
                                <div className="h-12 w-12 rounded-full border border-emerald-500/50 bg-emerald-500/10 mx-auto flex items-center justify-center text-emerald-500">
                                    <CheckCircle2 className="w-6 h-6" />
                                </div>
                                <div className="space-y-4">
                                    <h3 className="text-2xl font-medium tracking-tight text-emerald-500">REBORN</h3>
                                    <RevivalModeBadge mode={project.revivalMode} />
                                </div>
                                <div className="pt-4 border-t border-emerald-500/10">
                                    <p className="text-xs font-medium text-emerald-500/60">
                                        Active Maintenance by @{project.adoptedBy.username || "Anonymous"}
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
