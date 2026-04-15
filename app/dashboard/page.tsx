import { getUserProjects, getAdoptedProjects } from "@/backend/actions/projects"
import { getIncomingRequests, getOutgoingRequests } from "@/backend/actions/requests"
import { getServerSession } from "next-auth"
import { authOptions } from "@/backend/lib/auth-options"
import { redirect } from "next/navigation"
import { DashboardProjectList } from "@/frontend/components/dashboard/project-list"
import { DashboardRequestList } from "@/frontend/components/dashboard/request-list"
import { Button } from "@/frontend/components/ui/button"
import Link from "next/link"
import { Plus, LayoutDashboard, Github, Inbox, Send, Briefcase, Search } from "lucide-react"
import { fetchUserRepos } from "@/backend/actions/github"
import { DashboardRepoList } from "@/frontend/components/dashboard/repo-list"
import { cn } from "@/frontend/lib/utils"
import { DashboardFilter } from "@/frontend/components/dashboard/dashboard-filter"
import { RevivalMode } from "@prisma/client"

export default async function DashboardPage({
    searchParams,
}: {
    searchParams: Promise<{ 
        tab?: string; 
        search?: string;
        language?: string;
        sort?: string;
        revivalMode?: string;
        page?: string;
    }>
}) {
    const { tab = "projects", search, language, sort, page: pageStr, revivalMode: revivalRaw } = await searchParams
    const page = pageStr ? parseInt(pageStr) : 1

    const revivalMode = Object.values(RevivalMode).includes(revivalRaw as RevivalMode)
        ? (revivalRaw as RevivalMode)
        : undefined

    const session = await getServerSession(authOptions)
    if (!session) redirect("/api/auth/signin")

    const [myProjects, adoptedProjects, incomingRequests, outgoingRequests, githubData] = await Promise.all([
        getUserProjects({ search, language, sort, revivalMode }),
        getAdoptedProjects({ search, language, sort, revivalMode }),
        getIncomingRequests(),
        getOutgoingRequests(),
        fetchUserRepos({ search, language, sort, page, pageSize: 12 }).catch(err => {
            console.error(err)
            return { items: [], total_count: 0 }
        })
    ])

    const githubRepos = githubData.items
    const githubTotalCount = githubData.total_count
    const listedRepoFullNames = myProjects.map(p => p.repoFullName)

    const tabs = [
        { id: 'projects', label: 'Listed', count: myProjects.length, icon: LayoutDashboard },
        { id: 'github', label: 'Import', count: githubTotalCount, icon: Github },
        { id: 'incoming', label: 'Inbound', count: incomingRequests.length, icon: Inbox },
        { id: 'outgoing', label: 'Outbound', count: outgoingRequests.length, icon: Send },
        { id: 'adopted', label: 'Revived', count: adoptedProjects.length, icon: Briefcase }
    ]

    return (
        <div className="min-h-screen text-white pb-24 relative bg-[#0B0B0B]">
            {/* Subtle background glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#00FF66]/[0.02] blur-[150px] rounded-full pointer-events-none" />

            <div className="border-b border-[#373737] bg-[#0B0B0B] pt-20 pb-0 z-40">
                <div className="max-w-[1400px] mx-auto px-6 md:px-10">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-2 h-2 rounded-full bg-[#00FF66] animate-pulse" />
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#00FF66]">Overview</span>
                    </div>
                    <div className="flex flex-col lg:flex-row justify-between items-end gap-8 mb-12">
                        <div>
                            <h1 className="text-5xl lg:text-7xl font-extrabold mb-4 text-[#FFFFFF] zf-heading uppercase tracking-tighter">
                                My <span className="text-[#00FF66]">Dashboard</span>
                            </h1>
                            <p className="text-[#B9B9B9] max-w-2xl text-[20px] font-medium leading-relaxed opacity-80">
                                Manage your listed projects and track all your adoption requests.
                            </p>
                        </div>
                        <Link href="/dashboard/new" className="zf-button flex items-center gap-3 px-8 py-5 text-[15px]">
                            <Plus className="w-5 h-5" />
                            List New Project
                        </Link>
                    </div>
                    
                    {/* Page Tabs */}
                    <div className="flex items-center gap-10 overflow-x-auto no-scrollbar">
                        {tabs.map((t) => (
                            <Link 
                                key={t.id}
                                href={`/dashboard?tab=${t.id}`} 
                                className={cn(
                                    "flex items-center gap-2 pb-5 border-b-[2px] text-[14px] font-bold tracking-tight transition-all uppercase whitespace-nowrap",
                                    tab === t.id ? "border-[#00FF66] text-[#00FF66]" : "border-transparent text-[#666] hover:text-white"
                                )}
                            >
                                <t.icon className={cn("w-4 h-4", tab === t.id ? "text-[#00FF66]" : "text-[#444]")} />
                                {t.label}
                                <span className={cn("text-[10px] opacity-40 ml-1", tab === t.id && "text-[#00FF66]")}>({t.count})</span>
                            </Link>
                        ))}
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
                        <DashboardFilter />
                    </div>

                    <div className="zf-card p-8 border-[#00FF66]/10">
                        <h3 className="text-[12px] font-bold mb-4 uppercase tracking-widest text-white/40">Account Info</h3>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <span className="text-sm text-[#B9B9B9]">Status</span>
                                <span className="text-sm font-bold text-[#00FF66]">Active</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-sm text-[#B9B9B9]">GitHub Account</span>
                                <span className="text-sm font-bold text-[#00FF66]">Connected</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="flex-1">
                    <div className="zf-card p-10 min-h-[600px] bg-[#171717]/10">
                        {tab === "projects" && (
                            <div className="space-y-8">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-xl font-bold zf-heading text-[#00FF66]">Listed Projects</h3>
                                    <span className="text-[10px] text-[#444] font-bold uppercase tracking-widest">Active listings you&apos;ve posted</span>
                                </div>
                                <DashboardProjectList projects={myProjects} isOwner />
                            </div>
                        )}

                        {tab === "github" && (
                            <div className="space-y-8">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-xl font-bold zf-heading text-[#00FF66]">Import Repository</h3>
                                    <span className="text-[10px] text-[#444] font-bold uppercase tracking-widest">Connect public repos from your GitHub</span>
                                </div>
                                <DashboardRepoList 
                                    repos={githubRepos} 
                                    listedRepoFullNames={listedRepoFullNames} 
                                    totalCount={githubTotalCount}
                                    currentPage={page}
                                />
                            </div>
                        )}

                        {tab === "incoming" && (
                            <div className="space-y-8">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-xl font-bold zf-heading text-[#00FF66]">Inbound Requests</h3>
                                    <span className="text-[10px] text-[#444] font-bold uppercase tracking-widest">Adoption offers for your projects</span>
                                </div>
                                <DashboardRequestList requests={incomingRequests} type="incoming" />
                            </div>
                        )}

                        {tab === "outgoing" && (
                            <div className="space-y-8">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-xl font-bold zf-heading text-[#00FF66]">Outbound Requests</h3>
                                    <span className="text-[10px] text-[#444] font-bold uppercase tracking-widest">Projects you&apos;ve applied to revive</span>
                                </div>
                                <DashboardRequestList requests={outgoingRequests} type="outgoing" />
                            </div>
                        )}

                        {tab === "adopted" && (
                            <div className="space-y-8">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-xl font-bold zf-heading text-[#00FF66]">Revived Projects</h3>
                                    <span className="text-[10px] text-[#444] font-bold uppercase tracking-widest">Projects you have successfully adopted</span>
                                </div>
                                <DashboardProjectList projects={adoptedProjects} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
