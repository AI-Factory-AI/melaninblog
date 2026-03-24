import { PageLayout, StaticPageSection } from "@/layout";
import { Link } from "react-router-dom";

const Careers = () => (
  <PageLayout>
    <StaticPageSection
      title="Careers"
      description="We are always interested in writers, editors, and partners who share our mission."
    >
      <p>
        Open roles and freelance opportunities will be listed here. In the meantime, send a short note and portfolio link
        through our contact form — we read every message.
      </p>
      <p>
        <Link to="/contact" className="text-foreground font-medium underline hover:no-underline">
          Get in touch →
        </Link>
      </p>
    </StaticPageSection>
  </PageLayout>
);

export default Careers;
