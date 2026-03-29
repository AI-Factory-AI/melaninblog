import { motion, AnimatePresence } from "framer-motion";
import {
  AudioLines,
  Bell,
  Calendar,
  Check,
  Clock,
  Headphones,
  Lock,
  Mic2,
  Play,
  Search,
  Sparkles,
} from "lucide-react";
import { useMemo, useState } from "react";
import { PageLayout } from "@/layout";
import { cn } from "@/lib/utils";
import podcastHero from "@/assets/podcast-hero.jpg";

type EpisodeStatus = "active" | "completed" | "upcoming" | "locked";

type Episode = {
  id: number;
  title: string;
  guest: string;
  duration: string;
  date: string;
  description: string;
  mediaType: "audio";
  mediaUrl: string;
  status: EpisodeStatus;
};

const episodes: Episode[] = [
  {
    id: 1,
    title: "Breaking Into Tech Without a CS Degree",
    guest: "Jordan Blake, CTO at NovaTech",
    duration: "42 min",
    date: "Mar 21, 2026",
    description:
      "Jordan shares their journey from self-taught developer to leading a 50-person engineering team.",
    mediaType: "audio",
    mediaUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    status: "active",
  },
  {
    id: 2,
    title: "The Future of AI in African Healthcare",
    guest: "Dr. Amina Diallo, AI Researcher",
    duration: "38 min",
    date: "Mar 14, 2026",
    description:
      "How AI-powered diagnostics are transforming healthcare access across sub-Saharan Africa.",
    mediaType: "audio",
    mediaUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    status: "completed",
  },
  {
    id: 3,
    title: "Funding the Future: VC and Black Founders",
    guest: "Marcus Thompson, Partner at Harlem Capital",
    duration: "45 min",
    date: "Mar 7, 2026",
    description:
      "An honest conversation about the state of venture capital and strategies for Black entrepreneurs.",
    mediaType: "audio",
    mediaUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    status: "completed",
  },
  {
    id: 4,
    title: "Designing Inclusive AI Systems",
    guest: "Keisha Williams, Ethics Lead at DeepMind",
    duration: "36 min",
    date: "Feb 28, 2026",
    description:
      "Why diversity in AI development teams leads to better products for everyone.",
    mediaType: "audio",
    mediaUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
    status: "upcoming",
  },
  {
    id: 5,
    title: "From Side Project to $10M ARR",
    guest: "Tobi Adeyemi, Founder of StackPay",
    duration: "50 min",
    date: "Feb 21, 2026",
    description:
      "The story behind one of Africa's fastest-growing fintech platforms.",
    mediaType: "audio",
    mediaUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
    status: "locked",
  },
];

const tabs = [
  { id: "overview" as const, label: "Overview" },
  { id: "episodes" as const, label: "Episodes" },
  { id: "related" as const, label: "Related" },
];

const highlightTags = [
  "Career pivot",
  "Self-taught",
  "Leadership",
  "Tech culture",
];

