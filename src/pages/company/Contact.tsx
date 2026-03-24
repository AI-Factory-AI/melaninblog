import { PageLayout, StaticPageSection } from "@/layout";

const Contact = () => (
  <PageLayout>
    <StaticPageSection title="Contact" description="Questions, tips, or partnership ideas — we would love to hear from you.">
      <form
        className="space-y-4 max-w-lg"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div>
          <label htmlFor="contact-name" className="mb-2 block text-sm font-medium text-foreground">
            Name
          </label>
          <input
            id="contact-name"
            type="text"
            className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="contact-email" className="mb-2 block text-sm font-medium text-foreground">
            Email
          </label>
          <input
            id="contact-email"
            type="email"
            required
            className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label htmlFor="contact-message" className="mb-2 block text-sm font-medium text-foreground">
            Message
          </label>
          <textarea
            id="contact-message"
            required
            rows={5}
            className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring resize-y min-h-[120px]"
            placeholder="How can we help?"
          />
        </div>
        <button
          type="submit"
          className="rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity"
        >
          Send message
        </button>
        <p className="text-xs text-muted-foreground pt-2">
          This form is front-end only for now — wire it to your API or form service when ready.
        </p>
      </form>
    </StaticPageSection>
  </PageLayout>
);

export default Contact;
