"use client";

import { Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface VideoDialogProps {
  videoId: string;
  title: string;
  description?: string;
  thumbnailUrl?: string;
}

export function VideoDialog({
  videoId,
  title,
  description,
  thumbnailUrl,
}: VideoDialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const openDialog = () => {
    dialogRef.current?.showModal();
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeDialog = () => {
    dialogRef.current?.close();
    setIsOpen(false);
    document.body.style.overflow = "";
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        closeDialog();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const defaultThumbnail = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  if (!isMounted) {
    return (
      <div className="my-8 w-full">
        <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-gray-900">
          <img
            src={thumbnailUrl || defaultThumbnail}
            alt={`Video thumbnail: ${title}`}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/30">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-red-600">
              <Play className="ml-1 h-10 w-10 fill-white text-white" />
            </div>
          </div>
        </div>
        {description && (
          <p className="mt-2 text-center text-sm text-muted-foreground">
            {description}
          </p>
        )}
      </div>
    );
  }

  return (
    <>
      <button
        onClick={openDialog}
        className="group relative my-8 w-full overflow-hidden rounded-lg transition-all hover:ring-2 hover:ring-primary focus:outline-none focus:ring-2 focus:ring-primary"
        aria-label={`Play video: ${title}`}
      >
        <div className="relative aspect-video w-full bg-gray-900">
          <img
            src={thumbnailUrl || defaultThumbnail}
            alt={`Video thumbnail: ${title}`}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/30 transition-all group-hover:bg-black/40">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-red-600 transition-all group-hover:scale-110 group-hover:bg-red-700">
              <Play className="ml-1 h-10 w-10 fill-white text-white" />
            </div>
          </div>
        </div>
        {description && (
          <p className="mt-2 text-center text-sm text-muted-foreground">
            {description}
          </p>
        )}
      </button>

      <dialog
        ref={dialogRef}
        className="m-auto max-h-[90vh] max-w-[90vw] rounded-lg bg-transparent p-0 backdrop:bg-black/80 backdrop:backdrop-blur-sm"
        aria-labelledby="video-dialog-title"
        onClick={(e) => {
          if (e.target === dialogRef.current) {
            closeDialog();
          }
        }}
      >
        <div className="relative w-full">
          <div
            className="relative bg-black"
            style={{ aspectRatio: "16 / 9", width: "min(90vw, 1280px)" }}
          >
            {isOpen && (
              <iframe
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
                className="h-full w-full"
                loading="eager"
              />
            )}
          </div>

          <h2 id="video-dialog-title" className="sr-only">
            {title}
          </h2>
        </div>
      </dialog>
    </>
  );
}
