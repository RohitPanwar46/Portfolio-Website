/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
  const words = [
    "MongoDb...",
    "ExpressJs...",
    "React...",
    "NextJs...",
    "HTML...",
    "CSS...",
    "JavaScript...",
    "Pr. Language Python...",
    "Pr. Language C..",
  ]; // Changeable words
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedWord, setDisplayedWord] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];

    const timer = setTimeout(() => {
      if (!isDeleting && charIndex < currentWord.length) {
        setDisplayedWord((prev) => prev + currentWord[charIndex]); // Add next character
        setCharIndex((prev) => prev + 1);
      } else if (isDeleting && charIndex > 0) {
        setDisplayedWord((prev) => prev.slice(0, -1)); // Remove last character
        setCharIndex((prev) => prev - 1);
      } else if (!isDeleting && charIndex === currentWord.length) {
        setTimeout(() => setIsDeleting(true), 1000); // Wait before deleting
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length); // Move to next word
      }
    }, isDeleting ? 100 : 200); // Typing speed (faster when deleting)

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, currentWordIndex, words]);

  return (
    <div className="font-inter text-[#03045e] mt-14 md:mt-28 px-4">
      <div className="flex flex-col md:flex-row justify-between w-full mx-auto">
        {/* Left Section */}
        <div className="Leftpart mt-5 pt-5 relative">
          <div className="absolute font-[550] md:text-lg -top-1">
            Hello, I&apos;m Rohit Panwar
          </div>
          <div className="font-bold text-[60px] md:text-[110px] h-[100px]">Web</div>
          <div className="font-bold text-[60px] md:text-[110px] h-[100px] md:top-[110px] absolute top-[75px]">
            Developer
          </div>
          <div className=" mt-20 md:mt-36 md:text-base font-[600] md:font-[550] flex">
            &nbsp; Here is my skills :- &nbsp;
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-[#2124ef]"
            >
              {displayedWord}
            </motion.div>
          </div>

          <div className="projectBtn font-[550]  mt-10 md:mt-32 ">
            Click here to view my projects:-
            <Link href={"/projects"}>
              <button className="md:ml-5 shadow-lg hover:shadow-xl transition-shadow bg-[#fcf6a9] md:bg-[#f6ee83] ml-2 text-[#474306] text-sm py-2 px-4 rounded-[5px] border border-[#474306]">
                Projects
              </button>
            </Link>
          </div>
        </div>

        {/* Right Section */}
        {/* <div className="Rightpart hidden">
          <div className="rounded-xl mr-0 md:mr-32 overflow-hidden">
            <img
              className=""
              width={350}
              src=""
              alt=""
            />
          </div>
        </div> */}
      </div>
    </div>
  );
}
