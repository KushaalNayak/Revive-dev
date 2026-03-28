# revive.dev

A platform that helps developers revive idle/untouched GitHub open-source repositories.

## Tech Stack

- **Frontend**: Next.js (App Router), TypeScript, Tailwind CSS, shadcn/ui.
- **Backend**: Next.js Server Actions, Prisma ORM, PostgreSQL.
- **Auth**: NextAuth.js (Auth.js) with GitHub.
- **Email**: Resend.

## Project Structure

- **`/frontend`**: UI components, design system, and static assets.
- **`/backend`**: Server actions, data models (Prisma), AI logic, and type definitions.
- **`/app`**: Next.js App Router for navigation and API routes.
- **`/public`**: Public static files.

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Environment Variables

Create a `.env` file based on `.env.example`:

```bash
cp .env.example .env
```

Fill in the required values:
- `DATABASE_URL`: PostgreSQL connection string (the Prisma schema uses PostgreSQL, not MongoDB).
- `NEXTAUTH_URL`: Must match how you access the app (local dev uses port **3001** — see `npm run dev`).
- `GITHUB_CLIENT_ID` & `GITHUB_CLIENT_SECRET`: From a [GitHub OAuth App](https://github.com/settings/developers) (callback URL: `{NEXTAUTH_URL}/api/auth/callback/github`).
- `NEXTAUTH_SECRET`: Generate using `openssl rand -base64 32` (or any strong random string).
- `RESEND_API_KEY` & `EMAIL_FROM`: For admin “remind owner” emails (use a verified domain/sender in Resend).
- `ADMIN_EMAILS`: Comma-separated emails; must **exactly** match the signed-in GitHub primary email to open `/admin/tickets`.
- `GITHUB_TOKEN` (optional): Personal access token for higher GitHub Search API limits on the Explore global tab.
- `GEMINI_API_KEY` (optional): Enables Gemini-backed diagnostics text; without it, the app uses built-in heuristics.

### 3. Database Setup

Ensure your PostgreSQL database is running, then run migrations:

```bash
npx prisma migrate dev --name init
```

This will create the tables and generate the Prisma Client.

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3001](http://localhost:3001) in your browser (port is set in `package.json`).

## Features

- **Authentication**: GitHub Login.
- **Explore**: Browse projects looking for maintainers or contributors.
- **Dashboard**: Manage your listings and requests.
- **List Project**: Import public repos from GitHub easily.
- **Requests**: Adopt or Contribute workflows.
- **Admin**: Escalation system for unresponsive owners.

## Deployment

The app is ready for Vercel. Connect your repository and add the environment variables in Vercel Project Settings.
