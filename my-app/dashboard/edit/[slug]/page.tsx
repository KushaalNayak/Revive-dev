import { getProjectBySlug } from "@/backend/actions/projects"
import { ProjectEditForm } from "@/frontend/components/forms/project-edit-form"
import { getServerSession } from "next-auth"
import { authOptions } from "@/backend/lib/auth-options"
import { notFound, redirect } from "next/navigation"

export default async function EditProjectPage({ params }: { params: Promise<{ slug: string }> }) {
    const session = await getServerSession(authOptions)
    if (!session) redirect("/api/auth/signin")

    const { slug } = await params
    const project = await getProjectBySlug(slug)

    if (!project) notFound()

    if (project.ownerId !== session.user.id) {
        redirect("/dashboard")
    }

    return (
        <div className="min-h-screen bg-background relative pb-40 overflow-hidden pt-20">
            {/* Background elements */}
            <div className="fixed inset-0 bg-mesh opacity-20 pointer-events-none -z-10" />
            <div className="fixed top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] pointer-events-none -z-10" />

            <div className="container max-w-4xl py-32 px-4 relative z-10">
                <div className="mb-24 space-y-8 border-l border-primary pl-10">
                    <div className="tech-label-muted flex items-center gap-3">
                        <span className="w-1.5 h-1.5 bg-primary/40 animate-pulse" />
                        <span>PROTOCOL_UPDATE_v1.0</span>
                    </div>
                    <h1 className="text-6xl md:text-8xl font-black tracking-tightest text-white leading-[0.85] uppercase">
                        MANAGE<br />
                        <span className="text-primary glow-text">NODE</span>
                    </h1>
                    <p className="text-white/40 text-[14px] md:text-lg font-mono lowercase max-w-2xl leading-relaxed">
                        &gt; update asset parameters and adjust deployment guidance for potential adopters.
                    </p>
                </div>

                <div className="cyber-panel p-12 md:p-20 relative bg-white/[0.01]">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px] pointer-events-none -mr-32 -mt-32" />

                    <div className="absolute top-8 left-8 tech-label opacity-20 text-[8px]">CONFIGURATION_PANEL</div>

                    <ProjectEditForm project={project} />
                </div>
            </div>
        </div>
    )
}
