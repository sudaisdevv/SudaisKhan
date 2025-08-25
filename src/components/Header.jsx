"use client";
import React from "react";
import FlipLink from "./ui/text-effect-flipper";
import { TextScroll } from "./ui/text-scroll";
import { motion } from "framer-motion";
import LoadingOverlay from "./LoadingOverlay";

function Header() {
  return (
    <>
        <LoadingOverlay />
      {/* Existing Header content here */}
      <div className="main-header w-full min-h-screen flex flex-col lg:flex-row items-center justify-between px-5 sm:px-8 lg:px-10 py-10 gap-10">
        
        {/* Left Side (Info Section) */}
        <div className="my-info w-full lg:w-[500px] flex flex-col gap-6 lg:ml-[100px] text-center lg:text-left">
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl ">Hey I’m</h1>
          <TextScroll className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold" text="SUDAIS KHAN" />
          
          {/* Name Path Drawing Animation */}
          <motion.svg
            viewBox="0 0 600 120"
            className="w-full h-20"
          >
            
          </motion.svg>

          <div className="about-info-header">
            <p className="text-base sm:text-lg leading-relaxed px-2 sm:px-0">
              “A Full Stack & ML/AI Developer specializing in end-to-end application 
              development and intelligent, data-driven solutions.”
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-4 mt-4">
            <button className="border border-gray-400 h-[40px] flex items-center justify-center px-4 py-2 font-semibold rounded-xl shadow-md hover:bg-gray-400 w-[150px] transition">
              Get CV
            </button>
          </div>

          <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-4">
            <FlipLink href="https://www.linkedin.com/in/sudais-khan-78b3a6341/">LinkedIn</FlipLink>
            <FlipLink href="https://github.com/sudaisdevv">GitHub</FlipLink>
            <FlipLink href="https://www.instagram.com/sudais_9.0/">Instagram</FlipLink>
          </div>
        </div>

        {/* Right Side (DP Section with Circle Drawing Border) */}
        <div className="my-dp w-full lg:w-1/2 flex justify-center items-center">
         <div className="relative w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 flex items-center justify-center">
  {/* Circle Path Drawing */}
  <motion.svg
    className="absolute w-full h-full"
    viewBox="0 0 200 200"
  >
    <motion.circle
      cx="100"
      cy="100"
      r="95"
      stroke="purple"
      strokeWidth="6"
      fill="transparent"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      transition={{ duration: 2 }}
    />
  </motion.svg>

  {/* Profile Image */}
  <div className="w-[85%] h-[85%] rounded-full overflow-hidden shadow-lg">
    <img
      src="/dp.jpg"
      alt="Profile"
      className="w-full h-full object-cover"
    />
  </div>
</div>

        </div>
      </div>

      {/* Divider with Drawing Effect */}
      <motion.hr
        className="w-[90%] sm:w-[80%] lg:w-[75%] m-auto mt-6 border-t-2 border-gray-400"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1.5 }}
      />
    </>
  );
}

export default Header;
