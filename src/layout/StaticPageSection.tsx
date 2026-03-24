import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface StaticPageSectionProps {
  title: string;
  description?: string;
  children?: ReactNode;
}

export const StaticPageSection = ({ title, description, children }: StaticPageSectionProps) => (
  <section className="pt-32 pb-16 px-6 lg:px-8">
    <div className="container mx-auto max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-4">{title}</h1>
        {description && (
          <p className="text-lg text-muted-foreground leading-relaxed mb-10">{description}</p>
        )}
        {children && <div className="space-y-6 text-muted-foreground leading-relaxed">{children}</div>}
      </motion.div>
    </div>
  </section>
);
