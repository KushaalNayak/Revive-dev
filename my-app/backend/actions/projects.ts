"use server"

import { prisma } from "@/backend/lib/prisma"
import { getServerSession } from "next-auth"
import { authOptions } from "@/backend/lib/auth-options"
import { projectSchema, ProjectFormData } from "@/backend/lib/validations"
import { revalidatePath } from "next/cache"
import { ProjectStatus, HelpType, Project, User, Prisma, AIAnalysis, Request, RevivalMode } from "@prisma/client"

export type ProjectWithRelations = Project & {
    owner: User
    analysis?: AIAnalysis | null
    requests?: Request[]
    adoptedBy?: User | null
}

import { getGithubRepoDetails } from "@/backend/actions/github"
import { analyzeRepoHealth } from "@/backend/lib/ai-service"

export async function createProjectListing(data: ProjectFormData) {
    const session = await getServerSession(authOptions)
    if (!session?.user?.id) {
        throw new Error("Unauthorized")
    }

    // Validate data
    const tagsArray = data.tags.split(",").map((t: string) => t.trim()).filter(Boolean)

    const validated = projectSchema.parse({
        ...data,
        tags: data.tags
    })

    // Fetch GitHub data for Analysis
    const repoData = await getGithubRepoDetails(validated.repoFullName)
    if (!repoData) throw new Error("Could not find GitHub repository")

    const analysis = await analyzeRepoHealth(repoData)

    // Create slug from repoFullName
    let slug = validated.repoFullName.replace("/", "-").toLowerCase()
    const existing = await prisma.project.findUnique({ where: { slug } })
    if (existing) {
        slug = `${slug}-${Date.now()}`
    }

    const title = validated.repoFullName.split("/")[1]

    const newProject = await prisma.project.create({
        data: {
            ownerId: session.user.id,
            repoUrl: validated.repoUrl,
            repoFullName: validated.repoFullName,
            slug,
            title,
            shortDescription: validated.shortDescription,
            status: validated.status,
            revivalMode: validated.revivalMode,
            completionStage: validated.completionStage,
            abandonmentReason: validated.abandonmentReason,
            helpNeeded: validated.helpNeeded,
            tags: tagsArray,
            stars: repoData.stargazers_count,
            language: repoData.language,
            healthScore: analysis.score,
            lastCommitDate: new Date(repoData.pushed_at),
            handoffWhat: validated.handoffWhat,
            handoffCompleted: validated.handoffCompleted,
            handoffPending: validated.handoffPending,
            handoffSetup: validated.handoffSetup,
            handoffKnownIssues: validated.handoffKnownIssues,
            handoffNotes: validated.handoffNotes,
            // Create nested analysis
            analysis: {
                create: {
                    summary: validated.shortDescription,
                    problemsDetected: analysis.insights,
                    revivalRoadmap: analysis.roadmap,
                    difficultyLevel: analysis.difficulty,
                    stoppageReason: analysis.stoppageReason,
                    structureExplanation: analysis.structureExplanation
                }
            }
        },
    })

    revalidatePath("/dashboard")
    revalidatePath("/explore")
    return { success: true, slug: newProject.slug }
}

export async function getExploreProjects({
    status,
    helpType,
    search,
    language,
    minStars,
    difficulty,
    revivalMode,
    page = 1,
    pageSize = 10,
}: {
    status?: ProjectStatus
    helpType?: HelpType
    search?: string
    language?: string
    minStars?: number
    difficulty?: string
    revivalMode?: RevivalMode
    page?: number
    pageSize?: number
}): Promise<{ items: ProjectWithRelations[], total_count: number }> {
    const conditions: Prisma.ProjectWhereInput[] = [
        {
            OR: [
                { status: ProjectStatus.LOOKING_FOR_HELP },
                { status: ProjectStatus.IN_PROGRESS },
            ]
        }
    ]

    if (status) conditions.push({ status })
    if (helpType) conditions.push({ helpNeeded: { has: helpType } })
    if (language) conditions.push({ language: { contains: language, mode: 'insensitive' } })
    if (minStars) conditions.push({ stars: { gte: minStars } })
    if (difficulty) conditions.push({ analysis: { is: { difficultyLevel: difficulty as "EASY" | "MEDIUM" | "HARD" } } })
    if (revivalMode) conditions.push({ revivalMode })

    if (search) {
        conditions.push({
            OR: [
                { title: { contains: search, mode: 'insensitive' } },
                { shortDescription: { contains: search, mode: 'insensitive' } },
            ]
        })
    }

    const where: Prisma.ProjectWhereInput = { AND: conditions }

    const [items, total_count] = await Promise.all([
        prisma.project.findMany({
            where,
            orderBy: { createdAt: "desc" },
            skip: (page - 1) * pageSize,
            take: pageSize,
            include: {
                owner: true,
                analysis: true
            },
        }),
        prisma.project.count({ where })
    ])

    return { items: items as ProjectWithRelations[], total_count }
}

