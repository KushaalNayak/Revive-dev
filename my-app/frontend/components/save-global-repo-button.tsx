"use client"

import { useState } from "react"
import { Heart } from "lucide-react"
import { toggleSaveGlobalRepo } from "@/backend/actions/saved"
import { cn } from "@/frontend/lib/utils"
import { toast } from "sonner"

export function SaveGlobalRepoButton({ repoFullName, initialIsSaved }: { repoFullName: string, initialIsSaved: boolean }) {
    const [isSaved, setIsSaved] = useState(initialIsSaved)

    const handleToggle = async (e: React.MouseEvent) => {
        e.preventDefault()
        e.stopPropagation()
        
        const nextState = !isSaved
        setIsSaved(nextState)
        
        try {
            await toggleSaveGlobalRepo(repoFullName)
            toast.success(nextState ? "Added to your interests" : "Removed from interests")
        } catch (error) {
            setIsSaved(isSaved) // Rollback
            toast.error("Failed to update interest status")
        }
    }

    return (
        <button 
            onClick={handleToggle}
            className="absolute top-6 right-8 z-20 focus:outline-none group/heart p-2 rounded-full hover:bg-red-500/10 transition-all"
        >
            <Heart 
                className={cn(
                    "w-5 h-5 transition-all duration-300",
                    isSaved ? "text-red-500 fill-red-500 scale-110 drop-shadow-[0_0_8px_rgba(239,68,68,0.5)]" : "text-[#373737] group-hover/heart:text-red-500/60"
                )} 
            />
        </button>
    )
}
