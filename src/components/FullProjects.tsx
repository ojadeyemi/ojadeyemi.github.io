import React from "react";

import { ProjectCard } from "./widgets/project-card";
import BlurFade from "@/components/ui/blur-fade";
import { BLUR_FADE_DELAY } from "@/constants/constant";
import { DATA } from "@/data/resume";

const FullProjects: React.FC = () => {
  return (
    <div className="mx-auto grid max-w-[850px] grid-cols-2 gap-3 md:grid-cols-3">
      {DATA.projects.map((project, id) => (
        <BlurFade key={project.title} delay={BLUR_FADE_DELAY * 10 + id * 0.5}>
          <ProjectCard
            href={project.href}
            title={project.title}
            description={project.description}
            dates={project.dates}
            tags={project.technologies}
            image={project.image}
            video={project.video}
            links={project.links}
          />
        </BlurFade>
      ))}
    </div>
  );
};

export default FullProjects;
