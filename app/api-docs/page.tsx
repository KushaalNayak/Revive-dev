import { Terminal } from "lucide-react"

export default function ApiDocsPage() {
    return (
        <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6 pt-24">
            <div className="w-16 h-16 bg-[#111111] border border-[#373737] rounded-2xl flex items-center justify-center mb-8">
                <Terminal className="w-8 h-8 text-[#00FF66]" />
            </div>
            <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white mb-6">API Documentation</h1>
            <p className="text-[#B9B9B9] text-lg max-w-2xl leading-relaxed mb-10">
                Integrate the ReviveDev protocol directly into your tooling. Our REST API allows you to scan for abandoned repositories, trigger revival requests, and verify maintainer handovers programmatically.
            </p>
            <div className="p-4 bg-[#111111] border border-[#373737] rounded-xl text-left max-w-lg w-full shadow-[0_0_30px_rgba(0,255,102,0.05)]">
                <p className="text-[#00FF66] font-mono text-[13px] font-bold">GET /api/v1/projects</p>
                <p className="text-[#666] text-[11px] mt-2 font-mono uppercase tracking-widest">Coming soon: Full Swagger documentation</p>
            </div>
        </div>
    )
}
