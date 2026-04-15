"use client"

import { GithubRepo } from "@/backend/actions/github"
import { Github, Star, ExternalLink, Plus } from "lucide-react"
import Link from "next/link"

import { Pagination } from "@/frontend/components/pagination"

export function DashboardRepoList({ 
    repos, 
    listedRepoFullNames,
    totalCount,
    currentPage
}: { 
    repos: GithubRepo[], 
    listedRepoFullNames: string[],
    totalCount: number,
    currentPage: number
}) {
    if (repos.length === 0) {
        return (
            <div className="zf-card p-24 text-center flex flex-col items-center justify-center border-dashed">
                <div className="w-20 h-20 bg-[#171717] border border-[#373737] rounded-3xl flex items-center justify-center mb-10">
                    <Github className="w-8 h-8 text-[#444]" />
                </div>
                <h3 className="text-3xl font-extrabold mb-6 text-white zf-heading uppercase tracking-widest">No Projects Found</h3>
                <p className="text-[#B9B9B9] max-w-sm text-[16px] leading-relaxed opacity-60">
                    We couldn&apos;t find any public repositories matching your search.
                </p>
            </div>
        )
    }

    return (
        <div className="space-y-10">
            {/* Organization Access Tip */}
            <div className="zf-card p-6 border-[#00FF66]/20 bg-[#00FF66]/5 flex flex-col md:flex-row items-center gap-6">
                <div className="w-12 h-12 bg-[#00FF66]/10 border border-[#00FF66]/20 rounded-xl flex items-center justify-center shrink-0">
                    <Github className="w-6 h-6 text-[#00FF66]" />
                </div>
                <div className="flex-1 text-center md:text-left">
                    <h4 className="text-[14px] font-bold text-white uppercase tracking-widest mb-1">Missing some repositories?</h4>
                    <p className="text-[12px] text-[#B9B9B9] leading-relaxed">
                        If your organization repositories aren&apos;t showing up, you may need to grant access to the ReviveDev OAuth app in your <a href="https://github.com/settings/applications" target="_blank" className="text-[#00FF66] underline hover:no-underline">GitHub Application Settings</a>.
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {repos.map((repo) => {
                    const isListed = listedRepoFullNames.includes(repo.full_name)

                    return (
                        <div key={repo.id} className="zf-card p-8 flex flex-col h-full group relative overflow-hidden">
                            {/* Status Overlay */}
                            {isListed && (
                                <div className="absolute top-0 right-0 px-4 py-1.5 bg-[#00FF66] text-[#0D0D0D] text-[10px] font-bold uppercase tracking-widest rounded-bl-xl z-20">
                                    Already Listed
                                </div>
                            )}

                            <div className="flex justify-between items-start mb-6">
                                <div className="space-y-1 pr-4">
                                    <div className="flex items-center gap-2 mb-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#00FF66]/40" />
                                        <span className="text-[10px] font-bold text-[#666] uppercase tracking-[0.2em]">GitHub Repository</span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-white group-hover:text-[#00FF66] transition-colors truncate">
                                        {repo.name}
                                    </h3>
                                </div>
                                <div className="w-12 h-12 bg-[#171717] border border-[#373737] rounded-xl flex items-center justify-center shrink-0">
                                    <Github className="w-6 h-6 text-white/30" />
                                </div>
                            </div>

                            <p className="text-[#B9B9B9] text-[15px] leading-relaxed line-clamp-2 mb-8 opacity-70">
                                {repo.description || "No description provided."}
                            </p>

                            <div className="flex-1">
                                <div className="flex flex-wrap gap-8 mb-8">
                                    <div className="space-y-1">
                                        <span className="text-[10px] font-bold text-[#444] uppercase tracking-widest">Stars</span>
                                        <div className="flex items-center gap-2 text-[14px] font-bold text-white">
                                            <Star className="w-4 h-4 text-[#00FF66]" />
                                            {repo.stargazers_count.toLocaleString()}
                                        </div>
                                    </div>
                                    <div className="space-y-1">
                                        <span className="text-[10px] font-bold text-[#444] uppercase tracking-widest">Updated</span>
                                        <div className="text-[14px] font-bold text-white">
                                            {new Date(repo.updated_at).toLocaleDateString()}
                                        </div>
                                    </div>
                                    {repo.language && (
                                        <div className="space-y-1">
                                            <span className="text-[10px] font-bold text-[#444] uppercase tracking-widest">Language</span>
                                            <div className="text-[14px] font-bold text-[#00FF66]">
                                                {repo.language}
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {repo.topics && repo.topics.length > 0 && (
                                    <div className="flex flex-wrap gap-2">
                                        {repo.topics.slice(0, 4).map(topic => (
                                            <span key={topic} className="text-[10px] font-bold bg-[#171717] border border-[#373737] px-3 py-1 rounded-lg text-white/40 uppercase tracking-widest">
                                                {topic}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>

                            <div className="mt-10 flex gap-4 pt-8 border-t border-[#373737]/50">
                                <a 
                                    href={repo.html_url} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="zf-button-outline flex-1 flex items-center justify-center gap-2 text-[12px] py-4"
                                >
                                    <ExternalLink className="w-4 h-4" />
                                    View Code
                                </a>
                                
                                {!isListed && (
                                    <Link 
                                        href={`/dashboard/new?repo=${repo.full_name}`}
                                        className="zf-button flex-1 flex items-center justify-center gap-2 text-[12px] py-4"
                                    >
                                        <Plus className="w-4 h-4" />
                                        List Project
                                    </Link>
                                )}
                            </div>
                        </div>
                    )
                })}
            </div>
            
            <Pagination totalItems={totalCount} currentPage={currentPage} pageSize={12} />
        </div>
    )
}
