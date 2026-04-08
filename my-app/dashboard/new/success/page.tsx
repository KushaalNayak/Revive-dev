import Link from "next/link"
import { CheckCircle2, ChevronRight, LayoutDashboard, Search } from "lucide-react"

export default async function ListingSuccessPage({
    searchParams
}: {
    searchParams: Promise<{ type?: string, slug?: string }>
}) {
    const { type } = await searchParams
    const isPropose = type === 'propose'

    const title = isPropose ? "NOMINATION ACTIVE" : "SUCCESS!"
    const primaryText = isPropose 
        ? "Your revival nomination has been broadcast to the ecosystem."
        : "Your project has been listed and now it can be viewed by all users who use revive.dev"
    
    const secondaryText = isPropose
        ? "Our protocol has automatically notified the repository owner of this revival request. We will begin the neural diagnostic mapping shortly."
        : "Our AI is currently analyzing your repository health. Please check back later in your dashboard to see if you got any project access requests from developers looking to revive your code."

    return (
        <div className="min-h-[80vh] flex items-center justify-center px-6">
            <div className="max-w-[600px] w-full text-center space-y-10">
                <div className="flex flex-col items-center space-y-6">
                    <div className="w-24 h-24 bg-[#00FF66]/10 border border-[#00FF66]/20 rounded-full flex items-center justify-center text-[#00FF66] animate-in zoom-in duration-500 shadow-[0_0_50px_rgba(0,255,102,0.1)]">
                        <CheckCircle2 className="w-12 h-12" />
                    </div>
                    <div className="space-y-2">
                        <div className="text-[#00FF66] font-mono text-[10px] tracking-[0.3em] font-black uppercase">
                            {isPropose ? "EXTERNAL_NOMINATION_PROTOCOL" : "OWNERSHIP_VERIFIED"}
                        </div>
                        <h1 className="text-4xl md:text-5xl font-extrabold zf-heading text-white tracking-tight uppercase">
                            {title}
                        </h1>
                    </div>
                </div>

                <div className="zf-card p-10 space-y-6 bg-white/[0.02] border-[#373737] relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#00FF66]/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-[#00FF66]/10 transition-colors duration-500" />
                    
                    <p className="text-xl text-white font-medium leading-[1.6] relative z-10">
                        {primaryText}
                    </p>
                    <p className="text-[#B9B9B9] text-base leading-relaxed relative z-10 font-mono text-sm opacity-80">
                        {secondaryText}
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <Link href="/dashboard" className="zf-button w-full sm:w-auto px-8 h-14 flex items-center justify-center gap-3 group">
                        <LayoutDashboard className="w-5 h-5 group-hover:rotate-12 transition-transform" /> 
                        <span>Dashboard</span>
                    </Link>
                    <Link href="/explore" className="zf-button-outline w-full sm:w-auto px-8 h-14 flex items-center justify-center gap-3 group border-[#373737] hover:border-[#00FF66]/50">
                        <Search className="w-5 h-5 group-hover:scale-110 transition-transform" /> 
                        <span>Explore Hub</span>
                        <ChevronRight className="w-4 h-4 ml-1 opacity-50 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </div>
    )
}
