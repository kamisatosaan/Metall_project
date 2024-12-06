import React from "react";
import "./NewsCards.css";

const NewsCards = ({ imageSrc }) => {
  return (
    <div className="news-card">
      <img src={imageSrc} className="news-card-image" />
      <div className="news-card-content">
        <h2>DE CASTELLI: IL VALORE DELLA MATERIA</h2>
        <p>
          L’incontro con il design sollecita un approccio al materiale fondato
          sul rispetto delle sue possibilità, anche di quelle più nascoste, che
          emergono via via in una collezione di prodotti seriali e al tempo
          stesso unici
        </p>
      </div>
    </div>
  );
};

export default NewsCards;
