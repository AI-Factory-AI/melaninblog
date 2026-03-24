import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, Search } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import BlogSearchModal from "@/components/blog/BlogSearchModal";
import { headerNav } from "@/config/site";

const BlogNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const location = useLocation();
  const searchShortcut =
    typeof navigator !== "undefined" && /Mac|iPhone|iPod|iPad/i.test(navigator.platform) ? "⌘K" : "Ctrl+K";

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setSearchOpen((v) => !v);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="inline-flex items-center">
            <img
              src="/melaninlogo.png"
              alt="Melanin Connect"
              className="h-9 sm:h-10 lg:h-14 w-auto"
            />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {headerNav.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                className={`text-sm font-medium transition-colors duration-200 ${
                  location.pathname === item.path
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-3 py-1.5 text-xs text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors"
              aria-label="Search articles"
            >
              <Search className="w-4 h-4" />
              <span className="hidden lg:inline">Search</span>
              <kbd className="hidden lg:inline pointer-events-none rounded border border-border bg-background px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground">
                {searchShortcut}
              </kbd>
            </button>
            <Link
              to="/newsletter"
              className="text-sm font-medium bg-primary text-primary-foreground px-4 py-2 rounded-full hover:opacity-90 transition-opacity"
            >
              Subscribe
            </Link>
          </div>

          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden border-t border-border bg-background"
        >
          <div className="px-6 py-4 space-y-3">
            {headerNav.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className="block text-sm font-medium text-muted-foreground hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
            <button
              type="button"
              onClick={() => {
                setIsOpen(false);
                setSearchOpen(true);
              }}
              className="flex w-full items-center gap-2 rounded-lg border border-border px-4 py-3 text-sm font-medium text-muted-foreground hover:bg-secondary hover:text-foreground"
            >
              <Search className="w-4 h-4" />
              Search articles
            </button>
            <Link
              to="/newsletter"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center text-sm font-medium bg-primary text-primary-foreground px-4 py-2 rounded-full mt-2"
            >
              Subscribe
            </Link>
          </div>
        </motion.div>
      )}

      <BlogSearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
    </nav>
  );
};

export default BlogNavbar;
