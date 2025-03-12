import { ExternalLinkIcon } from "@radix-ui/react-icons";

import BlurFade from "@/components/ui/blur-fade";
import { BLUR_FADE_DELAY } from "@/constants/constant";

const Articles = () => {
  return (
    <section id="articles">
      <BlurFade delay={BLUR_FADE_DELAY * 22}>
        <div className="flex flex-col gap-y-4">
          <h2 className="text-md font-bold">Articles</h2>
          <div className="flex flex-col gap-y-3">
            <div className="flex flex-row items-center gap-x-1.5">
              <img
                src="/usportsmbb_efficiency_landscape.png"
                alt="U Sports Basketball Efficiency Landscape"
                width="40"
                height="20"
                className="mr-2 no-drag"
              />
              <a
                href="https://www.linkedin.com/pulse/data-visualization-storytelling-my-data-driven-canada-oj-adeyemi-nyqcf/"
                className="flex items-center text-xs hover:underline sm:text-sm"
                rel="noopener noreferrer"
                target="_blank"
              >
                USports Basketball Efficiency Landscape
                <ExternalLinkIcon className="ml-2 flex self-center hover:text-muted-foreground" />
              </a>
            </div>
            <div className="flex flex-row items-center gap-x-1.5">
              <img
                src="/usportswbb_bestprogram.png"
                alt="Most Successful U Sports Basketball Programs"
                width="40"
                height="20"
                className="mr-2 no-drag"
              />
              <a
                href="https://www.linkedin.com/pulse/unveiling-dominance-discovering-most-successful-u-sports-oj-adeyemi-7doic/"
                className="flex items-center text-xs hover:underline sm:text-sm"
                rel="noopener noreferrer"
                target="_blank"
              >
                Most Successful USports Basketball Programs
                <ExternalLinkIcon className="ml-1.5 flex self-center hover:text-muted-foreground" />
              </a>
            </div>
          </div>
        </div>
      </BlurFade>
    </section>
  );
};

export default Articles;
