# Melanin Connect (`melaninblog`)

**Melanin Connect** is a single-page editorial and media site focused on **Black voices in technology and innovation**. This repository (`melaninblog`) is the **front-end application**: a React + Vite SPA that presents long-form articles, a research section, a podcast hub, downloadable resources, newsletter CTAs, and lightweight company pages—without requiring a backend for the core reading experience.

The product goal is to combine **magazine-style storytelling** (typography, hero imagery, motion) with **practical discovery** (search, topic hubs, related posts) so readers can browse by format (articles vs. research vs. podcast) or by theme (Machine Learning, Entrepreneurship, AI Ethics, Career).

---

## What the app actually does

### Content surfaces

| Area | Behavior |
|------|----------|
| **Home** | Full-width hero, “Latest Articles” grid driven from static post data, newsletter signup strip. |
| **Articles** | Full catalog of posts from `src/data/blogData.ts`. |
| **Research** | Curated subset of posts (`researchPosts`) plus a dedicated hero and “focus areas” section—positioned as deeper analysis. |
| **Podcast** | Standalone page with episode list and embedded HTML5 `<audio>` players (remote sample URLs in code). |
| **Resources** | Download cards linking to placeholder PDFs—pattern for gated or static file delivery later. |
| **Newsletter** | Marketing page with signup UI and “past issues” list (static copy). |
| **Article detail** (`/blog/:slug`) | Renders markdown-like blocks from string content (headings via `## ` lines), hero image, author meta, **likes + comments** (client-only persistence), then **related articles**. |
| **Topic hubs** (`/topics/:topicSlug`) | Maps URL slugs (e.g. `machine-learning`) to **category labels** in config; lists posts filtered by `getPostsByCategory`. |
| **Company** | `/about`, `/team`, `/careers`, `/contact`—static copy; contact form is UI-only until wired to an API. |
| **RSS** | `/rss` explains how a real feed could be exposed (e.g. `public/rss.xml` or a build step)—no XML feed generated yet. |
| **404** | Uses the same global layout (nav + footer) as other routes. |

### Global UX

- **Layout**: `PageLayout` wraps almost every route: fixed **BlogNavbar**, scrollable **main**, **BlogFooter**. Centralizes chrome so individual pages only supply their body.
- **Search**: Header opens a **modal** that filters posts by title, excerpt, category, or author. **Ctrl+K / ⌘+K** toggles it; mobile menu includes “Search articles”.
- **Theming**: `next-themes` + `ThemeProvider` supports system/light/dark class strategy; toasts (Radix + Sonner) sit at the root.
- **Performance**: Route components are **lazy-loaded** with `React.lazy` and a shared suspense fallback spinner. Vite manual chunks split **vendor** (React, Router, Framer Motion) from app code.

### Data & persistence

- **Source of truth for posts**: `src/data/blogData.ts`—typed `BlogPost[]` with slug, imagery (bundled JPG imports), category, author, dates, and long `content` strings. Helpers: `getPostBySlug`, `getPostsByCategory`, `searchBlogPosts`, `researchPosts`.
- **No server for engagement**: Likes and comments on article pages are stored in **`localStorage`** under a single key (`melanin-connect-blog-engagement`), keyed by post slug. This is ideal for demos and prototypes; it is **not** shared across devices or users.

### Configuration

- **`src/config/site.ts`**: Single place for **site name**, **header nav**, **footer columns** (content links, topics, company, social), and **topic slug → category** mapping. Footer social links for Twitter/LinkedIn/Instagram are placeholders to public URLs; RSS points internally to `/rss`.

---

## Tech stack

| Layer | Choice |
|-------|--------|
| **Build** | Vite 5, `@vitejs/plugin-react-swc` |
| **UI** | React 18, TypeScript |
| **Routing** | `react-router-dom` v6 (declarative routes, `useParams` for blog + topics) |
| **Styling** | Tailwind CSS 3, CSS variables in `src/index.css`, `tailwindcss-animate` |
| **Components** | Radix primitives for toast/tooltip; **Sonner** for stacked toasts; **lucide-react** icons |
| **Motion** | Framer Motion for page/section transitions |
| **Utilities** | `clsx` + `tailwind-merge` via `src/lib/utils.ts` (shadcn-style) |
| **Tests** | Vitest + Testing Library + jsdom (`src/test/`) |

There is **no** REST/GraphQL client, **no** CMS SDK, and **no** environment-driven API base URL in the default setup—content is **co-located in the repo** as TypeScript data and assets.

---

## Repository layout

| Path | Role |
|------|------|
| `src/App.tsx` | Providers (theme, tooltip, toasts), `BrowserRouter`, lazy route table. |
| `src/config/site.ts` | Branding strings, nav + footer link models, topic routing map. |
| `src/layout/` | `PageLayout`, `BlogNavbar`, `BlogFooter`, `StaticPageSection` for simple inner pages. |
| `src/pages/` | Route screens; `company/` and `topics/` group related routes. |
| `src/components/blog/` | `BlogGrid`, `BlogSearchModal`, `ArticleEngagement`. |
| `src/components/home/` | `HeroSection`, `NewsletterSection`. |
| `src/components/ui/` | Toaster, tooltip, Sonner wrapper—minimal shadcn-style set. |
| `src/data/blogData.ts` | Posts and query helpers. |
| `src/hooks/` | `useBlogEngagement` (localStorage), `use-toast` for Radix toasts. |
| `public/` | Static files (e.g. logo); safe for future `rss.xml`, `robots.txt`. |

Path alias: **`@/*` → `src/*`** (see `tsconfig.app.json` and `vite.config.ts`).

---

## Scripts & local development

**Prerequisites:** Node.js 18+ (npm).

```bash
npm install
npm run dev
```

Dev server defaults to **[http://localhost:8080](http://localhost:8080)** (`host: "::"` in Vite allows LAN access if your firewall allows it).

| Command | Purpose |
|---------|---------|
| `npm run dev` | Vite dev server with HMR |
| `npm run build` | Optimized production bundle to `dist/` |
| `npm run preview` | Serve `dist/` locally |
| `npm run lint` | ESLint across the project |
| `npm run test` | Vitest single run |
| `npm run test:watch` | Vitest watch mode |

---

## Deployment notes

- Output is **static files** after `npm run build`; host on any static host (Netlify, Vercel, S3 + CloudFront, GitHub Pages with correct `base` if not at domain root).
- **Client-side routing** requires the host to **rewrite all paths to `index.html`** (SPA fallback), or links outside `/` will 404 on refresh.
- To add a **real RSS** file, add `public/rss.xml` or generate it in CI and point footer/social to the public URL.

---

## Extending the project

Typical next steps (not implemented here):

- Replace `blogData.ts` with **Markdown/MDX** + build-time loading, or a **headless CMS**.
- Wire **newsletter** and **contact** forms to **Formspree**, **Serverless**, or your API.
- Replace **localStorage** engagement with **authenticated comments** (e.g. Supabase, Firebase, or custom API).
- Add **SEO**: per-route `<title>` / Open Graph via `react-helmet-async` or Vite plugin.

---

## License / name

Package metadata in `package.json` may still use the generic Vite template name; the **product name** used in the UI and storage keys is **Melanin Connect**. Align naming in `package.json` and `index.html` when you publish.
