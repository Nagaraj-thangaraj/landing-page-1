import React from "react";
import picMeals from "../Assets/pick-meals-image.png";
import choooseMeals from "../Assets/choose-image.png";
import deleveryMeals from "../Assets/delivery-image.png";
const Work = () => {
  const workInfoData = [
    {
      image: picMeals,
      title: "Pick Your Meals",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia.",
    },
    {
      image: choooseMeals,
      title: "Choose How Often",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia.",
    },
    {
      image: deleveryMeals,
      title: "Fast Deleveries",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia.",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className=" work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quia.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data, index) => 
            (
                <div className="work-section-info">
                <div className=" info-boxes-img-container"> 
                <img src={data.image} alt="" />
                </div>
                <h2>{data.title}</h2>
                <p>{data.text}</p>
              </div>
            )
        
        )}
      </div>
    </div>
  );
};

export default Work;
