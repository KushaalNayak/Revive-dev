"use client"

import { useState } from "react"
import { GithubRepo } from "@/backend/actions/github"
import { createRevivalRecord, updateRevivalForkUrl } from "@/backend/actions/revival"
import { Button } from "@/frontend/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/frontend/components/ui/dialog"
import { Plus, GitFork, ArrowUpRight, Mail } from "lucide-react"
import { toast } from "sonner"

export function InitiateRevivalModal({ repo }: { repo: GithubRepo }) {
    const [isOpen, setIsOpen] = useState(false)
    const [step, setStep] = useState<"options" | "forkUrl" | "roadmap">("options")
    const [isLoading, setIsLoading] = useState(false)
    const [forkUrl, setForkUrl] = useState("")
    const [roadmap, setRoadmap] = useState<string[]>([])

    const handleSelectOption = async (option: "contribute" | "fork" | "request") => {
        setIsLoading(true)
        try {
            await createRevivalRecord({ repoFullName: repo.full_name, revivalType: option })
            
            // Trigger AI roadmap creation
            try {
                const res = await fetch('/api/ai/roadmap', {
                    method: 'POST',
                    body: JSON.stringify({ repoFullName: repo.full_name, description: repo.description, language: repo.language })
                })
                const data = await res.json()
                if (data.roadmap) {
                    setRoadmap(data.roadmap)
                }
            } catch (e) {
                console.error("AI Roadmap failed", e)
            }
            
            if (option === "contribute") {
                toast.success("Revival initiated. Redirecting to repository...")
                window.open(repo.html_url, "_blank")
                setStep("roadmap")
            } else if (option === "fork") {
                toast.success("Revival initiated. Please create your fork.")
                window.open(`https://github.com/${repo.full_name}/fork`, "_blank")
                setStep("forkUrl")
            } else if (option === "request") {
                toast.success("Request sent to maintainer.")
                setStep("roadmap")
            }
        } catch (err: unknown) {
            const error = err as {message?: string}
            toast.error(error.message || "Failed to initiate revival.")
        } finally {
            setIsLoading(false)
        }
    }

    const handleSaveForkUrl = async () => {
        if (!forkUrl.includes("github.com")) {
            toast.error("Please enter a valid GitHub repository URL.")
            return
        }

        setIsLoading(true)
        try {
            await updateRevivalForkUrl(repo.full_name, forkUrl)
            toast.success("Fork tracked successfully!")
            setStep("roadmap")
        } catch (err: unknown) {
            const error = err as {message?: string}
            toast.error(error.message || "Failed to save fork URL.")
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <Button className="zf-button w-full h-14 flex items-center justify-center gap-3 text-[14px] font-bold uppercase tracking-widest border-none cursor-pointer">
                    <Plus className="w-5 h-5" /> Initiate Revival
                </Button>
            </DialogTrigger>
            <DialogContent className="zf-card bg-[#0A0A0A] border-[#2A2A2A] text-white p-6 sm:p-10 max-w-xl">
                <DialogHeader className="mb-6">
                    <DialogTitle className="text-2xl font-black uppercase tracking-wider mb-2">Initiate Revival</DialogTitle>
                    <DialogDescription className="text-[#888888] font-medium">
                        How would you like to revive <span className="text-white">{repo.full_name}</span>?
                    </DialogDescription>
                </DialogHeader>

                {step === "options" && (
                    <div className="flex flex-col gap-4">
                        <button 
                            onClick={() => handleSelectOption("fork")}
                            className="bg-[#111111] hover:bg-[#1A1A1A] border border-[#00FF66]/30 hover:border-[#00FF66] transition-all p-5 rounded-xl text-left flex items-start gap-4"
                            disabled={isLoading}
                        >
                            <div className="mt-1 p-2 bg-[#00FF66]/10 rounded-lg text-[#00FF66]">
                                <GitFork className="w-5 h-5" />
                            </div>
                            <div>
                                <h4 className="font-bold text-[#00FF66] text-lg mb-1">Fork & Revive Independently</h4>
                                <p className="text-sm text-[#888888]">Create your own version and continue development independently.</p>
                            </div>
                        </button>

                        <button 
                            onClick={() => handleSelectOption("contribute")}
                            className="bg-[#111111] hover:bg-[#1A1A1A] border border-[#2A2A2A] hover:border-[#444] transition-all p-5 rounded-xl text-left flex items-start gap-4"
                            disabled={isLoading}
                        >
                            <div className="mt-1 p-2 bg-white/5 rounded-lg text-[#B9B9B9]">
                                <ArrowUpRight className="w-5 h-5" />
                            </div>
                            <div>
                                <h4 className="font-bold text-white text-lg mb-1">Contribute to Original Repository</h4>
                                <p className="text-sm text-[#888888]">Work directly on the original project by submitting pull requests.</p>
                            </div>
                        </button>

                        <button 
                            onClick={() => handleSelectOption("request")}
                            className="bg-[#111111] hover:bg-[#1A1A1A] border border-[#2A2A2A] hover:border-[#444] transition-all p-5 rounded-xl text-left flex items-start gap-4"
                            disabled={isLoading}
                        >
                            <div className="mt-1 p-2 bg-blue-500/10 rounded-lg text-blue-500">
                                <Mail className="w-5 h-5" />
                            </div>
                            <div>
                                <h4 className="font-bold text-white text-lg mb-1">Request Maintainer Access</h4>
                                <p className="text-sm text-[#888888]">Contact the original owner to collaborate or take over maintenance.</p>
                            </div>
                        </button>
                    </div>
                )}

                {step === "forkUrl" && (
                    <div className="flex flex-col gap-6">
                        <div className="bg-[#111111] p-5 rounded-xl border border-[#2A2A2A]">
                            <h4 className="font-bold text-white text-lg mb-2">Track your Fork</h4>
                            <p className="text-sm text-[#888888] mb-4">Paste the URL of your newly created fork below so we can track the revival progress.</p>
                            <input 
                                type="url" 
                                placeholder="https://github.com/your-username/repo"
                                value={forkUrl}
                                onChange={(e) => setForkUrl(e.target.value)}
                                className="zf-input w-full bg-[#0A0A0A]"
                            />
                        </div>
                        <div className="flex gap-4">
                            <Button 
                                onClick={() => setIsOpen(false)}
                                variant="outline" 
                                className="zf-button-outline w-full"
                            >
                                Cancel
                            </Button>
                            <Button 
                                onClick={handleSaveForkUrl}
                                disabled={isLoading || !forkUrl}
                                className="zf-button w-full bg-[#00FF66] text-black hover:bg-[#00FF66]/80"
                            >
                                {isLoading ? "Saving..." : "Save Fork"}
                            </Button>
                        </div>
                    </div>
                )}

                {step === "roadmap" && (
                    <div className="flex flex-col gap-6">
                        <div className="bg-[#111111] p-6 rounded-xl border border-[#2A2A2A]">
                            <h4 className="font-bold text-[#00FF66] text-xl mb-4 flex items-center gap-2">
                                🔥 Revival in Progress
                            </h4>
                            <p className="text-sm text-[#888888] mb-6">Our AI has generated a suggested roadmap to get you started.</p>
                            
                            <div className="space-y-3">
                                {roadmap.length > 0 ? roadmap.map((item, i) => (
                                    <div key={i} className="flex items-start gap-3 bg-[#0A0A0A] p-4 rounded-lg border-[0.8px] border-[#373737]">
                                        <div className="w-6 h-6 rounded-full bg-[#00FF66]/10 text-[#00FF66] flex items-center justify-center flex-shrink-0 font-bold text-xs">
                                            {i + 1}
                                        </div>
                                        <p className="text-sm text-white leading-relaxed">{item}</p>
                                    </div>
                                )) : (
                                    <div className="flex items-center justify-center p-8 bg-[#0A0A0A] rounded-lg border-[0.8px] border-[#373737]">
                                        <div className="w-5 h-5 rounded-full border-2 border-[#00FF66] border-t-transparent animate-spin"></div>
                                        <span className="text-[#888888] text-sm ml-3">Generating neural roadmap...</span>
                                    </div>
                                )}
                            </div>
                        </div>

                        <Button 
                            onClick={() => setIsOpen(false)}
                            className="zf-button w-full bg-[#00FF66] text-black hover:bg-[#00FF66]/80 h-14"
                        >
                            Finish
                        </Button>
                    </div>
                )}
            </DialogContent>
        </Dialog>
    )
}
