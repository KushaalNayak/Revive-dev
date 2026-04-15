import { z } from "zod"
import { ProjectStatus, RequestType, CompletionStage, AbandonmentReason, HelpType, RevivalMode } from "@prisma/client"
export { ProjectStatus, RequestType, CompletionStage, AbandonmentReason, HelpType, RevivalMode }

export const projectSchema = z.object({
    repoUrl: z.string().url(),
    repoFullName: z.string(),
    repoId: z.string().optional(),
    status: z.nativeEnum(ProjectStatus),
    revivalMode: z.nativeEnum(RevivalMode),
    completionStage: z.nativeEnum(CompletionStage),
    abandonmentReason: z.nativeEnum(AbandonmentReason),
    helpNeeded: z.array(z.nativeEnum(HelpType)).min(1, "Select at least one type of help needed"),
    tags: z.string().min(1, "Tags are required (comma separated)"),
    language: z.string().optional(),
    shortDescription: z.string().min(5).max(200),
    handoffWhat: z.string().min(5),
    handoffCompleted: z.string().optional(),
    handoffPending: z.string().min(5),
    handoffSetup: z.string().min(5),
    handoffKnownIssues: z.string().optional(),
    handoffNotes: z.string().optional(),
})

export type ProjectFormData = z.infer<typeof projectSchema>

export const requestSchema = z.object({
    type: z.nativeEnum(RequestType),
    message: z.string().min(20, "Please provide a detailed message."),
    revivalMode: z.nativeEnum(RevivalMode).optional(),
})

export type RequestFormData = z.infer<typeof requestSchema>
