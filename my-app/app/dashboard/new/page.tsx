import { getServerSession } from "next-auth"
import { authOptions } from "@/backend/lib/auth-options"
import { redirect } from "next/navigation"
import { ProjectForm } from "@/frontend/components/forms/project-form"
import { ProspectRevivalForm } from "@/frontend/components/forms/prospect-revival-form"
import { Suspense } from "react"
import Link from "next/link"

import { fetchUserRepos, getGithubRepoDetails, GithubRepo } from "@/backend/actions/github"

export default async function NewProjectPage({
    searchParams
}: {
    searchParams: Promise<{ repo?: string }>
}) {
    const session = await getServerSession(authOptions)
    if (!session) redirect("/api/auth/signin")

    let repos: GithubRepo[] = []
    let externalRepoData: GithubRepo | null = null
    let isExternal = false

    let githubError = false
    let errorMessage = ""

    try {
        const data = await fetchUserRepos({ pageSize: 1000 })
        repos = data.items
        
        const searchParamsData = await searchParams;
        const repoParam = searchParamsData.repo
        
        if (repoParam) {
            const ownedRepo = repos.find(r => r.full_name === repoParam)
            if (!ownedRepo) {
                const details = await getGithubRepoDetails(repoParam)
                if (details) {
                    externalRepoData = details
                    isExternal = true
                }
            }
        }
    } catch (err: unknown) {
        const error = err as { message?: string };
        console.error("Failed to fetch repos", error)
        if (error.message?.includes("not linked") || error.message?.includes("missing token")) {
            githubError = true
            errorMessage = "Your GitHub session has expired or the database was reset. Please sign out and sign back in."
        } else {
            errorMessage = "Failed to sync repositories."
        }
    }

    const title = isExternal ? "PROPOSE" : "INITIATE"
    const subTitle = isExternal ? "REVIVAL" : "HANDOFF"
    const description = isExternal 
        ? "> nominating an external repository for platform revival. neural diagnostics will map the legacy debt."
        : "> select a repository from your connected account to trigger the ai-assisted revival diagnostics."

    return (
        <div className="min-h-screen relative pb-40 overflow-hidden pt-20">
            <div className="container max-w-7xl mx-auto px-6 relative z-10">
                <div className="mb-20 space-y-6">
                    <div className="flex items-center gap-4 text-primary/60 font-mono text-sm tracking-widest uppercase">
                        <div className="w-12 h-[1px] bg-primary/30" />
                        <span>PROTOCOL_INIT_v1.0</span>
                    </div>
                    <h1 className="text-6xl md:text-8xl font-black tracking-tightest text-white leading-[0.85] uppercase">
                        {title}<br />
                        <span className="text-primary glow-text">{subTitle}</span>
                    </h1>
                    <p className="text-white/40 text-[14px] md:text-lg font-mono lowercase max-w-2xl leading-relaxed">
                        {description}
                    </p>
                </div>

                <div className="relative">
                    <div className="absolute top-8 left-8 tech-label opacity-20 text-[8px]">INPUT_PARAMETERS</div>

                    <Suspense fallback={<div className="h-96 flex items-center justify-center font-mono text-[10px] uppercase font-black tracking-widest text-white/40">SCANNING_REPOSITORIES...</div>}>
                        {githubError ? (
                            <div className="p-8 border-[0.8px] border-red-500/20 bg-[#171717]/80 rounded-[16px] text-center max-w-2xl mx-auto flex flex-col items-center gap-4">
                                <div className="text-red-500/80 font-mono text-[11px] uppercase font-black tracking-widest mb-2 flex items-center gap-2">
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                                    SESSION_ORPHANED
                                </div>
                                <p className="text-[#B9B9B9] text-sm leading-relaxed mb-4">
                                    {errorMessage}
                                </p>
                                <Link href="/api/auth/signout" className="inline-block bg-[#00FF66] text-black font-bold uppercase tracking-widest text-[12px] px-6 py-3 rounded-full hover:bg-[#00FF66]/80 transition-colors">
                                    Sign Out to Reconnect
                                </Link>
                            </div>
                        ) : isExternal && externalRepoData ? (
                            <ProspectRevivalForm repo={externalRepoData} />
                        ) : (
                            <ProjectForm repos={repos} />
                        )}
                    </Suspense>
                </div>
            </div>
        </div>
    )
}



