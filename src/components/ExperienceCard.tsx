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
    <div className="bg-white dark:bg-neutral-900 shadow-md rounded-lg p-6 border-l-4 border-purple-400 dark:border-l-4 dark:border-purple-600 border border-gray-100 dark:border-neutral-800">
      <h3 className="text-xl font-semibold text-purple-700 dark:text-purple-400">{title}</h3>
      <p className="text-gray-800 dark:text-gray-200 font-medium">{company}</p>
      <p className="text-sm text-gray-500 dark:text-neutral-400 italic mb-2">{duration}</p>
      <p className="text-gray-700 dark:text-neutral-300">{description}</p>
    </div>
  );
};

export default ExperienceCard;