import React, { useEffect } from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";
import Aos from "aos";
import "aos/dist/aos.css";

const Experience = () => {
  useEffect(() => {
    Aos.init({});
  });
  return (
    <section id="experiences">
      <h5 data-aos="fade-down" data-aos-duration="500">
        What Skill I Have
      </h5>
      <h2 data-aos="fade-down" data-aos-duration="500">
        My Experiences
      </h2>

      <div className="container experience__container">
        <div
          data-aos="zoom-out-right"
          data-aos-duration="2500"
          className="experience__frontend"
        >
          <h3>Practicum Asssistant</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Object-Oriented Programming</h4>
                <small className="text-light">
                  Feb 2023 - Present
                </small> <br /> <br />
                <small className="text-light">
                  Teaching 36 student about Java Object-Oriented Programming
                </small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Basic Programming</h4>
                <small className="text-light">
                  Sep 2022 - Dec 2022
                </small> <br /> <br />
                <small className="text-light">
                  Teaching 37 student about Java Basic Programming
                </small>
              </div>
            </article>
          </div>
        </div>

        <div
          data-aos="zoom-out-up"
          data-aos-duration="2500"
          className="experience__design"
        >
          <h3>Organizational</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>POROS FILKOM UB</h4>
                <small className="text-light">
                  Member of Security Division
                </small>{" "}
                <br />
                <small className="text-light">Mar 2023 - Present</small> <br />
                <br />
                <small className="text-light">
                  Learn how to secure the code, security as code, how to secure
                  the system
                </small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>KBMDSI FILKOM UB</h4>
                <small className="text-light">Secretary</small> <br />
                <small className="text-light">Feb 2023 - Present</small> <br />
                <br />
                <small className="text-light">
                  Manage all the secretarial and administrative needs of the
                  organization
                </small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>KBMPTI FILKOM UB</h4>
                <small className="text-light">
                  Staff of Organizational Quality Assurance Center
                </small>{" "}
                <br />
                <small className="text-light">Feb 2022 - Jan 2023</small> <br />
                <br />
                <small className="text-light">
                  Foster and improve the quality and quantity of human resources
                  within the organization
                </small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>KBMPTI FILKOM UB</h4>
                <small className="text-light">Secretary Young Staff</small>{" "}
                <br />
                <small className="text-light">Oct 2021 - Jan 2022</small> <br />
                <br />
                <small className="text-light">
                  Learned and helped work process in Secretary at KBMPTI FILKOM
                  UB
                </small>
              </div>
            </article>
          </div>
        </div>
        <div
          data-aos="zoom-out-left"
          data-aos-duration="3000"
          className="experience__ds"
        >
          <h3>Committee</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>PEMILWA KBMDSI 2022</h4>
                <small className="text-light">
                  Staff of Event Division
                </small>{" "}
                <br />
                <small className="text-light">Nov 2022 - Jan 2023</small> <br />
                <br />
                <small className="text-light">
                  Coordinate and organize student representative selection
                  events Information System Department
                </small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>HOLOGY 5.0</h4>
                <small className="text-light">
                  Staff of Public Relations Division
                </small>{" "}
                <br />
                <small className="text-light">Jun 2022 - Nov 2022</small> <br />
                <br />
                <small className="text-light">
                  Communicate with the public and disseminate information about
                  the HOLOGY 5.0 event
                </small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>EDUACTION 3.0</h4>
                <small className="text-light">
                  Head of Event Division
                </small>{" "}
                <br />
                <small className="text-light">Jun 2022 - Nov 2022</small> <br />
                <br />
                <small className="text-light">
                  Lead 8 staff to coordinate and organize the event
                </small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>GENESIS 8.0</h4>
                <small className="text-light">Secretary</small> <br />
                <small className="text-light">Jun 2022 - Nov 2022</small> <br />
                <br />
                <small className="text-light">
                  Drafting every proposal, accountability report and all
                  administrative matters
                </small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
