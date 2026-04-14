import Link from "next/link"
import { Search, MoveLeft } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0B0B0B] flex flex-col items-center justify-center relative overflow-hidden px-6">
        <div className="max-w-2xl text-center z-10 space-y-8">
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-red-500/20 bg-red-500/5 text-red-500 text-[10px] uppercase font-bold tracking-[0.2em]">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                404 Protocol Failure
            </div>
            
            <h1 className="text-7xl md:text-9xl font-extrabold text-white tracking-tighter zf-heading italic">
                LOST <span className="text-primary">NODE</span>
            </h1>

            <p className="text-[#B9B9B9] text-lg font-medium leading-relaxed max-w-lg mx-auto">
                The repository or project you are searching for has been archived, deleted, or never existed in this timeline.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
                <Link href="/" className="zf-button-outline px-10 h-14 flex items-center gap-3 group">
                    <MoveLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Base
                </Link>
                <Link href="/explore" className="zf-button px-10 h-14 flex items-center gap-3 group">
                    <Search className="w-4 h-4" /> Discovery Hub
                </Link>
            </div>
        </div>

        {/* Backdrop decorations */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-500/5 blur-[120px] pointer-events-none -z-10" />
        <div className="absolute bottom-0 w-full h-[50vh] bg-gradient-to-t from-background to-transparent -z-10 pointer-events-none" />
    </div>
  )
}
