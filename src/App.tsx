import { ThemeProvider } from "next-themes";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { lazy, Suspense } from "react";

const Index = lazy(() => import("./pages/Index.tsx"));
const Articles = lazy(() => import("./pages/Articles.tsx"));
const Research = lazy(() => import("./pages/Research.tsx"));
const Podcast = lazy(() => import("./pages/Podcast.tsx"));
const Newsletter = lazy(() => import("./pages/Newsletter.tsx"));
const Resources = lazy(() => import("./pages/Resources.tsx"));
const BlogDetail = lazy(() => import("./pages/BlogDetail.tsx"));
const NotFound = lazy(() => import("./pages/NotFound.tsx"));
const About = lazy(() => import("./pages/company/About.tsx"));
const Team = lazy(() => import("./pages/company/Team.tsx"));
const Careers = lazy(() => import("./pages/company/Careers.tsx"));
const Contact = lazy(() => import("./pages/company/Contact.tsx"));
const TopicPage = lazy(() => import("./pages/topics/TopicPage.tsx"));
const Rss = lazy(() => import("./pages/Rss.tsx"));

const App = () => (
  <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<div className="flex h-screen w-full items-center justify-center"><div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" /></div>}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/research" element={<Research />} />
            <Route path="/podcast" element={<Podcast />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/newsletter" element={<Newsletter />} />
            <Route path="/blog/:slug" element={<BlogDetail />} />
            <Route path="/topics/:topicSlug" element={<TopicPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/team" element={<Team />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/rss" element={<Rss />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </ThemeProvider>
);

export default App;
