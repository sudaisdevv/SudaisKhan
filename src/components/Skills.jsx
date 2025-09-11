"use client";
import { motion } from "framer-motion";
import FlipLink from "./ui/text-effect-flipper";
import { CardCarousel } from "./ui/card-carousel";

function Skills() {
 

  return (
    <>
      <div className="main-skill flex flex-col items-center text-center w-full mt-12 px-6">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <FlipLink>Skills</FlipLink>
        </motion.div>

        {/* Intro Text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="max-w-2xl text-sm sm:text-base md:text-lg mb-8"
        >
          I specialize in building{" "}
          <span className="font-semibold">modern web applications</span> and
          creating <span className="font-semibold">AI-driven solutions</span>. My
          expertise spans across full-stack development, machine learning, and
          data engineering. Below are some of the technologies and tools I
          frequently work with.
        </motion.p>

        {/* Card Carousel (Responsive Sizes) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="w-full flex justify-center"
        >
          
        </motion.div>

        {/* Extra Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-10 max-w-3xl text-sm sm:text-base leading-relaxed"
        >
          <p className="mb-3">
            🔹 <span className="font-medium">Frontend:</span> React.js, Next.js,
            TailwindCSS for crafting fast, responsive, and beautiful UIs.
          </p>
          <p className="mb-3">
            🔹 <span className="font-medium">Backend:</span> Node.js, Express.js,
            REST APIs, and database integration (MongoDB, SQL).
          </p>
          <p className="mb-3">
            🔹 <span className="font-medium">Machine Learning & AI:</span>{" "}
            Python, TensorFlow, Scikit-learn, and deep learning models for
            intelligent solutions.
          </p>
          <p className="mb-3">
            🔹 <span className="font-medium">Other Tools:</span> Git, Docker,
            cloud deployment, and performance optimization.
          </p>
        </motion.div>
      </div>

      {/* Divider */}
      <motion.hr
        className="w-[90%] sm:w-[80%] lg:w-[75%] m-auto mt-6 border-t-2 border-gray-400"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1.5 }}
      />
    </>
  );
}

export default Skills;
