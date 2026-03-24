import { motion } from "framer-motion";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";

const posts = [
  {
    image: blog1,
    category: "Machine Learning",
    title: "Why Transformer Models Are Redefining What Machines Can Understand",
    excerpt: "From GPT to multimodal systems, transformer architectures continue to push the boundaries of natural language processing.",
    author: "Sarah Kim",
    date: "Mar 20, 2026",
    readTime: "6 min",
  },
  {
    image: blog2,
    category: "Data Science",
    title: "The Quiet Revolution in Synthetic Data Generation",
    excerpt: "How AI-generated datasets are solving privacy concerns while accelerating model training across industries.",
    author: "Alex Rivera",
    date: "Mar 18, 2026",
    readTime: "5 min",
  },
  {
    image: blog3,
    category: "Hardware",
    title: "Beyond Silicon: The Next Generation of AI Chips",
    excerpt: "Neuromorphic computing and photonic processors are promising to deliver exponential gains in AI performance.",
    author: "David Park",
    date: "Mar 15, 2026",
    readTime: "7 min",
  },
];

const BlogGrid = () => {
  return (
    <section className="py-20 px-6 lg:px-8 border-t border-border">
      <div className="container mx-auto">
        <div className="flex items-center justify-between mb-12">
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground">
            Latest Articles
          </h2>
          <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            View all →
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group cursor-pointer"
            >
              <div className="rounded-xl overflow-hidden mb-4">
                <img
                  src={post.image}
                  alt={post.title}
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
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogGrid;
