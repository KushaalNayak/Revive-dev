import { getServerSession } from "next-auth/next"
import { authOptions } from "@/backend/lib/auth-options"
import { redirect } from "next/navigation"
import { Avatar, AvatarFallback, AvatarImage } from "@/frontend/components/ui/avatar"

export default async function ProfilePage() {
    const session = await getServerSession(authOptions)

    if (!session) {
        redirect("/login")
    }

    const { user } = session

    return (
        <div className="max-w-4xl mx-auto py-12 px-4">
            <h1 className="zf-heading text-4xl mb-12">User Profile</h1>
            
            <div className="zf-card p-10 flex flex-col md:flex-row gap-10 items-center md:items-start text-white">
                <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#00FF66] to-[#00FF66]/20 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                    <Avatar className="h-32 w-32 relative border-2 border-[#373737]">
                        <AvatarImage src={user?.image || ""} className="object-cover" />
                        <AvatarFallback className="text-4xl">{user?.name?.[0]}</AvatarFallback>
                    </Avatar>
                </div>

                <div className="space-y-6 flex-1 text-center md:text-left">
                    <div>
                        <h2 className="text-3xl font-bold">{user?.name}</h2>
                        <p className="text-[#B9B9B9] mt-1">{user?.email}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="p-4 bg-white/[0.03] border border-[#373737] rounded-[16px]">
                            <p className="text-[10px] text-[#666] font-bold uppercase tracking-wider mb-1">Account Type</p>
                            <p className="text-[14px] font-medium text-[#00FF66]">GitHub Provider</p>
                        </div>
                        <div className="p-4 bg-white/[0.03] border border-[#373737] rounded-[16px]">
                            <p className="text-[10px] text-[#666] font-bold uppercase tracking-wider mb-1">Status</p>
                            <p className="text-[14px] font-medium text-[#00FF66]">Verified Developer</p>
                        </div>
                    </div>

                    <div className="pt-6 border-t border-[#373737]">
                        <p className="text-[12px] text-[#B9B9B9] italic">
                            Currently showing data from your GitHub profile. You can manage your linked repositories from the Dashboard.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
