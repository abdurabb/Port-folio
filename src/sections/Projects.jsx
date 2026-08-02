import React, { useState } from "react";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import Modal from "../components/Modal/Modal";
import ecommerce from '../assets/Ecommerce.png'
// import community from '../assets/Guide-Community.png'
import livera from '../assets/livera.png'
import clinic from '../assets/clinic.png'
import education from '../assets/education.png'
import findzzy from '../assets/findzzy.png'
import employme from '../assets/employme.png'
import curtain from '../assets/curtain.jpeg'
import vengconsult from '../assets/vengconsult.png'
import alharbi from '../assets/alharbi.png'
import smLawyer from '../assets/smLawyer.png'
import visionaryVantage from '../assets/visionaryVantage.png'

const projects = [
  {
    name: "VENG Consult – Enterprise Management Platform",
    imageSrc: vengconsult, // replace with actual import
    liveProjectLink: "https://vengconsult.ae/",
    techStack:
      "React.js - Redux Toolkit - Tailwind CSS - REST API - JWT",
    description:
      "A centralized enterprise management platform that helps organizations manage employees, projects, site visits, documents, and daily operations through role-based dashboards.",
    features: [
      "➔ Developed responsive React dashboards for users, administrators, and companies with role-based access control.",
      "➔ Built modules for employee management, project tracking, site visits, document management, and company operations by integrating REST APIs.",
      "➔ Collaborated closely with the backend team to deliver a scalable, intuitive, and high-performance enterprise management system.",
    ],
  },
  {
    name: "Livera Community – Mobile App Platform",
    imageSrc: livera, // replace with actual import
    // githubLink: "https://github.com/abdurabb/livera-community", // if available
    liveProjectLink: "https://www.liveraapp.com/",
    techStack:
      "React.js - Node.js - MongoDB - Express.js - Socket.io - JWT - Tailwind CSS",
    description:
      "A large-scale community platform enabling ads, business tools, and community engagement features.",
    features: [
      "➔ Developed scalable backend APIs for user management, community features, and business modules.",
      "➔ Built the React-based admin panel for managing users, content, and platform operations.",
      "➔ Collaborated closely with the mobile development team to integrate APIs and ensure a seamless, high-performance user experience.",
    ],
  },
  {
    name: "Findzzy – Photographer Discovery & Booking App",
    imageSrc: findzzy, // import your project screenshot
    // githubLink: "", // private project
    liveProjectLink: "https://www.findzzy.com/",
    techStack:
      "React.js - Node.js - Express.js - MongoDB - Flutter - JWT - REST API - Firebase - Cloud Storage",
    description:
      "A photographer marketplace platform for India that connects customers with professional photographers through an intuitive web and mobile experience.",
    features: [
      "➔ Built scalable backend APIs for photographer profiles, portfolios, bookings, and user management.",
      "➔ Developed secure authentication, profile management, and booking workflows for customers and photographers.",
      "➔ Collaborated with the Flutter mobile team to deliver a seamless cross-platform experience and optimized APIs for performance.",
    ],
  },
  {
    name: "Al Harbi Lawyer – Corporate Law Firm Website",
    imageSrc: alharbi, // replace with actual import
    liveProjectLink: "https://alharbilawyer.ae/",
    techStack: "HTML5 - CSS3 - JavaScript - Bootstrap",
    description:
      "A responsive corporate website developed for a UAE-based law firm to showcase legal services, practice areas, company information, and contact details with a modern and professional user experience.",
    features: [
      "➔ Developed a fully responsive, cross-browser compatible website using HTML5, CSS3, and JavaScript.",
      "➔ Built interactive pages for practice areas, legal services, about, and contact sections with a clean and professional UI.",
      "➔ Optimized the website for performance, mobile responsiveness, and seamless user navigation.",
    ],
  },
  {
    name: "SMA Legal Consultancy – Corporate Law Firm Website",
    imageSrc: smLawyer, // replace with actual import
    liveProjectLink: "https://sm-lawyer.com/",
    techStack:
      "WordPress - Elementor - HTML5 - CSS3 - JavaScript",
    description:
      "A bilingual corporate website developed in WordPress for a UAE-based legal consultancy, showcasing the firm's legal services, practice areas, team, and contact information with a modern, responsive design.", // :contentReference[oaicite:0]{index=0}
    features: [
      "➔ Developed a fully responsive WordPress website with custom layouts and reusable components using Elementor.",
      "➔ Built pages for legal practice areas, attorney profiles, blogs, and contact forms with a professional user experience.",
      "➔ Optimized website performance, mobile responsiveness, and SEO while delivering the project for the client through Future Vision.",
    ],
  },
  {
    name: "Visionary Vantage – Corporate Website",
    imageSrc: visionaryVantage, // replace with actual import
    liveProjectLink: "https://visionaryvantage.ae/",
    techStack:
      "WordPress - Elementor - HTML5 - CSS3 - JavaScript",
    description:
      "A professional WordPress-based corporate website developed to establish the client's online presence with a modern design, responsive layouts, and easy content management.",
    features: [
      "➔ Developed a responsive WordPress website with custom page layouts and reusable design components.",
      "➔ Created and optimized website sections including company information, services, and contact pages.",
      "➔ Customized WordPress themes, improved UI responsiveness, and delivered a user-friendly experience across devices.",
    ],
  },
  {
    name: "Plus Care – Booking App",
    imageSrc: clinic, // replace with actual import
    // githubLink: "https://github.com/abdurabb/plus-care-server", // if available
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
    name: "Nextis Market – E-commerce Platform",
    imageSrc: ecommerce, // replace with actual import
    // githubLink: "https://github.com/abdurabb/pulimart",
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
    // githubLink: "https://github.com/abdurabb/edu-nexis", // if not published, remove
    // liveProjectLink: "https://education.owpmf.tech/",
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
    name: "Adam Curtains – E-commerce Platform",
    imageSrc: curtain, // replace with actual import
    // githubLink: "https://github.com/abdurabb/adam-curtains", // if available
    // liveProjectLink: "https://www.adamcurtains.com/",
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
    // githubLink: "https://github.com/abdurabb/EMPLOYME",
    // liveProjectLink: "", // add link if deployed
    techStack:
      "React.js - Node.js - Express.js - MongoDB - Redux - JWT - Stripe - Socket.io",
    description:
      "A full-stack job search platform connecting job seekers and employers with role-based dashboards, real-time communication, and subscription features.",
    features: [
      "➔ Developed scalable backend APIs using Node.js, Express.js, and MongoDB for authentication, jobs, applications, and user management.",
      "➔ Built React interfaces for user, company, and admin dashboards with Redux for efficient state management.",
      "➔ Implemented real-time chat using Socket.io and integrated Stripe for subscription-based premium features.",
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
