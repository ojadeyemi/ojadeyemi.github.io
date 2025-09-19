import { BlurFade } from "@/components/ui/blur-fade";
import { BLUR_FADE_DELAY } from "@/constants/constant";

const About = () => {
  return (
    <section id="about">
      <div className="flex flex-col gap-y-1">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-md font-bold">About</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 5}>
          <div className="flex flex-col gap-y-3 text-xs leading-relaxed text-muted-foreground sm:text-sm">
            <p>
              Hello! I’m a computer science student based in Toronto and
              previously worked as an Engineer at MLSE, where I helped
              build&nbsp;
              <strong>
                <a
                  href="https://aws.amazon.com/blogs/media/maple-leaf-sports-entertainment-debuts-generative-ai-video-editor-to-deliver-content-to-fans-faster/"
                  className="inline underline transition duration-150 ease-in-out hover:text-purple-300 active:text-purple-600"
                  rel="noopener noreferrer"
                  target="_blank"
                  aria-label="Read about Gen AI applications on AWS blog (opens in new tab)"
                >
                  Gen AI applications
                </a>
              </strong>
              &nbsp;for the Toronto Raptors, Maple Leafs, TFC and other MLSE
              teams.
            </p>
            <p>
              As part of the team that won the{" "}
              <strong>
                <a
                  href="https://www.nba.com/news/nba-announces-sales-marketing-awards-2025#:~:text=NBA%20Team%20Innovation%20Award%3A%20Toronto%20Raptors"
                  className="inline underline transition duration-150 ease-in-out hover:text-purple-300 active:text-purple-600"
                  rel="noopener noreferrer"
                  target="_blank"
                  aria-label="Read about 2025 NBA Team Innovation Award on NBA.com (opens in new tab)"
                >
                  2025 NBA Team Innovation Award
                </a>
              </strong>
              , I contributed to multiple AI-driven advancements in the sports
              industry. One of these applications was also nominated for the
              prestigious&nbsp;
              <strong>
                <a
                  href="https://www.sports-business-awards-tech.com/2025/2025-nominees#:~:text=MLSE%20Digital%20Labs%E2%80%99%20Generative%20Video%20Editor"
                  className="inline underline transition duration-150 ease-in-out hover:text-purple-300 active:text-purple-600"
                  rel="noopener noreferrer"
                  target="_blank"
                  aria-label="Read about 2025 Sports Business Awards nomination (opens in new tab)"
                >
                  2025 Sports Business Awards: Tech Best in AI, by Sports
                  Business Journal.
                </a>
              </strong>
            </p>

            <p>
              Outside of work, I enjoy team sports 🏀 ⚽ 🏈 and music ˚♬ ﾟ.
              These hobbies keep me active, motivated, and creatively inspired.
              I’m passionate about developing my computer science skills, with a
              focus on continuous innovation and advancing the sports technology
              industry. I’m also passionate about making technology more
              accessible, fostering curiosity, and empowering others to engage
              with and shape its future.
            </p>
          </div>
        </BlurFade>
      </div>
    </section>
  );
};

export default About;
