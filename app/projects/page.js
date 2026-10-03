"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../component/Navbar";

const projectSections = [
  {
    title: "Web Development",
    subtitle: "Full-stack applications with authentication, payments, uploads and real users.",
    projects: [
      {
        title: "ZaikoMart",
        icon: "🛒",
        description:
          "A full e-commerce platform live in Phalodi. Local shops manage and customize their own store, and customers order directly from the website or the Android app.",
        highlights: [
          "1000+ users and 50+ shops onboarded",
          "Shop owners control products, orders, delivery rules and store customization",
          "React Native app and Next.js website share one backend API",
          "Google OAuth login, Firebase push notifications and Cloudinary image uploads",
        ],
        technologies: [
          "React Native",
          "Next.js",
          "Firebase Cloud Messaging",
          "Google OAuth",
          "Cloudinary",
          "REST API",
        ],
        links: [
          { label: "Website", url: "https://zaikomart.vercel.app" },
          {
            label: "Play Store",
            url: "https://play.google.com/store/apps/details?id=com.zaikomart.mobile",
          },
        ],
      },
      {
        title: "YouTube Clone",
        icon: "🎬",
        description:
          "A full-stack YouTube-like application with a reusable Express backend and a Next.js frontend.",
        highlights: [
          "Secure auth with NextAuth credentials, JWT and bcrypt",
          "Video and thumbnail uploads using multer and Cloudinary",
          "REST API for users, videos, playlists, comments, likes and subscriptions, with Mongoose aggregation pipelines",
        ],
        technologies: [
          "Next.js",
          "Node.js",
          "Express",
          "MongoDB",
          "Cloudinary",
          "Tailwind CSS",
          "Vercel",
          "Render",
        ],
        links: [
          { label: "Live Demo", url: "https://you-tube-clone-ten-gamma.vercel.app/" },
          {
            label: "Frontend Repo",
            url: "https://github.com/RohitPanwar46/YouTube-Clone",
          },
          {
            label: "Backend Repo",
            url: "https://github.com/RohitPanwar46/Project-youtube-backend",
          },
        ],
      },
      {
        title: "SmartCatalog AI",
        icon: "✨",
        description:
          "An AI-powered commerce assistant that automates product catalog creation and customer support.",
        highlights: [
          "Generates categories, subcategories, SEO and sustainability tags as structured JSON using Gemini",
          "Support chatbot with order status lookup and refund escalation detection",
          "Logs AI prompts and conversations in MongoDB",
        ],
        technologies: ["Next.js", "Tailwind CSS", "MongoDB Atlas", "Gemini API", "Vercel"],
        links: [
          {
            label: "Live Demo",
            url: "https://smart-catalog-ai-ai-powered-commerc.vercel.app/",
          },
          {
            label: "GitHub",
            url: "https://github.com/RohitPanwar46/SmartCatalog-AI-AI-Powered-Commerce-Assistant",
          },
        ],
      },
    ],
  },
  {
    title: "Machine Learning",
    subtitle: "Computer vision, audio deep learning and recommender systems.",
    projects: [
      {
        title: "FaceReg: Real-Time Face Recognition",
        icon: "👤",
        description:
          "Identifies people from a live camera feed, matching multiple faces at once with confidence scores, running on free-tier infrastructure.",
        highlights: [
          "InsightFace (ArcFace) turns each face into a 512-dimensional embedding, matched using cosine similarity",
          "Live recognition over WebSockets with backpressure, so the video overlay never lags",
          "Embeddings cached in memory as one NumPy matrix, so matching needs no database calls",
          "Model and input size tuned to fit a 512MB RAM host",
        ],
        technologies: [
          "Python",
          "FastAPI",
          "WebSockets",
          "InsightFace",
          "OpenCV",
          "NumPy",
          "MongoDB",
          "Next.js",
        ],
        links: [
          {
            label: "Live Demo",
            url: "https://face-recognition-system-by-rohit.vercel.app/",
          },
          {
            label: "Frontend Repo",
            url: "https://github.com/RohitPanwar46/face-recognition-system-frontend",
          },
          {
            label: "Backend Repo",
            url: "https://github.com/RohitPanwar46/face-recognition-system-backend",
          },
        ],
      },
      {
        title: "Voice Command Recognition",
        icon: "🎙️",
        description:
          "A 2D CNN built from scratch that recognizes spoken commands from live microphone audio, shipped as a full-stack app.",
        highlights: [
          "Fixed overfitting with L2 regularization, SpatialDropout2D and SpecAugment-style augmentation",
          "Command, Unknown and Silence classes, balanced to fix poor recall on rare words",
          "Real-time voice activity detection with noise calibration and pre-buffering",
          "Accent-diverse data from the Multilingual Spoken Words Corpus to close the domain gap",
        ],
        technologies: [
          "Python",
          "TensorFlow",
          "FastAPI",
          "Docker",
          "Next.js",
          "Render",
          "Vercel",
        ],
        links: [
          {
            label: "Live Demo",
            url: "https://voice-command-recognition-system.vercel.app/",
          },
          {
            label: "Frontend Repo",
            url: "https://github.com/RohitPanwar46/voice-command-recognition-frontend",
          },
          {
            label: "Backend Repo",
            url: "https://github.com/RohitPanwar46/voice-command-recognition-backend",
          },
        ],
      },
      {
        title: "Hybrid Movie Recommender",
        icon: "🍿",
        description:
          "A recommendation engine combining user-based and item-based collaborative filtering with content-based TF-IDF filtering.",
        highlights: [
          "Trained on MovieLens: 9,742 movies, 100,836 ratings and 610 users",
          "Final ranking blends model scores (60%), popularity (20%) and recency (20%)",
          "Flask REST API with separate home page and movie page recommendations",
        ],
        technologies: ["Python", "Scikit-learn", "Pandas", "TF-IDF", "Cosine Similarity", "Flask"],
        links: [
          {
            label: "GitHub",
            url: "https://github.com/RohitPanwar46/hybrid-movie-recommender-system",
          },
        ],
      },
    ],
  },
];

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 text-[#03045e] pt-28 pb-10 px-5">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-indigo-900">My Projects</h1>
          <p className="text-lg text-indigo-600 max-w-2xl mx-auto">
            Selected work across full-stack development and machine learning.
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-20">
          {projectSections.map((section) => (
            <section key={section.title}>
              <div className="mb-8 text-center md:text-left">
                <h2 className="text-3xl font-bold text-indigo-800">{section.title}</h2>
                <p className="text-indigo-600 mt-2">{section.subtitle}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {section.projects.map((project, index) => (
                  <div
                    key={project.title}
                    className={`bg-white rounded-xl shadow-lg overflow-hidden flex flex-col transition-all duration-500 border border-indigo-100 hover:shadow-xl hover:-translate-y-2 ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="h-32 bg-gradient-to-r from-indigo-100 to-blue-100 flex items-center justify-center">
                      <div className="text-5xl">{project.icon}</div>
                    </div>

                    <div className="p-6 flex flex-col flex-1">
                      <h3 className="text-2xl font-semibold mb-3 text-indigo-900">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 mb-4">{project.description}</p>

                      {project.highlights && project.highlights.length > 0 && (
                        <ul className="mb-5 space-y-2 text-sm text-gray-700">
                          {project.highlights.map((item) => (
                            <li key={item} className="flex items-start">
                              <span className="text-indigo-500 mr-2">▹</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-indigo-100 text-indigo-700 text-xs rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {project.links && project.links.length > 0 && (
                        <div className="mt-auto flex flex-wrap gap-3">
                          {project.links.map((link, i) => (
                            <a
                              key={link.label}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={
                                i === 0
                                  ? "flex-1 text-center bg-gradient-to-r from-yellow-200 to-amber-200 hover:from-amber-200 hover:to-yellow-200 text-amber-900 text-sm font-medium py-2 px-4 rounded-lg border border-amber-300 shadow-md hover:shadow-lg transition-all duration-300"
                                  : "flex-1 text-center bg-white hover:bg-indigo-50 text-indigo-700 text-sm font-medium py-2 px-4 rounded-lg border border-indigo-200 transition-all duration-300"
                              }
                            >
                              {link.label}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Call to action section */}
        <div
          className={`max-w-4xl mx-auto mt-20 p-8 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-2xl border border-indigo-100 text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-indigo-900">
            Interested in working together?
          </h2>
          <p className="text-lg text-indigo-600 mb-6">
            I&apos;m always open to discussing new projects and opportunities.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105"
          >
            <span>Get in touch</span>
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
    </>
  );
}