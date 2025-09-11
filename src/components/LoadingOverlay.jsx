"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../../public/LanguageChangingLoader.css"; // 👈 import CSS for font

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
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const wordInterval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 400);

    const timer = setTimeout(() => setVisible(false), 3000);

    return () => {
      clearInterval(wordInterval);
      clearTimeout(timer);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black"
          style={{ height: "100dvh" }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Centered "Hello" text */}
          <div className="flex items-center min-h-[3rem] w-full justify-center">
            <AnimatePresence mode="wait">
              <motion.h1
                key={index}
                className="story-script text-white 
                           text-[clamp(2rem,6vw,4rem)] text-center leading-snug break-words"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                style={{
                  maxWidth: "90%",
                  textShadow: "0 0 10px rgba(255, 255, 255, 0.3)",
                }}
              >
                {words[index]}
              </motion.h1>
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
