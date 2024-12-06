import React from "react";
import "./PortfolioCards.css";

const PortfolioCards = ({ imageCard, title, description }) => {
  return (
    <section className="portfolio-card-section">
      <div className="image-container">
        <img src={imageCard} />
        <div className="overlay">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </section>
  );
};

export default PortfolioCards;
