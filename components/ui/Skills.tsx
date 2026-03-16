import SkillRectangle from "../SkitllRectangle";
import { DotsGrid } from "./DotsGrid";
import Rectangle from "./Rectangle";
import { SkillCard } from "./SkillCard";

export function Skills() {
  return (

      <div className="mt-14 max-w-[1024px] mx-auto flex flex-col lg:flex-row gap-12">

        {/* Decorations */}
        <div className="relative w-full max-w-[349px] h-[283px] mx-auto lg:mx-0">

          <div className="absolute top-0 left-0">
            <DotsGrid height={63} width={63} />
          </div>

          <div className="absolute bottom-0">
            <SkillRectangle />
          </div>

          <div className="absolute bottom-[90px] right-[110px] hidden md:block">
            <DotsGrid height={63} width={63} gap={7} />
          </div>

          <div className="absolute top-0 right-10">
            <Rectangle width={86} height={86} color="gray" />
          </div>

          <div className="absolute bottom-20 right-0">
            <Rectangle width={52} height={52} color="gray" />
          </div>

        </div>

    {/* Skills Cards */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 flex-1">

  <div className="flex flex-col gap-6">
    <SkillCard
      title="Frontend Development"
      skills={[
        "React.js",
        "TypeScript",
        "JavaScript (ES6+)",
        "HTML5",
        "CSS3",
        "SASS / LESS",
      ]}
    />
  </div>

  <div className="flex flex-col gap-6">
    <SkillCard
      title="State Management"
      skills={[
        "Redux Toolkit",
        "Zustand",
        "Recoil",
        "Context API",
        "MobX",
      ]}
    />
  </div>

  <div className="flex flex-col gap-6">
    <SkillCard
      title="API Integration"
      skills={[
        "REST APIs",
        "GraphQL",
        "Apollo Client",
        "URQL",
        "WebSockets",
        "Real-time Updates",
      ]}
    />
  </div>

  <div className="flex flex-col gap-6">
    <SkillCard
      title="UI / Styling"
      skills={[
        "Tailwind CSS",
        "Chakra UI",
        "shadcn/ui",
        "Material UI",
        "Responsive Design",
        "Framer Motion",
      ]}
    />
  </div>


  <div className="flex flex-col gap-6">
    <SkillCard
      title="Testing & Performance"
      skills={[
        "Jest",
        "React Testing Library",
        "Cypress",
        "Enzyme",
        "Web Vitals",
        "Lazy Loading",
        "Micro Frontends",
      ]}
    />
  </div>

  <div className="flex flex-col gap-6">
    <SkillCard
      title="Architecture & Other"
      skills={[
        "System Design",
        "OWASP Security",
        "Agile",
        "JIRA",
        "Git",
        "GitLab",
        "Service Workers",
      ]}
    />
  </div>

</div>

      </div>
  );
}