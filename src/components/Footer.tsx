import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="footer footer-center p-4 bg-primary text-white rounded-t-2xl mt-10">
      <div>
        
        <div className="flex gap-6 mt-2 text-2xl">
          <a
            href="https://github.com/Shiphira2003"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-purple-600transition-all"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/Shiphira-Ndirangu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-purple-600 transition-all"
          >
            <FaLinkedin />
          </a>
        </div>
        <p className="font-semibold text-purple-600">© {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
