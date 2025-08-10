import React from "react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Car Rental System",
    description: "A full-stack web application for booking and managing rental cars.",
    tech: ["React", "TypeScript", "TailwindCSS", "PostgreSQL", "Drizzle ORM"],
    github: "https://github.com/Shiphira2003/VEHICLE-RENTING-MANAGEMENT-SYSTEM-FRONTEND-1.git",
    demo: "https://shiwamadrive.netlify.app/",
    image: "https://source.unsplash.com/featured/?car,app",
  },
  {
    title: "Meal Planner",
    description: "A simple app to add, edit, and manage meals with nutritional info.",
    tech: ["React", "Redux", "DaisyUI"],
    github: "https://github.com/Shiphira2003/Mathe-s-kitchen.git",
    demo: "",
    image: "https://source.unsplash.com/featured/?meal,food",
  },
  {
    title: "Personal Portfolio",
    description: "This website! A showcase of my work, skills, and experience.",
    tech: ["TypeScript", "React", "Tailwind", "DaisyUI"],
    github: "https://github.com/Shiphira2003/My-Portfolio.git",
    demo: "",
    image: "https://source.unsplash.com/featured/?laptop,code",
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 px-6 lg:px-24 bg-base-100 text-base-content">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-primary mb-2">Projects</h2>
        <p className="text-lg text-gray-600">A selection of things I’ve built and worked on.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
