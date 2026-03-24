import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, Search } from "lucide-react";

const BlogNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="font-display text-xl font-semibold tracking-tight text-foreground">
            Synth<span className="text-muted-foreground">AI</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {["Articles", "Research", "Podcast", "Newsletter"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button className="p-2 text-muted-foreground hover:text-foreground transition-colors">
              <Search className="w-4 h-4" />
            </button>
            <button className="text-sm font-medium bg-primary text-primary-foreground px-4 py-2 rounded-full hover:opacity-90 transition-opacity">
              Subscribe
            </button>
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
            {["Articles", "Research", "Podcast", "Newsletter"].map((item) => (
              <a key={item} href="#" className="block text-sm font-medium text-muted-foreground hover:text-foreground">
                {item}
              </a>
            ))}
            <button className="w-full text-sm font-medium bg-primary text-primary-foreground px-4 py-2 rounded-full mt-2">
              Subscribe
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default BlogNavbar;
