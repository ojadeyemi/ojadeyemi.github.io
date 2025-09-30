import { ArrowLeft } from "lucide-react";
import Link from "next/link";

import type { Metadata } from "next";

import { getAllBlogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog | OJ Adeyemi",
  description:
    "Technical articles and insights on software engineering, data analysis, and development.",
};

export default async function BlogPage() {
  const posts = await getAllBlogPosts();

  return (
    <main className="flex min-h-[100dvh] flex-col space-y-10 py-10">
      <div className="space-y-4">
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </div>
        <h1 className="text-3xl font-bold tracking-tight">Blogs</h1>
      </div>

      <div className="space-y-6">
        {posts.length === 0 ? (
          <p className="text-muted-foreground">
            No blog posts yet. Check back soon!
          </p>
        ) : (
          posts.map((post) => (
            <article key={post.slug} className="group space-y-2">
              <Link
                href={`/blog/${post.slug}`}
                className="block space-y-2 rounded-lg p-4 transition-colors hover:bg-muted/50"
              >
                <div className="flex items-center justify-between">
                  <time className="text-sm text-muted-foreground">
                    {new Date(post.publishDate).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                  {post.readTime && (
                    <span className="text-sm text-muted-foreground">
                      {post.readTime}
                    </span>
                  )}
                </div>
                <h2 className="text-xl font-semibold transition-colors group-hover:text-primary">
                  {post.title}
                </h2>
                <p className="text-muted-foreground">{post.description}</p>
                {post.tags.length > 0 && (
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
                )}
              </Link>
            </article>
          ))
        )}
      </div>
    </main>
  );
}
