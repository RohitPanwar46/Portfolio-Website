/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "./component/Navbar";

export default function Home() {
  const words = [
    "MongoDb...",
    "ExpressJs...",
    "React...",
    "NextJs...",
    "HTML...",
    "CSS...",
    "JavaScript...",
    "Python...",
    "C...",
  ];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedWord, setDisplayedWord] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const currentWord = words[currentWordIndex];

    const timer = setTimeout(
      () => {
        if (!isDeleting && charIndex < currentWord.length) {
          setDisplayedWord((prev) => prev + currentWord[charIndex]);
          setCharIndex((prev) => prev + 1);
        } else if (isDeleting && charIndex > 0) {
          setDisplayedWord((prev) => prev.slice(0, -1));
          setCharIndex((prev) => prev - 1);
        } else if (!isDeleting && charIndex === currentWord.length) {
          setTimeout(() => setIsDeleting(true), 1000);
        } else if (isDeleting && charIndex === 0) {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      },
      isDeleting ? 100 : 200
    );

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, currentWordIndex, words]);

  // Fixed background dots without random values that cause hydration issues
  const BackgroundDots = () => {
    // Use fixed positions and sizes instead of random ones
    const fixedDots = [
      { size: 10, top: 8, left: 48 },
      { size: 12, top: 59, left: 8 },
      { size: 8, top: 99, left: 33 },
      { size: 6, top: 10, left: 13 },
      { size: 14, top: 75, left: 85 },
      { size: 9, top: 25, left: 72 },
      { size: 11, top: 45, left: 25 },
      { size: 7, top: 85, left: 60 },
    ];

    return (
      <div className="absolute inset-0 overflow-hidden z-0">
        {fixedDots.map((dot, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-200 opacity-20"
            style={{
              width: dot.size,
              height: dot.size,
              top: `${dot.top}%`,
              left: `${dot.left}%`,
            }}
            animate={{
              y: [0, -5, 0],
              x: [0, 5, 0],
            }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>
    );
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-28 bg-gradient-to-br from-blue-50 via-white to-indigo-50 font-inter text-[#03045e] px-4 py-8 relative overflow-hidden">
        <BackgroundDots />

        {/* Animated circles in background */}
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-blue-100 opacity-30"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "loop",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-indigo-100 opacity-30"
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            repeatType: "loop",
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center w-full">
            {/* Left Section */}
            <motion.div
              className="Leftpart mt-5 pt-5 relative w-full md:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <motion.div
                className="absolute font-medium md:text-lg -top-1 text-indigo-600"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                Hello, I&apos;m Rohit Panwar
              </motion.div>

              <motion.div
                className="font-bold text-6xl md:text-8xl h-24 text-indigo-900"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.7 }}
              >
                Web
              </motion.div>

              <motion.div
                className="font-bold text-6xl md:text-8xl h-24 absolute top-16 md:top-20 text-indigo-800"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.7 }}
              >
                Developer
              </motion.div>

              <motion.div
                className="mt-24 md:mt-36 text-base font-medium flex items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.5 }}
              >
                <span className="mr-2">My skills include:</span>
                <motion.div
                  className="text-indigo-600 min-h-[24px] font-medium bg-indigo-100 px-2 py-1 rounded-md"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {displayedWord}
                  <motion.span
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="ml-1"
                  >
                    |
                  </motion.span>
                </motion.div>
              </motion.div>

              <motion.div
                className="font-medium mt-10 md:mt-32 flex flex-col md:flex-row items-start md:items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.1, duration: 0.5 }}
              >
                <span className="mb-3 md:mb-0">View my projects:</span>
                <Link href={"/projects"}>
                  <motion.button
                    className="md:ml-5 bg-gradient-to-r from-yellow-200 to-amber-200 hover:from-amber-200 hover:to-yellow-200 text-amber-900 text-sm py-3 px-6 rounded-lg border border-amber-300 shadow-md hover:shadow-lg transition-all duration-300 flex items-center"
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>Projects</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 ml-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </motion.button>
                </Link>
              </motion.div>

              {/* Social links */}
              <motion.div
                className="flex mt-8 space-x-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.3, duration: 0.5 }}
              >
                {[
                  {
                    name: "github",
                    icon: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z",
                    link: "https://github.com/RohitPanwar46",
                  },
                  {
                    name: "linkedin",
                    icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.920-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
                    link: "https://www.linkedin.com/in/rohit-panwar-094b4133a",
                  },
                  {
                    name: "instagram",
                    icon: "M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zm4.25 3a5.25 5.25 0 110 10.5 5.25 5.25 0 010-10.5zm0 1.5a3.75 3.75 0 100 7.5 3.75 3.75 0 000-7.5zm5.5-.75a1 1 0 110 2 1 1 0 010-2z",
                    link: "https://www.instagram.com/developerrohit56/?__pwa=1",
                  },
                ].map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.link}
                    className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-md hover:shadow-lg transition-shadow"
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.4 + index * 0.1 }}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="text-indigo-600"
                    >
                      <path d={social.icon} />
                    </svg>
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Section */}
            <motion.div
              className="Rightpart w-full md:w-1/2 flex justify-center md:justify-end mt-10 md:mt-0"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <motion.div
                className="relative"
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <motion.div
                  className="absolute -inset-4 bg-gradient-to-r from-yellow-200 to-amber-200 rounded-2xl opacity-70 blur-lg"
                  animate={{ rotate: [0, 5, 0] }}
                  transition={{ duration: 10, repeat: Infinity }}
                />

                <motion.div
                  className="rounded-2xl overflow-hidden border-4 border-white shadow-2xl relative z-10"
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-[350px] h-[550px] relative">
                    <Image
                      src="/Rohit.jpg"
                      alt="Rohit Panwar"
                      fill
                      className="object-cover"
                      priority
                      sizes="(max-width: 768px) 100vw, 350px"
                    />
                  </div>
                </motion.div>

                {/* Decorative elements */}
                <motion.div
                  className="absolute -bottom-4 -left-4 w-20 h-20 bg-indigo-200 rounded-full z-0"
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 90, 0],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                />

                <motion.div
                  className="absolute -top-4 -right-4 w-16 h-16 bg-amber-200 rounded-full z-0"
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, -90, 0],
                  }}
                  transition={{
                    duration: 7,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                />
              </motion.div>
            </motion.div>
          </div>

          {/* Skills section with icons */}
          <motion.div
            className="mt-20 md:mt-32 grid grid-cols-3 md:grid-cols-5 gap-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            {[
              { name: "React", icon: "⚛️" },
              { name: "Next.js", icon: "▲" },
              { name: "MongoDB", icon: "🍃" },
              { name: "Express", icon: "🚂" },
              { name: "Python", icon: "🐍" },
              { name: "JavaScript", icon: "📜" },
              { name: "HTML", icon: "🌐" },
              { name: "CSS", icon: "🎨" },
              { name: "C", icon: "🔧" },
            ].map((skill, index) => (
              <motion.div
                key={skill.name}
                className="flex flex-col items-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
                whileHover={{ y: -5, scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
              >
                <span className="text-2xl mb-2">{skill.icon}</span>
                <span className="text-sm font-medium">{skill.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
}
