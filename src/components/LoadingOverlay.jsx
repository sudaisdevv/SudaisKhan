"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Words for "Hello" in multiple languages
const words = [
  "Hello",        // English
  "ہیلو",         // Urdu
  "مرحبا",        // Arabic
  "Bonjour",      // French
  "Hola",         // Spanish
  "Hallo",        // German
  "Ciao",         // Italian
  "こんにちは",     // Japanese
  "안녕하세요",      // Korean
  "Привет"        // Russian
];

export default function LanguageChangingLoader() {
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  // Rapid word cycling
  useEffect(() => {
    const wordInterval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 400);

    const timer = setTimeout(() => setLoading(false), 3000);

    return () => {
      clearInterval(wordInterval);
      clearTimeout(timer);
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center 
                     bg-black"
          style={{
            height: "100dvh", // ✅ dynamic viewport height → stays centered on mobile
          }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Centered "Hello" text */}
          <div className="flex items-center min-h-[3rem] w-full justify-center">
            <AnimatePresence mode="wait">
              <motion.h1
                key={index}
                className="text-white font-[Poppins] tracking-wide font-semibold 
                           text-[clamp(1.8rem,6vw,3.5rem)] text-center leading-snug break-words"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                style={{
                  maxWidth: "90%", // prevents overflow on mobile
                  textShadow: "0 0 10px rgba(255, 255, 255, 0.3)",
                }}
              >
                {words[index]}
              </motion.h1>
            </AnimatePresence>
          </div>

          {/* Centered Progress Bar */}
          <motion.div
            className="mt-6 h-[0.35rem] w-[70vw] max-w-[220px] 
                       bg-gray-700 overflow-hidden rounded-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            <motion.div
              className="h-full bg-gradient-to-r from-pink-500 via-purple-400 to-indigo-500"
              animate={{ x: ["-100%", "0%", "100%"] }}
              transition={{
                repeat: Infinity,
                duration: 1.8,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
