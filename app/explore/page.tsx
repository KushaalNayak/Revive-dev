import { getExploreProjects, ProjectWithRelations } from "@/backend/actions/projects"
import { searchAbandonedGithubRepos, GithubRepo } from "@/backend/actions/github"
import { getSavedProjectIds, getSavedProjects, getSavedGlobalRepoFullNames } from "@/backend/actions/saved"
import { ProjectCard } from "@/frontend/components/project-card"
import { GithubRepoCard } from "@/frontend/components/github-repo-card"
import { ProjectsFilter } from "@/frontend/components/filters"
import { ProjectStatus, HelpType, RevivalMode } from "@prisma/client"
import { Search, Database, Radar, Plus, Heart } from "lucide-react"
import Link from "next/link"
import { getServerSession } from "next-auth"
import { authOptions } from "@/backend/lib/auth-options"
import { cn } from "@/frontend/lib/utils"
import { AiSearchBar } from "@/frontend/components/ai-search-bar"
import { Pagination } from "@/frontend/components/pagination"

export const dynamic = "force-dynamic"
export const revalidate = 0

export default async function ExplorePage({
    searchParams,
}: {
    searchParams: Promise<{ 
        status?: string; 
        helpType?: string; 
        search?: string; 
        tab?: string; 
        language?: string; 
        difficulty?: string; 
        minStars?: string;
        revivalMode?: string;
        page?: string;
    }>
}) {
    const { 
        status: statusRaw, 
        helpType: helpRaw, 
        search, 
        tab = "platform", 
        language, 
        difficulty, 
        minStars, 
        revivalMode: revivalRaw,
        page: pageRaw 
    } = await searchParams
    const session = await getServerSession(authOptions)
    const currentPage = pageRaw ? parseInt(pageRaw) : 1

    const status = Object.values(ProjectStatus).includes(statusRaw as ProjectStatus)
        ? (statusRaw as ProjectStatus)
        : undefined

    const helpType = Object.values(HelpType).includes(helpRaw as HelpType)
        ? (helpRaw as HelpType)
        : undefined

    const revivalMode = Object.values(RevivalMode).includes(revivalRaw as RevivalMode)
        ? (revivalRaw as RevivalMode)
        : undefined

    let items: ProjectWithRelations[] = []
    let totalCount = 0

    if (tab === "platform") {
        const projectsRes = await getExploreProjects({
            status,
            helpType,
            search,
            language,
            minStars: minStars ? parseInt(minStars) : undefined,
            difficulty,
            revivalMode,
            page: currentPage,
            pageSize: 10
        })
        items = projectsRes.items
        totalCount = projectsRes.total_count
    } else if (tab === "saved" && session) {
        const saved = await getSavedProjects()
        items = saved
        totalCount = saved.length
    }

    let globalRepos: { items: GithubRepo[], total_count: number } = { items: [], total_count: 0 }
    let interestedGlobalRepos: GithubRepo[] = []

    if (tab === "saved" && session) {
        const savedFullNames = await getSavedGlobalRepoFullNames()
        if (savedFullNames.length > 0) {
            const imported = await Promise.all(
                savedFullNames.map(async (name) => {
                    const { getGithubRepoDetails } = await import("@/backend/actions/github")
                    return getGithubRepoDetails(name)
                })
            )
            interestedGlobalRepos = imported.filter(Boolean) as GithubRepo[]
        }
    } else if (tab === "global" && session) {
        globalRepos = await searchAbandonedGithubRepos({
            searchQuery: search,
            page: currentPage,
            language,
            minStars: minStars ? parseInt(minStars) : undefined
        })
    }

    const savedIds = session ? await getSavedProjectIds() : []
    const savedGlobalIds = session && (tab === "global" || tab === "saved") ? await getSavedGlobalRepoFullNames() : []

    return (
        <div className="min-h-screen text-white pb-24 relative bg-[#0B0B0B]">
            {/* Subtle background glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#00FF66]/[0.02] blur-[150px] rounded-full pointer-events-none" />

            <div className="border-b border-[#373737] bg-[#0B0B0B] pt-20 pb-0 z-40">
                <div className="max-w-[1400px] mx-auto px-6 md:px-10">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-2 h-2 rounded-full bg-[#00FF66] animate-pulse" />
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#00FF66]">Discovery Network</span>
                    </div>
                    <h1 className="text-5xl lg:text-7xl font-extrabold mb-4 text-[#FFFFFF] zf-heading uppercase tracking-tighter">Explore <span className="text-[#00FF66]">Hub</span></h1>
                    <p className="text-[#B9B9B9] mb-12 max-w-2xl text-[20px] font-medium leading-relaxed opacity-80">Discover high-potential projects waiting for active maintainers. Browse internal listings or scan the global database.</p>
                    
                    {/* Page Tabs */}
                    <div className="flex items-center gap-10">
                        <Link href={`/explore?tab=platform${search ? `&search=${search}` : ''}${language ? `&language=${language}` : ''}`} className={`flex flex-col gap-1 pb-5 border-b-[2px] transition-all group ${tab === "platform" ? "border-[#00FF66]" : "border-transparent"}`}>
                            <div className={cn("flex items-center gap-2 text-[15px] font-bold uppercase tracking-tight", tab === "platform" ? "text-[#00FF66]" : "text-[#B9B9B9] group-hover:text-white")}>
                                <Database className={cn("w-4 h-4", tab === "platform" ? "text-[#00FF66]" : "text-[#444]")} />
                                Platform
                            </div>
                            <span className="text-[10px] text-[#666] font-medium lowercase tracking-wide">Internal listings on ReviveDev</span>
                        </Link>
                        
                        {session && (
                            <Link href={`/explore?tab=saved${search ? `&search=${search}` : ''}${language ? `&language=${language}` : ''}`} className={`flex flex-col gap-1 pb-5 border-b-[2px] transition-all group ${tab === "saved" ? "border-red-500" : "border-transparent"}`}>
                                <div className={cn("flex items-center gap-2 text-[15px] font-bold uppercase tracking-tight", tab === "saved" ? "text-red-500" : "text-[#B9B9B9] group-hover:text-white")}>
                                    <Heart className={cn("w-4 h-4", tab === "saved" ? "text-red-500 fill-red-500" : "text-[#444]")} />
                                    Interested
                                </div>
                                <span className="text-[10px] text-[#666] font-medium lowercase tracking-wide">Repositories you track</span>
                            </Link>
                        )}

                        <Link href={`/explore?tab=global${search ? `&search=${search}` : ''}${language ? `&language=${language}` : ''}`} className={`flex flex-col gap-1 pb-5 border-b-[2px] transition-all group ${tab === "global" ? "border-[#00FF66]" : "border-transparent"}`}>
                            <div className={cn("flex items-center gap-2 text-[15px] font-bold uppercase tracking-tight", tab === "global" ? "text-[#00FF66]" : "text-[#B9B9B9] group-hover:text-white")}>
                                <Radar className={cn("w-4 h-4", tab === "global" ? "animate-pulse text-[#00FF66]" : "text-[#444]")} />
                                Global Scanner
                            </div>
                            <span className="text-[10px] text-[#666] font-medium lowercase tracking-wide">Scan & acquire from all of GitHub</span>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="max-w-[1400px] mx-auto px-6 md:px-10 mt-16 flex flex-col lg:flex-row gap-16 relative z-10">
                
                {/* Sidebar Filter */}
                <div className="w-full lg:w-[320px] shrink-0 space-y-10">
                    <div className="zf-card p-8">
                        <h2 className="text-[14px] font-bold mb-8 flex items-center gap-3 uppercase tracking-widest text-[#00FF66]">
                            <Search className="w-4 h-4" /> Filters
                        </h2>
                        <ProjectsFilter />
                    </div>

                    {session && (
                        <Link href="/dashboard/new" className="zf-button w-full block text-center flex items-center justify-center gap-3 text-[15px] font-bold py-5 mt-10">
                            <Plus className="w-4 h-4" /> List Your Project
                        </Link>
                    )}
                </div>

                {/* Main Content */}
                <div className="flex-1">
                    {tab === "global" && session && (
                        <AiSearchBar />
                    )}

                    {(tab === "platform" || tab === "saved") ? (
                        (items.length > 0 || interestedGlobalRepos.length > 0) ? (
                            <div className="space-y-16">
                                {items.length > 0 && (
                                    <div className="space-y-6">
                                        {tab === "saved" && (
                                            <div className="flex items-center gap-3">
                                                <div className="w-2 h-2 rounded-full bg-[#00FF66]" />
                                                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#00FF66]">Platform Projects</span>
                                            </div>
                                        )}
                                        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                                            {items.map((project) => (
                                                <ProjectCard key={project.id} project={project} isSaved={savedIds.includes(project.id)} />
                                            ))}
                                        </div>
                                    </div>
                                )}
                                
                                {tab === "saved" && interestedGlobalRepos.length > 0 && (
                                    <div className="space-y-6">
                                        <div className="flex items-center gap-3">
                                            <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                                            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-red-500/80">Global Repositories</span>
                                        </div>
                                        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                                            {interestedGlobalRepos.map((repo) => (
                                                <GithubRepoCard key={repo.id} repo={repo} isSaved={true} />
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {tab === "platform" && <Pagination totalItems={totalCount} pageSize={10} currentPage={currentPage} />}
                            </div>
                        ) : (
                            <div className="zf-card p-24 text-center flex flex-col items-center justify-center bg-[#171717]/20 border-dashed">
                                <div className="w-20 h-20 bg-[#171717] border border-[#373737] rounded-3xl flex items-center justify-center mb-10">
                                    {tab === "saved" ? <Heart className="w-8 h-8 text-red-500/20" /> : <Database className="w-8 h-8 text-[#444]" />}
                                </div>
                                <h3 className="text-3xl font-extrabold mb-6 text-white zf-heading uppercase tracking-widest">
                                    {tab === "saved" ? "No Interests Yet" : "No Projects Found"}
                                </h3>
                                <p className="text-[#B9B9B9] max-w-sm text-[16px] leading-relaxed opacity-60">
                                    {tab === "saved" ? "The repositories you find interesting will appear here." : "We couldn't find any projects matching your filters on our platform."}
                                </p>
                                {tab === "saved" && (
                                    <div className="flex gap-4 mt-10">
                                        <Link href="/explore?tab=platform" className="zf-button-outline px-8 py-3 text-[13px] font-bold uppercase tracking-widest">
                                            Platform
                                        </Link>
                                        <Link href="/explore?tab=global" className="zf-button bg-[#00FF66]/10 text-[#00FF66] border-[#00FF66]/20 hover:bg-[#00FF66]/20 px-8 py-3 text-[13px] font-bold uppercase tracking-widest">
                                            Global
                                        </Link>
                                    </div>
                                )}
                            </div>
                        )
                    ) : !session ? (
                        <div className="zf-card p-24 text-center flex flex-col items-center justify-center overflow-hidden relative border-[#00FF66]/10">
                            <div className="absolute inset-0 bg-[#00FF66]/[0.01] pointer-events-none" />
                            <div className="w-24 h-24 bg-[#171717] border border-[#373737] rounded-full flex items-center justify-center mb-12 relative z-10 shadow-[0_0_50px_rgba(0,255,102,0.1)] group hover:scale-110 transition-transform">
                                <Radar className="w-10 h-10 text-[#00FF66] animate-pulse" />
                            </div>
                            <h3 className="text-5xl font-extrabold mb-8 text-white zf-heading uppercase tracking-tighter">Login Required</h3>
                            <p className="text-[#B9B9B9] max-w-xl mb-14 text-[20px] font-medium leading-relaxed opacity-80">Connect your GitHub account to search for abandoned repositories and save your interests.</p>
                            <Link href="/login" className="zf-button text-[15px] font-bold px-12 py-5 relative z-10 uppercase tracking-widest">
                                Login with GitHub
                            </Link>
                        </div>
                    ) : globalRepos.items.length > 0 ? (
                        <div className="space-y-16">
                            <div className="space-y-10">
                                <div className="flex items-center justify-between mb-2">
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                                        <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-red-500/80">GitHub Results</span>
                                    </div>
                                    <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#666]">
                                        Found {globalRepos.total_count.toLocaleString()} projects
                                    </span>
                                </div>
                                <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                                    {globalRepos.items.map((repo) => (
                                        <GithubRepoCard key={repo.id} repo={repo} isSaved={savedGlobalIds.includes(repo.full_name)} />
                                    ))}
                                </div>
                            </div>
                            <Pagination totalItems={globalRepos.total_count} pageSize={10} currentPage={currentPage} />
                        </div>
                    ) : (
                        <div className="zf-card p-24 text-center flex flex-col items-center justify-center">
                            <div className="w-20 h-20 bg-[#171717] border border-[#373737] rounded-3xl flex items-center justify-center mb-10">
                                <Search className="w-8 h-8 text-[#444]" />
                            </div>
                            <h3 className="text-3xl font-extrabold mb-6 text-white zf-heading uppercase tracking-widest">No Results</h3>
                            <p className="text-[#B9B9B9] max-w-sm text-[16px] opacity-60 leading-relaxed">
                                No repositories found for your search. Try adjusting your filters.
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
