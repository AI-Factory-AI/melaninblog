import { motion } from "framer-motion";
import heroImage from "@/assets/hero-melanin.jpg";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="pt-24 pb-20 px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="relative rounded-2xl overflow-hidden">
          <img
            src={heroImage}
            alt="Melanin Connect community"
            className="w-full h-[500px] md:h-[600px] object-cover"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 lg:p-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="inline-block text-xs font-medium tracking-widest uppercase text-primary-foreground/70 mb-4">
                Featured
              </span>
              <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-semibold leading-[1.08] tracking-tight text-primary-foreground mb-4 max-w-3xl">
                Amplifying Black Voices in Technology & Innovation
              </h1>
              <p className="text-base md:text-lg text-primary-foreground/80 max-w-2xl leading-relaxed font-light mb-6">
                Stories, research, and conversations at the intersection of culture, technology, and the Black experience.
              </p>
              <Link
                to="/articles"
                className="inline-flex items-center gap-2 bg-primary-foreground text-foreground px-6 py-3 rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
              >
                Explore Articles
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
