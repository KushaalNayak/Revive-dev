import { Briefcase } from "lucide-react"

export default function CaseStudiesPage() {
    return (
        <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6 pt-24">
            <div className="w-16 h-16 bg-[#111111] border border-[#373737] rounded-2xl flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(0,255,102,0.05)]">
                <Briefcase className="w-8 h-8 text-[#00FF66]" />
            </div>
            <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white mb-6">Case Studies</h1>
            <p className="text-[#B9B9B9] text-lg max-w-2xl leading-relaxed">
                Explore how the ReviveDev protocol has successfully transferred ownership of neglected open-source tools to active maintainers. Read our success stories on how critical libraries were saved from decay and brought back to life.
            </p>
        </div>
    )
}
