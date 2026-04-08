"use client"

import { useState } from "react"
import { searchGithubRepositories, GithubRepo } from "@/backend/actions/github"
import { Input } from "@/frontend/components/ui/input"
import { Button } from "@/frontend/components/ui/button"
import { Search, Loader2, Star, GitFork, ExternalLink } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/frontend/components/ui/card"
import { Badge } from "@/frontend/components/ui/badge"
import Link from "next/link"

export function GithubSearch() {
    const [query, setQuery] = useState("")
    const [results, setResults] = useState<GithubRepo[]>([])
    const [loading, setLoading] = useState(false)
    const [searched, setSearched] = useState(false)

    const handleSearch = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!query.trim()) return

        setLoading(true)
        try {
            const { items } = await searchGithubRepositories(query)
            setResults(items || [])
            setSearched(true)
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="space-y-16">
            <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-4 max-w-4xl mx-auto">
                <div className="relative flex-1 group">
                    <Search className="absolute left-6 top-6 h-4 w-4 text-primary/40 group-focus-within:text-primary transition-colors" />
                    <Input
                        placeholder="SEARCH_GITHUB_PRIME_REPOSITORY..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        className="h-16 pl-14 pr-8 rounded-none border-white/10 bg-white/[0.01] focus:bg-white/[0.03] transition-all text-xs font-mono uppercase tracking-widest placeholder:text-white/10"
                    />
                </div>
                <Button type="submit" disabled={loading} className="h-16 px-12 text-xs font-black uppercase tracking-widest rounded-none">
                    {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : "PROBE_NETWORK"}
                </Button>
            </form>

            {searched && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {results.length > 0 ? (
                        results.map((repo) => (
                            <Card key={repo.id} className="cyber-panel flex flex-col h-full border-white/5 bg-black/40 group transition-all hover:bg-black/60">
                                <CardHeader className="p-8 pb-4">
                                    <div className="flex items-start justify-between gap-4">
                                        <div className="flex-1 min-w-0">
                                            <p className="tech-label text-[8px] text-primary/40 mb-1">{repo.owner.login.toUpperCase()}</p>
                                            <CardTitle className="text-xl font-black leading-tight tracking-tightest text-white group-hover:text-primary transition-colors truncate">
                                                {repo.name.toUpperCase()}
                                            </CardTitle>
                                        </div>
                                        <Link href={repo.html_url} target="_blank" className="p-2 border border-white/10 hover:border-primary/40 text-white/20 hover:text-primary transition-all">
                                            <ExternalLink className="w-4 h-4" />
                                        </Link>
                                    </div>
                                </CardHeader>
                                <CardContent className="flex-1 px-8 pb-8">
                                    <p className="text-xs text-white/40 line-clamp-3 mb-8 font-mono lowercase leading-relaxed">
                                        {repo.description || "no_specification_provided"}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {repo.language && (
                                            <Badge variant="outline">
                                                {repo.language.toUpperCase()}
                                            </Badge>
                                        )}
                                    </div>
                                </CardContent>
                                <CardFooter className="px-8 py-6 border-t border-white/5 flex items-center justify-between text-[8px] font-black uppercase tracking-widest text-white/20">
                                    <div className="flex items-center gap-6">
                                        <div className="flex items-center gap-2 group-hover:text-amber-500/60 transition-colors">
                                            <Star className="h-3 w-3" />
                                            <span>{repo.stargazers_count.toLocaleString()}</span>
                                        </div>
                                        <div className="flex items-center gap-2 group-hover:text-primary transition-colors">
                                            <GitFork className="h-3 w-3" />
                                            <span>{repo.forks_count.toLocaleString()}</span>
                                        </div>
                                    </div>
                                    <div className="tech-label text-[7px] opacity-20">DATA_NODE::{repo.id}</div>
                                </CardFooter>
                            </Card>
                        ))
                    ) : (
                        <div className="col-span-full py-32 border border-dashed border-white/5 flex flex-col items-center justify-center">
                            <div className="w-16 h-16 border border-white/5 flex items-center justify-center mb-8 opacity-20">
                                <Search className="w-6 h-6" />
                            </div>
                            <p className="text-xl font-black uppercase tracking-tightest">NO_NODES_IDENTIFIED</p>
                            <p className="tech-label text-[9px] mt-2">reconfigure search parameters and retry probe.</p>
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}




