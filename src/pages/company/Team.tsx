import { Link } from "react-router-dom";
import { PageLayout, StaticPageSection } from "@/layout";

const Team = () => (
  <PageLayout>
    <StaticPageSection
      title="Team"
      description="The people behind Melanin Connect — editors, contributors, and partners."
    >
      <p>
        We are a distributed team of writers, editors, and technologists. Team profiles and headshots will appear here as
        we grow the publication.
      </p>
      <p>
        Interested in contributing? Visit the{" "}
        <Link to="/careers" className="text-foreground underline hover:no-underline">
          Careers
        </Link>{" "}
        page for opportunities.
      </p>
    </StaticPageSection>
  </PageLayout>
);

export default Team;
