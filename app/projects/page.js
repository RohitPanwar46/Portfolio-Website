"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../component/Navbar";

const projects = [
  {
    title: "YouTube Clone",
    description: "A fully functional YouTube clone",
    link: "https://netfix-home-page-ui-clone-drzayjp21-rohits-projects-bfb999cc.vercel.app/",
    technologies: ["JavaScript", "NextJs", "NodeJs", "ExpressJs", "MongoDb", "Cloudinary", "Vercel", "Render", "Tailwind CSS"],
    icon: "🎬"
  },
  {
    title: "Get Me A Chai",
    description: "NextJs framework, Tailwind CSS, MongoDB Atlas, Razorpay integration, Auth.js for GitHub login",
    link: "https://get-me-a-chai-two-steel.vercel.app/",
    technologies: ["Next.js", "Tailwind", "MongoDB", "Razorpay", "Auth.js"],
    icon: "☕"
  },
  {
    title: "Password Manager",
    description: "Secure password manager with React, Tailwind CSS, and local storage",
    link: "https://password-manager-pi-liart.vercel.app/",
    technologies: ["React", "Tailwind", "LocalStorage"],
    icon: "🔒"
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
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-indigo-900">My Projects</h1>
          <p className="text-lg text-indigo-600 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and expertise in web development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-500 border border-indigo-100 hover:shadow-xl hover:-translate-y-2 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="h-48 bg-gradient-to-r from-indigo-100 to-blue-100 flex items-center justify-center relative overflow-hidden">
                <div className="text-5xl text-indigo-300 z-10">
                  {project.icon}
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-200/30 to-blue-200/30 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-3 text-indigo-900">{project.title}</h2>
                <p className="text-gray-600 mb-5">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 bg-indigo-100 text-indigo-700 text-sm rounded-full transition-all hover:bg-indigo-200 hover:scale-105"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full bg-gradient-to-r from-yellow-200 to-amber-200 hover:from-amber-200 hover:to-yellow-200 text-amber-900 font-medium py-3 px-4 rounded-lg border border-amber-300 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <span className="mr-2">View Project</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action section */}
        <div className={`max-w-4xl mx-auto mt-20 p-8 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-2xl border border-indigo-100 text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-indigo-900">Interested in working together?</h2>
          <p className="text-lg text-indigo-600 mb-6">
            I&apos;m always open to discussing new projects and opportunities.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105"
          >
            <span>Get in touch</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>

      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        
        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }
        
        .hover-pulse:hover {
          animation: pulse 0.5s ease-in-out;
        }
        
        .project-card {
          opacity: 0;
        }
        
        .project-card.visible {
          animation: fadeInUp 0.6s ease-out forwards;
        }
      `}</style>
    </>
  );
}