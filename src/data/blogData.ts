import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";
import blog4 from "@/assets/blog-4.jpg";
import blog5 from "@/assets/blog-5.jpg";
import blog6 from "@/assets/blog-6.jpg";

export interface BlogPost {
  slug: string;
  image: string;
  category: string;
  title: string;
  excerpt: string;
  author: string;
  authorInitials: string;
  date: string;
  readTime: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "why-transformer-models-redefining-machines",
    image: blog1,
    category: "Machine Learning",
    title: "Why Transformer Models Are Redefining What Machines Can Understand",
    excerpt: "From GPT to multimodal systems, transformer architectures continue to push the boundaries of natural language processing.",
    author: "Sarah Kim",
    authorInitials: "SK",
    date: "Mar 20, 2026",
    readTime: "6 min",
    content: `The transformer architecture, first introduced in 2017 with the landmark paper "Attention Is All You Need," has fundamentally altered our approach to machine learning. What started as an improvement for sequence-to-sequence tasks has become the backbone of nearly every major AI breakthrough.\n\nAt its core, the transformer relies on self-attention mechanisms that allow the model to weigh the importance of different parts of an input simultaneously, rather than processing it sequentially. This parallel processing capability not only speeds up training but enables the model to capture long-range dependencies in data far more effectively.\n\n## The Rise of Multimodal Transformers\n\nRecent developments have pushed transformers beyond text. Vision transformers (ViTs) now compete with and often outperform convolutional neural networks on image classification tasks. Audio transformers process speech with unprecedented accuracy. And multimodal models like GPT-4 can reason across text, images, and code simultaneously.\n\nThis convergence toward a single architecture for multiple modalities suggests we're moving closer to more general-purpose AI systems — machines that can understand and generate across the full spectrum of human communication.\n\n## What Comes Next\n\nThe research community is actively working on making transformers more efficient. Techniques like sparse attention, mixture of experts, and quantization are bringing the computational costs down while maintaining performance. The future likely holds even more capable models that run on everyday hardware.`,
  },
  {
    slug: "quiet-revolution-synthetic-data",
    image: blog2,
    category: "Data Science",
    title: "The Quiet Revolution in Synthetic Data Generation",
    excerpt: "How AI-generated datasets are solving privacy concerns while accelerating model training across industries.",
    author: "Alex Rivera",
    authorInitials: "AR",
    date: "Mar 18, 2026",
    readTime: "5 min",
    content: `In an era where data is the new oil, access to high-quality training data remains one of the biggest bottlenecks in AI development. Privacy regulations like GDPR and CCPA have made it increasingly difficult for organizations to collect and use real-world data. Enter synthetic data — artificially generated information that mimics the statistical properties of real datasets.\n\n## Why Synthetic Data Matters\n\nSynthetic data addresses several critical challenges simultaneously. It eliminates privacy concerns since no real individuals are represented. It can be generated in virtually unlimited quantities, enabling training at scales previously impossible. And it can be specifically crafted to include edge cases and rare scenarios that might be underrepresented in real-world data.\n\n## Industry Applications\n\nHealthcare has been an early adopter, using synthetic patient records to train diagnostic AI without exposing real medical histories. Autonomous vehicle companies generate billions of synthetic driving scenarios to test their systems. Financial institutions create synthetic transaction data to train fraud detection models.\n\nThe market for synthetic data is expected to exceed $3 billion by 2027, and some estimates suggest that by 2030, most data used for AI training will be synthetic rather than real.`,
  },
  {
    slug: "beyond-silicon-next-gen-ai-chips",
    image: blog3,
    category: "Hardware",
    title: "Beyond Silicon: The Next Generation of AI Chips",
    excerpt: "Neuromorphic computing and photonic processors are promising to deliver exponential gains in AI performance.",
    author: "David Park",
    authorInitials: "DP",
    date: "Mar 15, 2026",
    readTime: "7 min",
    content: `As AI models grow exponentially in size and complexity, the semiconductor industry faces an inflection point. Traditional silicon-based processors, even the most advanced GPUs, are approaching fundamental physical limits in terms of power efficiency and miniaturization.\n\n## Neuromorphic Computing\n\nInspired by the human brain, neuromorphic chips process information using artificial neurons and synapses. Intel's Loihi 2 and IBM's NorthPole chip demonstrate that brain-inspired architectures can perform certain AI tasks with a fraction of the energy required by conventional processors.\n\n## Photonic Processing\n\nPhotonic processors use light instead of electrons to perform computations. Companies like Lightmatter and Luminous Computing are developing chips that can perform matrix multiplications — the core operation in neural networks — at the speed of light, with dramatically reduced energy consumption.\n\n## The Quantum Angle\n\nWhile still in early stages, quantum computing offers the tantalizing possibility of solving optimization problems that are intractable for classical computers. Hybrid quantum-classical approaches are already being explored for specific AI applications like drug discovery and materials science.`,
  },
  {
    slug: "building-tech-empire-from-lagos-to-silicon-valley",
    image: blog4,
    category: "Entrepreneurship",
    title: "Building a Tech Empire: From Lagos to Silicon Valley",
    excerpt: "How a new generation of Black tech founders is redefining the global startup ecosystem with innovative solutions.",
    author: "Amara Okafor",
    authorInitials: "AO",
    date: "Mar 12, 2026",
    readTime: "8 min",
    content: `The narrative of tech entrepreneurship is being rewritten by a bold new generation of founders from across the African diaspora. From fintech solutions serving the unbanked to AI-powered healthcare platforms, these innovators are building companies that address real-world problems at scale.\n\n## The African Tech Renaissance\n\nAfrica's tech ecosystem has seen explosive growth, with startup funding surpassing $5 billion annually. Cities like Lagos, Nairobi, and Cape Town have become vibrant tech hubs, nurturing companies that serve both local and global markets.\n\n## Breaking Barriers\n\nDespite progress, Black founders still receive a disproportionately small share of venture capital. But alternative funding models, including revenue-based financing and community-driven investment platforms, are creating new pathways to growth.\n\n## The Diaspora Advantage\n\nFounders who bridge African and Western markets bring unique perspectives. They understand the infrastructure challenges of emerging markets and the scalability expectations of developed ones. This dual perspective is proving to be a powerful competitive advantage.`,
  },
  {
    slug: "ai-ethics-representation-matters",
    image: blog5,
    category: "AI Ethics",
    title: "Why Representation in AI Development Isn't Optional",
    excerpt: "Diverse teams build better AI. Here's the research — and the roadmap — for a more inclusive tech industry.",
    author: "Marcus Johnson",
    authorInitials: "MJ",
    date: "Mar 10, 2026",
    readTime: "6 min",
    content: `The AI systems we build reflect the perspectives of the people who build them. When development teams lack diversity, the resulting technology can perpetuate and amplify existing biases, leading to real harm for marginalized communities.\n\n## The Bias Problem\n\nStudies have repeatedly shown that facial recognition systems perform worse on darker skin tones, that language models can generate racist content, and that hiring algorithms can discriminate against certain demographics. These aren't just technical failures — they're consequences of homogeneous development teams.\n\n## Building Better Teams\n\nResearch from McKinsey consistently shows that diverse teams outperform homogeneous ones. In AI specifically, diverse perspectives lead to more robust testing, more inclusive training data, and more thoughtful deployment strategies.\n\n## The Path Forward\n\nOrganizations committed to ethical AI must invest in pipeline programs, mentorship initiatives, and inclusive hiring practices. But diversity alone isn't enough — true inclusion requires creating environments where diverse voices are heard and valued in every stage of the development process.`,
  },
  {
    slug: "coding-bootcamp-to-cto",
    image: blog6,
    category: "Career",
    title: "From Coding Bootcamp to CTO: Unconventional Paths in Tech",
    excerpt: "Traditional CS degrees aren't the only route to tech leadership. These stories prove alternative paths can lead to the top.",
    author: "Jordan Blake",
    authorInitials: "JB",
    date: "Mar 8, 2026",
    readTime: "5 min",
    content: `The tech industry has long been gatekept by prestigious university degrees and traditional career paths. But a growing number of leaders are proving that talent, determination, and continuous learning can override any lack of formal credentials.\n\n## The Bootcamp Revolution\n\nCoding bootcamps have produced some of the industry's most innovative engineers. The intensive, project-based learning model often produces graduates who are more immediately productive than their traditionally-educated peers.\n\n## Self-Taught Success Stories\n\nSome of the most impactful figures in tech history were self-taught. Today, open-source contributions, personal projects, and community involvement can serve as powerful signals of capability — often more relevant than a degree from a top university.\n\n## Changing Hiring Practices\n\nForward-thinking companies are removing degree requirements and adopting skills-based hiring. This shift is opening doors for talented individuals from all backgrounds and creating more diverse, innovative teams.`,
  },
];

export const researchPosts = blogPosts.filter(p =>
  ["Machine Learning", "Data Science", "Hardware"].includes(p.category)
);

export const getPostBySlug = (slug: string) =>
  blogPosts.find(p => p.slug === slug);

export const getPostsByCategory = (category: string) =>
  blogPosts.filter(p => p.category === category);

/** Case-insensitive match on title, excerpt, category, and author. */
export const searchBlogPosts = (query: string): BlogPost[] => {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return blogPosts.filter(
    p =>
      p.title.toLowerCase().includes(q) ||
      p.excerpt.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.author.toLowerCase().includes(q),
  );
};
