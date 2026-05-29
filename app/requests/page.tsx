import { getIncomingRequests, getOutgoingRequests } from "@/backend/actions/requests"
import { getServerSession } from "next-auth"
import { authOptions } from "@/backend/lib/auth-options"
import { redirect } from "next/navigation"
import { DashboardRequestList } from "@/frontend/components/dashboard/request-list"
import Link from "next/link"
import { Inbox, Send } from "lucide-react"
import { cn } from "@/frontend/lib/utils"

export default async function RequestsPage({
    searchParams,
}: {
    searchParams: Promise<{ tab?: string }>
}) {
    const { tab = "incoming" } = await searchParams
    const session = await getServerSession(authOptions)
    if (!session) redirect("/api/auth/signin")

    const [incomingRequests, outgoingRequests] = await Promise.all([
        getIncomingRequests("ALL"),
        getOutgoingRequests()
    ])

    return (
        <div className="min-h-screen text-white pb-24 relative bg-[#0B0B0B]">
            {/* Subtle background glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#00FF66]/[0.02] blur-[150px] rounded-full pointer-events-none" />

            <div className="border-b border-[#373737] bg-[#0B0B0B] pt-20 pb-0 z-40">
                <div className="max-w-[1400px] mx-auto px-6 md:px-10">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-2 h-2 rounded-full bg-[#00FF66] animate-pulse" />
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#00FF66]">Requests Log</span>
                    </div>
                    
                    <h1 className="text-5xl lg:text-7xl font-extrabold mb-4 text-[#FFFFFF] zf-heading uppercase tracking-tighter">
                        Adoption <span className="text-[#00FF66]">Requests</span>
                    </h1>
                    <p className="text-[#B9B9B9] max-w-2xl text-[20px] font-medium leading-relaxed opacity-80 mb-12">
                        Manage all inbound offers for your projects and track your outbound contribution requests.
                    </p>
                    
                    {/* Page Tabs */}
                    <div className="flex items-center gap-10 overflow-x-auto no-scrollbar">
                        <Link 
                            href="/requests?tab=incoming" 
                            className={cn(
                                "flex items-center gap-2 pb-5 border-b-[2px] text-[14px] font-bold tracking-tight transition-all uppercase whitespace-nowrap",
                                tab === "incoming" ? "border-[#00FF66] text-[#00FF66]" : "border-transparent text-[#666] hover:text-white"
                            )}
                        >
                            <Inbox className={cn("w-4 h-4", tab === "incoming" ? "text-[#00FF66]" : "text-[#444]")} />
                            Inbound
                            <span className={cn("text-[10px] opacity-40 ml-1", tab === "incoming" && "text-[#00FF66]")}>({incomingRequests.length})</span>
                        </Link>

                        <Link 
                            href="/requests?tab=outgoing" 
                            className={cn(
                                "flex items-center gap-2 pb-5 border-b-[2px] text-[14px] font-bold tracking-tight transition-all uppercase whitespace-nowrap",
                                tab === "outgoing" ? "border-[#00FF66] text-[#00FF66]" : "border-transparent text-[#666] hover:text-white"
                            )}
                        >
                            <Send className={cn("w-4 h-4", tab === "outgoing" ? "text-[#00FF66]" : "text-[#444]")} />
                            Outbound
                            <span className={cn("text-[10px] opacity-40 ml-1", tab === "outgoing" && "text-[#00FF66]")}>({outgoingRequests.length})</span>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="max-w-[1400px] mx-auto px-6 md:px-10 mt-16 relative z-10">
                <div className="zf-card p-10 min-h-[600px] bg-[#171717]/10">
                    {tab === "incoming" && (
                        <div className="space-y-8">
                            <div className="flex items-center justify-between">
                                <h3 className="text-xl font-bold zf-heading text-[#00FF66]">Inbound Requests</h3>
                                <span className="text-[10px] text-[#444] font-bold uppercase tracking-widest">Offers to adopt or contribute</span>
                            </div>
                            <DashboardRequestList requests={incomingRequests} type="incoming" />
                        </div>
                    )}

                    {tab === "outgoing" && (
                        <div className="space-y-8">
                            <div className="flex items-center justify-between">
                                <h3 className="text-xl font-bold zf-heading text-[#00FF66]">Outbound Requests</h3>
                                <span className="text-[10px] text-[#444] font-bold uppercase tracking-widest">Your pending and past applications</span>
                            </div>
                            <DashboardRequestList requests={outgoingRequests} type="outgoing" />
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
