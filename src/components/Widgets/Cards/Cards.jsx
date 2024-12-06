import React from "react";
import "./Cards.css";

const Cards = ({ imageSrc, button }) => {
  return (
    <div className="card">
      <img src={imageSrc} className="card-image" />
      <div className="card-content">
        <h2>COLLECTION</h2>
        {button}
      </div>
    </div>
  );
};

export default Cards;
