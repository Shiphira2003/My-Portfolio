import React from "react";
import { FaCertificate, FaExternalLinkAlt, FaDownload } from "react-icons/fa";
import { motion } from "framer-motion";

type CertificationCardProps = {
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  credentialUrl?: string;
  downloadUrl?: string;
  image?: string;
};

const CertificationCard: React.FC<CertificationCardProps> = ({
  title,
  issuer,
  date,
  credentialId,
  credentialUrl,
  downloadUrl,
  image,
}) => {
  return (
    <motion.div
      className="flex flex-col h-full bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-200"
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <div className="p-5 flex flex-col h-full">
        {/* Header Section */}
        <div className="flex items-start space-x-4 mb-5">
          {image ? (
            <div className="flex-shrink-0">
              <img
                src={image}
                alt={`${issuer} logo`}
                className="w-12 h-12 object-contain rounded-lg bg-gray-50 p-1.5 border border-gray-200"
              />
            </div>
          ) : (
            <div className="flex-shrink-0 bg-purple-50 p-3 rounded-lg text-purple-600 border border-purple-100">
              <FaCertificate className="text-xl" />
            </div>
          )}

          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-semibold text-gray-900 leading-tight mb-1">
              {title}
            </h3>
            <p className="text-sm text-gray-600 font-medium">{issuer}</p>
            <p className="text-xs text-gray-400 mt-1.5">{date}</p>
          </div>
        </div>

        {/* Credential ID */}
        {credentialId && (
          <div className="mb-4 px-3 py-2 bg-gray-50 rounded-lg border border-gray-100">
            <p className="text-xs font-mono text-gray-600 break-all">
              ID: <span className="text-gray-800">{credentialId}</span>
            </p>
          </div>
        )}

        {/* Buttons */}
        <div className="mt-auto pt-4 border-t border-gray-100">
          <div className="flex space-x-3">
            {credentialUrl && (
              <motion.a
                href={credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 btn btn-sm btn-outline text-purple-600 border-purple-200 hover:bg-purple-50 flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaExternalLinkAlt className="text-sm" />
                <span>Verify</span>
              </motion.a>
            )}
            
            {downloadUrl && (
              <motion.a
                href={downloadUrl}
                download
                className="flex-1 btn btn-sm bg-purple-600 hover:bg-purple-700 text-white flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaDownload className="text-sm" />
                <span>Download</span>
              </motion.a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CertificationCard;