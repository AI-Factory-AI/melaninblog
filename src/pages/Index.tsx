import { PageLayout } from "@/layout";
import HeroSection from "@/components/home/HeroSection";
import BlogGrid from "@/components/blog/BlogGrid";
import NewsletterSection from "@/components/home/NewsletterSection";
import { blogPosts } from "@/data/blogData";

const Index = () => {
  return (
    <PageLayout>
      <HeroSection />
      <BlogGrid posts={blogPosts} title="Latest Articles" showViewAll={true} />
      <NewsletterSection />
    </PageLayout>
  );
};

export default Index;
