import { PrismaClient, ProjectStatus, RequestType, RequestStatus, CompletionStage, AbandonmentReason, HelpType } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    console.log('Start seeding...')

    try {
        // Clean up existing data
        await prisma.request.deleteMany()
        await prisma.supportTicket.deleteMany()
        await prisma.project.deleteMany()
        await prisma.account.deleteMany()
        await prisma.session.deleteMany()
        await prisma.user.deleteMany()

        // Create Users
        const charlie = await prisma.user.create({
            data: {
                name: 'Developer Charlie',
                email: 'charlie@example.com',
                username: 'charlie_code',
                image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Charlie',
            },
        })

        const kushaal = await prisma.user.create({
            data: {
                name: 'Kushaal Dummy',
                email: 'kushaal.seeded@example.com',
                username: 'KushaalNayak_seeded',
                image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Kushaal',
            },
        })

        // Create REAL Projects based on user request
        const project1 = await prisma.project.create({
            data: {
                ownerId: kushaal.id,
                repoUrl: 'https://github.com/expressjs/express',
                repoFullName: 'expressjs/express',
                slug: 'expressjs-express',
                title: 'Express.js',
                shortDescription: 'The standard web framework for Node.js. Looking for long-term maintainers and security triagers.',
                status: ProjectStatus.LOOKING_FOR_HELP,
                completionStage: CompletionStage.NEARLY_COMPLETE,
                abandonmentReason: AbandonmentReason.SOLO_LIMIT,
                helpNeeded: [HelpType.MAINTAINER, HelpType.BACKEND, HelpType.DOCS],
                tags: ['nodejs', 'web', 'framework', 'api'],
                language: 'JavaScript',
                stars: 64000,
                handoffWhat: 'Full governance and maintenance responsibility.',
                handoffSetup: 'Clone, npm install, npm test.',
                handoffKnownIssues: 'Large backlog of legacy PRs needing review.',
                handoffNotes: 'We need someone who can lead the v5.x stable release.',
            },
        })

        const project2 = await prisma.project.create({
            data: {
                ownerId: charlie.id,
                repoUrl: 'https://github.com/request/request',
                repoFullName: 'request/request',
                slug: 'request-request',
                title: 'Request',
                shortDescription: 'Simplified HTTP client. This project is deprecated but needs critical security maintenance.',
                status: ProjectStatus.LOOKING_FOR_HELP,
                completionStage: CompletionStage.NEARLY_COMPLETE,
                abandonmentReason: AbandonmentReason.ARCHIVED,
                helpNeeded: [HelpType.BACKEND, HelpType.MAINTAINER],
                tags: ['http', 'client', 'deprecated', 'legacy'],
                language: 'JavaScript',
                stars: 25800,
                handoffWhat: 'Security patch maintenance rights.',
                handoffSetup: 'Legacy node version support required.',
                handoffKnownIssues: 'Architecture is not modern, hard to refactor.',
                handoffNotes: 'We officially deprecated it, but millions still use it. Looking for a security steward.',
            },
        })

        const project3 = await prisma.project.create({
            data: {
                ownerId: kushaal.id,
                repoUrl: 'https://github.com/chartjs/Chart.js',
                repoFullName: 'chartjs/Chart.js',
                slug: 'chartjs-chartjs',
                title: 'Chart.js',
                shortDescription: 'Simple HTML5 charts using the canvas tag. Always looking for help with accessibility and performance.',
                status: ProjectStatus.LOOKING_FOR_HELP,
                completionStage: CompletionStage.NEARLY_COMPLETE,
                abandonmentReason: AbandonmentReason.SOLO_LIMIT,
                helpNeeded: [HelpType.FRONTEND, HelpType.DOCS],
                tags: ['charts', 'canvas', 'data-viz', 'javascript'],
                language: 'TypeScript',
                stars: 62000,
                handoffWhat: 'Maintainer status for focused modules.',
                handoffSetup: 'Standard TypeScript setup.',
                handoffKnownIssues: 'Complex canvas rendering edge cases.',
                handoffNotes: 'Great for anyone interested in high-performance web graphics.',
            },
        })

        const project4 = await prisma.project.create({
            data: {
                ownerId: charlie.id,
                repoUrl: 'https://github.com/visionmedia/page.js',
                repoFullName: 'visionmedia/page.js',
                slug: 'visionmedia-pagejs',
                title: 'Page.js',
                shortDescription: 'Micro client-side router inspired by the Express router. Looking for a lead maintainer.',
                status: ProjectStatus.LOOKING_FOR_HELP,
                completionStage: CompletionStage.NEARLY_COMPLETE,
                abandonmentReason: AbandonmentReason.LOST_INTEREST,
                helpNeeded: [HelpType.MAINTAINER, HelpType.BACKEND],
                tags: ['router', 'client-side', 'express-like', 'browser'],
                language: 'JavaScript',
                stars: 8000,
                handoffWhat: 'Repository and NPM ownership.',
                handoffSetup: 'Simple node environment.',
                handoffKnownIssues: 'Minimalist by design, but needs v2.0 roadmap.',
                handoffNotes: 'Visionmedia is no longer active here. It needs a new visionary.',
            },
        })

        console.log('Seeding finished with real-world repositories.')
    } catch (error) {
        console.error('Error seeding database:', error)
        throw error
    }
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
