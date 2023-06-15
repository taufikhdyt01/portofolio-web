import React, { useEffect } from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    Aos.init({});
  });
  return (
    <section id="about">
      <h5 data-aos="fade-down" data-aos-duration="500">
        Get To Know
      </h5>
      <h2 data-aos="fade-down" data-aos-duration="500">
        About Me
      </h2>

      <div className="container about__container">
        <div data-aos="flip-left" className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="about image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article
              data-aos="zoom-in-left"
              data-aos-duration="3000"
              className="about__card"
            >
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>3+ years in the world of computer science</small>
            </article>

            <article
              data-aos="zoom-in-left"
              data-aos-duration="1500"
              className="about__card"
            >
              <FiUsers className="about__icon" />
              <h5>Client</h5>
              <small>15+ as customers or partners</small>
            </article>

            <article
              data-aos="zoom-in-left"
              data-aos-duration="2700"
              className="about__card"
            >
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>20+ Completed Projects</small>
            </article>
          </div>
          <p data-aos="fade-down" data-aos-duration="2000">
            I am Undergraduate Information Technology Education Student at
            Brawijaya University. I am a highly active and engaged individual,
            regularly participating in various organizational and committee
            activities on campus. I have a passion for technology and am always
            eager to learn more about the many different aspects of this
            fascinating field.
          </p>
          <a href="#contact" className="btn btn-primary" data-aos="fade-up">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
