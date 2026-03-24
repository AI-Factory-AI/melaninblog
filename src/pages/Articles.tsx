import { motion } from "framer-motion";
import { PageLayout } from "@/layout";
import BlogGrid from "@/components/blog/BlogGrid";
import { blogPosts } from "@/data/blogData";

const Articles = () => {
  return (
    <PageLayout>
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
    </PageLayout>
  );
};

export default Articles;
