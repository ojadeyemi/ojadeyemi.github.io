import React, { useEffect } from "react";
import HeroVideoDialog from "@/components/ui/hero-video-dialog";
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

      <div className="transition-opacity duration-1000 ease-in-out">
        <details className="group overflow-hidden rounded-lg border border-gray-500/50 shadow-md transition-all duration-500 ease-in-out">
          <summary className="cursor-pointer px-4 py-1 text-sm font-semibold transition-colors duration-300 ease-in-out group-hover:bg-gray-200/20 md:py-2 md:text-base">
            About Me Video
          </summary>
          <div className="max-h-0 overflow-hidden transition-all duration-300 ease-in-out group-open:max-h-[500px]">
            <HeroVideoDialog
              className="block dark:hidden"
              animationStyle="top-in-bottom-out"
              videoSrc="/aboutme.mp4"
              thumbnailSrc="https://t4.ftcdn.net/jpg/02/69/32/75/360_F_269327598_aAjIopBO0ZiRzyFE12pRT2halYcgl6NB.jpg"
              thumbnailAlt="About Me Video"
            />
          </div>
        </details>
      </div>

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
