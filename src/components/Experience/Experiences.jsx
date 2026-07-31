import React from "react";

const data = [
  {
    company: "Future Vision for Computer System and Network",
    position: "Full Stack Developer",
    location: "Abu Dhabi, UAE",
    duration: "Jun 2025 – Present",
    description:
      "Developing and maintaining full-stack web applications using Next.js, Node.js, Express.js, and TypeScript. Building scalable REST APIs, integrating SQL and MongoDB databases, and customizing WordPress websites based on business requirements. Additionally, providing email infrastructure support by managing business email services, domain registration and renewals, creating and maintaining domain-based email accounts, administering Zimbra Mail Server, configuring Microsoft Outlook clients, and handling email relay, routing, and DNS records (MX, SPF, DKIM, and DMARC) to ensure secure and reliable email delivery.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "SQL",
      "WordPress",
      "REST API",
      "Zimbra",
      "Microsoft Outlook",
      "DNS",
    ],
  },
  {
    company: "Adam Technologies LLC",
    position: "MERN Stack Developer",
    location: "Dubai, UAE (India Back Office)",
    duration: "Feb 2022 – Jun 2025",
    description:
      "Worked remotely from the company's India back office for a Dubai-based software company. Developed and deployed scalable full-stack web applications using the MERN stack, integrated third-party APIs and payment gateways, optimized application performance, and collaborated with mobile developers, UI/UX designers, and QA teams to deliver production-ready solutions.",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Stripe",
      "Twilio",
      "JWT",
      "AWS",
    ],
  },
  {
    company: "Brototype",
    position: "MERN Stack Developer Intern",
    location: "Kerala, India",
    duration: "Jan 2021 – Dec 2021",
    description:
      "Completed an intensive MERN Stack training program and built multiple full-stack projects. Gained hands-on experience in frontend and backend development, REST APIs, authentication, database design, Git version control, and problem-solving through Data Structures and Algorithms.",
    technologies: [
      "React.js",
      "Redux Toolkit",
      "Node.js",
      "Express.js",
      "MongoDB",
      "PostgreSQL",
      "Firebase",
      "Git",
      "Data Structures & Algorithms",
    ],
  },
];


const Experiences = () => {
  return (
    <>
      {data.map((exp, idx) => (
        <div className="experience_experience__USIwr" key={idx}>
          <div className="experience_heading__LeH28">
            <div style={{ position: "relative", width: "fit-content", overflow: "hidden" }}>
              <div className="content">
                <span className="experience_title__hai7S">{exp.company}</span>
              </div>
              <div className="overlay" />
            </div>
            <div style={{ position: "relative", width: "fit-content", overflow: "hidden" }}>
              <div className="content">
                <span>{exp.duration}</span>
              </div>
              <div className="overlay" />
            </div>
          </div>

          <div className="experience_heading__LeH28">
            <div style={{ position: "relative", width: "fit-content", overflow: "hidden" }}>
              <div className="content">
                <span className="experience_position__E06bW">{exp.position}</span>
              </div>
              <div className="overlay" />
            </div>
            <div style={{ position: "relative", width: "fit-content", overflow: "hidden" }}>
              <div className="content">
                <span>{exp.location}</span>
              </div>
              <div className="overlay" />
            </div>
          </div>

          <div style={{ position: "relative", width: "fit-content", overflow: "hidden" }}>
            <div className="content">
              <p className="experience_description__iz3mi">{exp.description}</p>
            </div>
            <div className="overlay" />
          </div>

          <div style={{ position: "relative", width: "fit-content", overflow: "hidden" }}>
            <div className="content">
              <div className="experience_tech__jTuus">
                {exp.technologies.map((tech, i) => (
                  <span className="chip" key={i}>{tech}</span>
                ))}
              </div>
            </div>
            <div className="overlay" />
          </div>
        </div>
      ))}
    </>
  );
};

export default Experiences;



