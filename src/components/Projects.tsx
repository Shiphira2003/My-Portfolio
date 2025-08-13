import React from "react";
import ProjectCard from "./ProjectCard";


import carRentalImage from "../assets/car-rental.jpg"; 
import moviePlannerImage from "../assets/movie-planner.jpg";
import portfolioImage from "../assets/portfolio.jpg";

const projects = [
  {
    title: "Car Rental System",
    description: "A full-stack web application for booking and managing rental cars.",
    tech: ["React", "TypeScript", "TailwindCSS", "PostgreSQL", "Drizzle ORM"],
    github: "https://github.com/Shiphira2003/VEHICLE-RENTING-MANAGEMENT-SYSTEM-FRONTEND-1.git",
    demo: "https://shiwamadrive.netlify.app/",
    image: carRentalImage, 
  },
  {
    title: "Movie Planner",
    description: "A simple app to add, edit, and manage movies to watch.",
    tech: ["Html", "javascript", "css"],
    github: "https://github.com/Shiphira2003/movies-to-watch.git",
    demo: "https://shiphira2003.github.io/movies-to-watch/",
    image: moviePlannerImage, 
  },
  {
    title: "Personal Portfolio",
    description: "This website! A showcase of my work, skills, and experience.",
    tech: ["TypeScript", "React", "Tailwind", "DaisyUI"],
    github: "https://github.com/Shiphira2003/My-Portfolio.git",
    demo: "https://portfolio-pied-seven-68.vercel.app/",
    image: portfolioImage, 
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 px-6 lg:px-24 bg-base-100 text-base-content">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-primary mb-2">Projects</h2>
        <p className="text-lg text-gray-600">A selection of things I've built and worked on.</p>
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