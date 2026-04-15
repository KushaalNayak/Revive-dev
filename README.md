# revive.dev

> A platform that breathes new life into abandoned and idle open-source GitHub repositories — by connecting their original owners with developers who want to adopt, contribute, or revive them.

---

## What is revive.dev?

Many open-source projects get abandoned midway — not because the idea was bad, but because life gets in the way. **revive.dev** is a community-driven platform that makes it easy to:

- **List** your stalled or unfinished GitHub repositories for others to discover
- **Explore** idle open-source repos from GitHub's public archive
- **Request** to adopt or contribute to a project
- **Get AI-powered diagnostics** on why a project stalled and how to revive it
- **Escalate** to admins when repo owners are unresponsive

---

## Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | Next.js 16 (App Router) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS v4, shadcn/ui, Radix UI |
| **Database** | PostgreSQL |
| **ORM** | Prisma |
| **Auth** | NextAuth.js v4 (GitHub OAuth) |
| **AI** | Google Gemini API (optional) |
| **Email** | Resend |
| **Deployment** | Vercel / Docker |

---

## Project Structure

```
.
├── app/                    # Next.js App Router (pages & API routes)
│   ├── admin/              # Admin panel for managing escalation tickets
│   ├── dashboard/          # User dashboard for listings and requests
│   ├── explore/            # Browse and discover repos
│   ├── login/              # Authentication page
│   └── p/                  # Public project detail pages
├── frontend/
│   ├── components/         # Reusable UI components
│   ├── assets/             # Static assets
│   ├── styles/             # Global styles
│   └── lib/                # Frontend utilities
└── backend/
    ├── actions/            # Next.js Server Actions (API logic)
    ├── prisma/             # Prisma schema, migrations, and seed
    ├── lib/                # Server-side utilities (auth, db, AI)
    └── types/              # Shared TypeScript types
```

---

## Features

- 🔐 **GitHub OAuth** — Sign in instantly with your GitHub account
- 📋 **List a Project** — Import any of your public repos and describe what help you need
- 🔍 **Explore** — Browse community-listed projects or search GitHub's global archive
- 🤝 **Adopt / Contribute** — Request to take over or help with a project
- 🤖 **AI Diagnostics** — Gemini-powered analysis: why did the project stall? What's the revival roadmap?
- 💾 **Save Projects** — Bookmark interesting repos for later
- 📬 **Email Notifications** — Owners get notified of new requests via Resend
- 🎫 **Admin Escalation** — Escalate unresponsive owners via a support ticket system
- 🐳 **Docker Ready** — Multi-stage Dockerfile for production deployments

---

## Getting Started

### Prerequisites

- Node.js 20+
- PostgreSQL database
- A [GitHub OAuth App](https://github.com/settings/developers)

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/revive-dev.git
cd revive-dev
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Copy the example file and fill in your values:

```bash
cp .env.example .env
```

| Variable | Description |
|---|---|
| `DATABASE_URL` | PostgreSQL connection string |
| `NEXTAUTH_URL` | Full URL where the app runs (e.g. `http://localhost:3001`) |
| `NEXTAUTH_SECRET` | Random secret — generate with `openssl rand -base64 32` |
| `GITHUB_CLIENT_ID` | From your GitHub OAuth App |
| `GITHUB_CLIENT_SECRET` | From your GitHub OAuth App |
| `RESEND_API_KEY` | For sending notification emails |
| `EMAIL_FROM` | Verified sender address in Resend |
| `ADMIN_EMAILS` | Comma-separated emails that can access `/admin/tickets` |
| `GITHUB_TOKEN` *(optional)* | Personal access token for higher API rate limits |
| `GEMINI_API_KEY` *(optional)* | Enables AI-powered diagnostics via Google Gemini |

> **GitHub OAuth Callback URL:** `{NEXTAUTH_URL}/api/auth/callback/github`

### 4. Set Up the Database

Run Prisma migrations to create all tables:

```bash
npx prisma migrate dev --name init
```

*(Optional)* Seed the database with sample data:

```bash
npx prisma db seed
```

### 5. Start the Development Server

```bash
npm run dev
```

Open [http://localhost:3001](http://localhost:3001) in your browser.

---

## Deployment

### Vercel (Recommended)

1. Push the repo to GitHub
2. Import the project in [Vercel](https://vercel.com)
3. Set the **Root Directory** to `my-app`
4. Add all environment variables in Vercel Project Settings
5. Deploy

### Docker

Build and run using the included multi-stage `Dockerfile`:

```bash
# Build the image
docker build -t revive-dev ./my-app

# Run the container
docker run -p 3000:3000 --env-file ./my-app/.env revive-dev
```

---

## Database Schema Overview

The core models are:

- **User** — GitHub-authenticated users
- **Project** — Listed repositories with metadata, tags, and help categories
- **Request** — Adopt or Contribute requests from other users
- **AIAnalysis** — Gemini-generated diagnostics attached to a project
- **SupportTicket** — Escalation tickets routed to admins
- **Revival** — Tracks active revival efforts on global repos
- **SavedProject / SavedGlobalRepo** — Bookmarked repos

---

## License

[MIT](./LICENSE)
