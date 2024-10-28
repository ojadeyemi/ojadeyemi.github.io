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
            <p className="text-sm text-muted-foreground">
              Hello! I&#39;m currently a computer science student located in
              Toronto. I&#39;m currently working at MLSE as a Data Engineer,
              where I&#39;ve been able to build &nbsp;
              <a
                href="https://aws.amazon.com/blogs/media/maple-leaf-sports-entertainment-debuts-generative-ai-video-editor-to-deliver-content-to-fans-faster/"
                className="inline underline transition duration-150 ease-in-out hover:text-purple-300 active:text-purple-600"
                rel="noopener noreferrer"
                target="_blank"
              >
                Gen AI applications
              </a>
              &nbsp;for the Toronto Raptors, Maple Leafs, TFC, Argos and
              associated fans.
            </p>
            <p className="text-sm text-muted-foreground">
              My current hobbies are team sports 🏀 ⚽ 🏈 and music ˚♬ ﾟ.
            </p>
          </div>
        </BlurFade>
      </div>
    </section>
  );
};

export default About;
