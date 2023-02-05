import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import "./contact.css";

import { BsLinkedin, BsGithub } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xc375mr",
        "template_uvfacua",
        form.current,
        "0mYNgIHlrb051iSYX"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section id="contact">
      <h2>-- let's connect --</h2>
      <div className="container contact__container">
        <div className="socials">
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
        <form ref={form} onSubmit={sendEmail}>
          <h3>I'd love to hear from you!</h3>
          <input
            className="form-placeholder"
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />
          <input
            className="form-placeholder"
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />
          <textarea
            className="form-placeholder"
            name="message"
            rows="5"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
