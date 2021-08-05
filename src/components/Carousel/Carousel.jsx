import React, { useState } from "react";

import "./Carousel.scss";

import leftArrow from "../../assets/images/left-arrow.png";
import rightArrow from "../../assets/images/right-arrow.png";

const Carousel = props => {
  const { imagesArr } = props;
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    if (counter < imagesArr.length - 1) {
      setCounter(counter + 1);
    }
  };

  const handleDecrement = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <div className="carousel">
      <img src={leftArrow} alt="" onClick={handleDecrement} />
      <img src={imagesArr[counter]} alt="" className="carousel__image" />
      <img src={rightArrow} alt="" onClick={handleIncrement} />
    </div>
  );
};

export default Carousel;
