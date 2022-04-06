import react from "react";
import Slider from "react-slick";
import { BsArrowLeft } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./carousel.scss";

const images = [
  "./images/Sccae4b027d084e2989d20f856015ee7a9.jpg_Q90.jpg",
  "./images/S7a1885585d404d91b81fd989e255dd99p.jpg_Q90.jpg",
  "./images/S5f2dac001da84b0498cf88d9902c8c66y.jpg_Q90.jpg",
  ,
  "./images/S3cb9fb2a90dc416687381980770608b29.jpg_Q90.jpg",
  "./images/S04314b0dfb404fc488215a61b10ed510J.jpg_Q90.jpg",
];

const ArrowRight = (props) => {
  return (
    <button {...props} style={{}} className="arrow-right">
      <BsArrowRight style={{ fontSize: "25px" }} className="arrow-right-icon" />
    </button>
  );
};

const ArrowLeft = (props) => {
  return (
    <button {...props} style={{}} className="arrow-left">
      <BsArrowLeft style={{ fontSize: "25px" }} className="arrow-left-icon" />
    </button>
  );
};

const SimpleSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    customPaging: (i) => <div className="custom-dots"></div>,
  };
  return (
    <section className="hero-slider">
      <div className="single-slider">
        <div className="container">
          <div className="row no-gutters">
            <div className="">
              <div>
                <Slider {...settings}>
                  {images.map((image, index) => (
                    <div key={index}>
                      <img
                        className="slider-img rounded-lg"
                        src={image}
                        alt=""
                      />
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimpleSlider;
