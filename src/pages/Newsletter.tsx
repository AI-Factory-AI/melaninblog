import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { PageLayout } from "@/layout";

const benefits = [
  "Weekly deep dives on AI, tech & culture",
  "Exclusive interviews with Black tech leaders",
  "Early access to research & reports",
  "Curated career opportunities",
];

const Newsletter = () => {
  return (
    <PageLayout>
      <section className="pt-32 pb-20 px-6 lg:px-8">
        <div className="container mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-xs font-medium tracking-widest uppercase text-muted-foreground mb-6">
              Newsletter
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-4">
              Stay Connected
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              Join 12,000+ readers getting the best of tech, culture, and innovation delivered to their inbox every Thursday.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="bg-secondary rounded-2xl p-8 md:p-10 mb-12"
          >
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-5 py-3.5 rounded-full border border-border bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
              />
              <button className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity">
                Subscribe
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            <ul className="space-y-3 text-left">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-3 text-sm text-foreground">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-foreground flex items-center justify-center">
                    <Check className="w-3 h-3 text-primary-foreground" />
                  </div>
                  {benefit}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className="text-xs text-muted-foreground">
              No spam, ever. Unsubscribe anytime. Read our past issues{" "}
              <a href="#" className="underline hover:text-foreground transition-colors">
                here
              </a>
              .
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 px-6 lg:px-8 border-t border-border">
        <div className="container mx-auto max-w-2xl">
          <h2 className="font-display text-2xl font-semibold text-foreground mb-8 text-center">
            Past Issues
          </h2>
          <div className="space-y-4">
            {[
              { title: "The AI Talent Pipeline Problem", date: "Mar 20, 2026", issue: "#142" },
              { title: "Black-Founded Startups to Watch in 2026", date: "Mar 13, 2026", issue: "#141" },
              { title: "How Synthetic Data is Closing the Bias Gap", date: "Mar 6, 2026", issue: "#140" },
              { title: "The Rise of African Tech Hubs", date: "Feb 27, 2026", issue: "#139" },
              { title: "Why Every Company Needs an AI Ethics Board", date: "Feb 20, 2026", issue: "#138" },
            ].map((issue, i) => (
              <motion.a
                key={issue.issue}
                href="#"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="flex items-center justify-between p-4 rounded-xl hover:bg-secondary transition-colors group"
              >
                <div>
                  <h3 className="text-sm font-medium text-foreground group-hover:text-muted-foreground transition-colors">
                    {issue.title}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1">{issue.date}</p>
                </div>
                <span className="text-xs text-muted-foreground font-medium">{issue.issue}</span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Newsletter;
