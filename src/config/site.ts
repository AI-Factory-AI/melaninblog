/** Site-wide navigation and footer links */

export const SITE_NAME = "Melanin Connect";

export const headerNav = [
  { label: "Articles", path: "/articles" },
  { label: "Research", path: "/research" },
  { label: "Podcast", path: "/podcast" },
  { label: "Resources", path: "/resources" },
  { label: "Newsletter", path: "/newsletter" },
] as const;

export const footerContent = [
  { label: "Articles", to: "/articles" },
  { label: "Research", to: "/research" },
  { label: "Podcast", to: "/podcast" },
  { label: "Resources", to: "/resources" },
] as const;

/** Topic hub routes → category label in blog data */
export const topicRouteToCategory: Record<string, string> = {
  "machine-learning": "Machine Learning",
  entrepreneurship: "Entrepreneurship",
  "ai-ethics": "AI Ethics",
  career: "Career",
};

export const footerTopics = [
  { label: "Machine Learning", to: "/topics/machine-learning" },
  { label: "Entrepreneurship", to: "/topics/entrepreneurship" },
  { label: "AI Ethics", to: "/topics/ai-ethics" },
  { label: "Career", to: "/topics/career" },
] as const;

export const footerCompany = [
  { label: "About", to: "/about" },
  { label: "Team", to: "/team" },
  { label: "Careers", to: "/careers" },
  { label: "Contact", to: "/contact" },
] as const;

export const footerSocial = [
  { label: "Twitter", href: "https://twitter.com", external: true },
  { label: "LinkedIn", href: "https://www.linkedin.com", external: true },
  { label: "Instagram", href: "https://www.instagram.com", external: true },
  { label: "RSS", href: "/rss", external: false },
] as const;
