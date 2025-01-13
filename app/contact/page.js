"use client";

import React from "react";
import { FaLinkedin, FaEnvelope, FaBriefcase, FaGithub, } from "react-icons/fa";
import Head from "next/head";
import { useEffect } from "react";

const Contact = () => {
  const links = [
    {
      name: "Email",
      href: "mailto:freelancerrohit46@gmail.com",
      icon: <FaEnvelope size={24} />,
    },
    {
      name: "GitHub",
      href: "https://github.com/RohitPanwar46",
      icon: <FaGithub size={24} />,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/rohit-panwar-094b4133a",
      icon: <FaLinkedin size={24} />,
    },
    {
      name: "Freelancer Profile",
      href: "https://www.freelancer.in/u/RohitDevloper46?sb=t",
      icon: <FaBriefcase size={24} />,
    },
    {
      name: "Upwork profile",
      href: "https://www.upwork.com/freelancers/~017f771246030bb8a0?mp_source=share",
      icon: <FaBriefcase size={24} />,
    },
    {
      name: "Fiverr profile",
      href: "https://www.fiverr.com/s/rEAZPYj",
      icon: <FaBriefcase size={24} />,
    },
  ];

  useEffect(() => {
    document.title = "Contact Me | Rohit Panwar"; // Set dynamic title using useEffect
  }, []);

  return (
    <>
    <Head>
        <title>Contact Me | Rohit Panwar</title> 
      </Head>

      <div className="min-h-screen  text-[#03045e] flex flex-col items-center py-12 px-4">
      <h1 className="text-4xl font-bold mb-6">Get in Touch</h1>
      <p className="text-lg text-[#03045e] mb-8 text-center">
        Feel free to reach out to me through the links below. I am always open
        to discussing new projects, creative ideas, or opportunities to be part
        of your vision.
      </p>
      <a href="tel:+918290727961" className="text-blue-500 mb-4 ">
        <span className="text-[#03045e] cursor-default">Here is my Number :-</span> <span className="hover:underline">+91 82907 27961</span>
      </a>
      <div className="flex flex-col gap-6 items-center">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center gap-4 w-52 px-6 py-3 bg-[#fcf6a9] md:bg-[#f6ee83] text-[#474306] border border-[#474306] rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            {link.icon}
            <span className="text-lg font-medium">{link.name}</span>
          </a>
        ))}

      </div>

      <footer className="mt-12 text-gray-500 text-sm">
        Designed with ❤️ by Rohit
      </footer>
    </div>
    </>
  );
};

export default Contact;
