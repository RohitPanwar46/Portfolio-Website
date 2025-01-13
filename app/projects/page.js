import React from "react";

const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio showcasing my skills and projects.",
    link: "https://rohit-portfolio-websie-mu.vercel.app/",
  },
  {
    title: "E-Commerce Store",
    description: "A fully functional e-commerce platform.",
    link: "https://rohit-portfolio-websie-mu.vercel.app/",
  },
  {
    title: "Weather App",
    description: "A simple weather forecasting app using OpenWeather API.",
    link: "https://rohit-portfolio-websie-mu.vercel.app/",
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen bg- text-[#03045e] py-10 px-5">
      <h1 className="text-4xl font-bold text-center mb-8">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="p-5 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <h2 className="text-2xl font-semibold mb-3">{project.title}</h2>
            <p className="text-gray-400 mb-5">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="shadow-lg hover:shadow-xl transition-shadow bg-[#fcf6a9] md:bg-[#f6ee83] text-[#474306] px-4 py-2 rounded-[5px]  border border-[#474306]"
            >
              Visit Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export const metadata = {
  title: "Projects | Rohit Panwar",
  description: "I am Rohit This is my portfolio website",
};