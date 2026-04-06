"use client"

import { Request, Project, User } from "@prisma/client"
import { RequestStatusBadge } from "@/frontend/components/status-badge"
import { toast } from "sonner"
import { updateRequestStatus } from "@/backend/actions/requests"
import { createSupportTicket } from "@/backend/actions/tickets"
import { useState } from "react"
import { Check, X, Ban, AlertTriangle, MessageSquare, Calendar, User as UserIcon } from "lucide-react"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/frontend/components/ui/tooltip"
import { cn } from "@/frontend/lib/utils"

type RequestWithRelations = Request & {
    project: Project
    requester?: User // For incoming
}

export function DashboardRequestList({ requests, type }: { requests: RequestWithRelations[], type: "incoming" | "outgoing" }) {
    const [loading, setLoading] = useState<string | null>(null)

    async function handleStatusUpdate(requestId: string, status: "ACCEPTED" | "REJECTED" | "CANCELLED") {
        try {
            setLoading(requestId)
            await updateRequestStatus(requestId, status)
            toast.success(`Request ${status.toLowerCase()}`)
        } catch (err) {
            toast.error(err instanceof Error ? err.message : "Something went wrong")
        } finally {
            setLoading(null)
        }
    }

    async function handleEscalate(requestId: string) {
        const message = prompt("Briefly explain your issue:")
        if (!message) return

        try {
            setLoading(requestId)
            await createSupportTicket(requestId, message)
            toast.success("Support ticket created")
        } catch (err) {
            toast.error(err instanceof Error ? err.message : "Something went wrong")
        } finally {
            setLoading(null)
        }
    }

    if (requests.length === 0) {
        return (
            <div className="zf-card p-24 text-center flex flex-col items-center justify-center border-dashed">
                <div className="w-20 h-20 bg-[#171717] border border-[#373737] rounded-3xl flex items-center justify-center mb-10">
                    <MessageSquare className="w-8 h-8 text-[#444]" />
                </div>
                <h3 className="text-3xl font-extrabold mb-6 text-white zf-heading uppercase tracking-widest">No Requests</h3>
                <p className="text-[#B9B9B9] max-w-sm text-[16px] leading-relaxed opacity-60">
                    There are no requests to show in this section.
                </p>
            </div>
        )
    }

    return (
        <div className="space-y-8">
            {requests.map((req) => {
                const daysPending = (Date.now() - new Date(req.createdAt).getTime()) / (1000 * 3600 * 24)
                const showEscalate = type === "outgoing" && req.status === "PENDING" && daysPending > 7

                return (
                    <div key={req.id} className="zf-card p-8 group relative overflow-hidden">
                        <div className="flex flex-col lg:flex-row gap-10 items-start">
                            <div className="flex-1 min-w-0 w-full space-y-6">
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-4">
                                        <RequestStatusBadge status={req.status} />
                                        <div className="flex items-center gap-1.5 text-[10px] font-bold text-[#666] uppercase tracking-[0.2em]">
                                            <Calendar className="w-3 h-3" />
                                            {new Date(req.createdAt).toLocaleDateString()}
                                        </div>
                                    </div>
                                    <span className="text-[10px] font-mono text-[#222]">ID: {req.id.slice(0, 8)}</span>
                                </div>

                                <div>
                                    <h3 className="text-3xl font-bold text-white group-hover:text-[#00FF66] transition-colors truncate mb-4 italic">
                                        {req.project.title}
                                    </h3>

                                    <div className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] border border-[#373737]/30">
                                        <div className="w-10 h-10 rounded-full bg-[#171717] border border-[#373737] flex items-center justify-center text-[#00FF66]">
                                            <UserIcon className="w-5 h-5" />
                                        </div>
                                        <div className="space-y-0.5">
                                            <p className="text-[10px] font-bold text-[#444] uppercase tracking-widest">
                                                {type === "incoming" ? "From" : "To"}
                                            </p>
                                            <p className="text-[14px] font-bold text-white/90">
                                                {type === "incoming"
                                                    ? (req.requester?.username || "Anonymous")
                                                    : "Project Owner"}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-6 rounded-2xl bg-[#0B0B0B]/50 border border-[#373737]/50 relative">
                                    <div className="absolute top-3 left-4 text-[9px] font-bold text-[#333] uppercase tracking-[0.3em]">Message</div>
                                    <p className="text-[15px] text-[#B9B9B9] leading-relaxed whitespace-pre-wrap pt-4">
                                        {req.message}
                                    </p>
                                </div>
                            </div>

                            <div className="flex sm:flex-row lg:flex-col gap-3 shrink-0 w-full lg:w-48 mt-4 lg:mt-0">
                                {type === "incoming" && req.status === "PENDING" && (
                                    <>
                                        <button 
                                            className="zf-button flex-1 py-4 text-[12px]" 
                                            onClick={() => handleStatusUpdate(req.id, "ACCEPTED")} 
                                            disabled={!!loading}
                                        >
                                            <Check className="w-4 h-4 inline-block mr-2" /> Accept
                                        </button>
                                        <button 
                                            className="zf-button-outline border-red-500/20 text-red-500 hover:bg-red-500/10 flex-1 py-4 text-[12px]" 
                                            onClick={() => handleStatusUpdate(req.id, "REJECTED")} 
                                            disabled={!!loading}
                                        >
                                            <X className="w-4 h-4 inline-block mr-2" /> Decline
                                        </button>
                                    </>
                                )}
                                {type === "outgoing" && req.status === "PENDING" && (
                                    <>
                                        <button 
                                            className="zf-button-outline border-red-500/40 text-red-500 hover:bg-red-500/10 flex-1 py-4 text-[12px]" 
                                            onClick={() => handleStatusUpdate(req.id, "CANCELLED")} 
                                            disabled={!!loading}
                                        >
                                            <Ban className="w-4 h-4 inline-block mr-2" /> Cancel
                                        </button>
                                        {showEscalate && (
                                            <TooltipProvider>
                                                <Tooltip>
                                                    <TooltipTrigger asChild>
                                                        <button 
                                                            className="zf-card bg-red-500/10 border-red-500/30 text-red-500 hover:bg-red-500 hover:text-white flex-1 py-4 text-[12px] transition-all" 
                                                            onClick={() => handleEscalate(req.id)} 
                                                            disabled={!!loading}
                                                        >
                                                            <AlertTriangle className="w-4 h-4 inline-block mr-2" /> Escalate
                                                        </button>
                                                    </TooltipTrigger>
                                                    <TooltipContent className="bg-[#0B0B0B] border-[#373737] text-white text-[11px] p-3 rounded-xl">
                                                        <p>Unresponsive longer than 7 days</p>
                                                    </TooltipContent>
                                                </Tooltip>
                                            </TooltipProvider>
                                        )}
                                    </>
                                )}
                                {(req.status === "ACCEPTED" || req.status === "REJECTED") && (
                                    <div className={cn(
                                        "flex-1 lg:w-full py-8 rounded-2xl flex flex-col items-center justify-center gap-2 border",
                                        req.status === "ACCEPTED" ? "border-[#00FF66]/20 bg-[#00FF66]/5 text-[#00FF66]" : "border-red-500/20 bg-red-500/5 text-red-500"
                                    )}>
                                        {req.status === "ACCEPTED" ? <Check className="w-6 h-6" /> : <X className="w-6 h-6" />}
                                        <p className="text-[10px] font-bold uppercase tracking-widest">{req.status}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
