import React, { useEffect } from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";
import Aos from "aos";
import "aos/dist/aos.css";

const Services = () => {
  useEffect(() => {
    Aos.init({});
  });
  return (
    <section id="services">
      <h5 data-aos="fade-down" data-aos-duration="500">
        My Academic Background
      </h5>
      <h2 data-aos="fade-down" data-aos-duration="500">
        Education
      </h2>

      <div className="container services__container">
        <article
          data-aos="fade-up"
          data-aos-duration="3000"
          className="service"
        >
          <div
            data-aos="zoom-in-down"
            data-aos-duration="1000"
            className="service__head"
          >
            <h3>Brawijaya University</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Bachelor Degree in Information Technology Education</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Current GPA : 3.86 out of 4.0 (3rd Semester)</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Practicum Asssistant at FILKOM UB</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Secretary at KBMDSI FILKOM UB 2023/2024</p>
            </li>
          </ul>
        </article>
        <article
          data-aos="fade-up"
          data-aos-duration="2500"
          className="service"
        >
          <div
            data-aos="zoom-in-down"
            data-aos-duration="1000"
            className="service__head"
          >
            <h3>State Senior High School 3 Tasikmalaya</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Majoring in Mathematics and Natural Science</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Chairman at Computer Fans Club TRITAS 2019/2020</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Vice Chairman 2 at Computer Fans Club TRITAS 2018/2019</p>
            </li>
          </ul>
        </article>
        <article
          data-aos="fade-up"
          data-aos-duration="2800"
          className="service"
        >
          <div
            data-aos="zoom-in-down"
            data-aos-duration="1000"
            className="service__head"
          >
            <h3>State Junior High School 1 Manonjaya</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Chairman at Kagen TIK 2015/2016</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Chairperson of Division 9 : Intra-School Student Organization
                2015/2016
              </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
