import React from "react";
import "./Content.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

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
            Hibana is a home where innovative ideas come to life. Dedicated to
            seek beauty in the mundane, we elevate everyday items by
            incorporating technology, creativity
          </p1>
        </div>
        <h1 className="head">HIBANA</h1>
        <div className="imageSlider">
          <img className ="test" src="https://images.pexels.com/photos/1366630/pexels-photo-1366630.jpeg" />
        </div>
        <h2 className="head2">AR FILTERS</h2>
        <div className="buttonContainer">
          <button className="button">
            <img src="https://images.pexels.com/photos/1366630/pexels-photo-1366630.jpeg" className="arImage"/>
          </button>
          <button  className="button">
            <img src="https://images.pexels.com/photos/1366630/pexels-photo-1366630.jpeg"className="arImage"/>
          </button>
          <button  className="button">
            <img src="https://images.pexels.com/photos/1366630/pexels-photo-1366630.jpeg" className="arImage"/>
          </button>
          <hr/>
          <h2 className="head2">KEEP IN<br></br> TOUCH</h2>
        </div>
      </div>
    </div>
  );
};

export default Content;
