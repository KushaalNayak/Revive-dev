import { Handshake } from "lucide-react"

export default function PartnersPage() {
    return (
        <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6 pt-24">
            <div className="w-16 h-16 bg-[#111111] border border-[#373737] rounded-2xl flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(0,255,102,0.05)]">
                <Handshake className="w-8 h-8 text-[#00FF66]" />
            </div>
            <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white mb-6">Partner Program</h1>
            <p className="text-[#B9B9B9] text-lg max-w-2xl leading-relaxed">
                Join forces with ReviveDev. We partner with open-source foundations, corporate sponsors, and package registries to create a sustainable ecosystem for software inheritance.
            </p>
        </div>
    )
}
