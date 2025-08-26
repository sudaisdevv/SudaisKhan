import React from 'react'
import FlipLink from "./ui/text-effect-flipper"
import { motion } from "framer-motion";

function AboutMe() {
  return (
    <>
      <div className="main-about-me w-full max-w-6xl mx-auto px-4 py-10">
        {/* Section Title */}
        <FlipLink>About Me</FlipLink>

        {/* Info Section */}
        <div className="info flex flex-col md:flex-row items-center md:items-start gap-6 mt-6">
          {/* Left Info */}
          <div className="left-info p-4 flex-1 text-center md:text-left">
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold leading-relaxed">
              Empowering brands to lead in the digital age. Together, we redefine 
              the status quo—no fluff, just forward-thinking design and 
              cutting-edge execution.
            </h3>
          </div>

          {/* Right Info */}
          <div className="right-info p-4 flex-1 text-center md:text-left">
            <h4 className="text-base sm:text-lg md:text-xl  leading-relaxed">
              I blend design, development, and interaction to craft thoughtful 
              web experiences that balance aesthetics and functionality.
            </h4>
          </div>
        </div>
      </div>

      {/* Divider with Drawing Effect */}
      <motion.hr
        className="w-[90%] sm:w-[80%] lg:w-[75%] mx-auto mt-8 border-t-2 border-gray-400"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1.5 }}
      />
    </>
  )
}

export default AboutMe
