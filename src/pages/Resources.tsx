import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  BookOpen,
  Download,
  FileArchive,
  FileText,
  Library,
  Sparkles,
  Video,
} from "lucide-react";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { PageLayout } from "@/layout";
import { cn } from "@/lib/utils";

type ResourceType = "Template" | "Guide" | "Toolkit";

type Resource = {
  id: number;
  title: string;
  type: ResourceType;
  icon: typeof FileText;
  description: string;
  fileUrl: string;
  fileName: string;
  format: string;
  accent: "violet" | "emerald" | "amber" | "sky";
};

const resources: Resource[] = [
  {
    id: 1,
    title: "AI Startup Pitch Deck Template",
    type: "Template",
    icon: FileArchive,
    description:
      "Editable framework for pitching AI products to investors and strategic partners—slides, narrative flow, and appendix prompts.",
    fileUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
    fileName: "ai-startup-pitch-deck.pdf",
    format: "PDF",
    accent: "violet",
  },
  {
    id: 2,
    title: "Responsible AI Checklist",
    type: "Guide",
    icon: FileText,
    description:
      "A practical checklist for fairness, explainability, and governance before you ship models to production.",
    fileUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
    fileName: "responsible-ai-checklist.pdf",
    format: "PDF",
    accent: "emerald",
  },
  {
    id: 3,
    title: "Podcast Video Production Kit",
    type: "Toolkit",
    icon: Video,
    description:
      "Starter toolkit for recording, editing, and distributing quality podcast video—gear notes, export settings, and release checklist.",
    fileUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
    fileName: "podcast-video-production-kit.pdf",
    format: "PDF",
    accent: "amber",
  },
  {
    id: 4,
    title: "Founder–Investor One-Pager",
    type: "Template",
    icon: FileText,
    description:
      "Single-page outline for traction, market, team, and ask—built for first meetings and cold intros.",
    fileUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
    fileName: "founder-investor-one-pager.pdf",
    format: "PDF",
    accent: "sky",
  },
];

const filters: { id: "all" | ResourceType; label: string }[] = [
  { id: "all", label: "All" },
  { id: "Template", label: "Templates" },
  { id: "Guide", label: "Guides" },
  { id: "Toolkit", label: "Toolkits" },
];

const accentStyles = {
  violet:
    "bg-violet-100 text-violet-800 ring-violet-200/80 dark:bg-violet-950/50 dark:text-violet-200 dark:ring-violet-800/60",
  emerald:
    "bg-emerald-100 text-emerald-800 ring-emerald-200/80 dark:bg-emerald-950/50 dark:text-emerald-200 dark:ring-emerald-800/60",
  amber:
    "bg-amber-100 text-amber-900 ring-amber-200/80 dark:bg-amber-950/40 dark:text-amber-200 dark:ring-amber-800/60",
  sky: "bg-sky-100 text-sky-900 ring-sky-200/80 dark:bg-sky-950/50 dark:text-sky-200 dark:ring-sky-800/60",
};

