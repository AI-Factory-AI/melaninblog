import { motion } from "framer-motion";
import BlogNavbar from "@/components/BlogNavbar";
import BlogFooter from "@/components/BlogFooter";
import BlogGrid from "@/components/BlogGrid";
import { researchPosts } from "@/data/blogData";
import researchHero from "@/assets/research-hero.jpg";

const Research = () => {
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
              Research
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mb-8">
              Deep dives into emerging technologies, scientific breakthroughs, and academic perspectives on AI and innovation.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="rounded-2xl overflow-hidden"
          >
            <img src={researchHero} alt="Research visualization" className="w-full h-64 md:h-80 object-cover" />
          </motion.div>
        </div>
      </section>
      <BlogGrid posts={researchPosts} title="Research Papers & Analysis" showViewAll={false} />
      <BlogFooter />
    </div>
  );
};

export default Research;
