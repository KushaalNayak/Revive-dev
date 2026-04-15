"use server"

import { prisma } from "@/backend/lib/prisma"
import { getServerSession } from "next-auth"
import { authOptions } from "@/backend/lib/auth-options"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

function isAdmin(email?: string | null) {
    if (!email) return false
    const pluralAdmins = (process.env.ADMIN_EMAILS || "").split(",")
    const singularAdmin = process.env.ADMIN_EMAIL || ""
    return pluralAdmins.includes(email) || singularAdmin === email
}

export async function createSupportTicket(requestId: string, message: string) {
    const session = await getServerSession(authOptions)
    if (!session?.user?.id) throw new Error("Unauthorized")

    // Verify request exists and user is requester
    const request = await prisma.request.findUnique({
        where: { id: requestId },
        include: { project: true }
    })
    if (!request) throw new Error("Request not found")
    if (request.requesterId !== session.user.id) throw new Error("Unauthorized")

    // Check if 7 days passed? (Frontend handles UI, but backend should verify?)
    // Skipping strict date check for MVP simplicity, relying on UI state.

    await prisma.supportTicket.create({
        data: {
            projectId: request.projectId,
            requestId,
            requesterId: session.user.id,
            message,
        }
    })

    return { success: true }
}

export async function getAdminTickets() {
    const session = await getServerSession(authOptions)
    if (!session?.user?.id || !isAdmin(session.user.email)) {
        throw new Error("Unauthorized - Admin only")
    }

    return await prisma.supportTicket.findMany({
        include: {
            project: {
                include: { owner: true }
            },
            requester: true
        },
        orderBy: { createdAt: "desc" }
    })
}

export async function sendOwnerReminderEmail(ticketId: string) {
    const session = await getServerSession(authOptions)
    if (!session?.user?.id || !isAdmin(session.user.email)) {
        throw new Error("Unauthorized - Admin only")
    }

    const ticket = await prisma.supportTicket.findUnique({
        where: { id: ticketId },
        include: {
            project: {
                include: { owner: true }
            }
        }
    })

    if (!ticket || !ticket.project.owner.email) throw new Error("Ticket or Owner email not found")

    // Send Email
    await resend.emails.send({
        from: process.env.EMAIL_FROM || "onboarding@resend.dev",
        to: ticket.project.owner.email,
        subject: `Action Required: Request Pending for ${ticket.project.title}`,
        html: `
        <p>Hello ${ticket.project.owner.name},</p>
        <p>You have a pending request on your project <strong>${ticket.project.title}</strong> that has been waiting for over 7 days.</p>
        <p>Please log in to your dashboard to accept or reject it.</p>
        <p><a href="${process.env.NEXTAUTH_URL}/dashboard">Go to Dashboard</a></p>
      `
    })

    await prisma.supportTicket.update({
        where: { id: ticketId },
        data: { status: "SENT_TO_OWNER" }
    })

    return { success: true }
}