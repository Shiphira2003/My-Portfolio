import React from "react";

type CommunityCardProps = {
  name: string;
  duration: string;
  role: string;
  description: string;
};

const CommunityCard: React.FC<CommunityCardProps> = ({
  name,
  duration,
  role,
  description,
}) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 border-l-4 border-purple-400">
      <h3 className="text-xl font-semibold text-purple-700">{name}</h3>
      <p className="text-gray-800 font-medium">{role}</p>
      <p className="text-sm text-gray-500 italic mb-2">{duration}</p>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default CommunityCard;
