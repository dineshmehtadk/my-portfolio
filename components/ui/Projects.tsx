import { ProjectCard } from "./ProjectCard";


import projectPG from "@/public/project_pg.png";
import projectSWT from "@/public/project_swtclub.png";
import projectIbuild from "@/public/project_ibuild.png";





export function Projects() {

  const projectList = [
    {
      title: "PG Dekho.com",
      description: "PG Dekho is an online platform for PGs accommodations , providing , options for working Professionals and students from room to flats across India.",
      techStack: ["HTML", "CSS", "Next.js", "TypeScript", "Tailwind CSS"],
      liveLink: "https://pgdekho.com/",
      cachedLink: "#",
      projectImage: projectPG
    },
    {
      title: "SWT Club",
      description: "SWT Club is a Global DMC helping Travel Agents in India connect with travel service providers worldwide through an online interface.",
      techStack: ["React", "JavaScript", "Redux", "Context API", "Rest API", "Rozarpay"],
      liveLink: "https://www.swtclub.com/",
      cachedLink: "#",
      projectImage: projectSWT
    },
    {
      title: "IBuild Platform",
      description: "Ibuild is team of seasoned construction professionals and tech innovators committed to transforming residential building through smart automation and strategic insight. ",
            techStack: ["React", "Material UI", "JavaScript", "Socket.IO", "Azure", "Tanstack query"],
      liveLink: "https://ibuildplatform.com/",
      cachedLink: "#",
      projectImage: projectIbuild
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