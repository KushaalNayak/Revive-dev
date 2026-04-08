import { RepoHealth } from "@/backend/lib/ai-service"
import { Brain, Info, Zap, Star } from "lucide-react"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/frontend/components/ui/tooltip"

interface ReviveScoreProps {
    health: RepoHealth
}

export function ReviveScore({ health }: ReviveScoreProps) {
    const getScoreColor = (score: number) => {
        if (score >= 80) return "text-emerald-500"
        if (score >= 60) return "text-blue-500"
        if (score >= 40) return "text-amber-500"
        return "text-rose-500"
    }

    return (
        <div className="loki-card p-8 space-y-8 bg-white/[0.01]">
            <div className="flex items-start justify-between">
                <div className="space-y-4">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl border border-primary/20 flex items-center justify-center text-primary bg-primary/5">
                            <Brain className="w-5 h-5" />
                        </div>
                        <div>
                            <h3 className="text-[10px] font-medium text-white mb-0.5">Diagnostic Report</h3>
                            <p className="text-[9px] text-primary/40">SYS_ANALYSIS_PROBE::v2.4.0</p>
                        </div>
                    </div>
                </div>
                <div className="text-right">
                    <div className="text-[10px] font-medium text-white/40 mb-1">Health Index</div>
                    <div className={`text-5xl font-medium tracking-tight ${getScoreColor(health.score)}`}>
                        {health.score}
                    </div>
                </div>
            </div>

            <div className="space-y-3">
                <div className="flex justify-between items-end">
                    <span className="text-[10px] font-medium text-white/40">Integrity Index</span>
                    <span className={`text-[10px] font-medium ${getScoreColor(health.score)}`}>{health.label}</span>
                </div>
                <div className="h-1.5 w-full bg-white/5 relative overflow-hidden rounded-full">
                    <div
                        className={`absolute inset-y-0 left-0 transition-all duration-1000 bg-primary glow-primary shadow-[0_0_10px_rgba(88,166,255,0.5)]`}
                        style={{ width: `${health.score}%` }}
                    />
                </div>
            </div>

            <div className="grid grid-cols-2 gap-8 border-y border-white/5 py-8">
                <div className="space-y-2">
                    <span className="text-[10px] font-medium text-white/40">Complexity Level</span>
                    <div className="text-xs font-medium flex items-center gap-2">
                        <Zap className="w-3.5 h-3.5 text-primary" />
                        {health.difficulty.charAt(0).toUpperCase() + health.difficulty.slice(1).toLowerCase()}
                    </div>
                </div>
                <div className="space-y-2 text-right">
                    <span className="text-[10px] font-medium text-white/40">Idle Duration</span>
                    <div className="text-xs font-medium">
                        {health.lastCommitDays} Days Stalled
                    </div>
                </div>
            </div>

            <div className="space-y-6">
                <p className="text-[10px] font-medium text-primary/60">Neural Insights Buffer</p>
                <ul className="space-y-4">
                    {health.insights.map((insight, i) => (
                        <li key={i} className="text-xs text-white/50 flex items-start gap-3 leading-relaxed group">
                            <span className="text-primary/40 font-medium mt-0.5">0{i + 1}</span>
                            <span> {insight} </span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}





