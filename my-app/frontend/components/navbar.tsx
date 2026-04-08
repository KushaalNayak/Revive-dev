    import Link from "next/link"
import { getServerSession } from "next-auth"
import { authOptions } from "@/backend/lib/auth-options"
import { SignInButton, UserNav } from "@/frontend/components/auth-buttons"
import { Search, Rocket, Radar } from "lucide-react"

export async function Navbar() {
    const session = await getServerSession(authOptions)

    return (
        <header className="w-full bg-[#0B0B0B]/80 backdrop-blur-xl border-b-[0.8px] border-[#373737] text-white sticky top-0 z-50">
            <div className="flex h-[72px] items-center px-6 md:px-10 gap-6 max-w-[1400px] mx-auto">
                <Link href="/" className="mr-2 flex items-center gap-3 group">
                    <div className="w-8 h-8 rounded-full bg-[#00FF66] flex items-center justify-center transition-transform group-hover:scale-105">
                         <Rocket className="w-4 h-4 text-[#0D0D0D]" />
                    </div>
                    <span className="font-extrabold text-[20px] tracking-tight hidden sm:block zf-heading">revive<span className="text-[#00FF66]">.dev</span></span>
                </Link>

                <div className="hidden md:flex flex-1 max-w-[320px] ml-6">
                    <form action="/explore" method="GET" className="flex w-full items-center bg-[#171717] border-[0.8px] border-[#373737] rounded-[8px] px-4 py-2.5 focus-within:border-[#00FF66] transition-colors relative">
                        <Search className="w-4 h-4 text-[#B9B9B9] mr-3" />
                        <input name="search" type="text" placeholder="Search projects..." className="bg-transparent border-none outline-none text-white text-[14px] w-full placeholder:text-[#B9B9B9]" />
                    </form>
                </div>

                <nav className="hidden md:flex items-center gap-8 text-[13px] font-bold uppercase tracking-widest ml-4">
                    <Link href="/explore" className="text-[#00FF66] hover:text-[#00FF66]/80 transition-all flex items-center gap-2">
                        <Search className="w-3.5 h-3.5" /> Explore Hub
                    </Link>
                    {session && (
                        <Link href="/dashboard" className="text-[#B9B9B9] hover:text-white transition-all">Dashboard</Link>
                    )}
                </nav>

                <div className="flex flex-1 items-center justify-end space-x-4">
                    {session ? (
                        <UserNav />
                    ) : (
                        <div className="flex items-center gap-4">
                            <SignInButton label="Log in" variant="text" />
                            <SignInButton label="Start Reviving" variant="primary" />
                        </div>
                    )}
                </div>
            </div>
        </header>
    )
}
