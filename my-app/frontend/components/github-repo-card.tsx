import { GithubRepo } from "@/backend/actions/github"
import { Star, Circle, GitFork, Calendar, ExternalLink } from "lucide-react"
import { formatDistanceToNow } from "date-fns"
import { SaveGlobalRepoButton } from "@/frontend/components/save-global-repo-button"
import { InitiateRevivalModal } from "@/frontend/components/initiate-revival-modal"
import { RevivalStats } from "@/frontend/components/revival-stats"

export function GithubRepoCard({ repo, isSaved = false }: { repo: GithubRepo, isSaved?: boolean }) {
    const updatedAt = new Date(repo.pushed_at || repo.updated_at)
    
    const getLanguageColor = (lang?: string | null) => {
        if (!lang) return "text-[#B9B9B9]";
        switch (lang.toLowerCase()) {
            case 'typescript': return 'text-[#3178c6]'; 
            case 'javascript': return 'text-[#00FF66]';
            case 'python': return 'text-[#3572A5]';
            case 'go': return 'text-[#00ADD8]';
            case 'rust': return 'text-[#dea584]';
            default: return 'text-[#B9B9B9]';
        }
    }

    return (
        <div className="group zf-card p-8 h-full flex flex-col justify-between relative overflow-hidden">
            <SaveGlobalRepoButton repoFullName={repo.full_name} initialIsSaved={isSaved} />
            <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-[22px] font-bold flex items-center flex-wrap gap-2 text-white hover:text-[#00FF66] transition-colors cursor-pointer tracking-tight">
                        <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="break-all flex items-center gap-2">
                             {/* eslint-disable-next-line @next/next/no-img-element */}
                             <img src={repo.owner?.avatar_url} alt={repo.owner?.login} className="w-6 h-6 rounded-full inline-block border-[0.8px] border-[#373737]" />
                             <span className="font-medium text-[#B9B9B9]">{repo.owner?.login} <span className="mx-1 text-[#373737]">/</span></span> 
                             <span>{repo.name}</span>
                        </a>
                        <span className="text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full border-[0.8px] border-[#373737] bg-[#171717] text-[#B9B9B9] font-bold ml-2">
                            Public
                        </span>
                    </h3>
                </div>

                <p className="text-[15px] text-[#B9B9B9] mb-6 line-clamp-2 leading-relaxed opacity-80">
                    {repo.description || "Digital legacy without description."}
                </p>

                <div className="flex items-center gap-3 py-2 px-4 rounded-[12px] bg-red-400/5 border border-red-500/10 mb-6 w-fit">
                    <Calendar className="w-4 h-4 text-red-500/60" />
                    <span className="text-[12px] text-red-500/80 font-bold uppercase tracking-widest">
                        Abandoned {formatDistanceToNow(updatedAt, { addSuffix: true })}
                    </span>
                </div>

                {repo.topics && repo.topics.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-8">
                        {repo.topics.slice(0, 4).map((tag: string) => (
                            <span key={tag} className="bg-[rgba(255,255,255,0.05)] text-white border-[0.8px] border-[#373737] text-[11px] px-3 py-1.5 rounded-full font-bold uppercase tracking-widest hover:border-[#00FF66] hover:text-[#00FF66] transition-colors cursor-pointer">
                                {tag}
                            </span>
                        ))}
                    </div>
                )}
                
                <RevivalStats repoFullName={repo.full_name} />
            </div>

            <div className="space-y-6 relative z-10 pt-6 border-t-[0.8px] border-[#373737]">
                <div className="flex items-center gap-6 text-[14px] text-[#B9B9B9] flex-wrap">
                    {repo.language && (
                        <div className="flex items-center gap-2 font-medium">
                            <Circle className={`w-3 h-3 fill-current ${getLanguageColor(repo.language)}`} />
                            <span>{repo.language}</span>
                        </div>
                    )}
                    <div className="flex items-center gap-1.5 font-medium">
                        <Star className="w-4 h-4 text-yellow-500/60" />
                        <span>{repo.stargazers_count}</span>
                    </div>
                    <div className="flex items-center gap-1.5 font-medium">
                        <GitFork className="w-4 h-4 text-blue-500/60" />
                        <span>{repo.forks_count}</span>
                    </div>
                </div>

                <div className="flex flex-col gap-4">
                    <InitiateRevivalModal repo={repo} />
                    <a 
                        href={repo.html_url} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="text-[11px] text-[#666] hover:text-[#00FF66] transition-colors font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-2 py-2"
                    >
                        Protocol Inspection <ExternalLink className="w-3 h-3" />
                    </a>
                </div>
            </div>
        </div>
    )
}
