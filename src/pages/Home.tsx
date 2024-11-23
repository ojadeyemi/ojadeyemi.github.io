import React from "react";
import About from "@/components/About";
import Contacts from "@/components/Contacts";
import Education from "@/components/Education";
import Certification from "@/components/Certification";
import Skills from "@/components/Skills";
import Header from "@/components/Header";
import Projects from "@/components/Projects";
import Work from "@/components/Work";

const Home: React.FC = () => {
  return (
    <main className="flex min-h-[100dvh] flex-col space-y-10">
      <Header />

      <About />
      <Work />

      <Education />
      <Certification />
      <Skills />

      <Projects />

      <Contacts />
    </main>
  );
};

export default Home;
