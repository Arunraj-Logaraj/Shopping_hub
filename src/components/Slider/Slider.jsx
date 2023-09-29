import React from "react";
import "./Slider.scss";
import { Slider_img_1 } from "../../utils/images";

const Slider = () => {
  return (
    <div className="hero-slider">
      <div className="hero-slider-item">
        <img src={Slider_img_1} alt="slider" />
      </div>
    </div>
  );
};

export default Slider;
