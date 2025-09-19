"use client";

import { ExternalLinkIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { BlurFade } from "@/components/ui/blur-fade";
import { BLUR_FADE_DELAY } from "@/constants/constant";
import { type BlogPost, getAllContent } from "@/lib/blog";

const Articles = () => {
  const [content, setContent] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const allContent = await getAllContent();
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
            <h2 className="text-md font-bold">Articles</h2>
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
            <Link
              href="/blog"
              className="text-xs text-muted-foreground hover:text-primary"
            >
              View all →
            </Link>
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
                {item.isExternal ? (
                  <a
                    href={item.externalUrl}
                    className="flex items-center text-xs hover:underline sm:text-sm"
                    rel="noopener noreferrer"
                    target="_blank"
                    aria-label={`Read ${item.title}`}
                  >
                    {item.title}
                    <ExternalLinkIcon className="ml-1.5 flex self-center hover:text-muted-foreground" />
                  </a>
                ) : (
                  <Link
                    href={`/blog/${item.slug}`}
                    className="flex items-center text-xs hover:underline sm:text-sm"
                  >
                    {item.title}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </BlurFade>
    </section>
  );
};

export default Articles;
