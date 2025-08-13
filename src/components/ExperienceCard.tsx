import React from "react";

type ExperienceCardProps = {
  company: string;
  title: string;
  duration: string;
  description: string;
};

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  company,
  title,
  duration,
  description,
}) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 border-l-4 border-purple-400">
      <h3 className="text-xl font-semibold text-purple-700">{title}</h3>
      <p className="text-gray-800 font-medium">{company}</p>
      <p className="text-sm text-gray-500 italic mb-2">{duration}</p>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default ExperienceCard;