const Resources = () => {
  const [filter, setFilter] = useState<(typeof filters)[number]["id"]>("all");

  const filtered = useMemo(
    () => (filter === "all" ? resources : resources.filter((r) => r.type === filter)),
    [filter],
  );

  return (
    <PageLayout>
      <div className="min-h-[calc(100vh-4rem)] bg-[#F4F2EE] dark:bg-neutral-950">
        {/* Top strip */}
        <div className="border-b border-neutral-200/80 bg-[#FAF9F7]/90 backdrop-blur-md dark:border-neutral-800 dark:bg-neutral-900/90">
          <div className="container mx-auto flex flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center gap-2">
              {filters.map((f) => (
                <button
                  key={f.id}
                  type="button"
                  onClick={() => setFilter(f.id)}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm font-medium transition-all duration-200",
                    filter === f.id
                      ? "bg-neutral-900 text-white shadow-md shadow-neutral-900/15 dark:bg-white dark:text-neutral-900"
                      : "bg-white/80 text-neutral-600 hover:bg-white dark:bg-neutral-800/80 dark:text-neutral-300 dark:hover:bg-neutral-800",
                  )}
                >
                  {f.label}
                </button>
              ))}
            </div>
            <p className="text-xs font-medium uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
              {filtered.length} of {resources.length} resources
            </p>
          </div>
        </div>

        <section className="px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
          <div className="container mx-auto max-w-6xl">
            <motion.header
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="mb-10 max-w-3xl lg:mb-12"
            >
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-medium uppercase tracking-wider text-neutral-500 shadow-sm ring-1 ring-neutral-200/60 dark:bg-neutral-900 dark:text-neutral-400 dark:ring-neutral-700">
                <Library className="h-3.5 w-3.5" />
                Resource library
              </div>
              <h1 className="font-display text-3xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-50 sm:text-4xl lg:text-[2.35rem] lg:leading-tight">
                Research, guides &amp; creator toolkits
              </h1>
              <p className="mt-4 text-base leading-relaxed text-neutral-600 dark:text-neutral-400 sm:text-lg">
                Practical downloads for builders, founders, and creators working in AI and media. Use
                them in decks, reviews, and production workflows—free to use with attribution.
              </p>
              <div className="mt-6 flex flex-wrap gap-3 text-sm text-neutral-500 dark:text-neutral-400">
                <span className="inline-flex items-center gap-2 rounded-full border border-neutral-200/80 bg-white px-3 py-1.5 dark:border-neutral-700 dark:bg-neutral-900">
                  <BookOpen className="h-4 w-4 text-neutral-400" />
                  Curated &amp; maintained
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-neutral-200/80 bg-white px-3 py-1.5 dark:border-neutral-700 dark:bg-neutral-900">
                  <Sparkles className="h-4 w-4 text-neutral-400" />
                  Instant download
                </span>
              </div>
            </motion.header>

            <AnimatePresence mode="wait">
              <motion.div
                key={filter}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="grid gap-5 sm:grid-cols-2 lg:gap-6 xl:grid-cols-2"
              >
                {filtered.map((resource, i) => {
                  const Icon = resource.icon;
                  return (
                    <motion.article
                      key={resource.id}
                      initial={{ opacity: 0, y: 18 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: i * 0.05 }}
                      className="group flex flex-col overflow-hidden rounded-[1.5rem] border border-neutral-200/80 bg-white shadow-[0_16px_48px_-24px_rgba(0,0,0,0.12)] transition-shadow duration-300 hover:shadow-[0_24px_56px_-24px_rgba(0,0,0,0.16)] dark:border-neutral-800 dark:bg-neutral-900 dark:shadow-none dark:hover:border-neutral-700"
                    >
                      <div className="flex flex-1 flex-col p-6 sm:p-7">
                        <div className="mb-5 flex items-start justify-between gap-4">
                          <div
                            className={cn(
                              "flex h-12 w-12 items-center justify-center rounded-2xl ring-2 ring-inset",
                              accentStyles[resource.accent],
                            )}
                          >
                            <Icon className="h-6 w-6" strokeWidth={1.75} />
                          </div>
                          <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300">
                            {resource.type}
                          </span>
                        </div>
                        <h2 className="font-display text-xl font-semibold leading-snug tracking-tight text-neutral-900 dark:text-neutral-50">
                          {resource.title}
                        </h2>
                        <p className="mt-3 flex-1 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                          {resource.description}
                        </p>
                        <div className="mt-5 flex flex-wrap items-center gap-2 border-t border-neutral-100 pt-5 text-xs text-neutral-500 dark:border-neutral-800 dark:text-neutral-400">
                          <span className="rounded-md bg-neutral-50 px-2 py-1 font-medium text-neutral-700 dark:bg-neutral-800/80 dark:text-neutral-300">
                            {resource.format}
                          </span>
                          <span className="text-neutral-300 dark:text-neutral-600">·</span>
                          <span className="truncate font-mono text-[11px] text-neutral-400">
                            {resource.fileName}
                          </span>
                        </div>
                        <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:items-center">
                          <a
                            href={resource.fileUrl}
                            download={resource.fileName}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-neutral-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
                          >
                            <Download className="h-4 w-4" strokeWidth={2} />
                            Download
                          </a>
                          <a
                            href={resource.fileUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-1.5 rounded-full border border-neutral-200 px-4 py-2.5 text-sm font-medium text-neutral-700 transition hover:bg-neutral-50 dark:border-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-800"
                          >
                            Open
                            <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
                          </a>
                        </div>
                      </div>
                    </motion.article>
                  );
                })}
              </motion.div>
            </AnimatePresence>

            {filtered.length === 0 && (
              <p className="py-16 text-center text-sm text-neutral-500 dark:text-neutral-400">
                No resources in this category yet.
              </p>
            )}

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="mt-14 rounded-[1.75rem] border border-neutral-200/80 bg-gradient-to-br from-pink-50/80 via-white to-violet-50/60 p-8 text-center dark:border-neutral-800 dark:from-pink-950/20 dark:via-neutral-900 dark:to-violet-950/20 sm:p-10"
            >
              <h3 className="font-display text-xl font-semibold text-neutral-900 dark:text-neutral-50">
                Get new resources in your inbox
              </h3>
              <p className="mx-auto mt-2 max-w-md text-sm text-neutral-600 dark:text-neutral-400">
                We ship templates, reading lists, and toolkit updates with the Melanin Connect
                newsletter.
              </p>
              <Link
                to="/newsletter"
                className="mt-6 inline-flex items-center justify-center rounded-full bg-neutral-900 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
              >
                Subscribe
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default Resources;
