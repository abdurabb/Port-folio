import React from "react";

const data = [
  {
    company: "Adam Technologies LLC",
    position: "MERN Stack Developer",
    location: "Dubai",
    duration: "2022 – 2025",
    description:
      "Built and deployed full-stack apps using React and Node.js. Integrated APIs, optimized performance, and collaborated with mobile and UI teams.",
    technologies: [
      "ReactJS",
      "NodeJS",
      "ExpressJS",
      "MongoDB",
      "Stripe",
      "Twilio",
      "JWT",
      "AWS",
    ],
  },
  // {
  //   company: "Brototype",
  //   position: "MERN Stack Developer Intern",
  //   location: "Kerala",
  //   duration: "DEC 2022 - NOV 2023",
  //   description:
  //     "Learned Full Stack Web Development using MERN Stack and developed multiple projects.",
  //   technologies: [
  //     "NodeJS",
  //     "ExpressJS",
  //     "ReactJS",
  //     "Redux-Toolkit",
  //     "GitTool",
  //     "Data Structures & Algorithms",
  //     "MongoDB",
  //     "postgreSQL",
  //     "Firebase",
  //   ],
  // },
  
  
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



