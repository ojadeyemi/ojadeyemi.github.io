import React from "react";
import About from "@/components/About";
import Contacts from "@/components/Contacts";
import Education from "@/components/Education";
import Header from "@/components/Header";
import Projects from "@/components/Projects";
import Work from "@/components/Work";

const Home: React.FC = () => {
  return (
    <main className="flex min-h-[100dvh] flex-col space-y-10">
      <section id="header">
        <Header />
      </section>

      <About />
      <Work />
     
        <Education />
     

      <section id="portfolio">
        <Projects />
      </section>

      <section id="contacts">
        <Contacts />
      </section>
    </main>
  );
};

export default Home;
