"use server"

import { prisma } from "@/backend/lib/prisma"
import { getServerSession } from "next-auth"
import { authOptions } from "@/backend/lib/auth-options"
import { requestSchema } from "@/backend/lib/validations"
import { revalidatePath } from "next/cache"

import { ProjectStatus } from "@prisma/client"
import { RequestFormData } from "@/backend/lib/validations"

import { sendHandoffRequestEmail, sendHandoffSuccessEmail } from "@/backend/lib/mailer"

export async function createRequest(projectId: string, data: RequestFormData) {
    const session = await getServerSession(authOptions)
    if (!session?.user?.id) throw new Error("Unauthorized")

    const { type, message, revivalMode } = requestSchema.parse(data)

    // Check if already requested?
    const existing = await prisma.request.findFirst({
        where: {
            projectId,
            requesterId: session.user.id,
            status: "PENDING"
        }
    })

    if (existing) throw new Error("You already have a pending request for this project.")

    // Get project and owner details for email
    const project = await prisma.project.findUnique({
        where: { id: projectId },
        include: {
            owner: true
        }
    })

    if (!project) throw new Error("Project not found")

    await prisma.request.create({
        data: {
            projectId,
            requesterId: session.user.id,
            type,
            message,
            revivalMode: revivalMode || null,
        }
    })

    // Send notification email to project owner
    if (project.owner.email) {
        await sendHandoffRequestEmail({
            to: project.owner.email,
            projectName: project.title,
            requesterName: session.user.name || "A developer",
            message: message,
            revivalMode: (revivalMode as "OPEN_SOURCE" | "COLLABORATIVE" | "INDEPENDENT") || "OPEN_SOURCE"
        })
    }

    revalidatePath(`/p/${project.slug}`)
    revalidatePath("/dashboard")

    return { success: true }
}

export async function updateRequestStatus(requestId: string, status: "ACCEPTED" | "REJECTED" | "CANCELLED") {
    const session = await getServerSession(authOptions)
    if (!session?.user?.id) throw new Error("Unauthorized")

    const request = await prisma.request.findUnique({
        where: { id: requestId },
        include: { project: true }
    })

    if (!request) throw new Error("Request not found")

    // Authorization check
    if (status === "CANCELLED") {
        if (request.requesterId !== session.user.id) throw new Error("Unauthorized")
    } else {
        // Accept/Reject only by owner
        const isOwner = request.project.ownerId === session.user.id
        if (!isOwner) throw new Error("Unauthorized")
    }

    // Transaction for Accept -> Update Project
    const result = await prisma.$transaction(async (tx) => {
        const updatedRequest = await tx.request.update({
            where: { id: requestId },
            data: { status },
            include: {
                requester: true,
                project: {
                    include: { owner: true }
                }
            }
        })

        if (status === "ACCEPTED" && request.type === "ADOPT") {
            await tx.project.update({
                where: { id: request.projectId },
                data: {
                    status: ProjectStatus.REVIVED,
                    adoptedById: request.requesterId,
                    // Use requested revivalMode if present
                    revivalMode: (request as unknown as { revivalMode?: "OPEN_SOURCE" | "COLLABORATIVE" | "INDEPENDENT" }).revivalMode || undefined,
                }
            })
        }
        return updatedRequest
    })

    // Send Success Emails to both parties
    if (status === "ACCEPTED" && result.type === "ADOPT") {
        const { requester, project } = result
        const owner = project.owner

        // Email to Maintainer (Requester)
        if (requester.email) {
            await sendHandoffSuccessEmail({
                to: requester.email,
                projectName: project.title,
                ownerName: owner.username || "Original Owner",
                maintainerName: requester.username || "New Maintainer",
                role: 'MAINTAINER'
            })
        }

        // Email to Owner
        if (owner.email) {
            await sendHandoffSuccessEmail({
                to: owner.email,
                projectName: project.title,
                ownerName: owner.username || "Original Owner",
                maintainerName: requester.username || "New Maintainer",
                role: 'OWNER'
            })
        }
    }

    revalidatePath("/dashboard")
    return { success: true }
}

export async function getIncomingRequests() {
    const session = await getServerSession(authOptions)
    if (!session?.user?.id) return []

    return await prisma.request.findMany({
        where: {
            project: {
                ownerId: session.user.id
            },
            status: "PENDING"
        },
        include: {
            project: true,
            requester: true
        },
        orderBy: { createdAt: "desc" }
    })
}

export async function getOutgoingRequests() {
    const session = await getServerSession(authOptions)
    if (!session?.user?.id) return []

    return await prisma.request.findMany({
        where: {
            requesterId: session.user.id
        },
        include: {
            project: true
        },
        orderBy: { createdAt: "desc" }
    })
}



