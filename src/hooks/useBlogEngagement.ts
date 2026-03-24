import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "melanin-connect-blog-engagement";

export interface BlogComment {
  id: string;
  author: string;
  body: string;
  createdAt: string;
}

interface PostEngagement {
  likes: number;
  userLiked: boolean;
  comments: BlogComment[];
}

function readAll(): Record<string, PostEngagement> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    return JSON.parse(raw) as Record<string, PostEngagement>;
  } catch {
    return {};
  }
}

function writeAll(data: Record<string, PostEngagement>) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

const emptyPost = (): PostEngagement => ({
  likes: 0,
  userLiked: false,
  comments: [],
});

function loadPost(slug: string): PostEngagement {
  if (typeof window === "undefined") return emptyPost();
  return readAll()[slug] ?? emptyPost();
}

export function useBlogEngagement(slug: string) {
  const [state, setState] = useState<PostEngagement>(() => loadPost(slug));

  useEffect(() => {
    setState(loadPost(slug));
  }, [slug]);

  const toggleLike = useCallback(() => {
    setState((s) => {
      const userLiked = !s.userLiked;
      const likes = Math.max(0, s.likes + (userLiked ? 1 : -1));
      const next: PostEngagement = { ...s, userLiked, likes };
      const all = readAll();
      all[slug] = next;
      writeAll(all);
      return next;
    });
  }, [slug]);

  const addComment = useCallback(
    (author: string, body: string) => {
      const trimmed = body.trim();
      if (!trimmed) return;
      const comment: BlogComment = {
        id: crypto.randomUUID(),
        author: author.trim() || "Anonymous",
        body: trimmed,
        createdAt: new Date().toISOString(),
      };
      setState((s) => {
        const next: PostEngagement = { ...s, comments: [...s.comments, comment] };
        const all = readAll();
        all[slug] = next;
        writeAll(all);
        return next;
      });
    },
    [slug],
  );

  return {
    likes: state.likes,
    userLiked: state.userLiked,
    comments: state.comments,
    toggleLike,
    addComment,
  };
}
