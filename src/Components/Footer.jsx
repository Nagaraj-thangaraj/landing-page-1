import React from "react";
import Logo from "../Assets/Logo.svg";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
const Footer = () => {
  return (
    <div className=" footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src={Logo} alt="Logo " />
        </div>
        <div className="footer-icons">
          <BsTwitterX />
          <SiLinkedin />
          <BsYoutube />
          <FaFacebookF />
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span> Quality</span>
          <span>Help</span>
          <span>Share</span>
          <span>Carrers</span>
          <span>Testimonials</span>
          <span>Work</span>
        </div>
        <div className="footer-section-columns">
            <span> +91 9566469396</span>
            <span>press@demofood.com</span>
            <span>contact@food.com</span>
        </div>
        <div className="footer-section-columns">
            <span>Terms & Conditions</span>
            <span>Privacy Policy</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