function EpisodeArchiveCard({
  ep,
  index,
  selected,
  disabled,
  onSelect,
}: {
  ep: Episode;
  index: number;
  selected: boolean;
  disabled: boolean;
  onSelect: () => void;
}) {
  return (
    <article
      role={disabled ? undefined : "button"}
      tabIndex={disabled ? undefined : 0}
      onClick={disabled ? undefined : onSelect}
      onKeyDown={
        disabled
          ? undefined
          : (e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onSelect();
              }
            }
      }
      className={cn(
        "group relative overflow-hidden rounded-2xl border bg-white transition-all duration-200 dark:bg-neutral-900",
        selected
          ? "border-neutral-900 shadow-[0_12px_40px_-16px_rgba(0,0,0,0.25)] ring-1 ring-neutral-900/10 dark:border-white dark:ring-white/10"
          : "border-neutral-200/90 hover:border-neutral-300 hover:shadow-md dark:border-neutral-800 dark:hover:border-neutral-700",
        !disabled && "cursor-pointer",
        disabled && "opacity-60",
      )}
    >
      <div
        className={cn(
          "absolute left-0 top-0 h-full w-1 rounded-l-2xl transition-colors",
          selected ? "bg-neutral-900 dark:bg-white" : "bg-transparent group-hover:bg-neutral-200 dark:group-hover:bg-neutral-700",
        )}
      />
      <div className="flex flex-col gap-4 p-5 pl-6 sm:flex-row sm:items-stretch sm:gap-6 sm:p-6">
        <div className="flex shrink-0 gap-4 sm:flex-col sm:items-center sm:gap-2 sm:border-r sm:border-neutral-100 sm:pr-6 dark:sm:border-neutral-800">
          <span
            className={cn(
              "font-mono text-2xl font-light tabular-nums leading-none sm:text-3xl",
              selected ? "text-neutral-900 dark:text-white" : "text-neutral-300 dark:text-neutral-600",
            )}
            aria-hidden
          >
            {String(index + 1).padStart(2, "0")}
          </span>
          <EpisodeRowIcon status={ep.status} active={selected} small />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <h3
              className={cn(
                "font-body text-lg font-semibold leading-snug tracking-tight text-neutral-900 dark:text-neutral-50 sm:text-xl",
                disabled && "text-neutral-500",
              )}
            >
              {ep.title}
            </h3>
            {!disabled && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onSelect();
                }}
                className={cn(
                  "shrink-0 rounded-full px-3 py-1.5 text-xs font-semibold transition-colors",
                  selected
                    ? "bg-neutral-900 text-white dark:bg-white dark:text-neutral-900"
                    : "bg-neutral-100 text-neutral-800 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-100 dark:hover:bg-neutral-700",
                )}
              >
                {selected ? "Selected" : "Use in player"}
              </button>
            )}
          </div>
          <p className="mt-3 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
            {ep.description}
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-x-1 gap-y-2 text-xs text-neutral-500 dark:text-neutral-400">
            <span className="font-medium text-neutral-800 dark:text-neutral-200">{ep.guest}</span>
            <span className="mx-1 text-neutral-300 dark:text-neutral-600" aria-hidden>
              ·
            </span>
            <span className="inline-flex items-center gap-1 rounded-md bg-neutral-100 px-2 py-0.5 font-medium text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300">
              <AudioLines className="h-3 w-3 shrink-0" strokeWidth={2} />
              Audio
            </span>
            <span className="mx-1 text-neutral-300 dark:text-neutral-600" aria-hidden>
              ·
            </span>
            <span className="inline-flex items-center gap-1 tabular-nums">
              <Clock className="h-3 w-3 shrink-0" strokeWidth={2} />
              {ep.duration}
            </span>
            <span className="mx-1 text-neutral-300 dark:text-neutral-600" aria-hidden>
              ·
            </span>
            <span className="inline-flex items-center gap-1 tabular-nums">
              <Calendar className="h-3 w-3 shrink-0" strokeWidth={2} />
              {ep.date}
            </span>
          </div>
        </div>
      </div>
      {disabled && (
        <div className="flex items-center gap-2 border-t border-neutral-100 bg-neutral-50/80 px-6 py-2.5 text-xs font-medium text-neutral-500 dark:border-neutral-800 dark:bg-neutral-950/50 dark:text-neutral-400">
          <Lock className="h-3.5 w-3.5" />
          Available to subscribers soon
        </div>
      )}
    </article>
  );
}

function ProgressRing({ percent }: { percent: number }) {
  const r = 18;
  const c = 2 * Math.PI * r;
  const dash = c * (1 - percent / 100);
  return (
    <div className="relative flex h-11 w-11 items-center justify-center">
      <svg className="h-11 w-11 -rotate-90" viewBox="0 0 44 44" aria-hidden>
        <circle
          cx="22"
          cy="22"
          r={r}
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          className="text-neutral-200 dark:text-neutral-700"
        />
        <circle
          cx="22"
          cy="22"
          r={r}
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeDasharray={c}
          strokeDashoffset={dash}
          strokeLinecap="round"
          className="text-neutral-900 dark:text-neutral-100 transition-[stroke-dashoffset] duration-500"
        />
      </svg>
      <span className="absolute text-[10px] font-semibold tabular-nums text-neutral-800 dark:text-neutral-100">
        {percent}%
      </span>
    </div>
  );
}