export async function getProjectBySlug(slug: string) {
    return await prisma.project.findUnique({
        where: { slug },
        include: {
            owner: true,
            adoptedBy: true,
            requests: true,
            analysis: true
        },
    })
}

export async function getUserProjects(params?: { search?: string, language?: string, sort?: string, revivalMode?: RevivalMode }) {
    const session = await getServerSession(authOptions)
    if (!session?.user?.id) return []

    const where: Prisma.ProjectWhereInput = { ownerId: session.user.id }
    
    if (params?.search) {
        where.OR = [
            { title: { contains: params.search, mode: 'insensitive' } },
            { shortDescription: { contains: params.search, mode: 'insensitive' } },
        ]
    }
    
    if (params?.language && params.language !== "ALL") {
        where.language = { contains: params.language, mode: 'insensitive' }
    }

    if (params?.revivalMode) {
        where.revivalMode = params.revivalMode
    }

    let orderBy: Prisma.ProjectOrderByWithRelationInput = { createdAt: 'desc' }
    if (params?.sort === 'stars') orderBy = { stars: 'desc' }
    if (params?.sort === 'updated') orderBy = { updatedAt: 'desc' }

    return await prisma.project.findMany({
        where,
        orderBy,
        include: {
            analysis: true
        }
    })
}

export async function getAdoptedProjects(params?: { search?: string, language?: string, sort?: string, revivalMode?: RevivalMode }) {
    const session = await getServerSession(authOptions)
    if (!session?.user?.id) return []

    const where: Prisma.ProjectWhereInput = { adoptedById: session.user.id }
    
    if (params?.search) {
        where.OR = [
            { title: { contains: params.search, mode: 'insensitive' } },
            { shortDescription: { contains: params.search, mode: 'insensitive' } },
        ]
    }
    
    if (params?.language && params.language !== "ALL") {
        where.language = { contains: params.language, mode: 'insensitive' }
    }

    if (params?.revivalMode) {
        where.revivalMode = params.revivalMode
    }

    let orderBy: Prisma.ProjectOrderByWithRelationInput = { createdAt: 'desc' }
    if (params?.sort === 'stars') orderBy = { stars: 'desc' }
    if (params?.sort === 'updated') orderBy = { updatedAt: 'desc' }

    return await prisma.project.findMany({
        where,
        orderBy,
        include: {
            analysis: true
        }
    })
}

export async function updateProjectListing(slug: string, data: ProjectFormData) {
    const session = await getServerSession(authOptions)
    if (!session?.user?.id) throw new Error("Unauthorized")

    const project = await prisma.project.findUnique({ where: { slug } })
    if (!project) throw new Error("Project not found")
    if (project.ownerId !== session.user.id) throw new Error("Unauthorized")

    const tagsArray = typeof data.tags === 'string' ? data.tags.split(",").map((t: string) => t.trim()).filter(Boolean) : data.tags

    // Validation
    // We can reuse projectSchema but some fields might be optional in update? 
    // Assuming full update for now or partial.
    // Using partial of schema?

    await prisma.project.update({
        where: { slug },
        data: {
            shortDescription: data.shortDescription,
            status: data.status,
            revivalMode: data.revivalMode,
            language: data.language,
            completionStage: data.completionStage,
            abandonmentReason: data.abandonmentReason,
            helpNeeded: data.helpNeeded,
            tags: tagsArray,
            handoffWhat: data.handoffWhat,
            handoffCompleted: data.handoffCompleted,
            handoffPending: data.handoffPending,
            handoffSetup: data.handoffSetup,
            handoffKnownIssues: data.handoffKnownIssues,
            handoffNotes: data.handoffNotes,
        }
    })

    revalidatePath(`/p/${slug}`)
    revalidatePath("/dashboard")
    return { success: true }
}

export async function deleteProject(slug: string) {
    const session = await getServerSession(authOptions)
    if (!session?.user?.id) throw new Error("Unauthorized")

    const project = await prisma.project.findUnique({ where: { slug } })
    if (!project) throw new Error("Project not found")
    if (project.ownerId !== session.user.id) throw new Error("Unauthorized")

    await prisma.project.delete({ where: { slug } })

    revalidatePath("/dashboard")
    revalidatePath("/explore")
    return { success: true }
}



