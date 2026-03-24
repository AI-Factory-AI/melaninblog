import type { ReactNode } from "react";
import BlogNavbar from "./BlogNavbar";
import BlogFooter from "./BlogFooter";

interface PageLayoutProps {
  children: ReactNode;
}

/** Standard shell: fixed nav, scrollable main, footer */
export const PageLayout = ({ children }: PageLayoutProps) => (
  <div className="min-h-screen bg-background flex flex-col">
    <BlogNavbar />
    <main className="flex-1">{children}</main>
    <BlogFooter />
  </div>
);
