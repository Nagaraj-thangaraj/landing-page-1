import React from 'react'
import Navbar from './Navbar'
import bannerbackground from '../Assets/home-banner-background.png'
import bannerImage from '../Assets/home-banner-image.png'
import {FiArrowRight} from 'react-icons/fi'
import { BsFillPlayCircleFill } from "react-icons/bs";
const Home = () => {
  return (
    <div className='home-container'>
    <Navbar />
    <section id='home'>
    <div className='home-banner-container'>
<div className='home-bannerImage-container'>
<img src={bannerbackground} alt='banner background image'/>
</div>
<div className='home-text-section'>
  <h1 className='primary-heading'>
  Food Is An Important Part Of A Balanced Diet
  </h1>
  <p className="primary-text">
          Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
          elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
        </p>
        <p className="primary-text">
          Non tincidunt magna non et elit. Dolor turpis molestie dui magnis
          facilisis at fringilla quam.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Video
          </button>
        </div>
</div>
<div className='home-image-container'>
<img src={bannerImage} alt='banner image'/>
</div>
    </div>
    </section>
    </div>
  )
}

export default Home