import { Project, User, AIAnalysis } from "@prisma/client"
import Link from "next/link"
import { Star, Circle } from "lucide-react"
import { SaveProjectButton } from "@/frontend/components/save-project-button"

type ProjectWithRelations = Project & {
    owner: User
    analysis?: AIAnalysis | null
}

export function ProjectCard({ project, isSaved = false }: { project: ProjectWithRelations, isSaved?: boolean }) {
    // Determine language color
    const getLanguageColor = (lang?: string | null) => {
        if (!lang) return "text-[#B9B9B9]";
        switch (lang.toLowerCase()) {
            case 'typescript': return 'text-[#3178c6]'; 
            case 'javascript': return 'text-[#00FF66]'; 
            case 'python': return 'text-[#3572A5]'; 
            case 'go': return 'text-[#00ADD8]'; 
            case 'rust': return 'text-[#dea584]'; 
            default: return 'text-[#B9B9B9]'; 
        }
    }

    return (
        <div className="group zf-card p-8 h-full flex flex-col justify-between relative overflow-hidden">
            <SaveProjectButton projectId={project.id} initialIsSaved={isSaved} />
            <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-[22px] font-bold flex items-center flex-wrap gap-2 text-white hover:text-[#00FF66] transition-colors cursor-pointer tracking-tight">
                        <Link href={`/p/${project.slug}`} className="break-all flex items-center gap-2">
                            <span className="font-medium text-[#B9B9B9]">{project.owner.username} <span className="mx-1 text-[#373737]">/</span></span> 
                            <span>{project.title}</span>
                        </Link>
                        <span className="text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full border-[0.8px] border-[#373737] bg-[#171717] text-[#B9B9B9] font-bold ml-2">
                            {project.status.replace(/_/g, ' ')}
                        </span>
                    </h3>
                </div>

                <p className="text-[15px] text-[#B9B9B9] mb-6 line-clamp-2 leading-relaxed">
                    {project.shortDescription}
                </p>

                {project.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.slice(0, 4).map((tag) => (
                            <span key={tag} className="bg-[rgba(0,255,102,0.05)] text-[#00FF66] border-[0.8px] border-[rgba(0,255,102,0.2)] text-[12px] px-3 py-1.5 rounded-full font-semibold hover:bg-[rgba(0,255,102,0.1)] transition-colors cursor-pointer">
                                {tag}
                            </span>
                        ))}
                    </div>
                )}
            </div>

            <div className="flex items-center gap-6 text-[14px] text-[#B9B9B9] mt-2 pt-6 border-t-[0.8px] border-[#373737] relative z-10">
                {project.language && (
                    <div className="flex items-center gap-2 hover:text-white cursor-pointer transition-colors font-medium">
                        <Circle className={`w-3.5 h-3.5 fill-current ${getLanguageColor(project.language)}`} />
                        <span>{project.language}</span>
                    </div>
                )}
                <div className="flex items-center gap-1.5 hover:text-[#00FF66] cursor-pointer transition-colors font-medium">
                    <Star className="w-4 h-4" />
                    <span>{project.stars}</span>
                </div>
                <div className="flex items-center gap-1.5 text-[#888888] ml-auto text-[13px] font-medium">
                    <span>Updated {new Date(project.updatedAt).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                </div>
            </div>
        </div>
    )
}
