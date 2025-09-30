"use client";

import Header from "@/components/layout/Header";
import About from "@/components/sections/About";
import Articles from "@/components/sections/Articles";
import Certification from "@/components/sections/Certification";
import Education from "@/components/sections/Education";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Work from "@/components/sections/Work";

export default function HomePage() {
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
