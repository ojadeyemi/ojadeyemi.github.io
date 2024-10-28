import BlurFade from "./ui/blur-fade";
import { ResumeCard } from "./resume-card";
import { DATA } from "@/data/resume";
import { BLUR_FADE_DELAY } from "@/constants/constant";

const Education = () => {
  return (
    <section id="education">
      <div className="flex flex-col gap-y-3">
        <BlurFade delay={BLUR_FADE_DELAY * 7}>
          <h2 className="text-md font-bold">Education</h2>
        </BlurFade>
        {DATA.education.map((education, id) => (
          <BlurFade
            key={education.school}
            delay={BLUR_FADE_DELAY * 8 + id * 0.05}
          >
            <ResumeCard
              key={education.school}
              href={education.href}
              logoUrl={education.logoUrl}
              altText={education.school}
              title={education.school}
              subtitle={education.degree}
              period={`${education.start} - ${education.end}`}
            />
          </BlurFade>
        ))}
      </div>
    </section>
  );
};

export default Education;
