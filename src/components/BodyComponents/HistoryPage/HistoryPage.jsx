import React from "react";
import "./HistoryPage.css";
import img1 from "../../../assets/Frame 8 1.png";
import img2 from "../../../assets/image 27.png";
import Separator from "../../Widgets/Separator/Separator";

const HistoryPage = () => {
  return (
    <section className="history-section">
      <div className="history-row-01">
        <div className="history-column-01">
          <h2>METAL PROJECTS FACTORY</h2>
          <h6>
            The eternity of Metal, the <br /> uniqueness of the finishings
          </h6>
          <p>
            L’incontro con il design sollecita un <br /> approccio al materiale
            fondato sul rispetto <br /> delle sue possibilità, anche di quelle
            più nascoste, che emergono via via in una <br /> collezione di
            prodotti seriali e al tempo <br /> stesso unici
          </p>
        </div>
        <img src={img1} />
      </div>
      <Separator color="#000" opacity={0.4} />
      <div className="history-row-02">
        <img src={img2} />
        <div className="history-column-02">
          <h2>METAL PROJECTS FACTORY</h2>
          <h6>
            The eternity of Metal, the <br /> uniqueness of the finishings
          </h6>
          <p>
            L’incontro con il design sollecita un <br /> approccio al materiale
            fondato sul rispetto <br /> delle sue possibilità, anche di quelle
            più nascoste, che emergono via via in una <br /> collezione di
            prodotti seriali e al tempo <br /> stesso unici
          </p>
        </div>
      </div>
    </section>
  );
};

export default HistoryPage;
