"use client";

import { Share2Icon } from "@radix-ui/react-icons";
import { forwardRef, useState } from "react";

import { Button } from "@/components/ui/button";

const ShareButton = forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>((props, ref) => {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const shareData = {
      title: "OJ Adeyemi - Portfolio",
      text: "Check out OJ Adeyemi's portfolio showcasing projects, skills, and experiences.",
      url: window.location.href,
    };

    // Check if Web Share API is supported
    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        // User cancelled or error occurred
        if ((err as Error).name !== "AbortError") {
          console.error("Error sharing:", err);
        }
      }
    } else {
      // Fallback: copy to clipboard
      try {
        await navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error("Failed to copy:", err);
      }
    }
  };

  return (
    <Button
      ref={ref}
      variant="ghost"
      size="icon"
      type="button"
      aria-label="Share portfolio"
      title={copied ? "Copied!" : "Share portfolio"}
      className="px-2"
      onClick={handleShare}
      {...props}
    >
      <Share2Icon className="h-[1.2rem] w-[1.2rem]" />
    </Button>
  );
});

ShareButton.displayName = "ShareButton";

export default ShareButton;
