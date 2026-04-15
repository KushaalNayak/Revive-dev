"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/frontend/lib/utils"

export function Pagination({ totalItems, pageSize, currentPage }: { totalItems: number, pageSize: number, currentPage: number }) {
    const router = useRouter()
    const searchParams = useSearchParams()
    
    // GitHub API limit for search is 1,000 results. 
    // If pageSize is 9, that's roughly 111 pages.
    const maxPages = 111 
    const totalPages = Math.min(Math.ceil(totalItems / pageSize), maxPages)
    
    if (totalPages <= 1) return null

    const createPageURL = (pageNumber: number | string) => {
        const params = new URLSearchParams(searchParams.toString())
        params.set('page', pageNumber.toString())
        return `/explore?${params.toString()}`
    }

    const pages = []
    const showPages = 5
    let startPage = Math.max(1, currentPage - 2)
    const endPage = Math.min(totalPages, startPage + showPages - 1)
    
    if (endPage - startPage < showPages - 1) {
        startPage = Math.max(1, endPage - showPages + 1)
    }

    for (let i = startPage; i <= endPage; i++) {
        pages.push(i)
    }

    return (
        <div className="flex items-center justify-center gap-2 mt-16">
            <button
                onClick={() => router.push(createPageURL(currentPage - 1))}
                disabled={currentPage <= 1}
                className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/[0.02] border border-white/10 text-white hover:border-[#00FF66] hover:text-[#00FF66] transition-all disabled:opacity-30 disabled:hover:border-white/10 disabled:hover:text-white"
            >
                <ChevronLeft className="w-5 h-5" />
            </button>

            {startPage > 1 && (
                <>
                    <button onClick={() => router.push(createPageURL(1))} className="min-w-12 h-12 px-3 rounded-xl bg-white/[0.02] border border-white/10 text-white hover:border-[#00FF66] transition-all">1</button>
                    {startPage > 2 && <span className="text-[#666]">...</span>}
                </>
            )}

            {pages.map((page) => (
                <button
                    key={page}
                    onClick={() => router.push(createPageURL(page))}
                    className={cn(
                        "min-w-12 h-12 px-3 rounded-xl text-[14px] font-bold transition-all",
                        currentPage === page 
                            ? "bg-[#00FF66] text-black shadow-[0_0_20px_rgba(0,255,102,0.3)]" 
                            : "bg-white/[0.02] border border-white/10 text-[#666] hover:border-[#00FF66] hover:text-[#00FF66]"
                    )}
                >
                    {page}
                </button>
            ))}

            {endPage < totalPages && (
                <>
                    {endPage < totalPages - 1 && <span className="text-[#666]">...</span>}
                    <button onClick={() => router.push(createPageURL(totalPages))} className="min-w-12 h-12 px-3 rounded-xl bg-white/[0.02] border border-white/10 text-white hover:border-[#00FF66] transition-all">{totalPages}</button>
                </>
            )}

            <button
                onClick={() => router.push(createPageURL(currentPage + 1))}
                disabled={currentPage >= totalPages}
                className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/[0.02] border border-white/10 text-white hover:border-[#00FF66] hover:text-[#00FF66] transition-all disabled:opacity-30 disabled:hover:border-white/10 disabled:hover:text-white"
            >
                <ChevronRight className="w-5 h-5" />
            </button>
        </div>
    )
}