const Podcast = () => {
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]["id"]>("overview");
  const [selectedId, setSelectedId] = useState(1);

  const selected = useMemo(
    () => episodes.find((e) => e.id === selectedId) ?? episodes[0],
    [selectedId],
  );

  return (
    <PageLayout>
      <div className="min-h-[calc(100vh-4rem)] bg-[#F4F2EE] dark:bg-neutral-950">
        {/* Top bar: pills + utilities */}
        <div className="border-b border-neutral-200/80 bg-[#FAF9F7]/90 backdrop-blur-md dark:border-neutral-800 dark:bg-neutral-900/90">
          <div className="container mx-auto flex flex-col gap-4 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
            <div className="flex flex-wrap items-center gap-2">
              {tabs.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setActiveTab(t.id)}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm font-medium transition-all duration-200",
                    activeTab === t.id
                      ? "bg-neutral-900 text-white shadow-md shadow-neutral-900/15 dark:bg-white dark:text-neutral-900"
                      : "bg-white/80 text-neutral-600 hover:bg-white dark:bg-neutral-800/80 dark:text-neutral-300 dark:hover:bg-neutral-800",
                  )}
                >
                  {t.label}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <button
                type="button"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200/80 bg-white text-neutral-600 transition hover:bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-700/80"
                aria-label="Search"
              >
                <Search className="h-[18px] w-[18px] stroke-[1.75]" />
              </button>
              <button
                type="button"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200/80 bg-white text-neutral-600 transition hover:bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-300"
                aria-label="Notifications"
              >
                <Bell className="h-[18px] w-[18px] stroke-[1.75]" />
              </button>
              <div
                className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-neutral-900 bg-gradient-to-br from-amber-100 to-rose-100 text-xs font-bold text-neutral-800 dark:border-white"
                aria-hidden
              >
                MC
              </div>
            </div>
          </div>
        </div>

        <section className="px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
          <div className="container mx-auto max-w-7xl">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_min(100%,380px)] lg:gap-10 xl:gap-12">
              {/* Main column */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                className="space-y-6 lg:space-y-8"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="space-y-3">
                    <div className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-medium uppercase tracking-wider text-neutral-500 shadow-sm ring-1 ring-neutral-200/60 dark:bg-neutral-900 dark:text-neutral-400 dark:ring-neutral-700">
                      <Headphones className="h-3.5 w-3.5" />
                      Podcast
                    </div>
                    <h1 className="font-display text-3xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-50 sm:text-4xl lg:text-[2.35rem] lg:leading-tight">
                      The Melanin Connect Podcast
                    </h1>
                    <p className="max-w-xl text-sm leading-relaxed text-neutral-600 dark:text-neutral-400 sm:text-base">
                      Weekly conversations with innovators, founders, and thinkers shaping technology
                      and culture—structured like a lesson, delivered like a story.
                    </p>
                  </div>
                  <div className="flex shrink-0 items-center gap-3 rounded-2xl border border-neutral-200/80 bg-white px-4 py-3 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
                    <ProgressRing percent={72} />
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
                        Series progress
                      </p>
                      <p className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
                        Season 1 · On track
                      </p>
                    </div>
                  </div>
                </div>

                <AnimatePresence mode="wait">
                  {activeTab === "overview" && (
                    <motion.div
                      key="overview"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.25 }}
                      className="space-y-6"
                    >
                      {/* Featured player card */}
                      <div
                        id="latest-episode"
                        className="overflow-hidden rounded-[1.75rem] border border-neutral-200/60 bg-white shadow-[0_20px_50px_-20px_rgba(0,0,0,0.12)] dark:border-neutral-800 dark:bg-neutral-900 dark:shadow-none"
                      >
                        <div className="relative aspect-[16/9] max-h-[min(52vh,420px)] w-full overflow-hidden bg-neutral-100 dark:bg-neutral-800">
                          <img
                            src={podcastHero}
                            alt=""
                            className="h-full w-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                          <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3 sm:bottom-6 sm:left-6 sm:right-6">
                            <div className="flex items-center gap-3">
                              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/95 text-neutral-900 shadow-lg backdrop-blur dark:bg-neutral-900/95 dark:text-white">
                                <Play className="h-5 w-5 fill-current" />
                              </span>
                              <div>
                                <p className="text-xs font-medium text-white/90">Now playing</p>
                                <p className="line-clamp-2 max-w-md text-sm font-semibold text-white sm:text-base">
                                  {selected.title}
                                </p>
                              </div>
                            </div>
                            <span className="hidden rounded-full bg-white/20 px-3 py-1 text-xs font-medium text-white backdrop-blur sm:inline">
                              {selected.duration}
                            </span>
                          </div>
                        </div>
                        <div className="border-t border-pink-100/80 bg-gradient-to-b from-pink-50/90 to-rose-50/50 px-4 py-4 dark:border-pink-900/30 dark:from-pink-950/40 dark:to-rose-950/20 sm:px-6 sm:py-5">
                          <div className="mb-3 flex flex-wrap items-center gap-2 text-xs text-neutral-600 dark:text-neutral-400">
                            <span className="font-medium text-neutral-900 dark:text-neutral-100">
                              {selected.guest}
                            </span>
                            <span className="text-neutral-300 dark:text-neutral-600">·</span>
                            <span className="inline-flex items-center gap-1 rounded-full bg-white/80 px-2 py-0.5 dark:bg-neutral-800/80">
                              <AudioLines className="h-3 w-3" />
                    Audio
                  </span>
                            <span className="text-neutral-300 dark:text-neutral-600">·</span>
                  <span className="inline-flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              {selected.duration}
                  </span>
                </div>
                          <audio
                            key={selected.id}
                            controls
                            preload="metadata"
                            className="h-10 w-full max-w-full rounded-lg accent-neutral-900 dark:accent-white"
                            src={selected.mediaUrl}
                          >
                  Your browser does not support the audio element.
                </audio>
                        </div>
                      </div>

                      {/* Show notes – soft pink panel */}
                      <div className="rounded-[1.75rem] border border-pink-100/70 bg-pink-50/50 p-5 shadow-sm dark:border-pink-900/40 dark:bg-pink-950/20 sm:p-7">
                        <div className="mb-4 flex items-center gap-2">
                          <Sparkles className="h-4 w-4 text-pink-600 dark:text-pink-400" />
                          <h2 className="font-body text-base font-semibold text-neutral-900 dark:text-neutral-100">
                            Episode notes
                          </h2>
                        </div>
                        <p className="mb-5 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
                          {selected.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {highlightTags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-full border border-pink-200/80 bg-white px-3 py-1.5 text-xs font-medium text-neutral-700 shadow-sm dark:border-pink-800/60 dark:bg-neutral-900 dark:text-neutral-200"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {activeTab === "episodes" && (
                    <motion.div
                      key="episodes"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.25 }}
                      className="space-y-6"
                    >
                      <header className="flex flex-col gap-2 border-b border-neutral-200/80 pb-6 dark:border-neutral-800 sm:flex-row sm:items-end sm:justify-between">
                        <div>
                          <h2 className="font-display text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-50">
                            All episodes
                          </h2>
                          <p className="mt-1 max-w-lg text-sm text-neutral-500 dark:text-neutral-400">
                            Full archive with guests, format, runtime, and release date. Choosing an
                            episode opens it in the media player.
                          </p>
                        </div>
                        <p className="text-xs font-medium uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
                          {episodes.length} episodes
                        </p>
                      </header>

                      <ol className="space-y-4">
                        {episodes.map((ep, index) => (
                          <li key={ep.id}>
                            <EpisodeArchiveCard
                              ep={ep}
                              index={index}
                              selected={selectedId === ep.id}
                              disabled={ep.status === "locked"}
                              onSelect={() => {
                                if (ep.status !== "locked") {
                                  setSelectedId(ep.id);
                                  setActiveTab("overview");
                                }
                              }}
                            />
                          </li>
                        ))}
                      </ol>
                    </motion.div>
                  )}

                  {activeTab === "related" && (
                    <motion.div
                      key="related"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.25 }}
                      className="rounded-[1.75rem] border border-dashed border-neutral-200 bg-white/80 p-8 text-center dark:border-neutral-700 dark:bg-neutral-900/80"
                    >
                      <Mic2 className="mx-auto mb-3 h-10 w-10 text-neutral-300 dark:text-neutral-600" />
                      <p className="font-body text-sm font-medium text-neutral-800 dark:text-neutral-200">
                        More shows &amp; articles
                      </p>
                      <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
                        Cross-links to research posts and newsletter deep-dives will appear here.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Episode rail (desktop) */}
              <aside className="lg:sticky lg:top-24 lg:self-start">
                <motion.div
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.45, delay: 0.08 }}
                  className="rounded-[1.75rem] border border-neutral-200/60 bg-white p-4 shadow-[0_16px_40px_-24px_rgba(0,0,0,0.15)] dark:border-neutral-800 dark:bg-neutral-900 dark:shadow-none sm:p-5"
                >
                  <div className="mb-4 flex items-center justify-between gap-2">
                    <h2 className="font-body text-sm font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                      Episodes
                    </h2>
                    <span className="rounded-full bg-neutral-100 px-2 py-0.5 text-xs font-medium text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300">
                      {episodes.length} total
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {episodes.map((ep) => (
                      <li key={ep.id}>
                        <button
                          type="button"
                          disabled={ep.status === "locked"}
                          onClick={() => {
                            if (ep.status !== "locked") {
                              setSelectedId(ep.id);
                              setActiveTab("overview");
                            }
                          }}
                          className={cn(
                            "flex w-full items-center gap-3 rounded-2xl px-3 py-3 text-left transition-all",
                            selectedId === ep.id && ep.status !== "locked"
                              ? "bg-neutral-900 text-white shadow-md dark:bg-white dark:text-neutral-900"
                              : "hover:bg-neutral-50 dark:hover:bg-neutral-800/80",
                            ep.status === "locked" && "cursor-not-allowed opacity-50",
                          )}
                        >
                          <EpisodeRowIcon status={ep.status} active={selectedId === ep.id} small />
                          <div className="min-w-0 flex-1">
                            <p className="line-clamp-2 text-sm font-medium leading-snug">{ep.title}</p>
                            <p
                              className={cn(
                                "mt-0.5 text-xs",
                                selectedId === ep.id && ep.status !== "locked"
                                  ? "text-white/75 dark:text-neutral-600"
                                  : "text-neutral-500 dark:text-neutral-400",
                              )}
                            >
                              {ep.duration}
                            </p>
                          </div>
                        </button>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 rounded-2xl bg-neutral-50 p-3 text-center dark:bg-neutral-800/50">
                    <p className="text-xs text-neutral-500 dark:text-neutral-400">
                      Listen on{" "}
                      <button type="button" className="font-semibold text-neutral-800 underline-offset-2 hover:underline dark:text-neutral-200">
                        Apple Podcasts
                      </button>
                    </p>
                  </div>
                </motion.div>
              </aside>
          </div>
        </div>
      </section>
      </div>
    </PageLayout>
  );
};

function EpisodeRowIcon({
  status,
  active,
  small,
}: {
  status: EpisodeStatus;
  active: boolean;
  small?: boolean;
}) {
  const size = small ? "h-9 w-9" : "h-10 w-10";
  const iconClass = small ? "h-4 w-4" : "h-[18px] w-[18px]";

  const playShell = (inverted: boolean) => (
    <span
      className={cn(
        "flex shrink-0 items-center justify-center rounded-xl border",
        size,
        inverted
          ? "border-white/25 bg-white/15 text-white dark:border-neutral-200 dark:bg-neutral-100 dark:text-neutral-900"
          : "border-neutral-200 bg-neutral-100 text-neutral-800 dark:border-neutral-600 dark:bg-neutral-800 dark:text-neutral-100",
      )}
    >
      <Play className={cn(small ? "h-3.5 w-3.5" : "h-4 w-4", "fill-current")} />
    </span>
  );

  if (status === "locked") {
    return (
      <span
        className={cn(
          "flex shrink-0 items-center justify-center rounded-xl border border-neutral-200 bg-neutral-100 text-neutral-400 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-500",
          size,
        )}
      >
        <Lock className={iconClass} />
      </span>
    );
  }

  if (active) {
    return playShell(true);
  }

  if (status === "completed") {
    return (
      <span
        className={cn(
          "flex shrink-0 items-center justify-center rounded-xl border",
          size,
          "border-emerald-200/80 bg-emerald-50 text-emerald-700 dark:border-emerald-900/50 dark:bg-emerald-950/40 dark:text-emerald-400",
        )}
      >
        <Check className={cn(iconClass, "stroke-[2.5]")} />
      </span>
    );
  }

  if (status === "active") {
    return playShell(false);
  }

  return (
    <span
      className={cn(
        "flex shrink-0 items-center justify-center rounded-xl border border-neutral-200 bg-white text-neutral-500 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-400",
        size,
      )}
    >
      <Mic2 className={iconClass} />
    </span>
  );
}

export default Podcast;
