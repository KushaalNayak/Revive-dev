"use client"

import { signIn, signOut, useSession } from "next-auth/react"
import { Button } from "@/frontend/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/frontend/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/frontend/components/ui/avatar"
import Link from "next/link"
import { useRouter } from "next/navigation"

export function SignInButton({ label = "Sign in", variant = "primary" }: { label?: string, variant?: "primary" | "text" }) {
    const router = useRouter()

    if (variant === "text") {
        return (
            <button 
                onClick={() => router.push("/login")} 
                className="text-[15px] font-semibold text-[#B9B9B9] hover:text-white transition-colors"
            >
                {label}
            </button>
        )
    }

    return (
        <Button 
            onClick={() => router.push("/login")} 
            className="zf-button text-[14px]"
        >
            {label}
        </Button>
    )
}

export function UserNav() {
    const { data: session } = useSession()

    if (!session?.user) return null

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-10 w-10 p-0 rounded-full hover:bg-transparent border-[0.8px] border-[#373737] focus-visible:ring-2 focus-visible:ring-[#00FF66] transition-all outline-none">
                    <Avatar className="h-full w-full">
                        <AvatarImage src={session.user.image || ""} alt={session.user.name || ""} />
                        <AvatarFallback className="bg-[#171717] text-white">
                            {session.user.name?.[0]}
                        </AvatarFallback>
                    </Avatar>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 zf-card p-2 text-white outline-none mt-2 overflow-hidden right-0" align="end" forceMount>
                <div className="px-3 py-3 border-b-[0.8px] border-[#373737] mb-1">
                    <p className="text-[11px] text-[#B9B9B9] mb-1 font-bold uppercase tracking-wider">Signed in as</p>
                    <p className="text-[14px] font-semibold truncate text-white">
                        {session.user.name || session.user.email}
                    </p>
                </div>
                
                <div className="flex flex-col gap-1 py-1">
                    <DropdownMenuItem asChild className="cursor-pointer focus:bg-[#171717] hover:bg-[#171717] focus:text-[#00FF66] px-3 py-2.5 transition-colors rounded-[8px] border-none outline-none mx-1">
                        <Link href="/dashboard/profile" className="w-full text-[14px] font-medium">Profile</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild className="cursor-pointer focus:bg-[#171717] hover:bg-[#171717] focus:text-[#00FF66] px-3 py-2.5 transition-colors rounded-[8px] border-none outline-none mx-1">
                        <Link href="/dashboard" className="w-full text-[14px] font-medium">Dashboard</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild className="cursor-pointer focus:bg-[#171717] hover:bg-[#171717] focus:text-[#00FF66] px-3 py-2.5 transition-colors rounded-[8px] border-none outline-none mx-1">
                        <Link href="/dashboard/new" className="w-full text-[14px] font-medium">List New Project</Link>
                    </DropdownMenuItem>
                    
                    <div className="h-[0.8px] bg-[#373737] my-1 mx-1" />
                    
                    <DropdownMenuItem
                        onClick={() => signOut()}
                        className="cursor-pointer focus:bg-red-500/10 hover:bg-red-500/10 text-red-500 focus:text-red-400 px-3 py-2.5 transition-colors rounded-[8px] border-none outline-none mx-1 text-[14px] font-medium"
                    >
                        Sign out
                    </DropdownMenuItem>
                </div>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
