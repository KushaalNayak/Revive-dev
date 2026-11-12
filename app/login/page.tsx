"use client"

import { Suspense } from "react"
import { Github, AlertCircle } from "lucide-react"
import { signIn } from "next-auth/react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import Image from "next/image"

function LoginErrorBanner() {
    const searchParams = useSearchParams()
    const error = searchParams.get("error")

    if (!error) return null

    let message = `An unexpected error occurred (${error}).`
    if (error === "OAuthCreateAccount") {
        message = "Could not create account in database. A user might already exist with this username or email."
    } else if (error === "OAuthAccountNotLinked") {
        message = "This email is already associated with another account. Please sign in using that account."
    } else if (error === "AccessDenied") {
        message = "You denied the permissions request on GitHub. We need permission to proceed."
    } else if (error === "OAuthCallback" || error === "Callback") {
        message = "GitHub authentication callback failed. Please check your credentials and try again."
    } else if (error === "OAuthSignin") {
        message = "Error initializing sign-in with GitHub."
    }

    return (
        <div className="w-full mb-6 p-3.5 rounded-[8px] bg-red-500/10 border border-red-500/20 text-red-400 text-xs text-left leading-relaxed">
            <strong className="font-bold">Login Error:</strong> <span>{message}</span>
        </div>
    )
}

export default function LoginPage() {
    return (
        <div className="fixed inset-0 w-full h-full flex bg-[#000000] text-white z-[100] overflow-hidden font-sans">
            
            {/* Left side: Logo visually floating in space */}
            <div className="hidden lg:flex w-1/2 relative bg-[#000000] items-center justify-center p-12 lg:border-r-[0.8px] lg:border-[#1F1F1F]">
                {/* Subtle depth glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[rgba(0,255,102,0.05)] blur-[120px] rounded-full pointer-events-none" />

                {/* The Logo */}
                <div className="relative w-full max-w-[550px] aspect-square z-10 flex items-center justify-center">
                    <Image
                        src="/logo.png"
                        alt="Revive.dev Logo"
                        fill
                        className="object-contain drop-shadow-2xl"
                        priority
                    />
                </div>
            </div>

            {/* Right side: Pure black background with a DARK floating login card */}
            <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-6 sm:p-12 relative bg-[#000000]">
                
                <div className="w-full max-w-[420px] flex flex-col gap-6">
                    {/* Main Dark Card */}
                    <div className="w-full bg-[#0A0A0A] border-[0.8px] border-[#2A2A2A] p-10 rounded-[16px] shadow-2xl relative z-10 transition-all flex flex-col items-center text-center">
                        
                        <div className="w-16 h-16 bg-[#111111] border-[0.8px] border-[#2A2A2A] rounded-full flex items-center justify-center mb-6">
                            <Github className="w-8 h-8 text-white" />
                        </div>
                        
                        <h2 className="text-[22px] font-black uppercase tracking-wider text-white mb-3" style={{ fontFamily: 'Geologica, sans-serif' }}>
                            Welcome to Revive
                        </h2>
                        
                        <p className="text-[12px] font-medium text-[#888888] mb-4 leading-relaxed max-w-[300px]">
                            Login with GitHub and grant permission to access your public repos for revive.dev.
                        </p>

                        <Suspense fallback={null}>
                            <LoginErrorBanner />
                        </Suspense>
                        
                        {/* Primary Login Button */}
                        <button
                            onClick={() => signIn("github", { callbackUrl: "/dashboard" })}
                            className="w-full h-12 flex items-center justify-center gap-3 rounded-[8px] bg-[#00FF66] hover:bg-[#00e65c] text-black font-bold text-[13px] uppercase tracking-wider transition-all transform active:scale-[0.98] shadow-[0_4px_20px_rgba(0,255,102,0.15)] cursor-pointer"
                        >
                            <Github className="w-5 h-5" />
                            Login with GitHub
                        </button>
                    </div>

                    {/* Support Pill below the card */}
                    <div className="w-full bg-[#0A0A0A] border-[0.8px] border-[#2A2A2A] rounded-[12px] py-4 px-6 flex items-center justify-center shadow-lg transition-colors">
                        <p className="text-[11px] font-bold text-[#666666] flex items-center gap-2 uppercase tracking-wide">
                            <AlertCircle className="w-4 h-4" /> Having trouble? 
                            <Link href="mailto:admin.revivedev@gmail.com" className="text-[#00FF66] hover:text-[#00e65c] transition-colors ml-1 uppercase">Contact Support</Link>
                        </p>
                    </div>
                </div>

                {/* Bottom Footer Links */}
                <div className="absolute bottom-10 left-0 w-full flex justify-center gap-12">
                    <Link href="/terms" className="text-[9px] font-bold text-[#555] hover:text-[#00FF66] uppercase tracking-[0.2em] transition-colors">
                        Terms of Service
                    </Link>
                    <Link href="/privacy" className="text-[9px] font-bold text-[#555] hover:text-[#00FF66] uppercase tracking-[0.2em] transition-colors">
                        Developer Privacy
                    </Link>
                </div>
            </div>
            
            {/* Hide main navbar */}
            <style jsx global>{`
                header {
                    display: none !important;
                }
                body, html {
                    overflow: hidden !important;
                }
            `}</style>
        </div>
    )
}
