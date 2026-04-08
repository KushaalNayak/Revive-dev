"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { cn } from "@/frontend/lib/utils"
import { requestSchema, RequestFormData } from "@/backend/lib/validations"
import { createRequest } from "@/backend/actions/requests"
import { Button } from "@/frontend/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/frontend/components/ui/dialog"
import { Textarea } from "@/frontend/components/ui/textarea"
import { RequestType } from "@prisma/client"
import { RevivalMode } from "@/backend/lib/validations"
import { toast } from "sonner"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/frontend/components/ui/form"
import { useSession } from "next-auth/react"
import { Shield, Users, Radio, CheckCircle2 } from "lucide-react"

export function RequestModal({
    projectId,
    projectTitle,
    type,
    triggerLabel
}: {
    projectId: string
    projectTitle: string
    type: RequestType
    triggerLabel: string
}) {
    const [open, setOpen] = useState(false)
    const { data: session } = useSession()

    const form = useForm<RequestFormData>({
        resolver: zodResolver(requestSchema),
        defaultValues: {
            type,
            message: "",
            revivalMode: RevivalMode.OPEN_SOURCE,
        },
    })

    async function onSubmit(data: RequestFormData) {
        try {
            await createRequest(projectId, { ...data, type })
            toast.success("Revival request transmitted!")
            setOpen(false)
            form.reset()
        } catch (error) {
            toast.error(error instanceof Error ? error.message : "Failed to send request")
        }
    }

    const modes = [
        { 
            id: RevivalMode.OPEN_SOURCE, 
            label: "Open Source Revival", 
            icon: Shield, 
            desc: "Fair use under license. (Default)" 
        },
        { 
            id: RevivalMode.COLLABORATIVE, 
            label: "Maintainer Collaborative", 
            icon: Users, 
            desc: "Request formal handoff via email/API." 
        },
        { 
            id: RevivalMode.INDEPENDENT, 
            label: "Independent Revival", 
            icon: Radio, 
            desc: "Build separately (if owner is inactive)." 
        },
    ]

    if (!session) {
        return (
            <div className="h-14 w-full flex items-center justify-center rounded-xl border border-white/5 bg-white/[0.02] text-xs font-medium text-white/40 shadow-inner">
                Log in to {triggerLabel.toLowerCase()}
            </div>
        )
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button
                    variant={type === "ADOPT" ? "default" : "secondary"}
                    className={cn(
                        "h-14 w-full rounded-xl font-bold uppercase tracking-widest text-[13px] transition-all",
                        type === "ADOPT" ? "zf-button" : "zf-button-outline"
                    )}
                >
                    {triggerLabel}
                </Button>
            </DialogTrigger>
            <DialogContent className="max-w-xl p-0 bg-[#0B0B0B] border-[#373737] overflow-hidden rounded-[32px]">
                <div className="p-8 md:p-12 space-y-10">
                    <DialogHeader className="space-y-4 text-left">
                        <div className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#00FF66]">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#00FF66] animate-pulse" />
                             Initiate {type.toLowerCase()}
                        </div>
                        <DialogTitle className="text-4xl font-extrabold tracking-tight text-white zf-heading uppercase text-left w-full">
                            {projectTitle}
                        </DialogTitle>
                    </DialogHeader>

                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10">
                            
                            {type === "ADOPT" && (
                                <FormField
                                    control={form.control}
                                    name="revivalMode"
                                    render={({ field }) => (
                                        <FormItem className="space-y-4">
                                            <FormLabel className="text-[11px] font-bold text-[#666] uppercase tracking-[0.1em]">Revival Strategy</FormLabel>
                                            <div className="grid grid-cols-1 gap-3">
                                                {modes.map((mode) => (
                                                    <button
                                                        key={mode.id}
                                                        type="button"
                                                        onClick={() => field.onChange(mode.id)}
                                                        className={cn(
                                                            "flex items-center gap-4 p-4 rounded-2xl border transition-all text-left group",
                                                            field.value === mode.id 
                                                                ? "bg-[#00FF66]/5 border-[#00FF66] shadow-[0_0_20px_rgba(0,255,102,0.1)]" 
                                                                : "bg-[#171717] border-[#373737] hover:border-[#666]"
                                                        )}
                                                    >
                                                        <div className={cn(
                                                            "w-10 h-10 rounded-full flex items-center justify-center transition-colors",
                                                            field.value === mode.id ? "bg-[#00FF66] text-black" : "bg-black text-[#666]"
                                                        )}>
                                                            <mode.icon className="w-5 h-5" />
                                                        </div>
                                                        <div className="flex-1">
                                                            <p className={cn("text-[14px] font-bold tracking-tight mb-0.5", field.value === mode.id ? "text-white" : "text-[#B9B9B9]")}>{mode.label}</p>
                                                            <p className="text-[11px] text-[#666] font-medium leading-tight">{mode.desc}</p>
                                                        </div>
                                                        {field.value === mode.id && <CheckCircle2 className="w-5 h-5 text-[#00FF66]" />}
                                                    </button>
                                                ))}
                                            </div>
                                        </FormItem>
                                    )}
                                />
                            )}

                            <FormField
                                control={form.control}
                                name="message"
                                render={({ field }) => (
                                    <FormItem className="space-y-4">
                                         <FormLabel className="text-[11px] font-bold text-[#666] uppercase tracking-[0.1em]">Proposal</FormLabel>
                                        <FormControl>
                                            <Textarea
                                                placeholder={type === "ADOPT" ? "Why do you want to revive this project? What is your roadmap?" : "Tell the owner how you can help..."}
                                                className="min-h-[160px] p-6 rounded-[20px] bg-[#171717] border-[#373737] text-white text-[15px] leading-relaxed focus:border-[#00FF66] transition-all"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            
                            <Button type="submit" className="zf-button w-full h-16 rounded-[20px] text-[16px] font-bold uppercase tracking-widest" disabled={form.formState.isSubmitting}>
                                {form.formState.isSubmitting ? "Transmitting..." : "Send Revival Request"}
                            </Button>
                        </form>
                    </Form>
                </div>
            </DialogContent>
        </Dialog>

    )
}




