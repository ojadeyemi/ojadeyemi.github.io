import { notFound } from "next/navigation";

import type { Metadata } from "next";

import BlogLayout from "@/components/blog/BlogLayout";
import { getAllSlugs, getBlogPostMetadata } from "@/lib/blog";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostMetadata(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.publishDate,
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getBlogPostMetadata(slug);

  if (!post) {
    notFound();
  }

  // Dynamically import the MDX content
  const MDXContent = (await import(`@/content/blog/${slug}.mdx`)).default;

  return (
    <BlogLayout post={post}>
      <MDXContent />
    </BlogLayout>
  );
}
