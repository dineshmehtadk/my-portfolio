import { ProjectCard } from "./ProjectCard";

import project1 from "@/public/project1.png";
import project2 from "@/public/project2.jpg";
import project3 from "@/public/project3.png";

export function Projects() {

  const projectList = [
    {
      title: "ChertNodes",
      description: "Minecraft servers hosting",
      techStack: ["HTML", "SCSS", "Python", "Flask"],
      liveLink: "#",
      cachedLink: "#",
      projectImage: project1
    },
    {
      title: "Project 2",
      description: "Description for project 2",
      techStack: ["Tech1", "Tech2"],
      liveLink: "#",
      cachedLink: "#",
      projectImage: project2
    },
    {
      title: "Project 3",
      description: "Description for project 3",
      techStack: ["TechA", "TechB"],
      liveLink: "#",
      cachedLink: "#",
      projectImage: project3
    }
  ];

  return (
    <section className="mt-16 mb-24 px-4">

      {/* Header */}
      <div className="flex items-center justify-between max-w-[1024px] mx-auto">

        <div className="flex items-center gap-4 flex-1">
          <h1 className="text-white text-xl md:text-2xl font-semibold whitespace-nowrap">
            <span className="text-primary">#</span>projects
          </h1>

          <div className="flex-1 h-[1px] bg-primary"></div>
        </div>

        <button className="text-white ml-6 hover:text-primary transition whitespace-nowrap">
          View all →
        </button>

      </div>

      {/* Project Cards */}
      <div className="mt-14 max-w-[1024px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectList.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            techStack={project.techStack}
            liveLink={project.liveLink}
            cachedLink={project.cachedLink}
            projectImage={project.projectImage}
          />
        ))}
      </div>

    </section>
  );
}