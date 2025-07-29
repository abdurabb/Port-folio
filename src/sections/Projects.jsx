import React, { useState } from "react";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import Modal from "../components/Modal/Modal";
import ecommerce from '../assets/Ecommerce.png'
import community from '../assets/Guide-Community.png'
import livera from '../assets/livera.png'
import clinic from '../assets/clinic.png'
import education from '../assets/education.png'
import employme from '../assets/employme.png'
import curtain from '../assets/curtain.jpeg'

const projects = [
  {
    name: "Nextis Market – E-commerce Platform",
    imageSrc: ecommerce, // replace with actual import
    githubLink: "https://github.com/abdurabb/pulimart",
    liveProjectLink: "https://nexis-market-panel.vercel.app/",
    techStack:
      "React.js - Node.js - Express.js - MongoDB - JWT - Twilio - Swagger - REST API - Tailwind CSS",
    description:
      "A scalable multi-vendor e-commerce platform with secure authentication, vendor and order management.",
    features: [
      "➔ Built product, order, and vendor modules with secure JWT authentication.",
      "➔ Integrated Twilio for OTP verification and implemented detailed Swagger API documentation.",
      "➔ Collaborated with mobile team and optimized backend for scalability.",
    ],
  },
  {
    name: "EduNexis – Education Platform",
    imageSrc: education, // replace with actual import
    githubLink: "https://github.com/abdurabb/edu-nexis", // if not published, remove
    liveProjectLink: "https://education.owpmf.tech/",
    techStack:
      "React.js - Node.js - Express.js - MongoDB - JWT - REST API - Figma - Flutter",
    description:
      "An education platform offering course management, enrollment, and secure payments across web and mobile.",
    features: [
      "➔ Developed backend APIs for course handling and payments.",
      "➔ Integrated with React frontend and Flutter mobile app.",
      "➔ Led API development and ensured performance and maintainability.",
    ],
  },
  {
    name: "Livera Community – Mobile App Platform",
    imageSrc: livera, // replace with actual import
    githubLink: "https://github.com/abdurabb/livera-community", // if available
    liveProjectLink: "https://www.liveraapp.com/",
    techStack:
      "React.js - Node.js - MongoDB - Express.js - Socket.io - JWT - Tailwind CSS",
    description:
      "A large-scale community platform enabling ads, business tools, and community engagement features.",
    features: [
      "➔ Built admin panel with React for managing users and content.",
      "➔ Developed modules for user chat and team onboarding.",
      "➔ Worked closely with mobile teams to ensure scalable backend.",
    ],
  },
  {
    name: "Plus Care – Booking App",
    imageSrc: clinic, // replace with actual import
    githubLink: "https://github.com/abdurabb/plus-care-server", // if available
    liveProjectLink: "https://plus-care-user-web.vercel.app/",
    techStack:
      "React.js - Node.js - Express.js - MongoDB - Razorpay - JWT - Tailwind CSS",
    description:
      "A booking app for healthcare services including doctors, labs, and pharmacies.",
    features: [
      "➔ Built backend APIs for doctor search, lab tests, and pharmacy orders.",
      "➔ Created admin panel for managing users and appointments.",
      "➔ Integrated Razorpay for secure payment handling.",
    ],
  },
  {
    name: "Adam Curtains – E-commerce Platform",
    imageSrc: curtain, // replace with actual import
    githubLink: "https://github.com/abdurabb/adam-curtains", // if available
    liveProjectLink: "https://www.adamcurtains.com/",
    techStack:
      "React.js - Node.js - Express.js - MongoDB - Stripe - PayPal - JWT",
    description:
      "An e-commerce platform for curtain orders with role-based panels for admin, staff, and users.",
    features: [
      "➔ Developed full-stack user, admin, and staff panels.",
      "➔ Integrated Stripe and PayPal for payments.",
      "➔ Created support and content tools for admin dashboard.",
    ],
  },
  {
    name: "EMPLOYME – Job Searching Platform",
    imageSrc: employme, // replace with actual import
    githubLink: "https://github.com/abdurabb/EMPLOYME",
    liveProjectLink: "", // add link if deployed
    techStack:
      "React.js - Node.js - Express.js - MongoDB - Redux - JWT - Stripe - Socket.io",
    description:
      "A job search platform with real-time chat, subscriptions, and employer dashboards.",
    features: [
      "➔ Built chat system using Socket.io and subscription payments with Stripe.",
      "➔ Developed both candidate and employer views using Redux-managed React UI.",
      "➔ Deployed frontend and backend using Render and Vercel.",
    ],
  },
];
;

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <>
      <section className="section-wrapper" id="projects">
        <div
          className="header_sectionHeader__aMRKR"
          style={{ flexDirection: "row" }}
        >
          <div className="header_line__AkXvu" />
          <h3>
            <div
              style={{
                position: "relative",
                width: "fit-content",
                overflow: "hidden",
              }}
            >
              <div className="content">
                <span className="header_title__V2_hm">
                  Projects<span>.</span>
                </span>
              </div>
              <div className="overlay"></div>
            </div>
          </h3>
        </div>
        <div className="projects_projects__y7TVk">
          {projects.map((project, index) => (
            <div key={index}>
              <ProjectCard
                project={project}
                onLearnMore={() => openModal(project)}
              />
            </div>
          ))}
        </div>
      </section>
      {selectedProject && (
        <Modal project={selectedProject} onClose={closeModal} />
      )}
    </>
  );
};

export default Projects;
