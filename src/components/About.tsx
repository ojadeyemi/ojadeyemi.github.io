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
              Outside of work, I enjoy team sports 🏀 ⚽ 🏈 and music ˚♬ ﾟ.
              These hobbies keep me active and inspired in my personal life.
            </p>

            <p className="text-sm leading-relaxed text-muted-foreground">
              I’m passionate about growing my skills in computer science, with a
              goal of continous innovation and contributing to the sports
              technology industry.
            </p>
          </div>
        </BlurFade>
      </div>
    </section>
  );
};

export default About;
