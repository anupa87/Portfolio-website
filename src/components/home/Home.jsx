import React from "react";

import "./home.css";

import ME from "../../assets/me.JPG";
import CV from "../../assets/ANUPA_THAPA_Resume.pdf";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaArrowCircleDown } from "react-icons/fa";

const Home = () => {
  return (
    <section className=" home__container">
      <div className="image__container">
        <img src={ME} alt="About" />
      </div>

      <div className="info__container">
        <h1>Anupa Thapa</h1>
        <div className="home-socials">
          <a href="mailto:thapaanupa@gmail.com">
            <MdEmail />
          </a>
          <a
            href="https://www.linkedin.com/in/anupathapa/"
            target="_blank"
            rel="noreferrer"
          >
            <BsLinkedin />
          </a>
          <a href="https://github.com/anupa87" target="_blank" rel="noreferrer">
            <BsGithub />
          </a>
        </div>
        <p>
          <strong>A Full-Stack Web Developer,</strong> passionate about creating
          interactive applications and eager to continually expand skillset by
          exploring new technologies.
        </p>
        <div className="cta">
          <a href={CV} download className="btn btn-primary">
            Resume
          </a>
        </div>
      </div>

      <div className="scroll__down">
        <a href="#contact">
          <FaArrowCircleDown />
        </a>
      </div>
    </section>
  );
};

export default Home;
