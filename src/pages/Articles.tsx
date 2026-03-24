import { motion } from "framer-motion";
import BlogNavbar from "@/components/BlogNavbar";
import BlogFooter from "@/components/BlogFooter";
import BlogGrid from "@/components/BlogGrid";
import { blogPosts } from "@/data/blogData";

const Articles = () => {
  return (
    <div className="min-h-screen bg-background">
      <BlogNavbar />
      <section className="pt-32 pb-12 px-6 lg:px-8">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-4">
              Articles
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              In-depth stories on technology, culture, entrepreneurship, and the Black experience in tech.
            </p>
          </motion.div>
        </div>
      </section>
      <BlogGrid posts={blogPosts} title="All Articles" showViewAll={false} />
      <BlogFooter />
    </div>
  );
};

export default Articles;
