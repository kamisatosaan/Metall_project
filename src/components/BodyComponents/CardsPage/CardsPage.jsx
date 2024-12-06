import React from "react";
import "./CardsPage.css";
import img1 from "../../../assets/metall_1.png";
import img2 from "../../../assets/metall_2.png";
import img3 from "../../../assets/metall_3.png";
import Cards from "../../Widgets/Cards/Cards";
import DiscoverButton from "../../Widgets/DiscoverButton/DiscoverButton";

const CardsPage = () => {
  return (
    <section className="cards-section">
      <h2>DE CASTELLI: IL VALORE DELLA MATERIA</h2>
      <p>Il metallo si fa arredo, superficie, progetto.</p>
      <div className="bg">
        <Cards imageSrc={img1} button={<DiscoverButton />} />
        <Cards imageSrc={img2} button={<DiscoverButton />} />
        <Cards imageSrc={img3} button={<DiscoverButton />} />
      </div>
    </section>
  );
};

export default CardsPage;
