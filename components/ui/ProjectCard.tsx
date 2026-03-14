import Image, { StaticImageData } from "next/image";

export function ProjectCard(props: {
  title: string;
  description: string;
  techStack: string[];
  liveLink: string;
  cachedLink: string;
  projectImage: StaticImageData;
}) {
  return (
    <div className="w-[330px] border border-gray flex flex-col">
      {/* Project Image */}
      <Image
        src={props.projectImage}
        alt="project-image"
        className="w-full h-[201px] object-cover"
      />

      {/* Tech Stack */}
      <div className="border-y border-gray px-4 py-2 flex flex-wrap gap-2 text-gray text-sm">
        {props.techStack.map((tech, index) => (
          <span key={index}>{tech}</span>
        ))}
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col gap-3">
        <h3 className="text-white text-xl font-semibold">{props.title}</h3>

        <p className="text-gray text-sm">{props.description} </p>

        {/* Buttons */}
        <div className="flex gap-4 mt-2">
          <button className="border border-primary px-4 py-1 text-white hover:bg-primary hover:text-black transition">
            Live ↔
          </button>

          <button className="border border-gray px-4 py-1 text-white hover:border-white transition">
            Cached &gt;
          </button>
        </div>
      </div>
    </div>
  );
}
