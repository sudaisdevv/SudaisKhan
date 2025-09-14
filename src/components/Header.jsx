"use client";
import React from "react";
import FlipLink from "./ui/text-effect-flipper";
import { TextScroll } from "./ui/text-scroll";
import { motion } from "framer-motion";
import LoadingOverlay from "./LoadingOverlay";
import dp from "../assets/dp.jpg";
function Header() {
  return (
    <>
      <LoadingOverlay />

      {/* Main Header Section */}
      <div className="main-header w-full min-h-screen flex flex-col lg:flex-row items-center justify-between px-5 sm:px-8 lg:px-16 py-12 gap-10">
        
        {/* Left Side - Info Section */}
        <div className="my-info w-full max-w-xl flex flex-col gap-6 text-center lg:text-left">
          <h1 className="text-[clamp(1.5rem,4vw,2.5rem)] font-medium">Hey I’m</h1>
          {/* <TextScroll 
            
            text="" 
          /> */}
          <h1 className="text-[clamp(2rem,6vw,4rem)] font-semibold" >SUDAIS KHAN</h1>
          {/* Subtitle / About */}
          <div className="about-info-header">
            <p className="text-[clamp(0.95rem,1.5vw,1.25rem)] leading-relaxed px-2 sm:px-0">
              “A Full Stack & ML/AI Developer specializing in end-to-end application 
              development and intelligent, data-driven solutions.”
            </p>
          </div>
          
          {/* Button */}
          <div className="flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-4 mt-4">
           <a href="/SudaisResume.docx" download>
  <button
    className="border border-gray-400 h-[42px] flex items-center justify-center px-6 py-2 font-semibold rounded-xl shadow-md hover:bg-gray-400 hover:text-black transition w-full sm:w-auto"
  >
    Get CV
  </button>
</a>


          </div>

          {/* Social Links */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-4">
            <FlipLink href="https://www.linkedin.com/in/sudais-khan-78b3a6341/">LinkedIn</FlipLink>
            <FlipLink href="https://github.com/sudaisdevv">GitHub</FlipLink>
            <FlipLink href="https://www.instagram.com/sudais_9.0/">Instagram</FlipLink>
          </div>
        </div>

        {/* Right Side - DP Section */}
        <div className="my-dp w-full lg:w-1/2 flex justify-center items-center">
          <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 flex items-center justify-center">
            
            {/* Circle Border Animation with Gradient */}
            <motion.svg
              className="absolute w-full h-full"
              viewBox="0 0 200 200"
            >
              <defs>
                <linearGradient id="circleGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#ec4899" />   {/* pink-500 */}
                  <stop offset="50%" stopColor="#a855f7" />  {/* purple-400 */}
                  <stop offset="100%" stopColor="#6366f1" /> {/* indigo-500 */}
                </linearGradient>
              </defs>

              <motion.circle
                cx="100"
                cy="100"
                r="110"   // Increased radius
                stroke="url(#circleGradient)"
                strokeWidth="6"
                fill="transparent"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 2 }}
              />
            </motion.svg>

            {/* Profile Image */}
            <div className="w-[85%] h-[85%] rounded-full overflow-hidden shadow-xl">
              <img
                src={dp}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <motion.hr
        className="w-[90%] sm:w-[80%] lg:w-[75%] m-auto mt-8 border-t-2 border-gray-400"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1.5 }}
      />
    </>
  );
}

export default Header;
