"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { BlurFade } from "@/components/ui/blur-fade";
import { ViewTransitionLink } from "@/components/ui/view-transition-link";
import { BLUR_FADE_DELAY } from "@/constants/constant";
import { type BlogPost, getAllBlogPosts } from "@/lib/blog";

const Articles = () => {
  const [content, setContent] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const allContent = await getAllBlogPosts();
        setContent(allContent.slice(0, 4)); // Show only 4 most recent
      } catch (error) {
        console.error("Error fetching content:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, []);

  if (loading) {
    return (
      <section id="articles">
        <BlurFade delay={BLUR_FADE_DELAY * 22}>
          <div className="flex flex-col gap-y-4">
            <h2 className="text-md font-bold">Blogs</h2>
            <div className="flex flex-col gap-y-3">
              <div className="text-sm text-muted-foreground">Loading...</div>
            </div>
          </div>
        </BlurFade>
      </section>
    );
  }

  return (
    <section id="articles">
      <BlurFade delay={BLUR_FADE_DELAY * 22}>
        <div className="flex flex-col gap-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-md font-bold">Articles</h2>
            <ViewTransitionLink
              href="/blog"
              className="text-xs text-muted-foreground hover:text-primary"
            >
              View all →
            </ViewTransitionLink>
          </div>
          <div className="flex flex-col gap-y-3">
            {content.map((item) => (
              <div
                key={item.slug}
                className="flex flex-row items-center gap-x-1.5"
              >
                {item.thumbnail && (
                  <Image
                    src={item.thumbnail}
                    alt={item.title}
                    width={40}
                    height={20}
                    className="mr-2 rounded no-drag"
                  />
                )}
                <ViewTransitionLink
                  href={`/blog/${item.slug}`}
                  className="flex items-center text-xs hover:underline sm:text-sm"
                >
                  {item.title}
                </ViewTransitionLink>
              </div>
            ))}
          </div>
        </div>
      </BlurFade>
    </section>
  );
};

export default Articles;
