import { NextAuthOptions } from "next-auth"
import GithubProvider from "next-auth/providers/github"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { prisma } from "@/backend/lib/prisma"
import { Adapter } from "next-auth/adapters"

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma) as Adapter,
    secret: process.env.NEXTAUTH_SECRET,
    debug: process.env.NODE_ENV === "development",
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_CLIENT_ID || "",
            clientSecret: process.env.GITHUB_CLIENT_SECRET || "",
            allowDangerousEmailAccountLinking: true,
            authorization: {
                params: {
                    scope: "read:user user:email public_repo",
                },
            },
            profile(profile) {
                return {
                    id: String(profile.id),
                    name: profile.name || profile.login || "GitHub User",
                    username: profile.login,
                    email: profile.email || `${profile.id}+${profile.login}@users.noreply.github.com`,
                    image: profile.avatar_url,
                }
            },
        }),
    ],
    session: {
        strategy: "jwt",
    },
    callbacks: {
        async jwt({ token, user, account, profile }) {
            if (user) {
                token.id = user.id
                if ('username' in user && user.username) {
                    token.username = user.username
                }
            }

            if (profile && typeof profile === "object" && "login" in profile) {
                token.username = profile.login as string
            }

            if (account) {
                token.accessToken = account.access_token

                const userId = (user?.id || token.id || token.sub) as string
                if (userId && account.access_token) {
                    try {
                        await prisma.account.upsert({
                            where: {
                                provider_providerAccountId: {
                                    provider: account.provider,
                                    providerAccountId: account.providerAccountId,
                                },
                            },
                            update: {
                                access_token: account.access_token,
                                refresh_token: account.refresh_token,
                                expires_at: account.expires_at,
                                scope: account.scope,
                                token_type: account.token_type,
                                id_token: account.id_token,
                                session_state: account.session_state,
                            },
                            create: {
                                userId,
                                provider: account.provider,
                                providerAccountId: account.providerAccountId,
                                type: account.type,
                                access_token: account.access_token,
                                refresh_token: account.refresh_token,
                                expires_at: account.expires_at,
                                scope: account.scope,
                                token_type: account.token_type,
                                id_token: account.id_token,
                                session_state: account.session_state,
                            },
                        })
                    } catch (err) {
                        console.error("Failed to sync GitHub account token to database:", err)
                    }
                }
            }

            return token
        },
        async session({ session, token }) {
            if (session.user && token) {
                session.user.id = token.id as string
                if (token.username) {
                    session.user.username = token.username as string
                }
            }
            if (token.accessToken) {
                session.accessToken = token.accessToken as string
            }
            return session
        },
    },
    pages: {
        signIn: '/login',
    },
}
