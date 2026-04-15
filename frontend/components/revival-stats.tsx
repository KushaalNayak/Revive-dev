"use client"

import { useEffect, useState } from "react"
import { getRevivalStats } from "@/backend/actions/revival"
import { Users } from "lucide-react"

export function RevivalStats({ repoFullName }: { repoFullName: string }) {
    const [stats, setStats] = useState<{user: {name: string | null, username: string | null}}[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getRevivalStats(repoFullName).then((data) => {
            setStats(data)
            setLoading(false)
        }).catch(() => setLoading(false))
    }, [repoFullName])

    if (loading || stats.length === 0) return null

    return (
        <div className="mt-4 p-3 bg-[#00FF66]/10 border border-[#00FF66]/20 rounded-[12px] flex flex-col gap-2">
            <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-[#00FF66] uppercase tracking-wider flex items-center gap-1.5">
                    🔥 Revival in Progress
                </span>
            </div>
            <div className="flex items-center gap-2 text-xs text-[#00FF66]/80 font-medium font-sans">
                <Users className="w-3.5 h-3.5" />
                <span>
                    {stats.length} developer{stats.length !== 1 ? 's' : ''} working
                    {stats.length > 0 && ` (${stats[0].user.name || stats[0].user.username}${stats.length > 1 ? ' + others' : ''})`}
                </span>
            </div>
        </div>
    )
}
