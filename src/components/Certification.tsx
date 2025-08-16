import React from "react";
import CertificationCard from "./CertificationCard";
import { motion } from "framer-motion";
import womenDigitalCert from "../assets/widb.jpg";
import teach2giveCert from "../assets/teach2give.jpg";

type Certification = {
  title: string;
  issuer: string;
  date: string;
  image: string;
};

const Certifications: React.FC = () => {
  const certifications: Certification[] = [
    {
      title: "Women in Digital Business Certification",
      issuer: "Women in Digital Business Initiative",
      date: "2025",
      image: womenDigitalCert,
    },
    {
      title: "Software Development Certification",
      issuer: "Teach2Give",
      date: "2025",
      image: teach2giveCert,
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <motion.h2 
            className="text-3xl font-bold text-gray-900 mb-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            My Certifications
          </motion.h2>
          <motion.p
            className="text-lg text-gray-500 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            Official recognition of my skills and accomplishments
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
            >
              <CertificationCard {...cert} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;