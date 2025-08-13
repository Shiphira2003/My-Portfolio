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
    <div className="card bg-white shadow-md hover:shadow-xl transition-shadow duration-300 rounded-xl border border-purple-100 flex flex-col h-full overflow-hidden">
      {image && (
        <figure className="m-0">
          <img
            src={image}
            alt={title}
            className="w-full h-48 object-cover"
          />
        </figure>
      )}

      <div className="card-body p-6 flex flex-col flex-grow">
        <div className="flex-grow">
          <h2 className="card-title text-purple-700 mb-2">{title}</h2>
          <p className="text-gray-700 mb-4">{description}</p>
          <div className="flex flex-wrap gap-2">
            {tech.map((t, idx) => (
              <span
                key={idx}
                className="badge badge-outline text-sm border-purple-300 text-purple-700"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="card-actions mt-6 flex justify-between items-center">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-sm btn-outline text-purple-700 border-purple-300 hover:bg-purple-50 flex items-center gap-2"
          >
            <FaGithub className="text-lg" /> Code
          </a>
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm btn-primary bg-purple-600 hover:bg-purple-700 text-white flex items-center gap-2"
            >
              <FaExternalLinkAlt className="text-sm" /> Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;