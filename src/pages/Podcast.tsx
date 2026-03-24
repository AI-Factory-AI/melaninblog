import { motion } from "framer-motion";
import { Play, Clock, Headphones, AudioLines } from "lucide-react";
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
    mediaType: "audio",
    mediaUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
  },
  {
    id: 2,
    title: "The Future of AI in African Healthcare",
    guest: "Dr. Amina Diallo, AI Researcher",
    duration: "38 min",
    date: "Mar 14, 2026",
    description: "How AI-powered diagnostics are transforming healthcare access across sub-Saharan Africa.",
    mediaType: "audio",
    mediaUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
  },
  {
    id: 3,
    title: "Funding the Future: VC and Black Founders",
    guest: "Marcus Thompson, Partner at Harlem Capital",
    duration: "45 min",
    date: "Mar 7, 2026",
    description: "An honest conversation about the state of venture capital and strategies for Black entrepreneurs.",
    mediaType: "audio",
    mediaUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
  },
  {
    id: 4,
    title: "Designing Inclusive AI Systems",
    guest: "Keisha Williams, Ethics Lead at DeepMind",
    duration: "36 min",
    date: "Feb 28, 2026",
    description: "Why diversity in AI development teams leads to better products for everyone.",
    mediaType: "audio",
    mediaUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
  },
  {
    id: 5,
    title: "From Side Project to $10M ARR",
    guest: "Tobi Adeyemi, Founder of StackPay",
    duration: "50 min",
    date: "Feb 21, 2026",
    description: "The story behind one of Africa's fastest-growing fintech platforms.",
    mediaType: "audio",
    mediaUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
  },
];

const Podcast = () => {
  return (
    <div className="min-h-screen bg-background">
      <BlogNavbar />
      <section className="pt-24 md:pt-32 pb-10 md:pb-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
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
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground mb-4">
                The Melanin Connect Podcast
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6">
                Weekly conversations with the innovators, founders, and thinkers shaping the future of technology and culture.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="#latest-episode"
                  className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-medium hover:opacity-90 transition-opacity w-full sm:w-auto"
                >
                  <Play className="w-4 h-4" />
                  Latest Episode
                </a>
                <button className="inline-flex items-center justify-center gap-2 border border-border text-foreground px-5 py-2.5 rounded-full text-sm font-medium hover:bg-secondary transition-colors w-full sm:w-auto">
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
              <img src={podcastHero} alt="Podcast studio" className="w-full h-56 sm:h-72 object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="container mx-auto">
          <h2 className="font-display text-xl sm:text-2xl font-semibold text-foreground mb-6 md:mb-8">All Episodes</h2>
          <div className="space-y-4">
            {episodes.map((ep, i) => (
              <motion.article
                key={ep.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="rounded-2xl border border-border bg-card p-4 sm:p-6"
                id={ep.id === 1 ? "latest-episode" : undefined}
              >
                <div className="flex items-start gap-3 mb-2 min-w-0">
                  <div className="w-7 h-7 rounded-full bg-secondary text-foreground text-xs font-semibold flex items-center justify-center mt-0.5">
                    {i + 1}
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-display text-lg sm:text-xl font-semibold text-foreground mb-1 break-words">{ep.title}</h3>
                    <p className="text-sm text-muted-foreground">{ep.description}</p>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground mb-4">
                  <span className="font-medium text-foreground">{ep.guest}</span>
                  <span>·</span>
                  <span className="inline-flex items-center gap-1 rounded-full border border-border px-2 py-0.5">
                    <AudioLines className="w-3 h-3" />
                    Audio
                  </span>
                  <span>·</span>
                  <span className="inline-flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {ep.duration}
                  </span>
                  <span>·</span>
                  <span>{ep.date}</span>
                </div>
                <audio controls preload="none" className="w-full" src={ep.mediaUrl}>
                  Your browser does not support the audio element.
                </audio>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
      <BlogFooter />
    </div>
  );
};

export default Podcast;
