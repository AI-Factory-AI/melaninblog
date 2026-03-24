import BlogNavbar from "@/components/BlogNavbar";
import HeroSection from "@/components/HeroSection";
import BlogGrid from "@/components/BlogGrid";
import NewsletterSection from "@/components/NewsletterSection";
import BlogFooter from "@/components/BlogFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <BlogNavbar />
      <HeroSection />
      <BlogGrid />
      <NewsletterSection />
      <BlogFooter />
    </div>
  );
};

export default Index;
