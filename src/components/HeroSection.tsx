import { motion } from "framer-motion";
import heroImage from "@/assets/hero-ai.jpg";

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 px-6 lg:px-8">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl"
        >
          <span className="inline-block text-xs font-medium tracking-widest uppercase text-muted-foreground mb-6">
            Featured Article
          </span>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-semibold leading-[1.05] tracking-tight text-foreground mb-6">
            The Future of Intelligence is Already Here
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed font-light">
            Exploring the intersection of artificial intelligence, human creativity, and the technologies reshaping our world.
          </p>
          <div className="flex items-center gap-4 mt-8">
            <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-sm font-medium text-foreground">
              JC
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">James Chen</p>
              <p className="text-xs text-muted-foreground">Mar 22, 2026 · 8 min read</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 rounded-2xl overflow-hidden"
        >
          <img
            src={heroImage}
            alt="AI neural network visualization"
            className="w-full h-[300px] md:h-[480px] object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
