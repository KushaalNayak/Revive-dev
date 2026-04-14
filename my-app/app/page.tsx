import { getExploreProjects } from "@/backend/actions/projects"
import Link from "next/link"
import { Search, Github, Activity, Shield, Users, Radar } from "lucide-react"
import { getServerSession } from "next-auth"
import { authOptions } from "@/backend/lib/auth-options"
import { ProjectStatus } from "@prisma/client"

export default async function Home() {
  const projects = await getExploreProjects({ status: ProjectStatus.LOOKING_FOR_HELP })
  const session = await getServerSession(authOptions)

  return (
    <div className="flex flex-col min-h-screen bg-[#0B0B0B] text-white relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-[rgba(22,57,137,0.1)] blur-[150px] rounded-full pointer-events-none z-0" />

      <div className="flex-1 relative z-10">
          {/* Hero Section */}
          <section className="py-32 px-6 border-b-[0.8px] border-[#373737] text-center flex flex-col items-center">
            <div className="max-w-[1000px] flex flex-col items-center">
                <h1 className="text-5xl md:text-8xl font-extrabold tracking-tight mb-8 zf-heading uppercase text-white leading-[1.1]">
                Give abandoned code <br/> a <span className="text-[#00FF66]">second chance.</span>
                </h1>
                <p className="text-[#B9B9B9] text-xl md:text-2xl max-w-3xl mb-12 leading-relaxed">
                  Revive is the developer platform for discovering, adopting, and resurrecting high-potential open-source repositories that maintainers have left behind.
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-6">
                     <Link href="/explore" className="zf-button text-[18px] px-10 py-5 w-full sm:w-auto">
                        Start exploring
                     </Link>
                     <Link href="/explore?tab=global" className="zf-button-outline text-[18px] px-10 py-5 w-full sm:w-auto flex items-center justify-center gap-3">
                         <Radar className="w-5 h-5 text-[#00FF66]" /> Global Scanner
                     </Link>
                </div>
            </div>
          </section>

          {/* Value Props Section */}
          <section className="py-24 px-6 md:px-10 bg-[#0B0B0B]">
             <div className="max-w-[1400px] mx-auto">
                 <div className="grid lg:grid-cols-3 gap-8">
                     <div className="zf-card p-10">
                         <div className="w-14 h-14 bg-[rgba(0,255,102,0.1)] border-[0.8px] border-[rgba(0,255,102,0.2)] rounded-full flex items-center justify-center mb-6">
                             <Activity className="w-6 h-6 text-[#00FF66]" />
                         </div>
                         <h3 className="text-2xl font-bold mb-4 text-white zf-heading">Discover Potential</h3>
                         <p className="text-[#B9B9B9] text-[16px] leading-relaxed">Find high-quality projects that are no longer maintained but still heavily relied upon by the community.</p>
                     </div>
                     <div className="zf-card p-10">
                         <div className="w-14 h-14 bg-[rgba(255,255,255,0.05)] border-[0.8px] border-[#373737] rounded-full flex items-center justify-center mb-6">
                             <Users className="w-6 h-6 text-white" />
                         </div>
                         <h3 className="text-2xl font-bold mb-4 text-white zf-heading">Build Reputation</h3>
                         <p className="text-[#B9B9B9] text-[16px] leading-relaxed">Take over ownership of established projects, squash bugs, and instantly gain an audience of grateful developers.</p>
                     </div>
                     <div className="zf-card p-10">
                         <div className="w-14 h-14 bg-[rgba(255,255,255,0.05)] border-[0.8px] border-[#373737] rounded-full flex items-center justify-center mb-6">
                             <Shield className="w-6 h-6 text-white" />
                         </div>
                         <h3 className="text-2xl font-bold mb-4 text-white zf-heading">Ensure Security</h3>
                         <p className="text-[#B9B9B9] text-[16px] leading-relaxed">Update dependencies and patch security vulnerabilities in unmaintained packages that everyone still uses.</p>
                     </div>
                 </div>
             </div>
          </section>

          {/* Quick Search */}
          <section className="py-32 px-6 border-t-[0.8px] border-[#373737] bg-[#171717] relative overflow-hidden">
             {/* Subdued glow */}
             <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[600px] h-[300px] bg-[rgba(0,255,102,0.15)] blur-[100px] rounded-full pointer-events-none" />

             <div className="max-w-[1400px] mx-auto text-center flex flex-col items-center relative z-10">
                 <h2 className="text-4xl md:text-5xl font-extrabold mb-10 text-white zf-heading">Find a project to adopt</h2>
                 <form action="/explore" method="GET" className="flex w-full max-w-3xl items-center bg-[#0B0B0B] border-[0.8px] border-[#373737] rounded-[16px] px-6 py-5 focus-within:border-[#00FF66] transition-colors relative z-20">
                    <Search className="w-6 h-6 text-[#B9B9B9] mr-4" />
                    <input type="hidden" name="tab" value="global" />
                    <input name="search" type="text" placeholder="Search by repository name, language, or topic..." className="bg-transparent border-none outline-none text-white w-full text-[18px] placeholder:text-[#B9B9B9]" />
                 </form>
             </div>
          </section>
      </div>

      <footer className="border-t-[0.8px] border-[#373737] py-12 text-center text-[#B9B9B9] text-[14px] bg-[#0B0B0B] relative z-20">
          <div className="max-w-[1400px] mx-auto px-6 flex flex-col justify-between items-center gap-6 md:flex-row">
              <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[rgba(255,255,255,0.05)] border-[0.8px] border-[#373737] rounded-full flex items-center justify-center">
                      <Github className="w-4 h-4 text-white" />
                  </div>
                   <span className="font-bold tracking-tight text-white">Revive.dev <span className="opacity-40">© 2026</span></span>
              </div>
              <div className="flex flex-wrap justify-center gap-8 font-semibold tracking-wide">
                  <a href="#" className="hover:text-[#00FF66] transition-colors">Terms</a>
                  <a href="#" className="hover:text-[#00FF66] transition-colors">Privacy</a>
                  <a href="#" className="hover:text-[#00FF66] transition-colors">Security</a>
                  <a href="#" className="hover:text-[#00FF66] transition-colors">Status</a>
                  <a href="https://github.com/revivedev" className="hover:text-[#00FF66] transition-colors">GitHub</a>
              </div>
          </div>
      </footer>
    </div>
  )
}
