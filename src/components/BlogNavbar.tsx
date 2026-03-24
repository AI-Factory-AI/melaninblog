import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, Search } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { label: "Articles", path: "/articles" },
  { label: "Research", path: "/research" },
  { label: "Podcast", path: "/podcast" },
  { label: "Resources", path: "/resources" },
  { label: "Newsletter", path: "/newsletter" },
];

const BlogNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="inline-flex items-center">
            <img
              src="/melanin_cbyyuk.png"
              alt="Melanin Connect"
              className="h-9 sm:h-10 lg:h-14 w-auto"
            />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
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
            <button className="p-2 text-muted-foreground hover:text-foreground transition-colors">
              <Search className="w-4 h-4" />
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
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className="block text-sm font-medium text-muted-foreground hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
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
    </nav>
  );
};

export default BlogNavbar;
