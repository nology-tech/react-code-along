import React, { useState } from "react";

import "./Carousel.scss";

import leftArrow from "../../assets/images/left-arrow.png";
import rightArrow from "../../assets/images/right-arrow.png";

const Carousel = props => {
  const { imagesArr } = props;
  const [showImage, setShowImage] = useState(true);
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setShowImage(!showImage);
  };

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="carousel">
      {/* {showImage ? <img src={imagesArr[0]} alt="" className="carousel__image" /> : ""}
      <button onClick={handleClick}>Toggle Image</button> */}
      <p>{count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

export default Carousel;
// const [counter, setCounter] = useState(0);

// const handleIncrement = () => {
//   if (counter === imagesArr.length - 1) {
//     setCounter(0);
//   } else {
//     setCounter(counter + 1);
//   }
// };

// const handleDecrement = () => {
//   if (counter === 0) {
//     setCounter(imagesArr.length - 1);
//   } else {
//     setCounter(counter - 1);
//   }
// };

// <div className="carousel">
//   <img src={leftArrow} alt="" onClick={handleDecrement} className="carousel__arrow carousel__arrow--left" />
//   <img src={imagesArr[counter]} alt="" className="carousel__image" />
//   <img src={rightArrow} alt="" onClick={handleIncrement} className="carousel__arrow carousel__arrow--right" />
// </div>
