"use client"

import { useState } from "react"
import { CheckSquare, Square } from "lucide-react"

interface RevivalChecklistProps {
    items: string[]
}

export function RevivalChecklist({ items }: RevivalChecklistProps) {
    const [checkedItems, setCheckedItems] = useState<Record<number, boolean>>({})

    const toggleItem = (index: number) => {
        setCheckedItems(prev => ({
            ...prev,
            [index]: !prev[index]
        }))
    }

    if (!items || items.length === 0) {
        return <p className="text-sm text-white/40">No recommendations available.</p>
    }

    return (
        <div className="space-y-3">
            {items.map((item, index) => {
                const isChecked = !!checkedItems[index]
                return (
                    <button
                        key={index}
                        onClick={() => toggleItem(index)}
                        className={`w-full flex items-start gap-4 p-4 rounded-xl border text-left transition-all ${
                            isChecked 
                            ? "bg-emerald-500/5 border-emerald-500/30 text-white/50" 
                            : "bg-[#111111] border-[#222222] hover:border-[#00FF66]/50 text-white"
                        }`}
                    >
                        <div className={`mt-0.5 shrink-0 transition-colors ${isChecked ? "text-emerald-500" : "text-white/40"}`}>
                            {isChecked ? <CheckSquare className="w-5 h-5" /> : <Square className="w-5 h-5" />}
                        </div>
                        <span className={`text-sm leading-relaxed ${isChecked ? "line-through opacity-60" : ""}`}>
                            {item}
                        </span>
                    </button>
                )
            })}
        </div>
    )
}
