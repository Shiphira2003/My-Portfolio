import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

type ProjectProps = {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo?: string;
  image?: string;
};

const ProjectCard: React.FC<ProjectProps> = ({
  title,
  description,
  tech,
  github,
  demo,
  image,
}) => {
  return (
    <div className="card bg-white shadow-md hover:shadow-xl transition-shadow duration-300 rounded-xl border border-purple-100">
      {image && (
        <figure>
          <img
            src={image}
            alt={title}
            className="rounded-t-xl h-48 w-full object-cover"
          />
        </figure>
      )}

      <div className="card-body">
        <h2 className="card-title text-purple-700">{title}</h2>
        <p className="text-gray-700">{description}</p>
        <div className="flex flex-wrap gap-2 mt-2">
          {tech.map((t, idx) => (
            <span key={idx} className="badge badge-outline text-sm border-purple-300 text-purple-700">
              {t}
            </span>
          ))}
        </div>
        <div className="card-actions mt-4 flex gap-3">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-sm btn-outline text-purple-700 border-purple-300"
          >
            <FaGithub /> Code
          </a>
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm btn-primary text-white"
            >
              <FaExternalLinkAlt /> Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
