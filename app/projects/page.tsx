import { ProjectCard } from "@/components/ui/ProjectCard";
import { Projects } from "@/components/ui/Projects";    
import { title } from "process";



function ProjectsPage() {


      const projectList = [
    {
      title: "Wedding Vibes",
      description:
        "Wedding Vibes is an online platform for wedding accommodations, providing options for working professionals and students from rooms to flats across India.",
      techStack: ["HTML", "CSS", "React.js", "JavaScript", "GraphQL", "Tailwind CSS"],
      liveLink: "https://www.theweddingvibes.in/",
      cachedLink: "#",
    },
    {
      title: "Intercom - Smart Living",
      description:"Need a Flat or Parking To-Let or Sale? Secure your visitor, who is visiting your home / office? Manage all your properties, flats or apartments rent, utilities? Looking for a service nearby? Maid, Electrician, Plumber, Laundry to anything.",
      techStack: [
        "React",
        "JavaScript",
        "Redux",
        "Context API",
        "Rest API",
        "Stripe",
      ],
      liveLink: "https://play.google.com/store/apps/details?id=com.application.intercom&hl=en_IN/",
      cachedLink: "#",
    },
    {
        title:"Better My Stay",
      description:"Better My Stay is smart companion for a seamless and elevated hospitality experience.",
      techStack: [
        "React",
        "Material UI",
        "JavaScript",
        "Socket.IO",
        "Data Encryption",
        "RTK Query",
        "Lazy Loading",
        "Google place API"
      ],
      liveLink: "https://bettermystay.in/#about",
                    cachedLink: "#",
    },

    {
        title:"Cyber Auditor",
      description:"Cyber Auditor is a comprehensive cybersecurity assessment and management platform designed to help organizations identify vulnerabilities, assess risks, and implement effective security measures to protect their digital assets.",
      techStack: [
        "React",
        "JavaScript",
        "Redux",
        "Context API",
        "Rest API",
        "Tanstack query",
        "Remote Cmd Terminal",
        "Security Best Practices"
      ],        


        liveLink:"https://play.google.com/store/apps/details?id=com.mobisec.cyberauditorapp&hl=en_IN",
                            cachedLink: "#",

    }
  ];
  return (
    <>
      <div className=" max-w-[1024px] mx-auto mt-15">
        <h1 className="text-white text-xl md:text-2xl font-semibold whitespace-nowrap">
          <span className="text-primary">#</span>complete-apps
        </h1>
      </div>
      <Projects />

       <div className=" max-w-[1024px] mx-auto mt-15">
        <h1 className="text-white text-xl md:text-2xl font-semibold whitespace-nowrap">
          <span className="text-primary">#</span>other-apps
        </h1>
      </div>
          <div className="mt-14 max-w-[1024px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">


      {projectList.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                techStack={project.techStack}
                liveLink={project.liveLink}
                cachedLink={project.cachedLink}
              />
            ))}

            </div>

    </>


  );
}

export default ProjectsPage;