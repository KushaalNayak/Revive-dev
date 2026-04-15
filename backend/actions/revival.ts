"use server"

import { prisma } from "@/backend/lib/prisma"
import { getServerSession } from "next-auth"
import { authOptions } from "@/backend/lib/auth-options"
import { revalidatePath } from "next/cache"

export async function createRevivalRecord(data: {
    repoFullName: string,
    revivalType: "contribute" | "fork" | "request",
    forkUrl?: string
}) {
    const session = await getServerSession(authOptions)
    if (!session?.user?.id) throw new Error("Unauthorized")

    // Create or update
    const record = await prisma.revival.upsert({
        where: {
            userId_repoFullName: {
                userId: session.user.id,
                repoFullName: data.repoFullName
            }
        },
        update: {
            revivalType: data.revivalType,
            status: "in_progress",
            forkUrl: data.forkUrl || null,
        },
        create: {
            userId: session.user.id,
            repoFullName: data.repoFullName,
            revivalType: data.revivalType,
            status: "in_progress",
            forkUrl: data.forkUrl || null,
        }
    })

    revalidatePath("/explore")
    revalidatePath(`/p/${data.repoFullName.replace("/", "-")}`)
    
    return { success: true, record }
}

export async function updateRevivalForkUrl(repoFullName: string, forkUrl: string) {
    const session = await getServerSession(authOptions)
    if (!session?.user?.id) throw new Error("Unauthorized")

    await prisma.revival.update({
        where: {
            userId_repoFullName: {
                userId: session.user.id,
                repoFullName
            }
        },
        data: {
            forkUrl
        }
    })

    revalidatePath("/explore")
    return { success: true }
}

export async function getRevivalStats(repoFullName: string) {
    const revivals = await prisma.revival.findMany({
        where: { repoFullName, status: "in_progress" },
        include: { user: true }
    })
    return revivals
}
