import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { Dock, DockIcon } from "@/components/ui/dock";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";

export default function Navbar() {
  return (
    <Dock direction="middle" className="fixed inset-x-0 bottom-0">
      {DATA.navbar.map((item) => (
        <DockIcon key={item.href}>
          <Tooltip>
            <TooltipTrigger asChild>
              {item.href.startsWith("http") || item.href.startsWith("/pdf/") ? (
                <a
                  href={item.href}
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "size-12",
                  )}
                  aria-label={item.label}
                  title={item.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <item.icon className="size-4" />
                </a>
              ) : (
                <Link
                  href={item.href}
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "size-12",
                  )}
                  aria-label={item.label}
                  title={item.label}
                >
                  <item.icon className="size-4" />
                </Link>
              )}
            </TooltipTrigger>
            <TooltipContent>
              <p>{item.label}</p>
            </TooltipContent>
          </Tooltip>
        </DockIcon>
      ))}
      <Separator orientation="vertical" className="h-full" />
      {Object.entries(DATA.contact.social)
        .filter(([_, social]) => social.navbar)
        .map(([name, social]) => (
          <DockIcon key={name}>
            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  href={social.url}
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "size-12",
                  )}
                  aria-label={social.name}
                  title={social.name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className="size-4" />
                </a>
              </TooltipTrigger>
              <TooltipContent>
                <p>{name}</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
        ))}
    </Dock>
  );
}
