import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import Articles from "./pages/Articles.tsx";
import Research from "./pages/Research.tsx";
import Podcast from "./pages/Podcast.tsx";
import Newsletter from "./pages/Newsletter.tsx";
import Resources from "./pages/Resources.tsx";
import BlogDetail from "./pages/BlogDetail.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/research" element={<Research />} />
          <Route path="/podcast" element={<Podcast />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/newsletter" element={<Newsletter />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
