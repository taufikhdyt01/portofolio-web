import React from "react";
import "./footer.css";
import { FaFacebookF } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";
import { FaTiktok } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { BsHeartFill } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Connect With Me :
      </a>

      <div className="footer__socials">
        <a href="https://www.facebook.com/taufikhidayat010602/" target="_blank">
          <FaFacebookF />
        </a>
        <a href="https://instagram.com/_taufik.hidayat" target="_blank">
          <SiInstagram />
        </a>
        <a href="https://twitter.com/_taufikhdyt" target="_blank">
          <BsTwitter />
        </a>
        <a href="https://www.tiktok.com/@_taufik.hidayat1?is_from_webapp=1&sender_device=pc">
          <FaTiktok />
        </a>
      </div>

      <div className="footer__copyright">
        <small>
          Create with <BsHeartFill /> by Taufik Hidayat{" "}
        </small>
      </div>
    </footer>
  );
};

export default Footer;
