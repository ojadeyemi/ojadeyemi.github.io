import BlurFade from "@/components/ui/blur-fade";
import { BLUR_FADE_DELAY } from "@/constants/constant";

const About = () => {
  return (
    <section id="about">
      <div className="flex flex-col gap-y-1">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-md font-bold">About</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 5}>
          <div className="flex flex-col gap-y-2">
            <p className="text-sm leading-relaxed text-muted-foreground">
              Hello! I’m a computer science student based in Toronto. I’m
              currently an Engineer at MLSE, where I’ve been able to build
              &nbsp;
              <a
                href="https://aws.amazon.com/blogs/media/maple-leaf-sports-entertainment-debuts-generative-ai-video-editor-to-deliver-content-to-fans-faster/"
                className="inline underline transition duration-150 ease-in-out hover:text-purple-300 active:text-purple-600"
                rel="noopener noreferrer"
                target="_blank"
              >
                Gen AI applications
              </a>
              &nbsp; for the Toronto Raptors, Maple Leafs, TFC, and Argonauts.
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              One of these applications has been &nbsp;
              <a
                href="https://www.sports-business-awards-tech.com/2025/2025-nominees#:~:text=MLSE%20Digital%20Labs%E2%80%99%20Generative%20Video%20Editor"
                className="inline underline transition duration-150 ease-in-out hover:text-purple-300 active:text-purple-600"
                rel="noopener noreferrer"
                target="_blank"
              >
                nominated for the prestigious Sports Business Awards: Tech Best
                in AI category
              </a>
              &nbsp; by Sports Business Journal, recognizing significant
              advancements in sports technology. It also has the potential to
              win the coveted title of{" "}
              <strong>Sports Technology of the Year</strong>.
            </p>

            <p className="text-sm leading-relaxed text-muted-foreground">
              Outside of work, I enjoy team sports 🏀 ⚽ 🏈 and music ˚♬ ﾟ.
              These hobbies keep me active, motivated, and creatively inspired.
            </p>

            <p className="text-sm leading-relaxed text-muted-foreground">
              I’m passionate about developing my computer science skills, with a
              focus on continuous innovation and advancing the sports technology
              industry. My goal is to solve complex problems and design scalable
              software architectures that are efficient, reliable, and built for
              the future.
            </p>
          </div>
        </BlurFade>
      </div>
    </section>
  );
};

export default About;
