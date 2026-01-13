export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  publishDate: string;
  tags: string[];
  readTime?: string;
  thumbnail?: string;
  isExternal: boolean;
  externalUrl?: string;
}

// Manually maintain list of blog slugs for static export
const BLOG_SLUGS: string[] = ["northscore-system-design", "sample-post"];

export function getAllSlugs(): string[] {
  return BLOG_SLUGS;
}

// For getting metadata from MDX files, we'll import them dynamically
export async function getBlogPostMetadata(
  slug: string,
): Promise<BlogPost | null> {
  try {
    const module = await import(`@/content/blog/${slug}.mdx`);
    const metadata = module.metadata;

    return {
      slug,
      title: metadata?.title || "Untitled",
      description: metadata?.description || "",
      publishDate: metadata?.publishDate || new Date().toISOString(),
      tags: metadata?.tags || [],
      readTime: metadata?.readTime,
      thumbnail: metadata?.thumbnail,
      isExternal: false,
    };
  } catch (error) {
    console.error(`Error reading blog post metadata ${slug}:`, error);
    return null;
  }
}

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  const slugs = getAllSlugs();
  const posts = await Promise.all(
    slugs.map((slug) => getBlogPostMetadata(slug)),
  );

  return posts
    .filter((post): post is BlogPost => post !== null)
    .sort(
      (a, b) =>
        new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime(),
    );
}
