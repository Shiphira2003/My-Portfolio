import React from "react";
import { motion } from "framer-motion";

type CertificationCardProps = {
  title: string;
  issuer: string;
  date: string;
  image: string;
};

const CertificationCard: React.FC<CertificationCardProps> = ({
  title,
  issuer,
  date,
  image,
}) => {
  return (
    <motion.div
      className="flex flex-col h-full bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow duration-300"
      whileHover={{ y: -5, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      {/* Certificate Image */}
      <div className="w-full h-64 overflow-hidden">
        <img
          src={image}
          alt={`${title} certificate`}
          className="w-full h-full object-contain bg-white p-4"
        />
      </div>

      {/* Certificate Details */}
      <div className="p-5 border-t border-gray-200">
        <h3 className="text-xl font-bold text-gray-900 mb-1">{title}</h3>
        <div className="flex justify-between items-center">
          <p className="text-sm text-gray-600 font-medium">{issuer}</p>
          <p className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
            {date}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default CertificationCard;