import React from 'react'
import { motion } from "framer-motion";

import FlipLink from "./ui/text-effect-flipper";
function Projects() {
   
  return (
      <>
          <div className="main-project text-center w-full h-[80vh] bg-gray-800 mt-5 p-2">
              <FlipLink>Projects</FlipLink>
      </div>
      <motion.hr
                  className="w-[90%] sm:w-[80%] lg:w-[75%] m-auto mt-6 border-t-2 border-gray-400"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 1.5 }}
            />
      </>
  )
}

export default Projects