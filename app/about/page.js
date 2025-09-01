"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../component/Navbar";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skills = [
    { name: "Next.js", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "JavaScript", level: 85 },
    { name: "Express.js", level: 80 },
    { name: "React", level: 80 },
    { name:"Rest api", level: 80 },
    { name: "Tailwind CSS", level: 85 },
    { name: "MongoDB", level: 75 },
    { name: "HTML/CSS", level: 80 },
    { name: "Cloudinary", level: 80 },
    { name: "Figma", level: 70 },
    { name: "Python", level: 70 },
    { name: "Canvas", level: 65 },
    { name: "C Programming", level: 70 },
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 text-[#03045e] pt-28 pb-10 px-5">
        {/* Header Section */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-indigo-900">About Me</h1>
          <p className="text-lg text-indigo-600 max-w-2xl mx-auto">
            Get to know more about my skills, experience, and passion for web development
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Introduction Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
              <h2 className="text-3xl font-bold mb-6 text-indigo-800">Who I Am</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                I&apos;m a passionate web developer with expertise in modern web technologies. I love creating 
                interactive, user-friendly websites and applications that solve real-world problems.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                My journey in web development started several years ago, and since then I&apos;ve been constantly 
                learning and adapting to new technologies and methodologies.
              </p>
              <p className="text-gray-700 leading-relaxed">
                When I&apos;m not coding, you can find me exploring new technologies, contributing to open source, 
                or sharing my knowledge with the developer community.
              </p>
            </div>
            
            <div className={`flex justify-center items-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
              <div className="relative">
                <div className="w-64 h-64 bg-gradient-to-r from-indigo-200 to-blue-200 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-6xl">👨‍💻</span>
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-amber-200 rounded-full opacity-80 animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-indigo-200 rounded-full opacity-80 animate-pulse" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-10 text-center text-indigo-800">My Skills</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {skills.map((skill, index) => (
                <div 
                  key={index}
                  className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-indigo-700">{skill.name}</span>
                    <span className="text-sm text-indigo-600">{skill.level}%</span>
                  </div>
                  <div className="h-3 bg-indigo-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-indigo-400 to-blue-400 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: isVisible ? `${skill.level}%` : '0%' }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience & Education */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-indigo-800">Experience</h2>
              
              <div className="space-y-8">
                <div className={`p-6 bg-white rounded-xl shadow-md border border-indigo-100 transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
                  <div className="flex items-start">
                    <div className="bg-indigo-100 p-3 rounded-lg mr-4">
                      <span className="text-2xl">💼</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-indigo-900">Web Developer</h3>
                      <p className="text-indigo-600 mb-2">Freelance • 2025 - Present</p>
                      <p className="text-gray-700">Developed responsive websites and web applications for various clients using modern technologies.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-6 text-indigo-800">Education</h2>
              
              <div className="space-y-8">
                <div className={`p-6 bg-white rounded-xl shadow-md border border-indigo-100 transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-lg mr-4">
                      <span className="text-2xl">🎓</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-indigo-900">Bachelor of Computer Applications</h3>
                      <p className="text-indigo-600 mb-2">Manipal University Jaipur • 2025 - 2028</p>
                      <p className="text-gray-700">Focused on software development, algorithms, and web technologies.</p>
                    </div>
                  </div>
                </div>
                
                <div className={`p-6 bg-white rounded-xl shadow-md border border-indigo-100 transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`} style={{ transitionDelay: '200ms' }}>
                  <div className="flex items-start">
                    <div className="bg-green-100 p-3 rounded-lg mr-4">
                      <span className="text-2xl">📚</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-indigo-900">12th Grade</h3>
                      <p className="text-indigo-600 mb-2">High School • 2024</p>
                      <p className="text-gray-700">I completed 12th in PCM(Physics, Chemistry, Maths) with 74.6%.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className={`text-center p-8 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-2xl border border-indigo-100 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-indigo-900">Let&apos;s Work Together!</h2>
            <p className="text-lg text-indigo-600 mb-6 max-w-2xl mx-auto">
              I&apos;m always interested in new challenges and opportunities to grow as a developer.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105"
            >
              <span>Get in Touch</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
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
      `}</style>
    </>
  );
}