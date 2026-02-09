"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { type ComponentProps, type MouseEvent } from "react";

type ViewTransitionLinkProps = ComponentProps<typeof Link>;

export function ViewTransitionLink({
  href,
  children,
  ...props
}: ViewTransitionLinkProps) {
  const router = useRouter();

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    // Allow default behavior for external links, new tabs, or modified clicks
    if (
      typeof href !== "string" ||
      href.startsWith("http") ||
      href.startsWith("#") ||
      e.metaKey ||
      e.ctrlKey ||
      e.shiftKey ||
      e.altKey ||
      props.target === "_blank"
    ) {
      return;
    }

    // Check if browser supports View Transitions
    if (!document.startViewTransition) {
      return; // Let Next.js Link handle it normally
    }

    e.preventDefault();

    // For static export, use async router push and wait for transition
    const transition = document.startViewTransition(async () => {
      router.push(href);
      // Wait a tick for router to update
      await new Promise((resolve) => setTimeout(resolve, 0));
    });

    // Ensure view transition completes
    transition.ready.catch(() => {
      // Fallback if transition fails
      router.push(href);
    });
  };

  return (
    <Link href={href} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
}
