import { HomeIcon, NotebookText } from "lucide-react";

import { Icons } from "@/components/icons";

export const DATA = {
  name: "OJ Adeyemi",
  initials: "OJ",
  url: "https://dillion.io",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Software Engineer turned Entrepreneur. I love building things and helping people. Very active on Twitter.",
  summary:
    "Hello! I'm currently a computer science student located in Toronto. I'm currently working at MLSE as an Engineer, where I've been able to build  [Gen AI applications](https://aws.amazon.com/blogs/media/maple-leaf-sports-entertainment-debuts-generative-ai-video-editor-to-deliver-content-to-fans-faster/) for the Toronto Raptors, Maple Leafs, TFC, Argos and associated fans.",
  avatarUrl: "/me.png",
  skills: [
    "Python",
    "Java",
    "C",
    "HTML5",
    "CSS",
    "Javascript",
    "Typescript",
    "React",
    "Node.js",
    "SQL",
    "Git",
    "Unix Shell",
    "Docker",
    "Kubernetes",
    "AWS",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/resume.pdf", icon: NotebookText, label: "Resume" },
  ],
  contact: {
    email: "ojieadeyemi@gmail.com",
    social: {
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/oj-adeyemi/",
        icon: Icons.linkedin,
        navbar: true,
      },

      GitHub: {
        name: "GitHub",
        url: "https://github.com/ojadeyemi",
        icon: Icons.github,
        navbar: true,
      },

      Email: {
        name: "Send Email",
        url: "ojieadeyemi@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },
  work: [
    {
      company: "Maple Leaf Sports & Entertainment",
      badges: [],
      href: "https://www.mlsedigital.com/",
      title: "Data Engineer",
      logoUrl: "/MLSEDigitalLabs.svg",
      start: "May 2024",
      end: "Present",
      description: "Currently building innovative applications",
    },
  ],
  education: [
    {
      school: "Lassonde School of Engineering",
      href: "https://lassonde.yorku.ca/",
      degree: "Bachelor of Science in Computer Science (Honours)",
      logoUrl: "/lassonde_school_of_engineering_york_university_logo.png",
      start: "2022",
      end: "Dec 2026",
    },
  ],
  certification: [
    {
      school: "Amazon Web Services",
      href: "#certification",
      degree: "Cloud Practitioner - Foundational",
      logoUrl: "/amazon-web-services-logo.svg",
      start: "2025",
      end: "2028",
    },
    {
      school: "Amazon Web Services",
      href: "#certification",
      degree: "Machine Learning Engineer - Associate",
      logoUrl: "/amazon-web-services-logo.svg",
      start: "2025",
      end: "2028",
    },
  ],
  projects: [
    {
      title: "Chat Collect",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Magic UI",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
  ],
} as const;
