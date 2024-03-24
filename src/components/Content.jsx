import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Content.css";
import aLinnSi1 from "../assets/a linn si 1.png";
import aLinnSi2 from "../assets/a linn si 2.png";
import twofive from "../assets/25.png";
import Logo from "../assets/logo.svg";
import contactBtn from "../assets/btn-contact.svg";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import Slide from "../assets/Slide.png";

const images = [
  "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
  "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
  "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
];

const Content = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    prevArrow: null, // Remove the previous arrow navigation control
    nextArrow: null, // Remove the next arrow navigation control
  };
  

  return (
    <div>
      <div>
        <div className="introTextContainer">
          <p1 className="introText">
            HIBANA IS A HOME WHERE INNOVATIVE IDEAS COME TO LIFE.
            <br /> DEDICATED TO SEEK BEAUTY IN THE MUNDANE, WE ELEVATE
            <br /> EVERYDAY ITEMS BY INCORPORATING TECHNOLOGY, CREATIVITY
             AND SUSTAINABILITY
          </p1>
        </div>
        <img className="Logo" src={Logo} />
        <hr />

        <div className="imageSlider">
          <Slider {...settings}>
            <div>
              <img className="Slide" src={Slide} />
            </div>
            <div>
              <img className="Slide" src={Slide} />
            </div>
            <div>
              <img className="Slide" src={Slide} />
            </div>
          </Slider>
        </div>
        <h2 className="head2">AR FILTERS</h2>
        <div className="buttonContainer">
          <button className="button">
            <img src={aLinnSi1} className="arImage" />
            <div className="arTitle" style={{ color: "#f38c73" }}>A LNN SI 1</div>
          </button>
          <button className="button">
            <img src={aLinnSi2} className="arImage" />
            <div className="arTitle" style={{ color: "#f38c73" }}>A LNN SI 2</div>
          </button>
          <button className="button">
            <img src={twofive} className="arImage" />
            <div className="arTitle" style={{ color: "#f38c73" }}>25</div>
          </button>
          <button className="button">
            <img src="" className="arImage" />
          </button>

        </div>
        <hr />
        <div class = "bottom">
          <h2 className="head3">
            KEEP IN<br></br> TOUCH
          </h2>
          <img src={contactBtn} className="contactBtn" />
          <div>
            <img className="social" src={facebook} />
            <img className="social" src={instagram} />
          </div>
          <footer class="footer">
            <div class="left-content">© All Rights Reserved</div>
            <div class="right-content">2024</div>
          </footer>
          </div>
      </div>
    </div>
  );
};

export default Content;
