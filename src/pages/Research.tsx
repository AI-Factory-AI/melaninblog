import { motion } from "framer-motion";
import { PageLayout } from "@/layout";
import BlogGrid from "@/components/blog/BlogGrid";
import { researchPosts } from "@/data/blogData";
import researchHero from "@/assets/research-hero.jpg";

const focusAreas = [
  {
    title: "AI + Healthcare",
    copy: "Applied research on diagnostics, triage systems, and health equity outcomes across underserved communities.",
  },
  {
    title: "Responsible AI",
    copy: "Bias evaluation, model governance, and human-centered frameworks for safer and more inclusive systems.",
  },
  {
    title: "Startup Intelligence",
    copy: "Data-backed insights on market shifts, funding trends, and strategic opportunities for Black founders.",
  },
];

const Research = () => {
  return (
    <PageLayout>
      <section
        className="relative min-h-[340px] md:min-h-[400px] lg:min-h-[460px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${researchHero})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/60 to-foreground/35" />
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 min-h-[340px] md:min-h-[400px] lg:min-h-[460px] pt-24 pb-10 md:pt-28 md:pb-12 flex items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-block text-xs font-medium tracking-widest uppercase text-primary-foreground/75 mb-4">
              Research Lab
            </span>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-primary-foreground mb-4 leading-[1.08] break-words">
              Evidence-Driven Research for the Future of AI
            </h1>
            <p className="text-base md:text-lg text-primary-foreground/85 max-w-2xl mb-8">
              Deep dives into emerging technologies, scientific breakthroughs, and practical frameworks shaping AI innovation.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-primary-foreground/30 bg-primary-foreground/10 px-4 py-1.5 text-xs text-primary-foreground">
                40+ analyses published
              </span>
              <span className="rounded-full border border-primary-foreground/30 bg-primary-foreground/10 px-4 py-1.5 text-xs text-primary-foreground">
                Weekly long-form reports
              </span>
              <span className="rounded-full border border-primary-foreground/30 bg-primary-foreground/10 px-4 py-1.5 text-xs text-primary-foreground">
                Global Black tech lens
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-12 md:py-14 px-4 sm:px-6 lg:px-8 border-b border-border bg-card/40">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-3">
              Research Focus Areas
            </h2>
            <p className="text-muted-foreground max-w-2xl">
              Built to mirror modern AI publication pages with clearer scanning and stronger narrative structure.
            </p>
          </motion.div>
          <div className="grid gap-4 md:grid-cols-3">
            {focusAreas.map((area, i) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="rounded-2xl border border-border bg-background p-6"
              >
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">{area.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{area.copy}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <BlogGrid posts={researchPosts} title="Research Papers & Analysis" showViewAll={false} />
    </PageLayout>
  );
};

export default Research;
