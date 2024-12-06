import React, { useState } from "react";
import "./CarouselPage.css";
import Bg1 from "../../../assets/Rectangle 1.png";
// import Bg2 from "../../../assets/Rectangle 1.png";
// import Bg3 from "../../../assets/Rectangle 1.png";
import Bg2 from "../../../assets/Frame 25.png";
import Bg3 from "../../../assets/Frame 27.png";
import arrowRight from "../../../assets/arrow_forward.svg";
import arrowLeft from "../../../assets/arrow_back.svg";

const CarouselPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [Bg1, Bg2, Bg3];

  const handlePrev = () => {
    if (currentIndex === 0) {
      setCurrentIndex(images.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex === images.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <section className="carousel-section">
      <h2>METAL PROJECT FACTORY</h2>
      <p>
        Fedele alla scelta di restituire al metallo un ruolo privilegiato nella
        sperimentazione progettuale, <br /> De Castelli innesta in processi
        tipicamente industriali la matrice di un pensiero e di un fare <br />
        artigianale che porta a esiti del tutto inediti.
      </p>
      <div className="carousel">
        <button className="carousel-button prev" onClick={handlePrev}>
          <img src={arrowLeft} />
        </button>
        <button className="carousel-button next" onClick={handleNext}>
          <img src={arrowRight} />
        </button>
        <ul className="carousel-slides">
          {images.map((image, index) => (
            <li
              key={index}
              className={`slide ${index === currentIndex ? "active" : ""}`}
            >
              <img src={image} alt={`Slide ${index + 1}`} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default CarouselPage;
