"use client"

import { Button } from "@/frontend/components/ui/button"
import { sendOwnerReminderEmail } from "@/backend/actions/tickets"
import { toast } from "sonner"
import { useState } from "react"
import { Mail } from "lucide-react"

export function AdminActionButtons({ ticketId, status }: { ticketId: string, status: string }) {
    const [loading, setLoading] = useState(false)

    async function handleRemind() {
        try {
            setLoading(true)
            await sendOwnerReminderEmail(ticketId)
            toast.success("Reminder email sent")
        } catch (err) {
            toast.error(err instanceof Error ? err.message : "Failed to send reminder")
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="flex justify-end gap-2">
            {status === "OPEN" && (
                <Button size="sm" onClick={handleRemind} disabled={loading} className="rounded-sm bg-rose-500/10 text-rose-500 hover:bg-rose-500 hover:text-white border border-rose-500/20 text-[9px] font-bold uppercase tracking-widest h-8 px-4 transition-all">
                    {loading ? "Transmitting..." : (
                        <span className="flex items-center">
                            <Mail className="w-3 h-3 mr-2" /> Remind Owner
                        </span>
                    )}
                </Button>
            )}
        </div>
    )
}




