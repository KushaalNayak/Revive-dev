"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { projectSchema, ProjectFormData } from "@/backend/lib/validations"
import { validateRepoIsPublic as validateRepo, GithubRepo } from "@/backend/actions/github"
import { createProjectListing as createListing } from "@/backend/actions/projects"
import { Button } from "@/frontend/components/ui/button"
import { Input } from "@/frontend/components/ui/input"
import { Textarea } from "@/frontend/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/frontend/components/ui/select"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/frontend/components/ui/form"
import { ProjectStatus, CompletionStage, AbandonmentReason, HelpType, RevivalMode } from "@prisma/client"
import { toast } from "sonner"
import { useRouter, useSearchParams } from "next/navigation"
import { useEffect } from "react"
import { Alert, AlertDescription, AlertTitle } from "@/frontend/components/ui/alert"
import { AlertCircle, Info, Brain } from "lucide-react"

export function ProjectForm({ 
    repos 
}: { 
    repos: GithubRepo[]
}) {
    const router = useRouter()
    const searchParams = useSearchParams()

    const form = useForm<ProjectFormData>({
        resolver: zodResolver(projectSchema),
        defaultValues: {
            status: ProjectStatus.LOOKING_FOR_HELP,
            revivalMode: RevivalMode.OPEN_SOURCE,
            completionStage: CompletionStage.IDEA,
            abandonmentReason: AbandonmentReason.NO_TIME,
            helpNeeded: [],
            shortDescription: "",
            tags: "",
            language: "",
            handoffWhat: "",
            handoffPending: "",
            handoffSetup: "",
        },
    })

    useEffect(() => {
        const preSelectedFullName = searchParams.get("repo")
        if (preSelectedFullName) {
            const repo = repos.find(r => r.full_name === preSelectedFullName)
            if (repo) {
                form.setValue("repoUrl", repo.html_url)
                form.setValue("repoFullName", repo.full_name)
                if (repo.description) form.setValue("shortDescription", repo.description)
                if (repo.topics && repo.topics.length > 0) form.setValue("tags", repo.topics.join(", "))
                if (repo.language) form.setValue("language", repo.language)
            }
        }
    }, [searchParams, repos, form])

    const handleRepoChange = (fullName: string) => {
        const repo = repos.find(r => r.full_name === fullName)
        if (repo) {
            form.setValue("repoUrl", repo.html_url)
            form.setValue("repoFullName", repo.full_name)
            if (repo.description) form.setValue("shortDescription", repo.description)
            if (repo.topics && repo.topics.length > 0) form.setValue("tags", repo.topics.join(", "))
            if (repo.language) form.setValue("language", repo.language)
        }
    }

    async function onSubmit(data: ProjectFormData) {
        try {
            const isPublic = await validateRepo(data.repoFullName)
            if (!isPublic) {
                toast.error("Repository must be public.")
                return
            }

            const res = await createListing(data)
            router.push(`/dashboard/new/success?slug=${res.slug}`)
        } catch (error) {
            toast.error(error instanceof Error ? error.message : "Failed to create listing")
        }
    }

    if (repos.length === 0) {
        return (
            <Alert variant="destructive" className="border-red-500/20 bg-red-500/5 text-red-500 rounded-none">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>REPOSITORY_SCAN_FAILURE</AlertTitle>
                <AlertDescription>
                    no public repositories detected. establish github link or verify repository visibility settings.
                </AlertDescription>
            </Alert>
        )
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-16">
                {/* Section 1: Core Info */}
                <div className="zf-card p-10 space-y-10 group transition-all">
                    <div className="flex items-center justify-between border-b border-[#373737] pb-6">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 border border-[#00FF66]/20 rounded-full flex items-center justify-center text-[#00FF66] bg-[#00FF66]/5">
                                <Info className="w-4 h-4" />
                            </div>
                            <h2 className="text-xl font-bold font-sans text-white zf-heading">Core Details</h2>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <FormField
                            control={form.control}
                            name="repoFullName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-[#B9B9B9] font-medium">Select Target Repository</FormLabel>
                                    <Select 
                                        onValueChange={(val) => {
                                            field.onChange(val);
                                            handleRepoChange(val);
                                        }} 
                                        defaultValue={field.value}
                                    >
                                        <FormControl>
                                            <SelectTrigger className="h-14">
                                                <SelectValue placeholder="Select a repository..." />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            {repos.map((repo) => (
                                                <SelectItem key={repo.id} value={repo.full_name}>
                                                    {repo.full_name}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                    <FormDescription className="text-xs text-[#666]">
                                        Only public repositories are eligible for listing.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <FormField
                                control={form.control}
                                name="revivalMode"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-[#B9B9B9] font-medium">Revival Protocol</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger className="h-14">
                                                    <SelectValue placeholder="Select Protocol" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                {Object.values(RevivalMode).map((m) => (
                                                    <SelectItem key={m} value={m}>
                                                        {m.replace(/_/g, " ")}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                        <FormDescription className="text-[10px] text-[#555]">
                                            Drives how the project will be managed (Open vs Collaborative vs Independent).
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="status"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-[#B9B9B9] font-medium">Operational Status</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger className="h-14">
                                                    <SelectValue placeholder="Select Status" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                {Object.values(ProjectStatus).map((s) => (
                                                    <SelectItem key={s as string} value={s as string}>
                                                        {(s as string).replace(/_/g, " ")}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <FormField
                                control={form.control}
                                name="abandonmentReason"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-[#B9B9B9] font-medium">Reason for Stoppage</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger className="h-14">
                                                    <SelectValue placeholder="Select Reason" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                {Object.values(AbandonmentReason).map((s) => (
                                                    <SelectItem key={s as string} value={s as string}>
                                                        {(s as string).replace(/_/g, " ")}
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
                                        <FormLabel className="text-[#B9B9B9] font-medium">Development Phase</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger className="h-14">
                                                    <SelectValue placeholder="Select Phase" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                {Object.values(CompletionStage).map((s) => (
                                                    <SelectItem key={s as string} value={s as string}>
                                                        {(s as string).replace(/_/g, " ")}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                            <FormField
                                control={form.control}
                                name="helpNeeded"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-[#B9B9B9] font-medium">Support Wanted</FormLabel>
                                        <div className="flex flex-wrap gap-2 border border-[#373737] p-4 bg-[#121212] rounded-[16px]">
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

                        <FormField
                            control={form.control}
                            name="shortDescription"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-[#B9B9B9] font-medium">Short Description</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Briefly describe what this project does..." className="h-14" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <FormField
                                control={form.control}
                                name="language"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-[#B9B9B9] font-medium">Primary Language</FormLabel>
                                        <FormControl>
                                            <Input placeholder="e.g. TypeScript, Rust..." className="h-14" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="tags"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-[#B9B9B9] font-medium">Technology Stack</FormLabel>
                                        <FormControl>
                                            <Input placeholder="React, Node.js, Prisma..." className="h-14" {...field} />
                                        </FormControl>
                                        <FormDescription className="text-xs text-[#666]">Separate technologies with a comma.</FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                    </div>
                </div>

                {/* Section 2: Handoff Insights */}
                <div className="zf-card p-10 space-y-10">
                    <div className="flex items-center gap-4 border-b border-[#373737] pb-6">
                        <div className="w-10 h-10 border border-[#00FF66]/20 rounded-full flex items-center justify-center text-[#00FF66] bg-[#00FF66]/5">
                            <Brain className="w-4 h-4" />
                        </div>
                        <h2 className="text-xl font-bold font-sans text-white zf-heading">Handoff Details</h2>
                    </div>

                    <FormField
                        control={form.control}
                        name="handoffWhat"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-[#B9B9B9] font-medium">Original Vision</FormLabel>
                                <FormControl>
                                    <Textarea placeholder="What was the original vision? What problem does it solve?" className="min-h-[140px]" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <FormField
                            control={form.control}
                            name="handoffPending"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-[#B9B9B9] font-medium">Incomplete Modules & Tasks</FormLabel>
                                    <FormControl>
                                        <Textarea placeholder="Which tasks are remaining? Are there any missing features?" className="min-h-[140px]" {...field} />
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
                                    <FormLabel className="text-[#B9B9B9] font-medium">Environment Setup Notes</FormLabel>
                                    <FormControl>
                                        <Textarea placeholder="Environment variables, database scripts, dependency quirks..." className="min-h-[140px]" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                </div>

                <div className="flex justify-end">
                    <Button type="submit" disabled={form.formState.isSubmitting} className="zf-button px-10 h-14">
                        {form.formState.isSubmitting ? "Publishing..." : (
                            <span className="flex items-center gap-3">
                                List Project <Brain className="w-5 h-5" />
                            </span>
                        )}
                    </Button>
                </div>
            </form>
        </Form>
    )
}
