import SkillRectangle from "../SkitllRectangle";
import { DotsGrid } from "./DotsGrid";
import Rectangle from "./Rectangle";
import { SkillCard } from "./SkillCard";

export function Skills() {
  return (
    <section className="mt-16 mb-24">
      <div className="flex items-center justify-between w-[1024px] mx-auto">
        {/* Left Side */}
        <div className="flex items-center gap-4">
          <h1 className="text-white text-2xl font-semibold">
            <span className="text-primary">#</span>skills
          </h1>

          <div className="w-[239px] h-[1px] bg-primary"></div>
        </div>

        {/* Right Side */}
        <button className="text-white ml-6 hover:text-primary transition">
          View all →
        </button>
      </div>
      <div>
   <div className="mt-14 w-[1024px] mx-auto flex justify-between">

  {/* Decorations */}
  <div className="relative w-[349px] h-[283px]">

    <div className="absolute top-0 left-0">
      <DotsGrid height={63} width={63} />
    </div>

    <div className="absolute bottom-0">
      <SkillRectangle />
    </div>

    <div className="absolute bottom-[90px] right-[110px]">
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
  <div className="grid grid-cols-3 gap-6 w-[584px]">
    
    <div className="flex flex-col gap-6">
      <SkillCard title="Skill 1" skills={["React", "TypeScript"]} />
    </div>

    <div className="flex flex-col gap-6">
      <SkillCard title="Skill 2" skills={["Node.js", "Express"]} />
      <SkillCard title="Skill 3" skills={["Python", "Django"]} />
    </div>

    <div className="flex flex-col gap-6">
      <SkillCard title="Skill 4" skills={["Next.js", "Tailwind"]} />
      <SkillCard title="Skill 5" skills={["MongoDB", "Docker"]} />
      <SkillCard title="Skill 6" skills={["GraphQL", "Redis"]} />
    </div>

  </div>

</div>
      </div>
    </section>
  );
}
