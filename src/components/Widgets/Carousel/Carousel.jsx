import React, { useState } from "react";
import "./Carousel.css";
import arrowRight from "../../../assets/arrow_forward.svg";
import arrowLeft from "../../../assets/arrow_back.svg";

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  return (
    <section className="carousel-collection-section">
      <div className="carousel-collection-container">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="carousel-collection-image"
        />
      </div>
      <div className="carousel-collection-controls">
        <div className="carousel-collection-indicators">
          {currentIndex + 1}/{images.length}
        </div>
        <div className="carousel-collection-buttons">
          <button className="prev-collection-button" onClick={handlePrev}>
            <img src={arrowLeft} />
          </button>
          <button className="next-collection-button" onClick={handleNext}>
            <img src={arrowRight} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
