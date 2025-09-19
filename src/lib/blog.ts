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
const BLOG_SLUGS: string[] = ["sample-post"];

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

// External articles data
export function getExternalArticles(): BlogPost[] {
  return [
    {
      slug: "usports-basketball-efficiency",
      title: "USports Basketball Efficiency Landscape",
      description:
        "Data visualization and storytelling with basketball analytics",
      publishDate: "2024-03-15",
      tags: ["Data Visualization", "Sports Analytics", "Basketball"],
      thumbnail: "/img/usportsmbb_efficiency_landscape.png",
      isExternal: true,
      externalUrl:
        "https://www.linkedin.com/pulse/data-visualization-storytelling-my-data-driven-canada-oj-adeyemi-nyqcf/",
    },
    {
      slug: "usports-basketball-programs",
      title: "Most Successful USports Basketball Programs",
      description:
        "Discovering the most successful U Sports basketball programs through data analysis",
      publishDate: "2024-02-20",
      tags: ["Data Analysis", "Sports", "University Sports"],
      thumbnail: "/img/usportswbb_bestprogram.png",
      isExternal: true,
      externalUrl:
        "https://www.linkedin.com/pulse/unveiling-dominance-discovering-most-successful-u-sports-oj-adeyemi-7doic/",
    },
  ];
}

// Get all content (blogs + external articles) combined
export async function getAllContent(): Promise<BlogPost[]> {
  const blogPosts = await getAllBlogPosts();
  const externalArticles = getExternalArticles();

  return [...blogPosts, ...externalArticles].sort(
    (a, b) =>
      new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime(),
  );
}
