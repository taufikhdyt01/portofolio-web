import React, { useEffect } from "react";
import "./portofolio.css";
import IMG1 from "../../assets/gamedevpreneur.png";
import IMG2 from "../../assets/e-Block.png";
import IMG3 from "../../assets/PIC.png";

import Aos from "aos";
import "aos/dist/aos.css";

const Portofolio = () => {
  useEffect(() => {
    Aos.init({});
  });
  return (
    <section id="portofolio">
      <h5 data-aos="fade-down" data-aos-duration="500">
        My Recent Work
      </h5>
      <h2 data-aos="fade-down" data-aos-duration="500">
        Portofolio
      </h2>
      <div className="container portofolio__container">
        <article
          data-aos="zoom-in-down"
          data-aos-duration="3000"
          className="portofolio__items"
        >
          <div className="portofolio__items-image">
            <img src={IMG1} alt="Portofolio1" />
          </div>
          <h3>GameDevPreneur</h3>
        </article>

        <article
          data-aos="zoom-in-down"
          data-aos-duration="3000"
          className="portofolio__items"
        >
          <div className="portofolio__items-image">
            <img src={IMG2} alt="Portofolio1" />
          </div>
          <h3>e-Block</h3>
        </article>
        <article
          data-aos="zoom-in-down"
          data-aos-duration="3000"
          className="portofolio__items"
        >
          <div className="portofolio__items-image">
            <img src={IMG3} alt="Portofolio1" />
          </div>
          <h3>Partner In Code</h3>
        </article>
      </div>
    </section>
  );
};

export default Portofolio;
