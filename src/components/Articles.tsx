import { ExternalLinkIcon } from "@radix-ui/react-icons";

const Articles = () => {
  return (
    <section id="articles">
      <div className="flex flex-col gap-y-4">
        <h2 className="text-md font-bold">Articles</h2>
        <div className="flex flex-col gap-y-3">
          <div className="flex flex-row items-center gap-x-2">
            <img
              src="/usportsmbb_efficiency_landscape.png"
              alt="U Sports Basketball Efficiency Landscape"
              width="40"
              className="mr-2 no-drag"
            />
            <a
              href="https://www.linkedin.com/pulse/data-visualization-storytelling-my-data-driven-canada-oj-adeyemi-nyqcf/"
              className="flex items-center text-sm hover:underline"
              rel="noopener noreferrer"
              target="_blank"
            >
              U Sports Basketball Efficiency Landscape
              <ExternalLinkIcon className="ml-1 flex self-center hover:text-muted-foreground" />
            </a>
          </div>
          <div className="flex flex-row items-center gap-x-2">
            <img
              src="/usportswbb_bestprogram.png"
              alt="Most Successful U Sports Basketball Programs"
              width="40"
              className="mr-2 no-drag"
            />
            <a
              href="https://www.linkedin.com/pulse/unveiling-dominance-discovering-most-successful-u-sports-oj-adeyemi-7doic/"
              className="flex items-center text-sm hover:underline"
              rel="noopener noreferrer"
              target="_blank"
            >
              Discovering the Most Successful U Sports Basketball Programs
              <ExternalLinkIcon className="ml-1 flex self-center hover:text-muted-foreground" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Articles;
