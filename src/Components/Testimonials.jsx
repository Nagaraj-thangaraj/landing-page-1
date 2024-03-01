import React from "react";
import profilePic from "../Assets/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";

const Testimonials = () => {
  return (
    <section id="testimonials">
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading"> Testimonal</p>
        <h1 className="primary-heading"> What They Are Saying </h1>
        <p className="primary-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          quae praesentium at ad quisquam eum, animi autem consectetur
          voluptatum, quia sapiente nostrum error. Ratione sed eius autem
          commodi assumenda doloribus.
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img src={profilePic} alt="profile pic" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
          voluptatibus fuga adipisci sapiente aliquid perspiciatis praesentium
          eius, eaque vero doloribus blanditiis quisquam? Hic incidunt ut
          sapiente minus, vel facilis. Dolorem.
        </p>
        <div className="testimonials-stars-container">
              <AiFillStar />
              <AiFillStar/>
              <AiFillStar />
              <AiFillStar/>
              <AiFillStar />
             
        </div>
        <h2> John Doe</h2>
      </div>
    </div>
    </section>
  );
};

export default Testimonials;
