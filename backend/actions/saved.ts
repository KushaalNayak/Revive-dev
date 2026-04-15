"use server"

import { prisma } from "@/backend/lib/prisma"
import { getServerSession } from "next-auth"
import { authOptions } from "@/backend/lib/auth-options"
import { revalidatePath } from "next/cache"
import { ProjectWithRelations } from "./projects"

export async function toggleSaveProject(projectId: string) {
    const session = await getServerSession(authOptions)
    if (!session?.user?.id) throw new Error("Unauthorized")

    try {
        const existing = await prisma.savedProject.findUnique({
            where: {
                userId_projectId: {
                    userId: session.user.id,
                    projectId
                }
            }
        })

        if (existing) {
            await prisma.savedProject.delete({
                where: { id: existing.id }
            })
        } else {
            await prisma.savedProject.create({
                data: {
                    userId: session.user.id,
                    projectId
                }
            })
        }
    } catch (e) {
        console.error("Interest tracking error:", e)
    }

    revalidatePath("/explore")
}

export async function getSavedProjects(): Promise<ProjectWithRelations[]> {
    const session = await getServerSession(authOptions)
    if (!session?.user?.id) return []

    try {
        const saved = await prisma.savedProject.findMany({
            where: { userId: session.user.id },
            include: {
                project: {
                    include: {
                        owner: true,
                        analysis: true
                    }
                }
            },
            orderBy: { createdAt: 'desc' }
        })

        return saved.map((s) => s.project) as ProjectWithRelations[]
    } catch (e) {
        console.error("Fetch saved projects error:", e)
        return []
    }
}

export async function getSavedProjectIds(): Promise<string[]> {
    const session = await getServerSession(authOptions)
    if (!session?.user?.id) return []

    try {
        const saved = await prisma.savedProject.findMany({
            where: { userId: session.user.id },
            select: { projectId: true }
        })

        return saved.map((s) => s.projectId)
    } catch (e) {
        console.error("Fetch saved project IDs error:", e)
        return []
    }
}

export async function toggleSaveGlobalRepo(repoFullName: string) {
    const session = await getServerSession(authOptions)
    if (!session?.user?.id) throw new Error("Unauthorized")

    try {
        const existing = await prisma.savedGlobalRepo.findUnique({
            where: {
                userId_repoFullName: {
                    userId: session.user.id,
                    repoFullName
                }
            }
        })

        if (existing) {
            await prisma.savedGlobalRepo.delete({
                where: { id: existing.id }
            })
        } else {
            await prisma.savedGlobalRepo.create({
                data: {
                    userId: session.user.id,
                    repoFullName
                }
            })
        }
    } catch (e) {
        console.error("Global Interest tracking error:", e)
    }

    revalidatePath("/explore")
}

export async function getSavedGlobalRepoFullNames(): Promise<string[]> {
    const session = await getServerSession(authOptions)
    if (!session?.user?.id) return []

    try {
        const saved = await prisma.savedGlobalRepo.findMany({
            where: { userId: session.user.id },
            select: { repoFullName: true }
        })

        return saved.map((s) => s.repoFullName)
    } catch (e) {
        console.error("Fetch saved global repo full names error:", e)
        return []
    }
}
