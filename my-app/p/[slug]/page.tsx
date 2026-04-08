import { getProjectBySlug } from "@/backend/actions/projects"
import { notFound } from "next/navigation"
import { ProjectStatusBadge } from "@/frontend/components/status-badge"
import { Badge } from "@/frontend/components/ui/badge"
import { Button } from "@/frontend/components/ui/button"
import Link from "next/link"
import { Github, Calendar, Settings, CheckCircle2, Globe, Sparkles, Star, ArrowUpRight } from "lucide-react"
import { RequestModal } from "@/frontend/components/request-modal"
import { RequestType } from "@prisma/client"
import { getServerSession } from "next-auth"
import { authOptions } from "@/backend/lib/auth-options"
import { getGithubRepoDetails } from "@/backend/actions/github"
import { ReviveScore } from "@/frontend/components/revive-score"
import { RevivalModeBadge } from "@/frontend/components/revival-mode-badge"
import { ProjectStatus } from "@prisma/client"

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const project = await getProjectBySlug(slug)
    const session = await getServerSession(authOptions)

    if (!project) notFound()

    const githubData = await getGithubRepoDetails(project.repoFullName)

    const isOwner = session?.user?.id === project.ownerId

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

                            <div className="space-y-16 relative">
                                <header className="space-y-2">
                                    <div className="flex items-center gap-4">
                                        <div className="h-10 w-10 rounded-xl bg-primary/5 border border-primary/20 flex items-center justify-center text-primary">
                                            <Sparkles className="w-5 h-5" />
                                        </div>
                                        <h2 className="text-2xl font-medium tracking-tight">Neural Diagnostic Feed</h2>
                                    </div>
                                    <p className="text-xs text-white/30 ml-14">Data integrity: 98.4%</p>
                                </header>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 ml-6">
                                    <section className="space-y-4">
                                        <div className="text-xs font-medium text-primary">01 / Failure Analysis</div>
                                        <p className="text-sm text-white/60 leading-relaxed border-l border-white/10 pl-6">
                                            {project.analysis?.stoppageReason || "Stoppage reason unknown. Diagnostics pending."}
                                        </p>
                                    </section>

                                    <section className="space-y-4">
                                        <div className="text-xs font-medium text-primary">02 / Architecture Map</div>
                                        <p className="text-sm text-white/60 leading-relaxed border-l border-white/10 pl-6">
                                            {project.analysis?.structureExplanation || "Structural mapping incomplete."}
                                        </p>
                                    </section>
                                </div>

                                <section className="space-y-6 pt-12 border-t border-white/5">
                                    <div className="text-xs font-medium text-primary/60 ml-6">03 / Revival Roadmap</div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {(project.analysis?.revivalRoadmap || []).map((step, i) => (
                                            <div key={i} className="flex gap-4 p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05] transition-all hover:bg-white/[0.04] group/step">
                                                <span className="text-lg font-medium text-white/20 group-hover/step:text-primary transition-colors shrink-0">0{i + 1}</span>
                                                <p className="text-sm text-white/60 leading-relaxed pt-0.5">{step}</p>
                                            </div>
                                        ))}
                                    </div>
                                </section>
                            </div>
                        </div>

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
                        <ReviveScore health={{
                            score: project.healthScore,
                            label: (project.healthScore < 40 ? "Dormant" : project.healthScore < 60 ? "Critical" : project.healthScore < 80 ? "At Risk" : "Healthy") as "Healthy" | "At Risk" | "Critical" | "Dormant",
                            insights: project.analysis?.problemsDetected || [],
                            lastCommitDays: githubData ? Math.ceil(Math.abs(new Date().getTime() - new Date(githubData.pushed_at).getTime()) / (1000 * 60 * 60 * 24)) : 0,
                            difficulty: (project.analysis?.difficultyLevel as "EASY" | "MEDIUM" | "HARD") || "MEDIUM",
                            roadmap: project.analysis?.revivalRoadmap || [],
                            stoppageReason: project.analysis?.stoppageReason || "",
                            structureExplanation: project.analysis?.structureExplanation || ""
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
