import { Project } from "@prisma/client"
import { ProjectStatusBadge } from "@/frontend/components/status-badge"
import Link from "next/link"
import { Edit, Eye, Clock } from "lucide-react"

interface ProjectListProps {
    projects: Project[]
    isOwner?: boolean
}

export function DashboardProjectList({ projects, isOwner }: ProjectListProps) {
    if (projects.length === 0) {
        return (
            <div className="zf-card p-24 text-center flex flex-col items-center justify-center border-dashed">
                <h3 className="text-3xl font-extrabold mb-6 text-white zf-heading uppercase tracking-widest">No Projects</h3>
                <p className="text-[#B9B9B9] max-w-sm text-[16px] leading-relaxed opacity-60">
                    You haven&apos;t listed or adopted any projects yet.
                </p>
            </div>
        )
    }

    return (
        <div className="space-y-6">
            {projects.map((project) => (
                <div key={project.id} className="zf-card p-6 md:p-8 flex flex-col md:flex-row items-center gap-8 group">
                    <div className="flex-1 min-w-0 w-full">
                        <div className="flex items-center gap-3 mb-4">
                            <ProjectStatusBadge status={project.status} />
                            <div className="flex items-center gap-1.5 text-[10px] font-bold text-[#666] uppercase tracking-[0.2em]">
                                {project.completionStage.replace(/_/g, " ")}
                            </div>
                        </div>
                        
                        <Link href={`/p/${project.slug}`} className="block">
                            <h3 className="text-2xl font-bold text-white group-hover:text-[#00FF66] transition-colors truncate mb-1">
                                {project.title}
                            </h3>
                            <p className="text-[13px] font-mono text-[#444] truncate">
                                {project.repoFullName}
                            </p>
                        </Link>
                    </div>

                    <div className="flex items-center gap-12 shrink-0 w-full md:w-auto">
                        <div className="hidden lg:flex flex-col items-end">
                            <span className="text-[10px] font-bold text-[#444] uppercase tracking-widest mb-1">Last Updated</span>
                            <div className="flex items-center gap-2 text-[13px] font-bold text-white/60">
                                <Clock className="w-3.5 h-3.5" />
                                {new Date(project.updatedAt).toLocaleDateString()}
                            </div>
                        </div>

                        <div className="flex items-center gap-3 w-full md:w-auto">
                            <Link 
                                href={`/p/${project.slug}`}
                                className="zf-button-outline flex-1 md:flex-none flex items-center justify-center gap-2 text-[12px] py-3 px-6"
                            >
                                <Eye className="w-4 h-4" />
                                <span>View</span>
                            </Link>
                            {isOwner && (
                                <Link 
                                    href={`/dashboard/edit/${project.slug}`}
                                    className="zf-button flex-1 md:flex-none flex items-center justify-center gap-2 text-[12px] py-3 px-6"
                                >
                                    <Edit className="w-4 h-4" />
                                    <span>Edit</span>
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
