"use client"

import { useRouter, useSearchParams, usePathname } from "next/navigation"
import { useCallback, useState } from "react"
import { Search } from "lucide-react"
import { RevivalMode } from "@prisma/client"

export function DashboardFilter() {
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()

    const [search, setSearch] = useState(searchParams.get("search") || "")

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
        router.push(`${pathname}?${createQueryString("search", search)}`)
    }

    const handleFilterChange = (key: string, value: string) => {
        const val = value === "ALL" ? "" : value
        router.push(`${pathname}?${createQueryString(key, val)}`)
    }

    return (
        <div className="flex flex-col gap-6">
            <div className="relative group">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#B9B9B9] group-focus-within:text-[#00FF66] transition-colors" />
                <input
                    placeholder="Search projects..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                    className="zf-input w-full pl-11"
                />
            </div>
            
            <div className="flex flex-col gap-5">
                {[
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
                        key: "revivalMode", label: "Protocol", options: [
                            { v: "ALL", l: "Any Protocol" },
                            ...Object.values(RevivalMode).map(m => ({
                                v: m,
                                l: (m as string).replace(/_/g, " ").toLowerCase()
                            }))
                        ]
                    },
                    {
                        key: "sort", label: "Sort By", options: [
                            { v: "updated", l: "Recently Updated" },
                            { v: "stars", l: "Most Stars" },
                            { v: "created", l: "Recently Created" }
                        ]
                    }
                ].map((filter) => (
                    <div key={filter.key} className="flex flex-col gap-2.5">
                        <label className="text-[12px] font-bold text-[#B9B9B9] uppercase tracking-widest">{filter.label}</label>
                        <select
                            defaultValue={searchParams.get(filter.key) || filter.options[0].v}
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
            {(searchParams.get("search") || searchParams.get("language") || searchParams.get("sort")) && (
                <button
                    onClick={() => router.push(pathname + (searchParams.get("tab") ? `?tab=${searchParams.get("tab")}` : ""))}
                    className="zf-button-outline w-full mt-4 text-[14px]"
                >
                    Clear filters
                </button>
            )}
        </div>
    )
}
