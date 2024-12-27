import { FolderSearch, HomeIcon, NotebookText } from "lucide-react";

import { Icons } from "@/components/icons";

export const DATA = {
  name: "OJ Adeyemi",
  initials: "OJ",
  url: "https://ojadeyemi.github.io/",
  location: "Toronto, CA",
  description: "Software Engineer. I love building things and helping people.",
  summary:
    "Hello! I'm currently a computer science student located in Toronto. I'm currently working at MLSE as an Engineer, where I've been able to build  [Gen AI applications](https://aws.amazon.com/blogs/media/maple-leaf-sports-entertainment-debuts-generative-ai-video-editor-to-deliver-content-to-fans-faster/) for the Toronto Raptors, Maple Leafs, TFC, Argos and associated fans.",
  skills: [
    "Python",
    "Java",
    "C",
    "HTML",
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
    "Helm",
    "AWS",
    "Google Cloud",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "#/projects", icon: FolderSearch, label: "Projects" },
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
        url: "mailto:ojieadeyemi@gmail.com",
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
      end: "2027",
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
      title: "usports-basketball",
      href: "https://pypi.org/project/usports-basketball/",
      dates: "Aug 2024 - Present",
      active: true,
      description:
        "A Python package designed to provide current statistics for U Sports basketball, Canada's national university league.",
      technologies: [
        "Python",
        "Pandas",
        "BeautifulSoup",
        "Playwright",
        "Pytest",
        "Github Actions",
      ],
      links: [
        {
          type: "Website",
          href: "https://pypi.org/project/usports-basketball/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/ojadeyemi/usports-basketball",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "https://pypi.org/static/images/twitter.abaf4b19.webp",
      video: "",
    },
    {
      title: "mpl-basketball",
      href: "https://pypi.org/project/mplbasketball/",
      dates: "Sept 2024 - Present",
      active: true,
      description:
        "Open source contributor and maintainer of python plotting library for visualization of basketball data.",
      technologies: [
        "Python",
        "Matplotlib",
        "Numpy",
        "Pytest",
        "Github Actions",
      ],
      links: [
        {
          type: "Website",
          href: "https://pypi.org/project/mplbasketball/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/mlsedigital/mplbasketball",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "https://pypi.org/static/images/twitter.abaf4b19.webp",
      video: "",
    },
    {
      title: "usports basketball web application",
      href: "https://github.com/ojadeyemi/USPORTS-BBALL-WEBAPP",
      dates: "March 2024 - Aug 2024",
      active: false,
      description:
        "A web application for the U Sports Basketball League, offering data-driven insights and analytics for basketball enthusiasts, coaches, players, fans, and stakeholders like the CEBL.",
      technologies: [
        "Python",
        "Flask",
        "MySQL",
        "Sqlite",
        "HTML",
        "CSS",
        "TailwindCSS",
        "JavaScript",
        "Docker",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/ojadeyemi/USPORTS-BBALL-WEBAPP",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image:
        "https://github.com/ojadeyemi/USPORTS-BBALL-WEBAPP/blob/main/screenshots/image3.png?raw=true",
      video: "",
    },
    {
      title: "U Sports and CEBL Data Analysis",
      href: "https://github.com/ojadeyemi/USPORT-BBALL-DATA-ANALYSIS",
      dates: "Feb 2024 - Present",
      active: false,
      description:
        "Analyzing basketball data to deliver insights, advanced analytics, and visualizations for a deeper understanding of the game..",
      technologies: [
        "Python",
        "Pandas",
        "Matplotlib",
        "Seaborn",
        "Plotly",
        "Data Science",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/ojadeyemi/USPORT-BBALL-DATA-ANALYSIS",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/graphs_slideshow.mp4",
    },
    {
      title: "MLSE SPL Open Data Challenge",
      href: "https://github.com/ojadeyemi/mlse-spl-open-data-challenge/blob/main/README.md",
      dates: "Sept 2024 - Nov 2024",
      active: false,
      description:
        "Analyzed free-throw motion data to understand the impact of body movements on shooting accuracy.",
      technologies: [
        "Python",
        "Numpy",
        "Matplotlib",
        "Jupyter Notebook",
        "Data Science",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/ojadeyemi/mlse-spl-open-data-challenge",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "./animation.mp4",
    },

    {
      title: "Portfolio Website",
      href: "https://ojadeyemi.github.io/",
      dates: "Nov 2024 - Present",
      active: false,
      description: "You are looking at it 👀.",
      technologies: [
        "React",
        "TypeScript",
        "TailwindCSS",
        "Framer Motion",
        "Github Actions",
      ],
      links: [
        {
          type: "Website",
          href: "https://ojadeyemi.github.io",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/ojadeyemi/ojadeyemi.github.io",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/android-chrome-512x512.png",
      video: "",
    },
  ],
} as const;
