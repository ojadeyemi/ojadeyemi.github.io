import { ResumeCard } from "./resume-card";
import BlurFade from "./ui/blur-fade";
import { BLUR_FADE_DELAY } from "@/constants/constant";
import { DATA } from "@/data/resume";

const Certification = () => {
  return (
    <section id="education">
      <div className="flex flex-col gap-y-3">
        <BlurFade delay={BLUR_FADE_DELAY * 7}>
          <h2 className="text-md font-bold">Certification</h2>
        </BlurFade>
        {DATA.certification.map((education, id) => (
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

export default Certification;
