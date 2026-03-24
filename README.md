# AI Insights Hub (Melanin Connect)

Front-end for a content hub: articles, research, podcast, resources, and newsletter. Built with React, Vite, TypeScript, and Tailwind CSS.

## Prerequisites

- [Node.js](https://nodejs.org/) 18+ (includes npm)

## Setup

```bash
npm install
```

## Scripts

| Command | Description |
|--------|-------------|
| `npm run dev` | Start dev server (default: [http://localhost:8080](http://localhost:8080)) |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Run ESLint |
| `npm run test` | Run Vitest once |
| `npm run test:watch` | Vitest in watch mode |

## Stack

- **React 18** + **TypeScript**
- **Vite** (React SWC plugin)
- **React Router** — main content (`/`, `/articles`, `/research`, `/podcast`, `/resources`, `/newsletter`, `/blog/:slug`), topics (`/topics/:topicSlug`), company (`/about`, `/team`, `/careers`, `/contact`), `/rss`
- **Tailwind CSS** — styling and design tokens in `src/index.css`
- **Framer Motion** — page/section motion
- **Radix UI** — toast and tooltip primitives (shadcn-style components under `src/components/ui/`)

## Project layout

| Path | Purpose |
|------|---------|
| `src/config/` | Site name, header nav, footer links, topic route map |
| `src/layout/` | `PageLayout` (nav + main + footer), `BlogNavbar`, `BlogFooter`, `StaticPageSection` |
| `src/components/ui/` | shadcn-style primitives (toast, tooltip, sonner) |
| `src/components/blog/` | `BlogGrid`, blog search modal, article engagement |
| `src/components/home/` | Home hero and newsletter CTA sections |
| `src/pages/` | Top-level routes; `pages/company/` (About, Team, Careers, Contact); `pages/topics/` (topic hub) |
| `src/data/` | Blog posts and helpers |
| `src/hooks/` | `useBlogEngagement`, toast hook |
| `public/` | Static assets (e.g. logo) |

## Environment

No environment variables are required for a local static build. Add a `.env` and Vite `import.meta.env` usage if you later connect to APIs.
