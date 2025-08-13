import React from "react";
import ExperienceCard from "./ExperienceCard";

const experiences = [
  {
    company: "Laikipia Internal Attachment",
    title: "IT Attachee – Hardware & Networking",
    duration: "May 2024 – July 2024",
    description:
      "Focused on hardware troubleshooting, Cisco devices, and configuring switches and routers. Gained hands-on experience in setting up and maintaining local networks.",
  },
  {
    company: "Teach2Give",
    title: "Software & Mentorship Attachee",
    duration: "May 2024 – August 2024",
    description:
      "Involved in tech community engagement, mentorship, and software development. Collaborated with peers and mentors to build digital skills and empower learners.",
  },
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 px-6 lg:px-24 bg-base-100 text-base-content">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-primary mb-2">Experience</h2>
        <p className="text-lg text-gray-600">Internships and learning opportunities I’ve taken part in.</p>
      </div>

      <div className="space-y-6 max-w-4xl mx-auto">
        {experiences.map((exp, idx) => (
          <ExperienceCard key={idx} {...exp} />
        ))}
      </div>
    </section>
  );
};

export default Experience;