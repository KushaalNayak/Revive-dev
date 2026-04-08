"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { useCallback, useState } from "react"
import { ProjectStatus, RevivalMode } from "@prisma/client"
import { Search, X } from "lucide-react"

export function ProjectsFilter() {
    const router = useRouter()
    const searchParams = useSearchParams()

    const [search, setSearch] = useState(searchParams.get("search") || "")
    
    const filters = [
        {
            key: "revivalMode", label: "Protocol", options: [
                { v: "ALL", l: "Any Protocol" },
                ...Object.values(RevivalMode).map(m => ({
                    v: m,
                    l: (m as string).replace(/_/g, " ").toLowerCase().split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
                }))
            ]
        },
        {
            key: "status", label: "Status", options: [
                { v: "ALL", l: "All statuses" },
                ...Object.values(ProjectStatus).map(s => ({ 
                    v: s, 
                    l: (s as string).split('_').map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(' ')
                }))
            ]
        },
        {
            key: "language", label: "Language", options: [
                { v: "ALL", l: "Any language" },
                { v: "JavaScript", l: "JavaScript" },
                { v: "TypeScript", l: "TypeScript" },
                { v: "Python", l: "Python" },
                { v: "Rust", l: "Rust" },
                { v: "Go", l: "Go" },
                { v: "Java", l: "Java" },
                { v: "C++", l: "C++" },
                { v: "C#", l: "C#" },
                { v: "PHP", l: "PHP" },
                { v: "Ruby", l: "Ruby" }
            ]
        },
        {
            key: "difficulty", label: "Difficulty", options: [
                { v: "ALL", l: "Any difficulty" },
                { v: "EASY", l: "Easy" },
                { v: "MEDIUM", l: "Medium" },
                { v: "HARD", l: "Hard" }
            ]
        },
        {
            key: "minStars", label: "Stars", options: [
                { v: "ALL", l: "Any amount" },
                { v: "100", l: "100+ stars" },
                { v: "500", l: "500+ stars" },
                { v: "1000", l: "1,000+ stars" },
                { v: "5000", l: "5,000+ stars" }
            ]
        }
    ]

    // Update URL function
    const createQueryString = useCallback(
        (name: string, value: string) => {
            const params = new URLSearchParams(searchParams.toString())
            if (value) {
                params.set(name, value)
            } else {
                params.delete(name)
            }
            return params.toString()
        },
        [searchParams]
    )

    const handleSearch = () => {
        router.push(`/explore?${createQueryString("search", search)}`)
    }

    const handleFilterChange = (key: string, value: string) => {
        const val = value === "ALL" ? "" : value
        router.push(`/explore?${createQueryString(key, val)}`)
    }

    return (
        <div className="flex flex-col gap-6">
            <div className="relative group">
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-[#B9B9B9] group-focus-within:text-[#00FF66] transition-colors" />
                <input
                    placeholder="Search repositories..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                    className="zf-input w-full pl-16 text-[15px]"
                />
            </div>
            
            <div className="flex flex-col gap-5">
                {filters.map((filter) => (
                    <div key={filter.key} className="flex flex-col gap-2.5">
                        <label className="text-[12px] font-bold text-[#B9B9B9] uppercase tracking-widest">{filter.label}</label>
                        <select
                            defaultValue={searchParams.get(filter.key) || "ALL"}
                            onChange={(e) => handleFilterChange(filter.key, e.target.value)}
                            className="zf-input w-full appearance-none bg-[#0B0B0B] text-[14px] cursor-pointer"
                        >
                            {filter.options.map(opt => (
                                <option key={opt.v} value={opt.v} className="bg-[#171717]">{opt.l}</option>
                            ))}
                        </select>
                    </div>
                ))}
            </div>
            
            {/* Reset */}
            {(searchParams.toString() !== "") && (
                <button
                    onClick={() => router.push("/explore")}
                    className="zf-button-outline w-full mt-4 text-[14px]"
                >
                    Clear filters
                </button>
            )}
        </div>
    )
}
