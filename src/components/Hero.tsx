import React, { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

// Import your images
import myphoto1 from "../assets/WhatsApp Image .jpg";
import myphoto2 from "../assets/Image .jpg";
import myphoto3 from "../assets/image3.jpg";

const Hero: React.FC = () => {
  const photos = [myphoto1, myphoto2, myphoto3];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % photos.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [photos.length]);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 relative bg-gradient-to-br from-purple-100 via-purple-50 to-white overflow-hidden pt-20 pb-10">
      {/* Soft floating glow */}
      <div className="absolute -top-16 -left-16 w-96 h-96 bg-purple-200 opacity-20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-10 -right-10 w-80 h-80 bg-purple-300 opacity-10 rounded-full blur-2xl animate-pulse"></div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10 mt-16"
      >
        <div className="w-64 h-64 md:w-80 md:h-80 mx-auto mb-8 rounded-full overflow-hidden border-4 border-purple-300 shadow-xl relative">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentIndex}
              src={photos[currentIndex]}
              alt={`Shiphira Wamaitha ${currentIndex + 1}`}
              className="w-full h-full object-cover absolute"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            />
          </AnimatePresence>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold text-purple-700 drop-shadow-lg">
          Hi, I'm Shiphira Wamaitha
        </h1>

        <p className="mt-4 text-xl md:text-2xl text-gray-700 max-w-xl mx-auto">
          <Typewriter
            words={[
              "Computer Science Student",
              "Passionate Software Engineer",
              "Lifelong Learner from Kenya",
            ]}
            loop
            cursor
            cursorStyle="|"
            typeSpeed={60}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </p>

        <div className="mt-8">
          <a
            href="#projects"
            className="btn btn-primary btn-wide gap-2 text-purple-400 text-lg shadow-lg hover:scale-105 transition-transform"
          >
            See My Work <FaArrowRight />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;