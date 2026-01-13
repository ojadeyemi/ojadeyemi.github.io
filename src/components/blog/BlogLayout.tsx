import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import Link from "next/link";

import type { BlogPost } from "@/lib/blog";

interface BlogLayoutProps {
  post: BlogPost;
  children: React.ReactNode;
}

export default function BlogLayout({ post, children }: BlogLayoutProps) {
  return (
    <>
      {/* Skip to main content link for keyboard navigation */}
      <a
        href="#blog-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground focus:outline-none focus:ring-2 focus:ring-ring"
      >
        Skip to content
      </a>

      <main
        className="flex min-h-[100dvh] flex-col space-y-10 py-10"
        id="main-content"
        role="main"
      >
        {/* Back navigation */}
        <nav aria-label="Breadcrumb navigation">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            aria-label="Return to blog list"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back to Blog
          </Link>
        </nav>

        {/* Blog post header */}
        <header className="space-y-6">
          {/* Metadata row */}
          <div
            className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground"
            role="contentinfo"
            aria-label="Article metadata"
          >
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" aria-hidden="true" />
              <time
                dateTime={post.publishDate}
                aria-label={`Published on ${new Date(post.publishDate).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}`}
              >
                {new Date(post.publishDate).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </div>

            {post.readTime && (
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" aria-hidden="true" />
                <span aria-label={`Estimated reading time: ${post.readTime}`}>
                  {post.readTime}
                </span>
              </div>
            )}

            {post.tags.length > 0 && (
              <div className="flex items-center gap-2">
                <Tag className="h-4 w-4" aria-hidden="true" />
                <ul className="flex flex-wrap gap-2" aria-label="Article tags">
                  {post.tags.map((tag) => (
                    <li key={tag}>
                      <span className="rounded-md bg-secondary px-2 py-1 text-xs text-secondary-foreground">
                        {tag}
                      </span>
                    </li>
                  ))}
                </ul>
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
          <hr className="border-border" aria-hidden="true" />
        </header>

        {/* Blog content */}
        <article
          className="max-w-none space-y-6"
          id="blog-content"
          aria-label="Article content"
        >
          {children}
        </article>
      </main>
    </>
  );
}
