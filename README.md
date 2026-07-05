# <p align="center"><img src="./public/icon.png" width="48" height="48" alt="revive.dev Logo" style="vertical-align: middle; margin-right: 12px;" /> revive.dev</p>

<p align="center">
  <strong>The Digital Inheritance Protocol for Open Source Code</strong>
</p>

<p align="center">
  <a href="https://github.com/KushaalNayak/Revive-dev/stargazers"><img src="https://img.shields.io/github/stars/KushaalNayak/Revive-dev?style=for-the-badge&color=00FF66&labelColor=0D0D0D" alt="Stars"></a>
  <a href="https://github.com/KushaalNayak/Revive-dev/issues"><img src="https://img.shields.io/github/issues/KushaalNayak/Revive-dev?style=for-the-badge&color=ff3366&labelColor=0D0D0D" alt="Issues"></a>
  <a href="./LICENSE"><img src="https://img.shields.io/github/license/KushaalNayak/Revive-dev?style=for-the-badge&color=00e5ff&labelColor=0D0D0D" alt="License"></a>
  <a href="https://www.linkedin.com/in/kushaalbadavath"><img src="https://img.shields.io/badge/LINKEDIN-Kushaal_Badavath-blue?style=for-the-badge&logo=linkedin&color=0077B5&labelColor=0D0D0D" alt="LinkedIn"></a>
</p>

---

## ⚡ What is revive.dev?

Every day, countless brilliant open-source projects fall idle—not because their ideas are weak, but because time, resources, or interests shift. **revive.dev** is a community-driven protocol designed to combat open-source decay. It connects original project creators with passionate developers eager to adopt, maintain, or revive stagnating code.

### The Problem vs. The Protocol
* **The Decay:** High-potential code sits in static GitHub repositories, gathering dust and turning into technical debt.
* **The Revival:** Original owners list their repos, specify transition goals, and get matched with new caretakers—complete with AI-assisted diagnostics to build a transition roadmap.

---

## 🛠️ The Tech Stack

Built for maximum velocity, modern design aesthetics, and type-safety.

| Layer | Technology | Role |
| :--- | :--- | :--- |
| **Framework** | **Next.js 16 (App Router)** | Full-stack architecture & Server Actions |
| **Language** | **TypeScript** | Strict, end-to-end type safety |
| **Database** | **PostgreSQL** | Dynamic relational data store |
| **ORM** | **Prisma** | Modern type-safe database querying & migrations |
| **Styling** | **Tailwind CSS v4 & shadcn/ui** | Vibrant, responsive dark-mode first design |
| **Authentication**| **NextAuth.js v4** | Instant secure GitHub OAuth sign-in |
| **AI Diagnostics**| **Google Gemini API** | Automated repository code health audits |
| **Mailing** | **Resend** | Automated owner notifications for adoption requests |
| **Deployment** | **Docker & Vercel** | Multi-stage Docker ready, optimized Vercel builds |

---

## ✨ Features

* 🔑 **GitHub OAuth Integration** — Start exploring or listing projects in seconds.
* 📋 **Code Hand-off Protocol** — Standardized listing workflows defining handoff instructions, known issues, and next steps.
* 🔍 **Global Discoverability** — Search community projects or scan GitHub's massive public archive natively.
* 🤝 **Adoption & Collaboration Requests** — Apply to adopt a repository with structured messages, triggering automated email updates.
* 🤖 **AI Repository Diagnostics** — Auto-detects package updates, codebase structural complexity, and outlines step-by-step revival roadmaps via Gemini.
* 📬 **Ticket Escalation System** — Integrated admin support tickets to escalate unresponsive repository owners.
* 💾 **Favorites & Collections** — Bookmark repositories you want to monitor or contribute to later.

---

## 📂 Project Structure

```yml
revive-dev/
├── app/                    # Next.js App Router (Client pages & Server endpoints)
│   ├── admin/              # Support ticket administration panel
│   ├── dashboard/          # Listing creation, profile edit, and request tracker
│   ├── explore/            # Repository discovery hub (Community & Global Scanner)
│   ├── login/              # Secure auth entrypoint
│   └── p/                  # Dynamic public profile pages for listed projects
├── frontend/               # UI components, layout design, and presentation
│   ├── components/         # Reusable premium components & shadcn controls
│   ├── assets/             # Static graphics, logos, and visuals
│   └── styles/             # Global Tailwind stylesheets and font definitions
└── backend/                # Core logic, server action controllers, and database configuration
    ├── actions/            # Next.js Server Actions (API controller logic)
    ├── prisma/             # PostgreSQL database schema, migrations, and seed script
    └── lib/                # Shared utilities (auth options, db client, Gemini AI agent)
```

---

## 🚀 Getting Started

### Prerequisites
* **Node.js 20+**
* **PostgreSQL Instance**
* **GitHub Developer Account** (for OAuth Application credentials)

### 1. Clone & Enter
```bash
git clone https://github.com/KushaalNayak/Revive-dev.git
cd Revive-dev/revive-dev
```

### 2. Install Project Dependencies
```bash
npm install
```

### 3. Configure the Environment
Create your local environment file:
```bash
cp .env.example .env
```
Fill in the configuration details inside `.env`:
* Configure `DATABASE_URL` with your PostgreSQL connection string.
* Configure `GITHUB_CLIENT_ID` and `GITHUB_CLIENT_SECRET` from your GitHub Developer settings.
* Set `NEXTAUTH_SECRET` (generate using `openssl rand -base64 32`).
* Provide `GEMINI_API_KEY` to enable AI repository scanning features.

### 4. Database Setup & Seeding
Deploy database schemas and seed test project entries:
```bash
npx prisma migrate dev --name init
npx prisma db seed
```

### 5. Launch the App
```bash
npm run dev
```
Explore the dashboard locally at **[http://localhost:3001](http://localhost:3001)**.

---

## 🛡️ License

This project is open-source and licensed under the [MIT License](./LICENSE).

---

<p align="center">
  Built with ❤️ by <a href="https://www.linkedin.com/in/kushaalbadavath">Kushaal Nayak</a>
</p>
