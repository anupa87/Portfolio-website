import React from "react";
import "./projects.css";
import IMG2 from "../../assets/speedGame.jpeg";
import IMG3 from "../../assets/countryApp.jpg";

const data = [
  {
    id: 1,
    image: IMG2,
    title: "Speed Game",
    technologies: " ",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    github: "https://github.com/anupa87/SpeedGame_React",
    demo: "https://speedgame-at.netlify.app/",
  },
  {
    id: 2,
    image: IMG3,
    title: "Country App",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    github: "https://github.com/anupa87/Country_App",
    demo: "https://country-app-kappa.vercel.app/",
  },
];

const Projects = () => {
  return (
    <section>
      <h2>-- projects highlight --</h2>
      <div className="container projects__container">
        <div className="projects-grid">
          {data.map(
            ({ id, image, title, technologies, about, github, demo }) => {
              return (
                <div key={id} className="project-card">
                  <div className="project-card-image">
                    <img src={image} alt="country app" />
                  </div>

                  <div className="project-card-about">
                    <h3>{title}</h3>
                    <p>Technologies: {technologies}</p>
                    <p>Use: {about}</p>
                    <div className="project__item-cta">
                      <a
                        href={github}
                        className="btn project__item-cta-btn "
                        target="_blank"
                      >
                        View Code
                      </a>
                      <a
                        href={demo}
                        className="btn btn-primary"
                        target="_blank"
                      >
                        Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
