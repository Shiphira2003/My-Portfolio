import React from "react";

const About: React.FC = () => {
  return (
    <section className="py-16 px-6 lg:px-32 bg-base-100 text-base-content" id="about">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-primary">About Me</h2>
        <p className="text-lg leading-relaxed">
          Hello! I'm <span className="font-semibold text-purple-600">Shiphira Wamaitha</span>, a passionate and driven
          <span className="font-semibold text-purple-600"> Computer Science student</span> at Laikipia University.
          As a <span className="font-semibold text-purple-600">Kenyan software engineer</span> in the making, I thrive on turning ideas into
          real-world solutions through clean, efficient, and elegant code.
        </p>

        <p className="text-lg leading-relaxed mt-4">
          Whether it's web development, building modern UI experiences, or exploring back-end logic, I bring
          curiosity, discipline, and creativity to every project. I’m always learning and pushing boundaries to grow as a developer and make a meaningful impact in the tech community.
        </p>
      </div>
    </section>
  );
};

export default About;
