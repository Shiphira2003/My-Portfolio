import React from "react";
import CertificationCard from "./CertificationCard";
import { motion } from "framer-motion";

type Certification = {
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  credentialUrl?: string;
  downloadUrl?: string;
  image?: string;
};

const Certifications: React.FC = () => {
  const certifications: Certification[] = [
    {
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "June 2023",
      credentialId: "AWS-1234-5678-90",
      credentialUrl: "https://example.com/verify",
      downloadUrl: "/certificates/aws-cert.pdf",
      image: "/aws-logo.png",
    },
    {
      title: "Advanced React Concepts",
      issuer: "Meta (Facebook)",
      date: "March 2023",
      credentialUrl: "https://example.com/verify-react",
      downloadUrl: "/certificates/react-cert.pdf",
    },
    {
      title: "Node.js Professional Certification",
      issuer: "OpenJS Foundation",
      date: "January 2023",
      credentialId: "NODE-9988-7766",
      downloadUrl: "/certificates/node-cert.pdf",
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
            Professional Certifications
          </motion.h2>
          <motion.p
            className="text-lg text-gray-500 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            Validated skills and qualifications from accredited organizations
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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