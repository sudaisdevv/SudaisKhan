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
    }, 400); // ⚡ very fast (0.4s)

    const timer = setTimeout(() => setLoading(false), 3000); // Fake loading (5s)

    return () => {
      clearInterval(wordInterval);
      clearTimeout(timer);
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Rapid Changing "Hello" */}
          <div className="h-14 flex items-center">
            <AnimatePresence mode="wait">
              <motion.h1
                key={index}
                className="text-4xl sm:text-5xl font-semibold text-white tracking-wide font-[Poppins]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }} // super quick fade
              >
                {words[index]}
              </motion.h1>
            </AnimatePresence>
          </div>

          {/* Looping Progress Bar */}
          <motion.div
            className="mt-6 h-1 w-44 bg-gray-700 overflow-hidden rounded-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            <motion.div
              className="h-full bg-purple-500"
              animate={{ x: ["-100%", "0%", "100%"] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
