import React from "react";
import AboutBackground from "../Assets/about-background-image.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";
const About = () => {
  return (
    <section id="about">
      <div className="about-section-container">
        <div className="about-background-image-container">
          <img src={AboutBackground} alt="about background" />
        </div>
        <div className="about-section-image-container">
          <img src={AboutBackgroundImage} alt="about section image" />
        </div>
        <div className="about-section-text-container">
          <p className=" primary-subheading">About</p>
          <h1 className="primary-heading">
            Food Is An Important Part Of A Balanced Diet And It Affects Our
            Moods, Health And Overall Well-Being.
          </h1>
          <p className="primary-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullam
          </p>
          <p className="primary-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullam
          </p>
          <div className="about-buttons-container">
            <button className="secondary-button">Learn More</button>
            <button className="watch-video-button">
              <BsFillPlayCircleFill />
              Watch Video
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
