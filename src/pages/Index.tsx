import BlogNavbar from "@/components/BlogNavbar";
import HeroSection from "@/components/HeroSection";
import BlogGrid from "@/components/BlogGrid";
import NewsletterSection from "@/components/NewsletterSection";
import BlogFooter from "@/components/BlogFooter";
import { blogPosts } from "@/data/blogData";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <BlogNavbar />
      <HeroSection />
      <BlogGrid posts={blogPosts.slice(0, 6)} />
      <NewsletterSection />
      <BlogFooter />
    </div>
  );
};

export default Index;
