import { useState } from "react";
import { Heart, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useBlogEngagement } from "@/hooks/useBlogEngagement";

interface ArticleEngagementProps {
  slug: string;
}

const ArticleEngagement = ({ slug }: ArticleEngagementProps) => {
  const { likes, userLiked, comments, toggleLike, addComment } = useBlogEngagement(slug);
  const [name, setName] = useState("");
  const [body, setBody] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addComment(name, body);
    setBody("");
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="mt-12 pt-10 border-t border-border"
      aria-label="Reactions and comments"
    >
      <div className="flex flex-wrap items-center gap-6 gap-y-3">
        <button
          type="button"
          onClick={toggleLike}
          aria-pressed={userLiked}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          <Heart
            className={`h-5 w-5 transition-colors ${userLiked ? "fill-primary text-primary" : "text-muted-foreground"}`}
            aria-hidden
          />
          <span>
            {likes === 1 ? "1 like" : `${likes} likes`}
          </span>
        </button>
        <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
          <MessageCircle className="h-5 w-5" aria-hidden />
          {comments.length === 1 ? "1 comment" : `${comments.length} comments`}
        </span>
      </div>

      <div className="mt-10">
        <h2 className="font-display text-xl font-semibold text-foreground mb-6">Comments</h2>

        {comments.length === 0 ? (
          <p className="text-sm text-muted-foreground mb-8">No comments yet. Start the conversation.</p>
        ) : (
          <ul className="space-y-6 mb-10">
            {comments.map((c) => (
              <li key={c.id} className="rounded-xl border border-border bg-secondary/30 px-4 py-4">
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                  <span className="text-sm font-medium text-foreground">{c.author}</span>
                  <time className="text-xs text-muted-foreground" dateTime={c.createdAt}>
                    {new Date(c.createdAt).toLocaleString(undefined, {
                      dateStyle: "medium",
                      timeStyle: "short",
                    })}
                  </time>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-wrap">{c.body}</p>
              </li>
            ))}
          </ul>
        )}

        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label htmlFor={`comment-name-${slug}`} className="sr-only">
              Your name
            </label>
            <input
              id={`comment-name-${slug}`}
              type="text"
              placeholder="Name (optional)"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full max-w-md rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              maxLength={80}
            />
          </div>
          <div>
            <label htmlFor={`comment-body-${slug}`} className="sr-only">
              Comment
            </label>
            <textarea
              id={`comment-body-${slug}`}
              required
              rows={4}
              placeholder="Write a comment…"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring resize-y min-h-[100px]"
              maxLength={4000}
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            Post comment
          </button>
        </form>
      </div>
    </motion.section>
  );
};

export default ArticleEngagement;
