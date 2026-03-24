import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import BlogNavbar from "@/components/BlogNavbar";
import BlogFooter from "@/components/BlogFooter";
import BlogGrid from "@/components/BlogGrid";
import { getPostBySlug, blogPosts } from "@/data/blogData";

const BlogDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = getPostBySlug(slug || "");

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <BlogNavbar />
        <div className="pt-32 px-6 text-center">
          <h1 className="font-display text-3xl font-semibold text-foreground mb-4">Article not found</h1>
          <Link to="/articles" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            ← Back to articles
          </Link>
        </div>
      </div>
    );
  }

  const relatedPosts = blogPosts.filter(p => p.slug !== post.slug).slice(0, 3);

  const renderContent = (content: string) => {
    return content.split("\n\n").map((block, i) => {
      if (block.startsWith("## ")) {
        return (
          <h2 key={i} className="font-display text-2xl md:text-3xl font-semibold text-foreground mt-12 mb-4">
            {block.replace("## ", "")}
          </h2>
        );
      }
      return (
        <p key={i} className="text-base md:text-lg leading-relaxed text-muted-foreground mb-6">
          {block}
        </p>
      );
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <BlogNavbar />
      <article className="pt-28 pb-16 px-6 lg:px-8">
        <div className="container mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to="/articles"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to articles
            </Link>

            <span className="inline-block text-xs font-medium tracking-widest uppercase text-muted-foreground mb-4">
              {post.category}
            </span>
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground leading-tight mb-6">
              {post.title}
            </h1>

            <div className="flex items-center gap-6 mb-8 pb-8 border-b border-border">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-sm font-medium text-foreground">
                  {post.authorInitials}
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">{post.author}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {post.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {post.readTime} read
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="rounded-2xl overflow-hidden mb-12"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-64 md:h-96 object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="prose-custom"
          >
            {renderContent(post.content)}
          </motion.div>
        </div>
      </article>

      <BlogGrid posts={relatedPosts} title="Related Articles" showViewAll={true} />
      <BlogFooter />
    </div>
  );
};

export default BlogDetail;
