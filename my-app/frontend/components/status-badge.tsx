import { Badge } from "@/frontend/components/ui/badge"
import { ProjectStatus, RequestStatus } from "@prisma/client"
import { cn } from "@/frontend/lib/utils"

export function ProjectStatusBadge({ status }: { status: ProjectStatus }) {
    const variants: Record<ProjectStatus, "default" | "secondary" | "destructive" | "outline" | "premium"> = {
        [ProjectStatus.LOOKING_FOR_HELP]: "default",
        [ProjectStatus.IN_PROGRESS]: "premium",
        [ProjectStatus.REVIVED]: "outline",
        [ProjectStatus.ARCHIVED]: "secondary",
    }

    const labels = {
        [ProjectStatus.LOOKING_FOR_HELP]: "Looking for Help",
        [ProjectStatus.IN_PROGRESS]: "In Progress",
        [ProjectStatus.REVIVED]: "Revived",
        [ProjectStatus.ARCHIVED]: "Archived",
    }

    const dotColors = {
        [ProjectStatus.LOOKING_FOR_HELP]: "bg-emerald-500",
        [ProjectStatus.IN_PROGRESS]: "bg-amber-500",
        [ProjectStatus.REVIVED]: "bg-violet-500",
        [ProjectStatus.ARCHIVED]: "bg-zinc-500",
    }

    return (
        <div className={cn("text-[10px] font-medium flex items-center gap-2 border px-3 py-1.5 rounded-full bg-white/[0.03]",
             status === ProjectStatus.LOOKING_FOR_HELP ? "border-emerald-500/20 text-emerald-500" :
             status === ProjectStatus.IN_PROGRESS ? "border-amber-500/20 text-amber-500" :
             status === ProjectStatus.REVIVED ? "border-violet-500/20 text-violet-500" :
             "border-zinc-500/20 text-zinc-500"
        )}>
            <div className={cn("w-1.5 h-1.5 rounded-full shrink-0", dotColors[status])} />
            {labels[status]}
        </div>
    )
}

export function RequestStatusBadge({ status }: { status: RequestStatus }) {
    return (
        <div className={cn("text-[10px] font-medium flex items-center border px-3 py-1.5 rounded-full bg-white/[0.03]",
             status === RequestStatus.ACCEPTED ? "border-emerald-500/20 text-emerald-500" :
             status === RequestStatus.PENDING ? "border-amber-500/20 text-amber-500" :
             status === RequestStatus.REJECTED ? "border-rose-500/20 text-rose-500" :
             "border-zinc-500/20 text-zinc-500"
        )}>
            {status.charAt(0).toUpperCase() + status.slice(1).toLowerCase()}
        </div>
    )
}
