import React, { ComponentPropsWithoutRef } from "react";

import {
  FadeIn,
  SlideIn,
  StaggerChildren,
  StaggerItem,
} from "@/components/blog/Animated";
import { CopyButton } from "@/components/blog/CopyButton";
import { ErrorAside } from "@/components/blog/ErrorAside";
import { InfoAside } from "@/components/blog/InfoAside";
import { SuccessAside } from "@/components/blog/SuccessAside";
import { VideoDialog } from "@/components/blog/VideoDialog";
import { WarningAside } from "@/components/blog/WarningAside";
import { ViewTransitionLink } from "@/components/ui/view-transition-link";

type HeadingProps = ComponentPropsWithoutRef<"h1">;
type ParagraphProps = ComponentPropsWithoutRef<"p">;
type ListProps = ComponentPropsWithoutRef<"ul">;
type ListItemProps = ComponentPropsWithoutRef<"li">;
type AnchorProps = ComponentPropsWithoutRef<"a">;
type BlockquoteProps = ComponentPropsWithoutRef<"blockquote">;

const components = {
  // Animation components
  FadeIn,
  SlideIn,
  StaggerChildren,
  StaggerItem,
  // Aside components
  InfoAside,
  WarningAside,
  SuccessAside,
  ErrorAside,
  // Video component
  VideoDialog,
  // Typography
  h1: (props: HeadingProps) => (
    <h1 className="mb-0 pt-12 font-medium" {...props} />
  ),
  h2: (props: HeadingProps) => (
    <h2
      className="mb-3 mt-8 font-medium text-gray-800 dark:text-zinc-200"
      {...props}
    />
  ),
  h3: (props: HeadingProps) => (
    <h3
      className="mb-3 mt-8 font-medium text-gray-800 dark:text-zinc-200"
      {...props}
    />
  ),
  h4: (props: HeadingProps) => <h4 className="font-medium" {...props} />,
  p: (props: ParagraphProps) => (
    <p className="leading-snug text-gray-800 dark:text-zinc-300" {...props} />
  ),
  ol: (props: ListProps) => (
    <ol
      className="list-decimal space-y-2 pl-5 text-gray-800 dark:text-zinc-300"
      {...props}
    />
  ),
  ul: (props: ListProps) => (
    <ul
      className="list-disc space-y-1 pl-5 text-gray-800 dark:text-zinc-300"
      {...props}
    />
  ),
  li: (props: ListItemProps) => <li className="pl-1" {...props} />,
  em: (props: ComponentPropsWithoutRef<"em">) => (
    <em className="font-medium" {...props} />
  ),
  strong: (props: ComponentPropsWithoutRef<"strong">) => (
    <strong className="font-medium" {...props} />
  ),
  a: ({ href, children, ...props }: AnchorProps) => {
    const className =
      "text-blue-500 hover:text-blue-700 dark:text-gray-400 hover:dark:text-gray-300 dark:underline dark:underline-offset-2 dark:decoration-gray-800";
    if (href?.startsWith("/")) {
      return (
        <ViewTransitionLink href={href} className={className} {...props}>
          {children}
        </ViewTransitionLink>
      );
    }
    if (href?.startsWith("#")) {
      return (
        <a href={href} className={className} {...props}>
          {children}
        </a>
      );
    }
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        {...props}
      >
        {children}
      </a>
    );
  },
  pre: ({ children, ...props }: ComponentPropsWithoutRef<"pre">) => {
    // Extract raw code text for copy button
    const extractCodeText = (node: React.ReactNode): string => {
      if (typeof node === "string") return node;
      if (Array.isArray(node)) return node.map(extractCodeText).join("");
      if (
        typeof node === "object" &&
        node !== null &&
        "props" in node &&
        typeof node.props === "object" &&
        node.props !== null &&
        "children" in node.props
      ) {
        return extractCodeText(
          (node.props as { children: React.ReactNode }).children,
        );
      }
      return "";
    };

    const codeText = extractCodeText(children);

    return (
      <div className="relative">
        <pre {...props}>{children}</pre>
        {codeText && <CopyButton text={codeText} />}
      </div>
    );
  },
  Table: ({ data }: { data: { headers: string[]; rows: string[][] } }) => (
    <table>
      <thead>
        <tr>
          {data.headers.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.rows.map((row, index) => (
          <tr key={index}>
            {row.map((cell, cellIndex) => (
              <td key={cellIndex}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  ),
  blockquote: (props: BlockquoteProps) => (
    <blockquote
      className="border-l-3 ml-[0.075em] border-gray-300 pl-4 text-gray-700 dark:border-zinc-600 dark:text-zinc-300"
      {...props}
    />
  ),
};

declare global {
  type MDXProvidedComponents = typeof components;
}

export function useMDXComponents(): MDXProvidedComponents {
  return components;
}
