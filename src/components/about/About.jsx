import React from "react";

import "./about.css";

const About = () => {
  return (
    <section id="about">
      <h2>hi, I am a dream catcher!</h2>
      <div className="about__container">
        <p>
          <quote>
            "The future belongs to those who believe in the beauty of their
            dreams."- Eleanor Roosevelt
          </quote>
          <br />
          <br />
          I dream and dare to challenge myself about pursing those dreams to
          life. <br />
          As an enthusiastic developer, I continuosly explore ideas and
          solutions from all sources within and beyond internet.
          <br />I believe in the principle that <strong>EVERYTHING</strong> in
          this world is <strong>FIGURE-OUT-ABLE</strong> with determination and
          actions.
          <br />
          <br />
          Adding to my web development skill, I am also an experienced project
          manager and scientific researcher.
          <br />I chose to shift my career to software development in search of
          new challenges and opportunities.
          <br />
          I am enthusiastic about incorporating my previous skillset into the
          field of software development.
          <br />
          <br />
          If you are interested in working together,{" "}
          <a className="about__link" href="#contact">
            let's get in touch!
          </a>
          <br />
          <br />
        </p>
      </div>
    </section>
  );
};

export default About;
