import React from "react";
import "../Style/slider.css";
import image1 from "../Assets/slider-img/1.jpg";
import image2 from "../Assets/slider-img/2.jpg";
import image3 from "../Assets/slider-img/3.jpg";
import image4 from "../Assets/slider-img/4.jpg";
import image5 from "../Assets/slider-img/5.jpg";
import image6 from "../Assets/slider-img/6.jpg";
import image7 from "../Assets/slider-img/7.jpg";
import image8 from "../Assets/slider-img/8.jpg";
import image9 from "../Assets/slider-img/9.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Slider = () => {
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
  ];

  return (
    <div className="slider">
      <div className="slider-img">
        {images.map((image, index) => (
          <div className="slide" key={index}>
            <LazyLoadImage
              src={image}
              alt={`Slider Image ${index + 1}`}
              effect="blur"
              height="100%"
              width="100%"
              threshold={100}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;

