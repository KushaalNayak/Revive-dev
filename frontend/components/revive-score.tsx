import { RepoHealth } from "@/backend/lib/ai-service"
import { Brain, Star } from "lucide-react"

interface ReviveScoreProps {
    health: RepoHealth
}

export function ReviveScore({ health }: ReviveScoreProps) {
    const getScoreColor = (score: number) => {
        if (score >= 80) return "text-[#00FF66]"
        if (score >= 60) return "text-blue-400"
        if (score >= 40) return "text-amber-400"
        return "text-rose-500"
    }

    const getScoreBgColor = (score: number) => {
        if (score >= 80) return "bg-[#00FF66]"
        if (score >= 60) return "bg-blue-400"
        if (score >= 40) return "bg-amber-400"
        return "bg-rose-500"
    }

    const breakdown = [
        { label: "Maintained", value: health.scoreBreakdown?.maintained || 3 },
        { label: "Documentation", value: health.scoreBreakdown?.documentation || 3 },
        { label: "Issue Activity", value: health.scoreBreakdown?.issueActivity || 3 },
        { label: "Community Interest", value: health.scoreBreakdown?.communityInterest || 3 },
        { label: "Dependency Health", value: health.scoreBreakdown?.dependencyHealth || 3 },
        { label: "Security", value: health.scoreBreakdown?.security || 4 },
        { label: "Build Status", value: health.scoreBreakdown?.buildStatus || 4 },
    ]

    return (
        <div className="loki-card p-8 space-y-8 bg-[#111111]/30 border border-[#373737]/30 rounded-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#00FF66]/[0.02] blur-[80px] pointer-events-none" />
            
            <div className="flex items-start justify-between">
                <div className="space-y-4">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl border border-[#00FF66]/20 flex items-center justify-center text-[#00FF66] bg-[#00FF66]/5">
                            <Brain className="w-5 h-5" />
                        </div>
                        <div>
                            <h3 className="text-[11px] font-bold text-white uppercase tracking-wider">Health Audit</h3>
                            <p className="text-[9px] text-[#00FF66] font-mono">SYS_ANALYSIS_PROBE::v2.5.0</p>
                        </div>
                    </div>
                </div>
                <div className="text-right">
                    <div className="text-[10px] font-bold text-white/40 uppercase tracking-wider mb-1">Revive Score</div>
                    <div className={`text-5xl font-black tracking-tighter ${getScoreColor(health.score)}`}>
                        {health.score}
                    </div>
                </div>
            </div>

            <div className="space-y-3">
                <div className="flex justify-between items-end">
                    <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Integrity Index</span>
                    <span className={`text-[10px] font-bold uppercase tracking-wider ${getScoreColor(health.score)}`}>{health.label}</span>
                </div>
                <div className="h-2 w-full bg-white/5 relative overflow-hidden rounded-full border border-white/5">
                    <div
                        className={`absolute inset-y-0 left-0 transition-all duration-1000 ${getScoreBgColor(health.score)} shadow-[0_0_10px_rgba(0,255,102,0.3)]`}
                        style={{ width: `${health.score}%` }}
                    />
                </div>
            </div>

            {/* Score Breakdown Metrics */}
            <div className="space-y-4 pt-4 border-t border-white/5">
                <span className="text-[10px] font-bold text-[#00FF66] uppercase tracking-widest block">Audit Breakdown</span>
                <div className="space-y-3.5">
                    {breakdown.map((item) => (
                        <div key={item.label} className="flex items-center justify-between">
                            <span className="text-xs text-white/50">{item.label}</span>
                            <div className="flex items-center gap-1">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <Star 
                                        key={star} 
                                        className={`w-3.5 h-3.5 ${
                                            star <= item.value 
                                                ? "text-[#00FF66] fill-[#00FF66]" 
                                                : "text-white/10 fill-white/[0.02]"
                                        }`} 
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="space-y-6 pt-4 border-t border-white/5">
                <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Neural Insights Buffer</p>
                <ul className="space-y-4">
                    {health.insights.map((insight, i) => (
                        <li key={i} className="text-xs text-white/65 flex items-start gap-3 leading-relaxed">
                            <span className="text-[#00FF66]/50 font-mono text-[10px] mt-0.5">0{i + 1}</span>
                            <span> {insight} </span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}





