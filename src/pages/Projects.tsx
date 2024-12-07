import { Home } from "lucide-react";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import FullProjects from "@/components/FullProjects";
import ThemeButton from "@/components/ThemeButton";
import BlurFade from "@/components/ui/blur-fade";
import { BLUR_FADE_DELAY } from "@/constants/constant";

const ProjectPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="mt-10 flex min-h-[100dvh] flex-col space-y-10 py-10 sm:mt-0">
      {/* Header Section */}
      <BlurFade delay={BLUR_FADE_DELAY * 0.5}>
        <header className="flex items-center justify-between">
          {/* Home Link */}
          <Link
            to="/"
            className="flex items-center gap-2 text-base font-semibold text-primary transition hover:text-primary/60"
          >
            <Home className="h-3 w-3" />
            <span>Home</span>
          </Link>

          {/* Title */}
          <h1 className="flex-grow text-center text-2xl font-bold tracking-tight text-primary sm:text-4xl lg:text-5xl">
            My Projects
          </h1>

          {/* Theme Toggle */}
          <ThemeButton />
        </header>
      </BlurFade>

      {/* Introduction Section */}
      <BlurFade delay={BLUR_FADE_DELAY * 1}>
        <section className="text-center">
          <p className="text-md text-gray-600">
            Here are some of the projects I have enjoyed working on during my
            spare time.
          </p>
        </section>
      </BlurFade>

      <main>
        <FullProjects />
      </main>
    </div>
  );
};

export default ProjectPage;
