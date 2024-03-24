import React from "react";
import "./Content.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import aLinnSi1 from '../assets/a linn si 1.png'
import aLinnSi2 from '../assets/a linn si 2.png'
import twofive from '../assets/25.png'
import Slide from '../assets/Slide.png'
import Logo from '../assets/logo.svg'
import contactBtn from '../assets/btn-contact.svg'
import facebook from '../assets/facebook.svg'
import instagram from '../assets/instagram.svg'

const images = [
  "https://images.pexels.com/photos/1366630/pexels-photo-1366630.jpeg",
  "https://plus.unsplash.com/premium_photo-1677508856044-9ef4b57e3587?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://res.cloudinary.com/ifeomaimoh/image/upload/v1652345874/demo_image1.jpg",
];

const Content = () => {
  return (
    <div>
      <div>
        <div className="introTextContainer">
          <p1 className="introText">
          HIBANA IS A HOME WHERE INNOVATIVE IDEAS COME TO LIFE.<br/> DEDICATED TO
  SEEK BEAUTY IN THE MUNDANE, WE ELEVATE<br/> EVERYDAY ITEMS BY
  INCORPORATING TECHNOLOGY, CREATIVITY<br/> AND SUSTAINABILITY
          </p1>
        </div>
        <img className="Logo" src={Logo}/>
        <hr/>
        <div className="imageSlider">
          <img className ="Slide" src={Slide} />
        </div>
        <h2 className="head2">AR FILTERS</h2>
        <div className="buttonContainer">
          <button className="button">
            <img src={aLinnSi1} className="arImage"/>
            <div style={{ color: '#f38c73' }}>A LNN SI 1</div>
          </button>
          <button  className="button">
            <img src={aLinnSi2}className="arImage"/>
            <div style={{ color: '#f38c73' }}>A LNN SI 1</div>
          </button>
          <button  className="button">
            <img src={twofive}className="arImage"/>
            <div style={{ color: '#f38c73' }}>A LNN SI 1</div>
          </button>
          <button  className="button">
            <img src=""className="arImage"/>
            
          </button>
          <hr/>
          <h2 className="head3">KEEP IN<br></br> TOUCH</h2>
          <img src={contactBtn} className="contactBtn"/>
          <div>
            <img className="social" src={facebook}/>
            <img className="social" src={instagram}/>
          </div>
          <footer class="footer">
  <div class="left-content">
    © All Rights Reserved
  </div>
  <div class="right-content">
    2024
  </div>
</footer>
        </div>
      </div>
    </div>
  );
};

export default Content;
