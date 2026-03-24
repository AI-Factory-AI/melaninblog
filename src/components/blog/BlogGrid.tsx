import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { blogPosts } from "@/data/blogData";

interface BlogGridProps {
  posts?: typeof blogPosts;
  title?: string;
  showViewAll?: boolean;
}

const BlogGrid = ({ posts = blogPosts, title = "Latest Articles", showViewAll = true }: BlogGridProps) => {
  return (
    <section className="py-14 md:py-20 px-4 sm:px-6 lg:px-8 border-t border-border">
      <div className="container mx-auto">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-8 md:mb-12">
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground">
            {title}
          </h2>
          {showViewAll && (
            <Link to="/articles" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              View all →
            </Link>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link to={`/blog/${post.slug}`} className="group block">
                <div className="rounded-xl overflow-hidden mb-4">
                  <img
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
                    className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <span className="text-xs font-medium tracking-widest uppercase text-muted-foreground">
                  {post.category}
                </span>
                <h3 className="font-display text-xl font-semibold text-foreground mt-2 mb-2 leading-snug group-hover:text-muted-foreground transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span className="font-medium text-foreground">{post.author}</span>
                  <span>·</span>
                  <span>{post.date}</span>
                  <span>·</span>
                  <span>{post.readTime}</span>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogGrid;
