"use server"

import { prisma } from "@/backend/lib/prisma"
import { getServerSession } from "next-auth"
import { authOptions } from "@/backend/lib/auth-options"

export async function fetchUserRepos(params?: { 
    search?: string, 
    language?: string, 
    sort?: string,
    page?: number,
    pageSize?: number
}): Promise<{ items: GithubRepo[], total_count: number }> {
    const session = await getServerSession(authOptions)
    if (!session?.user?.id) throw new Error("Unauthorized")

    const account = await prisma.account.findFirst({
        where: {
            userId: session.user.id,
            provider: "github",
        },
    })

    if (!account?.access_token) {
        throw new Error("GitHub account not linked or missing token")
    }

    let allRepos: GithubRepo[] = []
    let apiPage = 1
    let hasMore = true

    // We still fetch everything up to 10 pages (1000 repos) to allow accurate multi-page local filtering
    while (hasMore) {
        let url = `https://api.github.com/user/repos?visibility=public&sort=updated&per_page=100&page=${apiPage}&affiliation=owner,collaborator,organization_member`
        if (params?.sort && params.sort !== 'updated') {
            url = `https://api.github.com/user/repos?visibility=public&sort=${params.sort}&per_page=100&page=${apiPage}&affiliation=owner,collaborator,organization_member`
        }

        const res = await fetch(url, {
            headers: {
                Authorization: `Bearer ${account.access_token}`,
                Accept: "application/vnd.github.v3+json",
            },
        })

        if (!res.ok) {
            console.error("GitHub API Error in fetchUserRepos:", await res.text())
            break
        }

        const data = await res.json() as GithubRepo[]
        if (data.length === 0) {
            hasMore = false
        } else {
            allRepos = [...allRepos, ...data]
            if (data.length < 100 || apiPage >= 10) { 
                hasMore = false
            } else {
                apiPage++
            }
        }
    }

    let repos = allRepos as GithubRepo[]
  
    if (params?.search) {
        const s = params.search.toLowerCase();
        repos = repos.filter(r => 
            r.name.toLowerCase().includes(s) || 
            (r.description && r.description.toLowerCase().includes(s))
        )
    }

    if (params?.language && params.language !== "ALL") {
        repos = repos.filter(r => r.language === params.language)
    }

    // Filter out private ones and map them
    const filtered = repos.filter((r: GithubRepo) => !r.private).map((r: GithubRepo) => ({
        id: r.id,
        name: r.name,
        full_name: r.full_name,
        html_url: r.html_url,
        description: r.description,
        topics: r.topics || [], 
        updated_at: r.updated_at,
        pushed_at: r.pushed_at,
        stargazers_count: r.stargazers_count,
        forks_count: r.forks_count,
        open_issues_count: r.open_issues_count,
        language: r.language,
        private: r.private,
        owner: r.owner,
        clone_url: r.clone_url
    })) as GithubRepo[]

    const total_count = filtered.length
    const page = params?.page || 1
    const pageSize = params?.pageSize || 10
    
    const items = filtered.slice((page - 1) * pageSize, page * pageSize)

    return { items, total_count }
}

export async function validateRepoIsPublic(repoFullName: string) {
    const res = await fetch(`https://api.github.com/repos/${repoFullName}`)
    if (res.status === 404) return false // Private or not found
    if (!res.ok) return false
    const data = await res.json()
    return !data.private
}

export type GithubRepo = {
    id: number
    name: string
    full_name: string
    html_url: string
    description: string | null
    stargazers_count: number
    forks_count: number
    open_issues_count: number
    language: string | null
    updated_at: string
    pushed_at: string
    private: boolean
    topics: string[]
    owner: {
        login: string
        avatar_url: string
    }
    clone_url: string
}

export async function searchGithubRepositories(query: string = "topic:help-wanted", page: number = 1) {
    const res = await fetch(`https://api.github.com/search/repositories?q=${encodeURIComponent(query)}&sort=updated&per_page=10&page=${page}`, {
        headers: {
            "Accept": "application/vnd.github.v3+json",
            ...(process.env.GITHUB_TOKEN ? { "Authorization": `Bearer ${process.env.GITHUB_TOKEN}` } : {})
        },
        next: { revalidate: 60 }
    })

    if (!res.ok) {
        console.error("GitHub API Error", await res.text())
        return { items: [], total_count: 0 }
    }

    const data = await res.json()
    return { items: data.items as GithubRepo[], total_count: data.total_count }
}

export async function searchAbandonedGithubRepos({
    searchQuery,
    page = 1,
    language,
    minStars
}: {
    searchQuery?: string,
    page?: number,
    language?: string,
    minStars?: number
}) {
    let q = `is:public`;
    
    if (language && !searchQuery?.includes("language:")) {
        q += ` language:${language}`;
    }

    if (minStars && !searchQuery?.includes("stars:")) {
        q += ` stars:>=${minStars}`;
    }
    
    if (searchQuery) {
        q += ` ${searchQuery}`;
    }

    // If completely empty, add a baseline to avoid GitHub API 422 error for overly broad queries
    if (!language && !minStars && !searchQuery) {
        q += " stars:>5";
    }

    return await searchGithubRepositories(q, page);
}

export async function getGithubRepoDetails(fullName: string) {
    const res = await fetch(`https://api.github.com/repos/${fullName}`, {
        headers: {
            "Accept": "application/vnd.github.v3+json",
            ...(process.env.GITHUB_TOKEN ? { "Authorization": `Bearer ${process.env.GITHUB_TOKEN}` } : {})
        },
        next: { revalidate: 60 }
    })

    if (!res.ok) return null
    return await res.json() as GithubRepo
}



