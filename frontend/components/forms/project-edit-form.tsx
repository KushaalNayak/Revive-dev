"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { projectSchema, ProjectFormData } from "@/backend/lib/validations"
import { updateProjectListing, deleteProject } from "@/backend/actions/projects"
import { Button } from "@/frontend/components/ui/button"
import { Input } from "@/frontend/components/ui/input"
import { Textarea } from "@/frontend/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/frontend/components/ui/select"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/frontend/components/ui/form"
import { ProjectStatus, CompletionStage, AbandonmentReason, HelpType, Project, RevivalMode } from "@prisma/client"
import { toast } from "sonner"
import { useRouter } from "next/navigation"

export function ProjectEditForm({ project }: { project: Project }) {
    const router = useRouter()

    const form = useForm<ProjectFormData>({
        resolver: zodResolver(projectSchema),
        defaultValues: {
            repoUrl: project.repoUrl,
            repoFullName: project.repoFullName,
            status: project.status,
            revivalMode: project.revivalMode,
            language: project.language || "",
            completionStage: project.completionStage,
            abandonmentReason: project.abandonmentReason,
            helpNeeded: project.helpNeeded,
            shortDescription: project.shortDescription,
            tags: project.tags.join(", "),
            handoffWhat: project.handoffWhat || "",
            handoffPending: project.handoffPending || "",
            handoffSetup: project.handoffSetup || "",
            handoffCompleted: project.handoffCompleted || "",
            handoffKnownIssues: project.handoffKnownIssues || "",
            handoffNotes: project.handoffNotes || "",
        },
    })

    async function onSubmit(data: ProjectFormData) {
        try {
            await updateProjectListing(project.slug, data)
            toast.success("Project updated successfully!")
            router.push(`/p/${project.slug}`)
            router.refresh()
        } catch (error) {
            toast.error(error instanceof Error ? error.message : "Failed to update listing")
        }
    }

    async function onDelete() {
        if (!confirm("Are you sure you want to delete this listing? This action cannot be undone.")) return
        try {
            await deleteProject(project.slug)
            toast.success("Project deleted.")
            router.push("/dashboard")
        } catch (error) {
            toast.error(error instanceof Error ? error.message : "Failed to delete")
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                {/* Read-only Repo Info */}
                <div className="zf-card p-6 mb-10 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full bg-[#00FF66]" />
                    <h3 className="text-[11px] text-[#B9B9B9] mb-2 font-bold uppercase tracking-wider">Repository Info</h3>
                    <p className="text-xl font-bold text-white tracking-tight">
                        {project.repoFullName}
                    </p>
                    <a href={project.repoUrl} target="_blank" className="text-[12px] text-[#666] hover:text-[#00FF66] transition-colors block mt-2">{project.repoUrl}</a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                        control={form.control}
                        name="status"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-[#B9B9B9] font-medium">Project Status</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger className="h-12 border-[#373737] bg-[#121212] px-4">
                                            <SelectValue placeholder="Set Status" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        {Object.values(ProjectStatus).map((s) => (
                                            <SelectItem key={s} value={s} className="text-[14px]">
                                                {s.replace(/_/g, " ")}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="revivalMode"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-[#B9B9B9] font-medium">Revival Protocol</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger className="h-12 border-[#373737] bg-[#121212] px-4">
                                            <SelectValue placeholder="Set Protocol" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        {Object.values(RevivalMode).map((m) => (
                                            <SelectItem key={m} value={m} className="text-[14px]">
                                                {m.replace(/_/g, " ")}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="completionStage"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-[#B9B9B9] font-medium">Completion Phase</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger className="h-12 border-[#373737] bg-[#121212] px-4">
                                            <SelectValue placeholder="Set Phase" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        {Object.values(CompletionStage).map((s) => (
                                            <SelectItem key={s} value={s} className="text-[14px]">
                                                {s.replace(/_/g, " ")}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                        control={form.control}
                        name="abandonmentReason"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-[#B9B9B9] font-medium">Reason for Stoppage</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger className="h-12 border-[#373737] bg-[#121212] px-4">
                                            <SelectValue placeholder="Select Reason" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        {Object.values(AbandonmentReason).map((s) => (
                                            <SelectItem key={s} value={s} className="text-[14px]">
                                                {s.replace(/_/g, " ")}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="helpNeeded"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-[#B9B9B9] font-medium">Support Wanted</FormLabel>
                                <div className="flex flex-wrap gap-2 border border-[#373737] p-4 bg-[#121212] rounded-[8px]">
                                    {Object.values(HelpType).map((type) => (
                                        <Button
                                            key={type}
                                            type="button"
                                            variant="outline"
                                            className={`h-9 px-4 text-[12px] font-semibold tracking-wide rounded-full transition-all ${field.value?.includes(type) ? 'bg-[#00FF66] text-black border-[#00FF66]' : 'bg-transparent border-[#373737] text-[#666] hover:text-white'}`}
                                            onClick={() => {
                                                const current = field.value || []
                                                const updated = current.includes(type)
                                                    ? current.filter((t: HelpType) => t !== type)
                                                    : [...current, type]
                                                field.onChange(updated)
                                            }}
                                        >
                                            {type.replace(/_/g, " ").toLowerCase()}
                                        </Button>
                                    ))}
                                </div>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                        control={form.control}
                        name="language"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-[#B9B9B9] font-medium">Primary Language</FormLabel>
                                <FormControl>
                                    <Input placeholder="e.g. TypeScript, Rust..." className="h-12 border-[#373737] bg-[#121212] px-4" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="shortDescription"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-[#B9B9B9] font-medium">Short Description</FormLabel>
                                <FormControl>
                                    <Input placeholder="Briefly summarize your project..." className="h-12 border-[#373737] bg-[#121212] px-4" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <FormField
                    control={form.control}
                    name="tags"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-[#B9B9B9] font-medium">Technology Tags</FormLabel>
                            <FormControl>
                                <Input placeholder="React, API, TypeScript..." className="h-12 border-[#373737] bg-[#121212] px-4 uppercase" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <div className="border-t border-[#373737] pt-10 mt-10 space-y-8">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="h-px flex-1 bg-[#373737]" />
                        <h3 className="text-[11px] text-[#00FF66] font-bold uppercase tracking-wider">Project Handover Details</h3>
                        <div className="h-px flex-1 bg-[#373737]" />
                    </div>

                    <FormField
                        control={form.control}
                        name="handoffWhat"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-[#B9B9B9] font-medium">What does this do?</FormLabel>
                                <FormControl>
                                    <Textarea placeholder="Explain the core functionality and what a new developer should know..." className="min-h-[120px] bg-[#121212] border-[#373737] p-4 leading-relaxed" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="handoffPending"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-[#B9B9B9] font-medium">Pending Tasks</FormLabel>
                                <FormControl>
                                    <Textarea placeholder="List things that still need finishing or known next steps..." className="min-h-[120px] bg-[#121212] border-[#373737] p-4 leading-relaxed" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="handoffSetup"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-[#B9B9B9] font-medium">Setup Instructions</FormLabel>
                                <FormControl>
                                    <Textarea placeholder="Provide environment variables, bootstrap commands, setup tips..." className="min-h-[120px] bg-[#121212] border-[#373737] p-4 leading-relaxed" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="handoffCompleted"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-[#B9B9B9] font-medium">Completed Modules</FormLabel>
                                <FormControl>
                                    <Textarea placeholder="Which parts are already stable and working? (Optional)" className="min-h-[80px] bg-[#121212] border-[#373737] p-4 opacity-70 focus:opacity-100 transition-all" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="handoffKnownIssues"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-[#B9B9B9] font-medium">Known Issues</FormLabel>
                                <FormControl>
                                    <Textarea placeholder="List any bugs, bottlenecks or weird quirks (Optional)" className="min-h-[80px] bg-[#121212] border-red-500/20 text-red-500/80 p-4 leading-relaxed" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="handoffNotes"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-[#B9B9B9] font-medium">Additional Notes</FormLabel>
                                <FormControl>
                                    <Textarea placeholder="Anything else you want to share? (Optional)" className="min-h-[80px] bg-[#121212] border-[#373737] p-4 opacity-70 focus:opacity-100 transition-all" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                    <Button type="submit" className="zf-button flex-1 h-14" disabled={form.formState.isSubmitting}>
                        {form.formState.isSubmitting ? "Updating Listing..." : "Save Changes"}
                    </Button>
                    <Button 
                        type="button" 
                        variant="outline" 
                        onClick={onDelete} 
                        className="h-14 px-8 rounded-full border-red-500/20 bg-red-500/5 text-red-500 hover:bg-red-500 hover:text-white transition-all font-bold uppercase tracking-widest text-[12px]"
                    >
                        Delete Listing
                    </Button>
                </div>
            </form>
        </Form>
    )
}
