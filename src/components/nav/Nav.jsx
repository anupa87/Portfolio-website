import React, { useState } from "react";
import "./nav.css";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <header className="container header__container">
      <div>
        <h1>AT</h1>
      </div>
      <nav>
        <ul>
          <li>
            <a
              href="#"
              onClick={() => setActiveNav("#")}
              className={activeNav === "#" ? "active" : ""}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              onClick={() => setActiveNav("#about")}
              className={activeNav === "#about" ? "active" : ""}
            >
              About
            </a>
          </li>
          <li>
            {" "}
            <a
              href="#projects"
              onClick={() => setActiveNav("#projects")}
              className={activeNav === "#projects" ? "active" : ""}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#skills"
              onClick={() => setActiveNav("#skills")}
              className={activeNav === "#skills" ? "active" : ""}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={() => setActiveNav("#contact")}
              className={activeNav === "#contact" ? "active" : ""}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
