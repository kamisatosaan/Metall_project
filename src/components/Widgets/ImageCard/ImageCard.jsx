import React from "react";
import "./ImageCard.css";

const ImageCard = ({ imageCard, title, subtitle }) => {
  return (
    <section className="image-card-section">
      <img src={imageCard} />
      <h3>{title}</h3>
      <h4>{subtitle}</h4>
    </section>
  );
};

export default ImageCard;
