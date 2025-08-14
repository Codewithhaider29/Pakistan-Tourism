import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import videoSrc from "../assets/video.mp4"; // Correct path for Vite/Webpack

const HeroSection = () => {
  return (
    <div className="relative h-screen">
      {/* Video Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <video autoPlay loop muted playsInline className="w-full h-full object-cover">
          <source src={videoSrc} type="video/mp4"  />
        </video>
      </div>

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-white text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-playfair font-bold mb-6"
        >
          Discover the Beauty of Pakistan
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl mb-8 max-w-2xl"
        >
          From majestic mountains to ancient civilizations, experience the journey of a lifetime
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-[#FFD700] hover:bg-yellow-600 text-primary font-bold py-3 px-8 rounded-full text-lg transition-colors duration-300"
        >
          Start Your Journey
        </motion.button>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute bottom-8"
        >
          <ChevronDown className="h-8 w-8" />
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
