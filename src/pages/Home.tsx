import React, { useEffect } from "react";

import About from "@/components/About";
import Articles from "@/components/Articles";
import Certification from "@/components/Certification";
import Education from "@/components/Education";
import Header from "@/components/Header";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Work from "@/components/Work";

const Home: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
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
};

export default Home;
