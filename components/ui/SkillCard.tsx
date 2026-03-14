type SkillCardProps = {
  title: string;
  skills: string[];
};

export function SkillCard({ title, skills }: SkillCardProps) {
  return (
    <div className="border border-gray">

      {/* Title */}
      <div className="border-b border-gray px-4 py-2 text-white font-semibold">
        {title}
      </div>

      {/* Skills */}
      <div className="p-4 flex flex-wrap gap-2 text-gray text-sm">
        {skills.map((skill, index) => (
          <span key={index}>{skill}</span>
        ))}
      </div>

    </div>
  );
}