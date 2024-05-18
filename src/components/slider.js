import React from "react";
import "../Style/slider.css"; // Import the CSS file for styling
import image1 from "../Assets/slider-img/1.jpg";
import image2 from "../Assets/slider-img/2.jpg";
import image3 from "../Assets/slider-img/3.jpg";
import image4 from "../Assets/slider-img/4.jpg";
import image5 from "../Assets/slider-img/5.jpg";
import image6 from "../Assets/slider-img/6.jpg";
import image7 from "../Assets/slider-img/7.jpg";
import image8 from "../Assets/slider-img/8.jpg";
import image9 from "../Assets/slider-img/9.jpg";

// Import other images as needed...

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
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
  ]; // Add more images as needed

  return (
    <div className="slider">
      <div className="slider-img">
        {images.map((image, index) => (
          <div className="slide" key={index}>
            <img src={image} alt={`slider-img-${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
