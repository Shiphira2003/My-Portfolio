import React from "react";
import CommunityCard from "./CommunityCard";

const communities = [
  {
    name: "Teach2Give",
    role: "Attachee",
    duration: "May 2024 – August 2024",
    description:
      "Engaged in a community of passionate learners and mentors, focusing on building real-world tech skills, collaboration, and community empowerment through software development and peer support.",
  },
  {
    name: "Dada STEM Mentorship Program",
    role: "Women in Tech Mentee",
    duration: "2025-2026",
    description:
      "Participated in a mentorship program aimed at empowering women in technology. Gained valuable career guidance, networking opportunities, and confidence to thrive in the tech ecosystem.",
  },
];

const Community: React.FC = () => {
  return (
    <section id="community" className="py-20 px-6 lg:px-24 bg-base-100 text-base-content">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-primary mb-2">Community Engagement</h2>
        <p className="text-lg text-gray-600">
          Communities that have shaped and inspired my growth in tech.
        </p>
      </div>

      <div className="space-y-6 max-w-4xl mx-auto">
        {communities.map((item, idx) => (
          <CommunityCard key={idx} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Community;
