import Link from "next/link"
import { Rocket, Github, Twitter, Linkedin, Heart } from "lucide-react"

export function Footer() {
    return (
        <footer className="w-full bg-[#0B0B0B] border-t-[0.8px] border-[#373737] pt-24 pb-12 relative overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
                    <div className="space-y-8 col-span-1 lg:col-span-1">
                        <Link href="/" className="flex items-center gap-3 group">
                            <div className="w-10 h-10 rounded-full bg-[#00FF66] flex items-center justify-center transition-transform group-hover:rotate-12">
                                 <Rocket className="w-5 h-5 text-[#0D0D0D]" />
                            </div>
                            <span className="font-extrabold text-[24px] tracking-tight zf-heading text-white">revive<span className="text-[#00FF66]">.dev</span></span>
                        </Link>
                        <p className="text-[#B9B9B9] text-[15px] leading-relaxed max-w-[280px]">
                            Establishing the digital inheritance protocol for abandoned open source code. 
                        </p>
                        <div className="flex items-center gap-5">
                            <a href="#" className="p-2.5 rounded-full border border-[#373737] text-[#666] hover:text-[#00FF66] hover:border-[#00FF66]/30 transition-all">
                                <Github className="w-4 h-4" />
                            </a>
                            <a href="#" className="p-2.5 rounded-full border border-[#373737] text-[#666] hover:text-[#00FF66] hover:border-[#00FF66]/30 transition-all">
                                <Twitter className="w-4 h-4" />
                            </a>
                            <a href="#" className="p-2.5 rounded-full border border-[#373737] text-[#666] hover:text-[#00FF66] hover:border-[#00FF66]/30 transition-all">
                                <Linkedin className="w-4 h-4" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-bold uppercase tracking-[0.2em] text-[11px] mb-8">Ecosystem</h4>
                        <ul className="space-y-4">
                            <li><Link href="/explore" className="text-[#666] hover:text-white transition-colors text-[14px] font-medium">Discovery Hub</Link></li>
                            <li><Link href="/explore?tab=global" className="text-[#666] hover:text-white transition-colors text-[14px] font-medium">Global Scanner</Link></li>
                            <li><Link href="/dashboard/new" className="text-[#666] hover:text-white transition-colors text-[14px] font-medium">List a Project</Link></li>
                            <li><Link href="#" className="text-[#666] hover:text-white transition-colors text-[14px] font-medium">API Documentation</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold uppercase tracking-[0.2em] text-[11px] mb-8">Platform</h4>
                        <ul className="space-y-4">
                            <li><Link href="#" className="text-[#666] hover:text-white transition-colors text-[14px] font-medium">Case Studies</Link></li>
                            <li><Link href="#" className="text-[#666] hover:text-white transition-colors text-[14px] font-medium">Community Roadmap</Link></li>
                            <li><Link href="#" className="text-[#666] hover:text-white transition-colors text-[14px] font-medium">Security Protocol</Link></li>
                            <li><Link href="#" className="text-[#666] hover:text-white transition-colors text-[14px] font-medium">Partner Program</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold uppercase tracking-[0.2em] text-[11px] mb-8">Status</h4>
                        <div className="p-6 rounded-[20px] bg-white/[0.02] border border-[#373737] space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-[#00FF66] animate-pulse" />
                                <span className="text-[12px] font-bold text-white tracking-wide uppercase">AI Engine Online</span>
                            </div>
                            <p className="text-[12px] text-[#666] leading-relaxed">
                                Our neural diagnostics are monitoring 1.2M+ abandoned repos.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="pt-12 border-t border-[#373737] flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-[#666] text-[12px] font-medium uppercase tracking-widest flex items-center gap-2">
                        Built with <Heart className="w-3 h-3 text-red-500 fill-current" /> by ReviveDev
                    </p>
                    <div className="flex items-center gap-8">
                        <Link href="#" className="text-[#333] hover:text-[#666] transition-colors text-[11px] font-bold uppercase tracking-widest">Privacy</Link>
                        <Link href="#" className="text-[#333] hover:text-[#666] transition-colors text-[11px] font-bold uppercase tracking-widest">Terms</Link>
                    </div>
                </div>
            </div>
            
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-primary/5 blur-[120px] pointer-events-none -mb-32" />
        </footer>
    )
}
