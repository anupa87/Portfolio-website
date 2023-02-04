import React from "react";

import "./skills.css";

import HTML from "../../assets/icons8-html-5-48.png";
import CSS from "../../assets/icons8-css3-48.png";
import JavaScript from "../../assets/icons8-javascript-48.png";
import react from "../../assets/icons8-react-40.png";
import Redux from "../../assets/icons8-redux-48.png";
import PHP from "../../assets/icons8-php-logo-40.png";
import Symfony from "../../assets/icons8-symfony-40.png";
import Drupal from "../../assets/icons8-drupal-40.png";
import Figma from "../../assets/icons8-figma-40.png";
import AdobeXD from "../../assets/icons8-adobe-xd-40.png";
import Docker from "../../assets/icons8-docker-40.png";
import GitHub from "../../assets/icons8-github-40.png";
import API from "../../assets/icons8-api-48.png";
import AWS from "../../assets/icons8-amazon-web-services-48.png";

const Skills = () => {
  return (
    <section>
      <h2> --- my skills ---</h2>
      <div className="container skills__container">
        <ul className="skills-grid">
          <li>
            <div className="skill-card">
              <img src={HTML} alt="html icon" />
              <p>HTM5</p>
            </div>
          </li>
          <li>
            <div className="skill-card">
              <img src={CSS} alt="CSS icon" />
              <p>CSS3</p>
            </div>
          </li>
          <li>
            <div className="skill-card">
              <img src={JavaScript} alt="CSS icon" />
              <p>JavaScript</p>
            </div>
          </li>
          <li>
            <div className="skill-card">
              <img src={react} alt="CSS icon" />
              <p>React</p>
            </div>
          </li>
          <li>
            <div className="skill-card">
              <img src={Redux} alt="CSS icon" />
              <p>Redux</p>
            </div>
          </li>
          <li>
            <div className="skill-card">
              <img src={API} alt="CSS icon" />
              <p>REST API</p>
            </div>
          </li>
          <li>
            <div className="skill-card">
              <img src={PHP} alt="CSS icon" />
              <p>PHP</p>
            </div>
          </li>

          <li>
            <div className="skill-card">
              <img src={Symfony} alt="Redux icon" />
              <p>Symfony</p>
            </div>
          </li>
          <li>
            <div className="skill-card">
              <img src={Drupal} alt="CSS icon" />
              <p>Drupal</p>
            </div>
          </li>
          <li>
            <div className="skill-card">
              <img src={Docker} alt="Redux icon" />
              <p>Docker</p>
            </div>
          </li>
          <li>
            <div className="skill-card">
              <img src={GitHub} alt="Redux icon" />
              <p>GitHub</p>
            </div>
          </li>
          <li>
            <div className="skill-card">
              <img src={Figma} alt="Redux icon" />
              <p>Figma</p>
            </div>
          </li>
          <li>
            <div className="skill-card">
              <img src={AdobeXD} alt="Redux icon" />
              <p>Adobe XD </p>
            </div>
          </li>
          <li>
            <div className="skill-card">
              <img src={AWS} alt="Redux icon" />
              <p>AWS </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Skills;
