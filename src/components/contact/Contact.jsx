import React, { useEffect } from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "emailjs-com";
import Aos from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_ofkteuo",
      "template_fw0390l",
      form.current,
      "AE-i0ONmH31-uOKcd"
    );

    e.target.reset();
  };
  useEffect(() => {
    Aos.init({});
  });

  return (
    <section id="contact">
      <h5 data-aos="fade-down" data-aos-duration="500">
        Get In Touch
      </h5>
      <h2 data-aos="fade-down" data-aos-duration="500">
        Contact Me
      </h2>

      <div className="container contact__container">
        <div
          data-aos="fade-up-right"
          data-aos-duration="2800"
          className="contact__options"
        >
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>taufikhdyt0106@gmail.com</h5>
            <a href="taufikhdyt0106@gmail.com" target="_blank">
              Send a massage
            </a>
          </article>

          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>Taufik Hidayat</h5>
            <a href="https://m.me/taufikhidayat010602" target="_blank">
              Send a massage
            </a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+62 895-3957-93881</h5>
            <a
              href="https://api.whatsapp.com/send?phone=62895395793881"
              target="_blank"
            >
              Send a massage
            </a>
          </article>
        </div>

        {/* END OF OPTIONS */}

        <form
          ref={form}
          onSubmit={sendEmail}
          data-aos="fade-up-left"
          data-aos-duration="3500"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
