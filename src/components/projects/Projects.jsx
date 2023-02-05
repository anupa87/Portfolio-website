import React from "react";
import "./projects.css";
import IMG2 from "../../assets/speedGame.jpeg";
import IMG3 from "../../assets/countryApp.jpg";

const data = [
  {
    id: 1,
    image: IMG2,
    title: "Speed Game",
    technologies: "React, JavaScript, HTML, CSS ",
    about:
      "It is a simple game where you have to target a dart to the active board . The speed of the game increases with time. You can choose difficulty levels which changes the number of dart board. Enjoy playing :)",
    github: "https://github.com/anupa87/SpeedGame_React",
    demo: "https://speedgame-at.netlify.app/",
  },
  {
    id: 2,
    image: IMG3,
    title: "Country App",
    technologies: "React, Redux, Bootstrap, localstorage",
    about:
      "This app uses REST Countries API and Open Weather API. It can be used to search countries, get some information including weather information and also save your favourite countries.",
    github: "https://github.com/anupa87/Country_App",
    demo: "https://country-app-kappa.vercel.app/",
  },
];

const Projects = () => {
  return (
    <section id="projects">
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
