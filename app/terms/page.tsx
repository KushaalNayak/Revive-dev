import { FileText } from "lucide-react"

export default function TermsPage() {
    return (
        <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6 pt-24">
            <div className="w-16 h-16 bg-[#111111] border border-[#373737] rounded-2xl flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(0,255,102,0.05)]">
                <FileText className="w-8 h-8 text-[#00FF66]" />
            </div>
            <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white mb-6">Terms of Service</h1>
            <p className="text-[#B9B9B9] text-lg max-w-2xl leading-relaxed">
                By using ReviveDev, you agree to follow our community guidelines. You must not use this platform to spam project owners or attempt hostile takeovers of actively maintained projects.
            </p>
        </div>
    )
}
