import { ExternalLinkIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import { ChevronRightIcon } from "lucide-react";
import React from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ResumeCardProps {
  logoUrl: string;
  altText: string;
  title: string;
  subtitle?: string;
  href?: string;
  badges?: readonly string[];
  period: string;
  description?: string;
}

export const ResumeCard: React.FC<ResumeCardProps> = ({
  logoUrl,
  altText,
  title,
  subtitle,
  href,
  badges,
  period,
  description,
}) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const handleTitleClick = () => {
    if (description) {
      setIsExpanded(!isExpanded);
    } else if (href) {
      window.open(href, "_self");
    }
  };

  const handleChevronClick = () => {
    if (description) {
      setIsExpanded(!isExpanded);
    } else if (href) {
      window.open(href, "_blank");
    }
  };

  return (
    <Card className="flex">
      <div className="flex-none">
        <Avatar className="bg-muted-background m-auto size-12 border dark:bg-foreground">
          <AvatarImage src={logoUrl} alt={altText} className="object-contain" />
          <AvatarFallback>{altText[0]}</AvatarFallback>
        </Avatar>
      </div>
      <div className="group ml-4 flex-grow flex-col items-center">
        <CardHeader className="space-y-[2px]">
          <div className="flex items-center justify-between gap-x-2 text-base">
            <h3
              onClick={handleTitleClick}
              className="inline-flex cursor-pointer items-center justify-center text-xs font-semibold leading-none sm:text-sm"
            >
              {title}
              {badges && (
                <span className="inline-flex gap-x-1">
                  {badges.map((badge, index) => (
                    <Badge
                      variant="secondary"
                      className="align-middle text-xs"
                      key={index}
                    >
                      {badge}
                    </Badge>
                  ))}
                </span>
              )}
              <ChevronRightIcon
                onClick={handleChevronClick}
                className={cn(
                  "size-4 translate-x-0 transform cursor-pointer opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100",
                  isExpanded ? "rotate-90" : "rotate-0",
                )}
              />
            </h3>
            <div className="text-right text-[9px] tabular-nums leading-4 text-muted-foreground sm:text-sm">
              {period}
            </div>
          </div>
          {subtitle && <div className="font-sans text-xs">{subtitle}</div>}
        </CardHeader>
        {description && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: isExpanded ? 1 : 0,
              height: isExpanded ? "auto" : 0,
            }}
            transition={{
              duration: 0.7,
              ease: [0.4, 0, 0.2, 1],
            }}
            className="mt-2 flex items-center text-xs sm:text-sm"
          >
            <a
              href={href || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1 inline-flex items-center"
            >
              <span>{description}</span>
              <ExternalLinkIcon className="mx-1 h-3 w-3" />
            </a>
          </motion.div>
        )}
      </div>
    </Card>
  );
};
