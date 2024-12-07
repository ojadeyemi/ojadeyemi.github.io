import { Home } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

import FullProjects from "@/components/FullProjects";
import ThemeButton from "@/components/ThemeButton";
import BlurFade from "@/components/ui/blur-fade";
import { BLUR_FADE_DELAY } from "@/constants/constant";

const ProjectPage: React.FC = () => {
  return (
    <div className="flex min-h-[100dvh] flex-col space-y-10 pb-10">
      {/* Header Section */}
      <BlurFade delay={BLUR_FADE_DELAY * 1}>
        <header className="flex items-center justify-between">
          {/* Home Link */}
          <Link
            to="/"
            className="text-md flex items-center gap-2 font-semibold text-primary transition hover:text-primary/80"
          >
            <Home className="h-4 w-4" />
            <span>Home</span>
          </Link>

          {/* Title */}
          <h1 className="flex-grow text-center text-4xl font-bold tracking-tight text-primary">
            My Projects
          </h1>

          {/* Theme Toggle */}
          <ThemeButton />
        </header>
      </BlurFade>

      {/* Introduction Section */}
      <BlurFade delay={BLUR_FADE_DELAY * 2}>
        <section className="text-center">
          <p className="text-md text-gray-600">
            Here are some of the projects I have enjoyed working on during my
            spare time.
          </p>
        </section>
      </BlurFade>

      {/* Main Section */}
      <main>
        <FullProjects />
      </main>
    </div>
  );
};

export default ProjectPage;
