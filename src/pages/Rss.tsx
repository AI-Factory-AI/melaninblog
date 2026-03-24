import { PageLayout, StaticPageSection } from "@/layout";

const Rss = () => (
  <PageLayout>
    <StaticPageSection
      title="RSS feed"
      description="Subscribe to Melanin Connect in your favorite reader."
    >
      <p>
        A full RSS feed can be hosted at a stable URL (for example <code className="rounded bg-secondary px-1.5 py-0.5 text-sm">/rss.xml</code> in{" "}
        <code className="rounded bg-secondary px-1.5 py-0.5 text-sm">public/</code>) once you add static generation or a
        server route. For now, bookmark this site or use the newsletter for updates.
      </p>
    </StaticPageSection>
  </PageLayout>
);

export default Rss;
