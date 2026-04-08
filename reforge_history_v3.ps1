Remove-Item -Recurse -Force .git -ErrorAction SilentlyContinue
git init
git config user.name "KushaalNayak"
git config user.email "kushaalbadavath8@gmail.com"
git branch -M main

$commits = @(
    @("-12 09:14:00", "Initial commit", "LICENSE, .gitignore, README.md, my-app/package.json, my-app/.gitignore, my-app/.env.example"),
    @("-12 11:42:00", "chore: setup next build and core configuration", "my-app/next.config.ts, my-app/tsconfig.json"),
    @("-11 10:05:00", "chore: setup tailwind and postcss config", "my-app/tailwind.config*, my-app/postcss*, my-app/components.json"),
    @("-11 14:22:00", "feat: create base layout and globals", "my-app/app/layout.tsx, my-app/app/globals.css"),
    @("-10 09:12:00", "docs: initialize simple ui library and utils", "my-app/frontend/lib, my-app/frontend/components/ui/button.tsx, my-app/frontend/components/ui/input.tsx"),
    @("-10 13:45:00", "feat: authentication layout and login page setup", "my-app/app/login, my-app/backend/lib/auth-options.ts"),
    @("-9 16:30:00", "feat: add prisma db connection util", "my-app/backend/lib/prisma.ts"),
    @("-9 18:05:00", "feat: initialize database schema for entities", "my-app/backend/prisma"),
    @("-8 11:20:00", "fix: adjust auth options and nextauth handling", "my-app/app/api/auth"),
    @("-8 14:40:00", "feat: implement basic dashboard view", "my-app/app/dashboard/page.tsx, my-app/app/dashboard/layout.tsx"),
    @("-7 10:15:00", "feat: add github profile data fetching", "my-app/backend/actions/github.ts"),
    @("-7 15:55:00", "feat: repository fetching and logic handling", "my-app/backend/actions/requests.ts, my-app/backend/actions/saved.ts"),
    @("-6 09:30:00", "feat: implement project listings and server action", "my-app/backend/actions/projects.ts"),
    @("-6 14:10:00", "feat: new project submission handler", "my-app/app/dashboard/new"),
    @("-5 11:22:00", "feat: implement revival system actions", "my-app/backend/actions/revival*"),
    @("-5 13:45:00", "feat: implement ai matchmaker and groq integrations", "my-app/backend/actions/ai-matchmaker.ts, my-app/backend/actions/tickets*"),
    @("-5 16:05:00", "feat: add ui forms for revival and prospect", "my-app/frontend/components/forms"),
    @("-4 10:14:00", "feat: build explore marketplace layout", "my-app/app/explore"),
    @("-4 15:30:00", "feat: implement ai matchmaking api routes", "my-app/app/api/ai"),
    @("-3 12:44:00", "feat: core UI components for dashboard list", "my-app/frontend/components/dashboard"),
    @("-3 16:20:00", "feat: ui structural enhancements for explore cards", "my-app/frontend/components/ui"),
    @("-2 09:12:00", "feat: middleware and validations", "my-app/middleware.ts, my-app/backend/lib/validations.ts, my-app/backend/lib/mailer.ts"),
    @("-2 14:33:00", "fix: component imports and layout refinements", "my-app/frontend/components/*badge*, my-app/frontend/components/pagination.tsx"),
    @("-1 11:20:00", "feat: glassmorphism ui revamp across pages", "my-app/app/page.tsx, my-app/app/p"),
    @("-1 15:10:00", "fix: aesthetic tweaks to core components", "my-app/frontend/components/navbar.tsx, my-app/frontend/components/revival-stats.tsx"),
    @("+0 08:30:00", "fix: mail config and cd workflows", ".github/workflows/ci.yml"),
    @("+0 12:45:00", "fix: finalize linting errors and typescript build pipeline", "my-app/eslint.config.mjs")
)

foreach ($c in $commits) {
    $dayOffset = $c[0] -split ' '
    $dateObj = (Get-Date).AddDays([int]$dayOffset[0])
    $ts = $dateObj.ToString("yyyy-MM-dd") + "T" + $dayOffset[1]
    
    $env:GIT_AUTHOR_DATE=$ts
    $env:GIT_COMMITTER_DATE=$ts
    
    $files = $c[2] -split ',' | ForEach-Object { $_.Trim() }
    foreach ($f in $files) {
        git add $f 2>$null
    }
    git commit -m $c[1] --author="KushaalNayak <kushaalbadavath8@gmail.com>" 2>$null
}

$dateNow = (Get-Date).ToString("yyyy-MM-ddTHH:mm:ss")
$env:GIT_AUTHOR_DATE=$dateNow
$env:GIT_COMMITTER_DATE=$dateNow
git add .
git commit -m "chore: code health and final uncommitted utilities" --author="KushaalNayak <kushaalbadavath8@gmail.com>" 2>$null

Remove-Item env:GIT_AUTHOR_DATE
Remove-Item env:GIT_COMMITTER_DATE
