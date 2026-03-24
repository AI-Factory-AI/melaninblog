const BlogFooter = () => {
  return (
    <footer className="border-t border-border py-12 px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h4 className="font-display text-sm font-semibold text-foreground mb-4">Content</h4>
            <ul className="space-y-2">
              {["Articles", "Research", "Podcast", "Resources"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-display text-sm font-semibold text-foreground mb-4">Topics</h4>
            <ul className="space-y-2">
              {["Machine Learning", "Entrepreneurship", "AI Ethics", "Career"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-display text-sm font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-2">
              {["About", "Team", "Careers", "Contact"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-display text-sm font-semibold text-foreground mb-4">Social</h4>
            <ul className="space-y-2">
              {["Twitter", "LinkedIn", "Instagram", "RSS"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border">
          <img
            src="/melanin_cbyyuk.png"
            alt="Melanin Connect"
            className="h-10 lg:h-16 w-auto"
          />
          <p className="text-xs text-muted-foreground mt-2 md:mt-0">
            © 2026 Melanin Connect. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default BlogFooter;
