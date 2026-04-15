import { getAdminTickets } from "@/backend/actions/tickets"
import { getServerSession } from "next-auth"
import { authOptions } from "@/backend/lib/auth-options"
import { redirect } from "next/navigation"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/frontend/components/ui/table"
import { Badge } from "@/frontend/components/ui/badge"
import { AdminActionButtons } from "@/frontend/components/admin/action-buttons"
import { SupportTicket, Project, User } from "@prisma/client"

function isAdmin(email?: string | null) {
    if (!email) return false
    const pluralAdmins = (process.env.ADMIN_EMAILS || "").split(",")
    const singularAdmin = process.env.ADMIN_EMAIL || ""
    return pluralAdmins.includes(email) || singularAdmin === email
}

type TicketWithRelations = SupportTicket & {
    project: Project & { owner: User }
    requester: User
}

export default async function AdminTicketsPage() {
    const session = await getServerSession(authOptions)
    if (!session || !isAdmin(session.user?.email)) {
        redirect("/")
    }

    const tickets = await getAdminTickets()

    return (
        <div className="min-h-screen relative pb-40 pt-32 transition-all duration-700">
            <div className="w-full px-6 sm:px-12 md:px-24 pt-16 relative z-10">
                <div className="max-w-4xl mb-24 pb-16 space-y-6">
                    <div className="inline-flex items-center rounded-sm border border-rose-500/20 bg-rose-500/5 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-rose-500 gap-2">
                        <span>ESCALATION_SYSTEM</span>
                    </div>
                    <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter text-white leading-[0.85]">
                        ADMIN <span className="loki-text-outline italic">OVERRIDE</span>
                    </h1>
                    <p className="text-base md:text-lg text-white/50 leading-relaxed font-medium uppercase">
                        MODERATE PLATFORM ASSETS AND SUPPORT TICKETS.
                    </p>
                </div>

                <div className="loki-card p-10 md:p-16 min-h-[600px] relative bg-white/[0.01]">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-rose-500/5 blur-[120px] pointer-events-none -mr-48 -mt-48" />
                    <div className="absolute top-6 left-8 text-[10px] font-medium text-white/30 tracking-widest uppercase">System Protocol Interface</div>

                    <div className="mt-8 border border-white/5 bg-black/40 rounded-xl overflow-hidden">
                        <Table>
                            <TableHeader className="bg-white/[0.02]">
                                <TableRow className="border-white/5 hover:bg-transparent">
                                    <TableHead className="font-bold tracking-widest text-[9px] uppercase text-white/40 h-14 pl-6">Identifier</TableHead>
                                    <TableHead className="font-bold tracking-widest text-[9px] uppercase text-white/40">Logic Node</TableHead>
                                    <TableHead className="font-bold tracking-widest text-[9px] uppercase text-white/40">Requester</TableHead>
                                    <TableHead className="font-bold tracking-widest text-[9px] uppercase text-white/40">Report_Log</TableHead>
                                    <TableHead className="font-bold tracking-widest text-[9px] uppercase text-white/40">Status</TableHead>
                                    <TableHead className="font-bold tracking-widest text-[9px] uppercase text-white/40">Timestamp</TableHead>
                                    <TableHead className="font-bold tracking-widest text-[9px] uppercase text-white/40 text-right pr-6">Override</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {tickets.map((ticket: TicketWithRelations) => (
                                    <TableRow key={ticket.id} className="border-white/5 hover:bg-white/[0.02] transition-colors">
                                        <TableCell className="font-mono text-xs text-primary/70 pl-6">{ticket.id.slice(0, 8)}</TableCell>
                                        <TableCell className="max-w-[200px]">
                                            <div className="font-medium text-sm text-white truncate">{ticket.project.title}</div>
                                            <div className="text-[10px] text-white/40 truncate mt-1 tracking-widest uppercase">SYS_OWNER: {ticket.project.owner.email}</div>
                                        </TableCell>
                                        <TableCell className="font-mono text-xs text-white/70">{ticket.requester.email}</TableCell>
                                        <TableCell className="max-w-[250px] truncate text-xs text-white/60">{ticket.message}</TableCell>
                                        <TableCell>
                                            <div className={`inline-flex px-2 py-1 text-[9px] font-bold uppercase tracking-widest border rounded-sm ${ticket.status === 'OPEN' ? 'bg-rose-500/10 border-rose-500/20 text-rose-500' : 'bg-white/5 border-white/10 text-white/50'}`}>
                                                {ticket.status}
                                            </div>
                                        </TableCell>
                                        <TableCell className="text-[10px] uppercase font-mono tracking-widest text-white/40">{new Date(ticket.createdAt).toLocaleDateString()}</TableCell>
                                        <TableCell className="text-right pr-6">
                                            <AdminActionButtons ticketId={ticket.id} status={ticket.status} />
                                        </TableCell>
                                    </TableRow>
                                ))}
                                {tickets.length === 0 && (
                                    <TableRow>
                                        <TableCell colSpan={7} className="text-center py-20">
                                            <div className="text-[10px] font-bold uppercase tracking-widest text-white/30">No escalation logs found in system.</div>
                                        </TableCell>
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </div>
                </div>
            </div>
        </div>
    )
}



