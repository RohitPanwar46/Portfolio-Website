"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../component/Navbar";

const focusAreas = [
  {
    icon: "🌐",
    title: "Full-Stack Development",
    text: "Next.js and React frontends with Node.js, Express and MongoDB backends, secure authentication, file uploads and REST APIs.",
  },
  {
    icon: "🤖",
    title: "Machine Learning",
    text: "Recommender systems, NLP, time-series classification, computer vision and audio signal processing with Python and Scikit-learn.",
  },
  {
    icon: "🚀",
    title: "Deployment",
    text: "Containerizing apps with Docker and hosting them on a VPS, alongside platforms like Vercel and Render.",
  },
];

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 text-[#03045e] pt-28 pb-10 px-5">
        {/* Header Section */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-indigo-900">About Me</h1>
          <p className="text-lg text-indigo-600 max-w-2xl mx-auto">
            Software engineer building full-stack web applications and machine learning systems
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Introduction Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <div
              className={`transition-all duration-700 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
              }`}
            >
              <h2 className="text-3xl font-bold mb-6 text-indigo-800">Who I Am</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                I&apos;m Rohit Panwar, a Bachelor of Computer Applications student at Manipal University
                Jaipur and a software engineer focused on full-stack development and machine learning.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                I started with web development, building apps with Next.js, Node.js, Express and MongoDB.
                From there I moved into machine learning and have built a hybrid movie recommender, a
                human activity recognition system, a spam classifier, face recognition and a voice
                command recognition system based on audio signal processing and FFT.
              </p>
              <p className="text-gray-700 leading-relaxed">
                I like owning a project end to end: designing the architecture, building the backend,
                frontend and models, then containerizing it with Docker and deploying it on my own VPS.
              </p>
            </div>

            <div
              className={`flex justify-center items-center transition-all duration-700 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
              }`}
            >
              <div className="relative">
                <div className="w-64 h-64 bg-gradient-to-r from-indigo-200 to-blue-200 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-6xl">👨‍💻</span>
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-amber-200 rounded-full opacity-80 animate-pulse"></div>
                <div
                  className="absolute -bottom-4 -left-4 w-20 h-20 bg-indigo-200 rounded-full opacity-80 animate-pulse"
                  style={{ animationDelay: "1s" }}
                ></div>
              </div>
            </div>
          </div>

          {/* What I Do */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-10 text-center text-indigo-800">What I Do</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {focusAreas.map((area, index) => (
                <div
                  key={area.title}
                  className={`p-6 bg-white rounded-xl shadow-md border border-indigo-100 hover:shadow-lg transition-all duration-500 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="bg-indigo-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl">{area.icon}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-indigo-900 mb-2">{area.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{area.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="mb-20 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-indigo-800 text-center">Education</h2>

            <div className="space-y-6">
              <div
                className={`p-6 bg-white rounded-xl shadow-md border border-indigo-100 transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <span className="text-2xl">🎓</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-indigo-900">
                      Bachelor of Computer Applications (BCA)
                    </h3>
                    <p className="text-indigo-600 mb-2">Manipal University Jaipur • Expected 2028</p>
                    <p className="text-gray-700">
                      Studying software development, data structures and algorithms, and web technologies.
                    </p>
                  </div>
                </div>
              </div>

              <div
                className={`p-6 bg-white rounded-xl shadow-md border border-indigo-100 transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: "200ms" }}
              >
                <div className="flex items-start">
                  <div className="bg-green-100 p-3 rounded-lg mr-4">
                    <span className="text-2xl">📚</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-indigo-900">
                      Senior Secondary (12th, PCM)
                    </h3>
                    <p className="text-indigo-600 mb-2">Senior Secondary School, Phalodi • 2024</p>
                    <p className="text-gray-700">
                      Physics, Chemistry and Mathematics, with 74.6%.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div
            className={`text-center p-8 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-2xl border border-indigo-100 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-indigo-900">
              Let&apos;s Connect
            </h2>
            <p className="text-lg text-indigo-600 mb-6 max-w-2xl mx-auto">
              Interested in my work or have an opportunity in mind? I&apos;d be glad to hear from you.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105"
            >
              <span>Get in Touch</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}