import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { PageLayout } from "@/layout";
import BlogGrid from "@/components/blog/BlogGrid";
import { getPostsByCategory } from "@/data/blogData";
import { topicRouteToCategory } from "@/config/site";

const TopicPage = () => {
  const { topicSlug } = useParams<{ topicSlug: string }>();
  const category = topicSlug ? topicRouteToCategory[topicSlug] : undefined;
  const posts = category ? getPostsByCategory(category) : [];

  if (!category) {
    return (
      <PageLayout>
        <div className="pt-32 px-6 text-center pb-24">
          <h1 className="font-display text-3xl font-semibold text-foreground mb-4">Topic not found</h1>
          <Link to="/articles" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            ← Back to articles
          </Link>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <section className="pt-32 pb-12 px-6 lg:px-8">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-medium tracking-widest uppercase text-muted-foreground">Topic</span>
            <h1 className="font-display text-4xl md:text-5xl font-semibold text-foreground mt-2 mb-4">
              {category}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Articles tagged with {category}.
            </p>
          </motion.div>
        </div>
      </section>
      <BlogGrid posts={posts} title={`${category} articles`} showViewAll={true} />
    </PageLayout>
  );
};

export default TopicPage;
