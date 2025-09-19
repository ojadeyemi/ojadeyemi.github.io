"use client";

import dynamic from "next/dynamic";
import { useEffect } from "react";

// Dynamic imports to avoid SSR issues
const Header = dynamic(() => import("@/components/layout/Header"), {
  ssr: false,
});
const About = dynamic(() => import("@/components/sections/About"), {
  ssr: false,
});
const Articles = dynamic(() => import("@/components/sections/Articles"), {
  ssr: false,
});
const Certification = dynamic(
  () => import("@/components/sections/Certification"),
  { ssr: false },
);
const Education = dynamic(() => import("@/components/sections/Education"), {
  ssr: false,
});
const Projects = dynamic(() => import("@/components/sections/Projects"), {
  ssr: false,
});
const Skills = dynamic(() => import("@/components/sections/Skills"), {
  ssr: false,
});
const Work = dynamic(() => import("@/components/sections/Work"), {
  ssr: false,
});

export default function HomePage() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, []);

  return (
    <main className="flex min-h-[100dvh] flex-col space-y-10 py-10">
      <Header />

      <About />

      <Work />

      <Education />

      <Certification />

      <Skills />

      <Projects />

      <Articles />
    </main>
  );
}
