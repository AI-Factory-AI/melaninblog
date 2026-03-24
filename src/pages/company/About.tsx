import { PageLayout, StaticPageSection } from "@/layout";

const About = () => (
  <PageLayout>
    <StaticPageSection
      title="About Melanin Connect"
      description="We publish stories, research, and conversations at the intersection of Black culture, technology, and innovation."
    >
      <p>
        Melanin Connect exists to amplify voices that are too often underrepresented in tech and media. Our writers and
        contributors cover machine learning, entrepreneurship, ethics, careers, and the communities building the future.
      </p>
      <p>
        Whether you are here to learn, share, or collaborate, we are glad you found us. Explore articles by topic, subscribe
        to the newsletter, or reach out via our contact page.
      </p>
    </StaticPageSection>
  </PageLayout>
);

export default About;
