import { ExternalLinkIcon } from "@radix-ui/react-icons";
import Link from "next/link";

import { BlurFade } from "@/components/ui/blur-fade";
import { BLUR_FADE_DELAY } from "@/constants/constant";
import { DATA } from "@/data/resume";

export default function Projects() {
  const topProjects = DATA.projects.slice(0, 2);
  const mlseProject = DATA.projects.find(
    (p) => p.title === "MLSE SPL Open Data Challenge",
  );
  const mplProject = DATA.projects.find((p) => p.title === "mpl-basketball");

  const projectsToShow = topProjects;

  if (mlseProject && !topProjects.find((p) => p.title === mlseProject.title)) {
    projectsToShow.push(mlseProject);
  }
  if (mplProject && !projectsToShow.find((p) => p.title === mplProject.title)) {
    projectsToShow.push(mplProject);
  }

  return (
    <section id="projects">
      <BlurFade delay={BLUR_FADE_DELAY * 18}>
        <div className="flex flex-col gap-y-3">
          <h2 className="text-md font-bold">Projects</h2>

          {projectsToShow.map((project, id) => (
            <div className="flex flex-row justify-start" key={id}>
              <div className="w-80 sm:w-96">
                <span className="text-sm text-muted-foreground">
                  {project.active ? "In Progress" : "Done"}
                </span>
              </div>
              <div className="flex w-full flex-col gap-y-1">
                <div className="flex flex-row gap-x-2">
                  <span className="text-sm">{project.title}</span>
                  <a
                    href={project.href}
                    className="flex items-center"
                    rel="noopener noreferrer"
                    target="_blank"
                    aria-label={`Open ${project.title} in a new tab`}
                    title="Open project page"
                  >
                    <ExternalLinkIcon className="flex self-center hover:text-muted-foreground" />
                  </a>
                </div>
                <span className="text-xs text-muted-foreground">
                  {project.description}
                </span>
              </div>
            </div>
          ))}
        </div>
        <>
          <Link
            href="/projects"
            className="ml-auto text-right text-[10px] font-medium text-blue-800 transition hover:text-purple-800 hover:underline focus:text-blue-800 active:text-purple-800"
          >
            See more...
          </Link>
        </>
      </BlurFade>
    </section>
  );
}
