import React from "react";

export default function About() {
  return (
    <div className="min-h-screen text-[#03045e] py-10 px-5">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
        <h1 className="text-4xl font-bold mb-6">About Me</h1>
        <div className="w-full  p-8 rounded-lg shadow-lg">
          <p className="text-lg leading-relaxed text-[#03045e] mb-4">
            Hi, I&apos;m a passionate and skilled **Web Developer** with expertise in
            C, Python, JavaScript, HTML, CSS, and full-stack development. I also work with modern frameworks like **Next.js** and have experience in creating interactive and responsive web applications.
          </p>

          <p className="text-lg leading-relaxed text-[#03045e] mb-4">
            Currently, I am exploring **AI** technologies and integrating AI features into websites to enhance user experience. My goal is to stay updated on cutting-edge trends in technology and deliver impactful solutions for my clients.
          </p>

          <p className="text-lg leading-relaxed text-[#03045e]">
            I also focus on honing my **communication skills** to provide seamless collaboration with clients and team members. As a freelancer, I strive to deliver high-quality projects tailored to the client&apos;s vision.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">My Vision</h2>
          <p className="text-lg leading-relaxed text-[#03045e]">
            To empower businesses and individuals with technology-driven solutions that bridge innovation and functionality. I aim to create digital experiences that leave a lasting impact.
          </p>
        </div>

        <div className="mt-8">
          <a
            href="/projects"
            className="px-6 py-3 bg-[#fcf6a9] md:bg-[#f6ee83] text-[#474306] border border-[#474306] rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            Check My Projects
          </a>
        </div>
      </div>
    </div>
  );
}

export const metadata = {
  title: "About | Rohit Panwar",
  description: "I am Rohit This is my portfolio website",
};