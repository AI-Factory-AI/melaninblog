import { motion } from "framer-motion";
import { Play, Clock, Headphones } from "lucide-react";
import BlogNavbar from "@/components/BlogNavbar";
import BlogFooter from "@/components/BlogFooter";
import podcastHero from "@/assets/podcast-hero.jpg";

const episodes = [
  {
    id: 1,
    title: "Breaking Into Tech Without a CS Degree",
    guest: "Jordan Blake, CTO at NovaTech",
    duration: "42 min",
    date: "Mar 21, 2026",
    description: "Jordan shares their journey from self-taught developer to leading a 50-person engineering team.",
  },
  {
    id: 2,
    title: "The Future of AI in African Healthcare",
    guest: "Dr. Amina Diallo, AI Researcher",
    duration: "38 min",
    date: "Mar 14, 2026",
    description: "How AI-powered diagnostics are transforming healthcare access across sub-Saharan Africa.",
  },
  {
    id: 3,
    title: "Funding the Future: VC and Black Founders",
    guest: "Marcus Thompson, Partner at Harlem Capital",
    duration: "45 min",
    date: "Mar 7, 2026",
    description: "An honest conversation about the state of venture capital and strategies for Black entrepreneurs.",
  },
  {
    id: 4,
    title: "Designing Inclusive AI Systems",
    guest: "Keisha Williams, Ethics Lead at DeepMind",
    duration: "36 min",
    date: "Feb 28, 2026",
    description: "Why diversity in AI development teams leads to better products for everyone.",
  },
  {
    id: 5,
    title: "From Side Project to $10M ARR",
    guest: "Tobi Adeyemi, Founder of StackPay",
    duration: "50 min",
    date: "Feb 21, 2026",
    description: "The story behind one of Africa's fastest-growing fintech platforms.",
  },
];

const Podcast = () => {
  return (
    <div className="min-h-screen bg-background">
      <BlogNavbar />
      <section className="pt-32 pb-12 px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <Headphones className="w-5 h-5 text-muted-foreground" />
                <span className="text-xs font-medium tracking-widest uppercase text-muted-foreground">
                  Podcast
                </span>
              </div>
              <h1 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-4">
                The Melanin Connect Podcast
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Weekly conversations with the innovators, founders, and thinkers shaping the future of technology and culture.
              </p>
              <div className="flex gap-3">
                <button className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-medium hover:opacity-90 transition-opacity">
                  <Play className="w-4 h-4" />
                  Latest Episode
                </button>
                <button className="inline-flex items-center gap-2 border border-border text-foreground px-5 py-2.5 rounded-full text-sm font-medium hover:bg-secondary transition-colors">
                  Apple Podcasts
                </button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="rounded-2xl overflow-hidden"
            >
              <img src={podcastHero} alt="Podcast studio" className="w-full h-72 object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 lg:px-8 border-t border-border">
        <div className="container mx-auto">
          <h2 className="font-display text-2xl font-semibold text-foreground mb-8">All Episodes</h2>
          <div className="space-y-1">
            {episodes.map((ep, i) => (
              <motion.div
                key={ep.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group flex items-start gap-6 p-6 rounded-xl hover:bg-secondary transition-colors cursor-pointer"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary group-hover:bg-background flex items-center justify-center transition-colors">
                  <Play className="w-5 h-5 text-foreground" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                    {ep.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">{ep.description}</p>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="font-medium text-foreground">{ep.guest}</span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {ep.duration}
                    </span>
                    <span>·</span>
                    <span>{ep.date}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <BlogFooter />
    </div>
  );
};

export default Podcast;
