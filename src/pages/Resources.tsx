import { motion } from "framer-motion";
import { Download, FileText, Video, FileArchive } from "lucide-react";
import { PageLayout } from "@/layout";

const resources = [
  {
    id: 1,
    title: "AI Startup Pitch Deck Template",
    type: "Template",
    icon: FileArchive,
    description: "Editable framework for pitching AI products to investors and strategic partners.",
    fileUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
    fileName: "ai-startup-pitch-deck.pdf",
  },
  {
    id: 2,
    title: "Responsible AI Checklist",
    type: "Guide",
    icon: FileText,
    description: "A practical checklist for fairness, explainability, and governance in production systems.",
    fileUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
    fileName: "responsible-ai-checklist.pdf",
  },
  {
    id: 3,
    title: "Podcast Video Production Kit",
    type: "Toolkit",
    icon: Video,
    description: "Starter toolkit for recording, editing, and distributing quality podcast video episodes.",
    fileUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
    fileName: "podcast-video-production-kit.pdf",
  },
];

const Resources = () => {
  return (
    <PageLayout>

      <section className="pt-24 md:pt-32 pb-10 md:pb-14 px-4 sm:px-6 lg:px-8 border-b border-border">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-block text-xs font-medium tracking-widest uppercase text-muted-foreground mb-4">
              Resource Library
            </span>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground mb-4">
              Download Research, Guides, and Creator Toolkits
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground">
              Practical resources for builders, founders, and creators in AI. Download files instantly and use them in your own projects.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-10 md:py-14 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource, i) => {
              const Icon = resource.icon;

              return (
                <motion.article
                  key={resource.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.06 }}
                  className="rounded-2xl border border-border bg-card p-5 sm:p-6"
                >
                  <div className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-xs text-muted-foreground mb-4">
                    <Icon className="w-3.5 h-3.5" />
                    {resource.type}
                  </div>
                  <h2 className="font-display text-lg sm:text-xl font-semibold text-foreground mb-2">{resource.title}</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">{resource.description}</p>
                  <a
                    href={resource.fileUrl}
                    download={resource.fileName}
                    className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium hover:opacity-90 transition-opacity w-full sm:w-auto"
                  >
                    <Download className="w-4 h-4" />
                    Download Resource
                  </a>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

    </PageLayout>
  );
};

export default Resources;
