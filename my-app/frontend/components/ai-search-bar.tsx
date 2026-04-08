"use client"

import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Sparkles, Loader2, ArrowRight } from "lucide-react"
import { generateGithubQuery } from "@/backend/actions/ai-matchmaker"
import { cn } from "@/frontend/lib/utils"

export function AiSearchBar() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const [prompt, setPrompt] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const handleAiSearch = async () => {
        if (!prompt.trim() || isLoading) return
        
        setIsLoading(true)
        try {
            const query = await generateGithubQuery(prompt)
            const params = new URLSearchParams(searchParams.toString())
            params.set("search", query)
            params.set("tab", "global") // Force global tab for AI search
            router.push(`/explore?${params.toString()}`)
        } catch (error) {
            console.error("AI Search failed:", error)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="zf-card p-1.5 mb-10 bg-[#171717]/50 border-[#00FF66]/20 group focus-within:border-[#00FF66]/50 transition-all shadow-[0_0_50px_rgba(0,255,102,0.05)]">
            <div className="flex items-center gap-4 px-4 py-2">
                <div className="w-10 h-10 rounded-xl bg-[#00FF66]/10 flex items-center justify-center shrink-0">
                    <Sparkles className={cn("w-5 h-5 text-[#00FF66]", isLoading && "animate-pulse")} />
                </div>
                
                <input 
                    type="text"
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleAiSearch()}
                    placeholder="I'm looking for a neglected Python CLI with 1k stars..."
                    className="flex-1 bg-transparent border-none outline-none text-white text-[16px] placeholder:text-[#555] font-medium"
                />

                <button 
                    onClick={handleAiSearch}
                    disabled={isLoading}
                    className="zf-button-outline px-6 py-2.5 rounded-xl text-[13px] flex items-center gap-2 group/btn disabled:opacity-50"
                >
                    {isLoading ? (
                        <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                        <>
                            AI SCAN <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        </>
                    )}
                </button>
            </div>
        </div>
    )
}
