"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { projectSchema, ProjectFormData } from "@/backend/lib/validations"
import { GithubRepo } from "@/backend/actions/github"
import { createProjectListing as createListing } from "@/backend/actions/projects"
import { Button } from "@/frontend/components/ui/button"
import { Form, FormField } from "@/frontend/components/ui/form"
import { ProjectStatus, CompletionStage, AbandonmentReason, RevivalMode, HelpType } from "@prisma/client"
import { toast } from "sonner"
import { useRouter } from "next/navigation"
import { Mail, Terminal, ShieldAlert, Brain } from "lucide-react"

export function ProspectRevivalForm({ 
    repo 
}: { 
    repo: GithubRepo 
}) {
    const router = useRouter()

    const form = useForm<ProjectFormData>({
        resolver: zodResolver(projectSchema),
        defaultValues: {
            repoUrl: repo.html_url,
            repoFullName: repo.full_name,
            status: ProjectStatus.LOOKING_FOR_HELP,
            revivalMode: RevivalMode.OPEN_SOURCE,
            completionStage: CompletionStage.NEARLY_COMPLETE, // Default for external lookups
            abandonmentReason: AbandonmentReason.OTHER,
            helpNeeded: [HelpType.MAINTAINER],
            shortDescription: repo.description || `Revival proposal for ${repo.full_name}`,
            tags: repo.topics?.length ? repo.topics.join(", ") : (repo.language || "revival"),
            language: repo.language || "Other",
            handoffWhat: "PROPOSED_REVIVAL_EXTERNAL_NOMINATION",
            handoffPending: "Awaiting owner response.",
            handoffSetup: "External project.",
        },
    })

    async function onSubmit(data: ProjectFormData) {
        try {
            const res = await createListing(data)
            router.push(`/dashboard/new/success?slug=${res.slug}&type=propose`)
        } catch (error) {
            toast.error(error instanceof Error ? error.message : "Failed to propose revival")
        }
    }

    const onInvalid = (errors: unknown) => {
        console.dir(errors)
        toast.error("Form validation failed. Please check all fields.")
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit, onInvalid)} className="space-y-12 text-left">
                <div className="loki-card p-10 md:p-16 relative overflow-hidden bg-primary/[0.02]">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px] pointer-events-none -mr-32 -mt-32" />
                    
                    <div className="relative space-y-10">
                        <header className="space-y-3">
                            <div className="tech-label text-primary">ENTITY_OVERVIEW</div>
                            <h2 className="text-3xl font-bold text-white uppercase tracking-tighter">Ownership Data</h2>
                        </header>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="flex items-center gap-6 p-6 rounded-2xl bg-white/[0.03] border border-white/5">
                                <div className="w-14 h-14 rounded-full border border-white/10 overflow-hidden shrink-0">
                                   {/* eslint-disable-next-line @next/next/no-img-element */}
                                   <img src={repo.owner?.avatar_url} alt={repo.owner?.login} className="w-full h-full object-cover" />
                                </div>
                                <div className="space-y-1">
                                    <div className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Repository Creator</div>
                                    <div className="text-lg font-bold text-white">@{repo.owner?.login}</div>
                                </div>
                            </div>

                            <div className="flex items-center gap-6 p-6 rounded-2xl bg-white/[0.03] border border-white/5">
                                <div className="w-14 h-14 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div className="space-y-1">
                                    <div className="text-[10px] font-bold text-primary/60 uppercase tracking-widest">Contact Protocol</div>
                                    <div className="text-sm font-bold text-white/80">{repo.owner?.login}@users.noreply.github.com</div>
                                </div>
                            </div>
                        </div>

                        <div className="p-8 rounded-2xl bg-black/40 border border-white/5 font-mono">
                            <div className="flex items-center gap-3 text-primary/60 mb-4">
                                <Terminal className="w-4 h-4" />
                                <span className="text-[10px] uppercase font-bold tracking-widest">Git Clone Reference</span>
                            </div>
                            <code className="text-sm text-[#00FF66] break-all">
                                git clone {repo.clone_url}
                            </code>
                        </div>
                    </div>
                </div>

                <div className="loki-card p-10 border-amber-500/20 bg-amber-500/5 relative overflow-hidden">
                     <div className="flex gap-6">
                        <ShieldAlert className="w-8 h-8 text-amber-500 shrink-0 mt-1" />
                        <div className="space-y-4">
                            <h3 className="text-lg font-bold text-white uppercase tracking-tight">Legal & Delivery Disclaimer</h3>
                            <p className="text-sm text-white/60 leading-relaxed">
                                Upon initiation, ReviveDev will broadcast an automated revival request to the repository owner. 
                                Please note: <strong>Permissions for sensitive environment variables or proprietary assets rest entirely with the original owner.</strong> 
                                <br/><br/>
                                Additionally, we cannot guarantee prompt responses as the reachability of the owner depends on their active GitHub account status and current notification settings. 
                                We also do not know if the user email still exists or not.
                            </p>
                        </div>
                     </div>
                </div>

                {/* Hidden Inputs for Form Submission */}
                <div className="hidden">
                     <FormField control={form.control} name="repoUrl" render={({ field }) => ( <input {...field} /> )} />
                     <FormField control={form.control} name="repoFullName" render={({ field }) => ( <input {...field} /> )} />
                     <FormField control={form.control} name="shortDescription" render={({ field }) => ( <input { ...field } /> )} />
                </div>

                <div className="flex justify-end pt-10">
                    <Button type="submit" disabled={form.formState.isSubmitting} className="zf-button px-10 h-14">
                        {form.formState.isSubmitting ? "Initiating..." : (
                            <span className="flex items-center gap-3">
                                Propose Revival <Brain className="w-5 h-5" />
                            </span>
                        )}
                    </Button>
                </div>
            </form>
        </Form>
    )
}
