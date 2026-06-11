import React from "react";
import { motion } from "framer-motion";

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-24 bg-base-100 text-base-content border-b border-gray-100 dark:border-neutral-900">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-primary mb-2">Education</h2>
        <p className="text-lg text-gray-600 dark:text-neutral-400">
          My academic foundation and learning journey.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <motion.div 
          className="bg-white dark:bg-neutral-900 shadow-md rounded-lg p-8 border-l-4 border-purple-500 dark:border-purple-600 border border-gray-100 dark:border-neutral-800"
          whileHover={{ y: -2 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
            <div>
              <h3 className="text-2xl font-bold text-purple-700 dark:text-purple-400">
                B.Sc. in Computer Science
              </h3>
              <p className="text-lg text-gray-800 dark:text-gray-200 font-medium">
                Laikipia University
              </p>
            </div>
            <div className="mt-2 md:mt-0 text-left md:text-right">
              <span className="text-sm font-semibold bg-purple-100 dark:bg-purple-950/40 text-purple-700 dark:text-purple-400 px-3 py-1 rounded-full">
                2022 – 2026
              </span>
            </div>
          </div>
          
          <p className="text-gray-700 dark:text-neutral-300 leading-relaxed">
            Acquired a comprehensive understanding of Computer Science fundamentals, software engineering methodologies, database management, computer networks, and algorithms. Collaborated extensively with lecturers and peers to build software projects and design real-world tech solutions.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
