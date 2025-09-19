import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import Link from "next/link";

import type { BlogPost } from "@/lib/blog";

interface BlogLayoutProps {
  post: BlogPost;
  children: React.ReactNode;
}

export default function BlogLayout({ post, children }: BlogLayoutProps) {
  return (
    <main className="flex min-h-[100dvh] flex-col space-y-10 py-10">
      {/* Back navigation */}
      <div>
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Blog
        </Link>
      </div>

      {/* Blog post header */}
      <header className="space-y-6">
        {/* Metadata row */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <time>
              {new Date(post.publishDate).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          </div>

          {post.readTime && (
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{post.readTime}</span>
            </div>
          )}

          {post.tags.length > 0 && (
            <div className="flex items-center gap-2">
              <Tag className="h-4 w-4" />
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-secondary px-2 py-1 text-xs text-secondary-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Title and description */}
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">{post.title}</h1>
          {post.description && (
            <p className="text-xl leading-relaxed text-muted-foreground">
              {post.description}
            </p>
          )}
        </div>

        {/* Divider */}
        <hr className="border-border" />
      </header>

      {/* Blog content */}
      <article className="max-w-none space-y-6">{children}</article>
    </main>
  );
}
