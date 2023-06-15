import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div
      data-aos="fade-right"
      data-aos-duration="3000"
      className="header__socials"
    >
      <a href="https://www.linkedin.com/in/tfkhdyt/" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/taufikhdyt01/" target="_blank">
        <FaGithub />
      </a>
      <a href="https://www.instagram.com/_taufik.hidayat/" target="_blank">
        <FaInstagram />
      </a>
    </div>
  );
};

export default HeaderSocials;
