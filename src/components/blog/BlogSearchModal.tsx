import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Search, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { searchBlogPosts } from "@/data/blogData";

interface BlogSearchModalProps {
  open: boolean;
  onClose: () => void;
}

const BlogSearchModal = ({ open, onClose }: BlogSearchModalProps) => {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!open) {
      setQuery("");
      return;
    }
    const t = window.setTimeout(() => inputRef.current?.focus(), 50);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.clearTimeout(t);
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const results = searchBlogPosts(query);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="blog-search-overlay"
          className="fixed inset-0 z-[200] flex items-start justify-center p-4 pt-[min(20vh,8rem)] sm:pt-24"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="blog-search-title"
        >
          <button
            type="button"
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            aria-label="Close search"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-lg rounded-2xl border border-border bg-background shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 id="blog-search-title" className="sr-only">
              Search articles
            </h2>
            <div className="flex items-center gap-2 border-b border-border p-3">
              <Search className="h-5 w-5 shrink-0 text-muted-foreground" aria-hidden />
              <input
                ref={inputRef}
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search articles, topics, authors…"
                className="min-w-0 flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
                autoComplete="off"
                autoCorrect="off"
              />
              <button
                type="button"
                onClick={onClose}
                className="rounded-full p-2 text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors"
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <ul className="max-h-[min(60vh,24rem)] overflow-y-auto p-2">
              {query.trim() === "" && (
                <li className="px-3 py-8 text-center text-sm text-muted-foreground">
                  Type to search by title, topic, or author.
                </li>
              )}
              {query.trim() !== "" && results.length === 0 && (
                <li className="px-3 py-8 text-center text-sm text-muted-foreground">
                  No articles match “{query.trim()}”.
                </li>
              )}
              {results.map((post) => (
                <li key={post.slug}>
                  <Link
                    to={`/blog/${post.slug}`}
                    onClick={onClose}
                    className="block rounded-xl px-3 py-3 text-left transition-colors hover:bg-secondary"
                  >
                    <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                      {post.category}
                    </span>
                    <span className="mt-1 block font-display text-base font-semibold text-foreground leading-snug">
                      {post.title}
                    </span>
                    <span className="mt-1 block text-xs text-muted-foreground">{post.author}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BlogSearchModal;
