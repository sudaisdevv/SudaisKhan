"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import FlipLink from "./ui/text-effect-flipper";

function Contacts() {
  const [time, setTime] = useState({ formatted: "", period: "" });

  // Auto update time in 12-hour format with AM/PM
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      let hours = now.getHours();
      let minutes = now.getMinutes();
      let seconds = now.getSeconds();
      const period = hours >= 12 ? "PM" : "AM";

      hours = hours % 12 || 12; // convert to 12-hour
      const formatted = `${hours.toString().padStart(2, "0")}:${minutes
        .toString()
        .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

      setTime({ formatted, period });
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="main-contact w-full min-h-[25vh] rounded bg-black text-white mt-10 p-6 flex flex-col items-center justify-center">
        <FlipLink>Contact</FlipLink>

        <motion.hr
          className="w-[90%] sm:w-[50%] lg:w-[40%] m-auto mt-6 border-t-2 border-gray-400"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.5 }}
        />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center w-full mt-8 px-4">
          {/* Left Side - Contact Info */}
          <motion.div
            className="flex flex-col md:flex-row gap-4 text-center md:text-left"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <p className="font-medium">Sudais Khan</p>
            <p className="hover:text-gray-300 cursor-pointer">
              <a href="mailto:sudaisinbox@gmail.com">sudaisinbox@gmail.com</a>
            </p>
            <p className="hover:text-gray-300 cursor-pointer">
              <a href="tel:+923129169799">+92 312 9169799</a>
            </p>
          </motion.div>

          {/* Right Side - Time + Back to Top */}
          <motion.div
            className="flex flex-row items-center gap-6 mt-6 md:mt-0"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <p className="text-gray-300 flex items-baseline gap-1">
              {time.formatted}
              <span className="text-xs font-semibold">{time.period}</span>
            </p>
            <a
              href="#top"
              className="hover:text-gray-200  cursor-pointer"
            >
              ↑ Back to Top
            </a>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default Contacts;
