import { RevivalMode } from "@/backend/lib/validations"
import { Shield, Users, Radio, CheckCircle2 } from "lucide-react"
import { cn } from "@/frontend/lib/utils"

export function RevivalModeBadge({ mode }: { mode: RevivalMode }) {
  const configs = {
    [RevivalMode.OPEN_SOURCE]: {
      label: "Revived via Fork (Open Source)",
      icon: Shield,
      className: "border-emerald-500/20 text-emerald-500 bg-emerald-500/5",
    },
    [RevivalMode.COLLABORATIVE]: {
      label: "Maintainer Approved Revival",
      icon: CheckCircle2,
      className: "border-amber-500/20 text-amber-500 bg-amber-500/5 shadow-[0_0_15px_rgba(245,158,11,0.1)]",
    },
    [RevivalMode.INDEPENDENT]: {
      label: "Independent Revival",
      icon: Radio,
      className: "border-indigo-500/20 text-indigo-500 bg-indigo-500/5",
    },
  }

  const config = configs[mode] || configs[RevivalMode.OPEN_SOURCE]
  const Icon = config.icon

  return (
    <div className={cn(
      "inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-[10px] font-bold uppercase tracking-widest transition-all",
      config.className
    )}>
      <Icon className="w-3.5 h-3.5" />
      {config.label}
    </div>
  )
}
