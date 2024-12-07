import { ExternalLinkIcon } from "@radix-ui/react-icons";
import React from "react";
import { Link } from "react-router-dom";

import BlurFade from "@/components/ui/blur-fade";
import { BLUR_FADE_DELAY } from "@/constants/constant";

const Projects: React.FC = () => {
  return (
    <section id="projects">
      <BlurFade delay={BLUR_FADE_DELAY * 15}>
        <div className="flex flex-col gap-y-5">
          <h2 className="text-md font-bold">Projects</h2>

          <>
            <div className="flex flex-row justify-start">
              <div className="w-80 sm:w-96">
                <span className="text-sm text-muted-foreground">
                  In Progress
                </span>
              </div>
              <div className="flex w-full flex-col gap-y-1">
                <div className="flex flex-row gap-x-2">
                  <span className="text-sm">usports-basketball</span>
                  <a
                    href="https://pypi.org/project/usports-basketball/"
                    className="flex items-center"
                    rel="noopener noreferrer"
                    target="_blank"
                    aria-label="Open the U Sports Basketball Python package on PyPI in a new tab"
                    title="Open PyPI project page"
                  >
                    <ExternalLinkIcon className="flex self-center hover:text-muted-foreground" />
                  </a>
                </div>
                <span className="text-xs text-muted-foreground">
                  A Python package designed to provide real-time statistics for
                  U Sports basketball, Canada's national university league.
                </span>
              </div>
            </div>
          </>

          <>
            <div className="flex flex-row justify-start">
              <div className="w-80 sm:w-96">
                <span className="text-sm text-muted-foreground">
                  In Progress
                </span>
              </div>
              <div className="flex w-full flex-col gap-y-1">
                <div className="flex flex-row gap-x-2">
                  <span className="text-sm">mplbasketball</span>
                  <a
                    href="https://pypi.org/project/mplbasketball/"
                    className="flex items-center"
                    rel="noopener noreferrer"
                    target="_blank"
                    aria-label="Open the mplbasketball Python package on PyPI in a new tab"
                    title="Open PyPI project page"
                  >
                    <ExternalLinkIcon className="flex self-center hover:text-muted-foreground" />
                  </a>
                </div>
                <span className="text-xs text-muted-foreground">
                  Open source contributor and maintainer to a basketball
                  plotting library created by the Sport Performance Lab team at
                  MLSE
                </span>
              </div>
            </div>
          </>

          <>
            <div className="flex flex-row justify-start">
              <div className="w-80 sm:w-96">
                <span className="text-sm text-muted-foreground">Paused</span>
              </div>
              <div className="flex w-full flex-col gap-y-1.5">
                <div className="flex flex-row gap-x-2">
                  <span className="text-sm">usports bball web app</span>
                  <a
                    href="https://github.com/ojadeyemi/USPORTS-BBALL-WEBAPP/"
                    className="flex items-center"
                    rel="noopener noreferrer"
                    target="_blank"
                    aria-label="Open USPORTS-BBALL-WEBAPP on GitHub in a new tab"
                    title="Open GitHub"
                  >
                    <ExternalLinkIcon className="flex self-center hover:text-muted-foreground" />
                  </a>
                </div>
                <span className="text-xs text-muted-foreground">
                  A web application for the U Sports Basketball League, offering
                  data-driven insights and analytics for basketball enthusiasts,
                  coaches, players, fans, and stakeholders like the CEBL.
                </span>
              </div>
            </div>
          </>

          <>
            <div className="flex flex-row justify-start">
              <div className="w-80 sm:w-96">
                <span className="text-sm text-muted-foreground">Done</span>
              </div>
              <div className="flex w-full flex-col gap-y-1">
                <div className="flex flex-row gap-x-1.5">
                  <span className="text-sm">mlse-spl-open-data-challenge</span>
                  <a
                    href="https://github.com/ojadeyemi/mlse-spl-open-data-challenge/blob/main/README.md"
                    className="flex items-center"
                    rel="noopener noreferrer"
                    target="_blank"
                    aria-label="Open the MLSE SPL Open Data Challenge README on GitHub in a new tab"
                    title="Open GitHub README"
                  >
                    <ExternalLinkIcon className="flex self-center hover:text-muted-foreground" />
                  </a>
                </div>
                <span className="text-xs text-muted-foreground">
                  Participated in a data science competition analyzing
                  free-throw motion data to understand how body movements impact
                  shooting accuracy.
                </span>
              </div>
            </div>
          </>
        </div>
        <>
          <Link
            to="/projects"
            className="ml-auto text-right text-[10px] font-medium text-blue-500 transition hover:text-blue-700 hover:underline focus:text-blue-700 active:text-blue-800"
          >
            See more...
          </Link>
        </>
      </BlurFade>
    </section>
  );
};

export default Projects;
