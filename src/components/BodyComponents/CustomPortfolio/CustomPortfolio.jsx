import React from "react";
import "./CustomPortfolio.css";
import bg1 from "../../../assets/eacf7f8a-31da-4ec2-a2b3-dce7fa778459.jpeg";
import bg2 from "../../../assets/Chromeo's Bauhaus-inspired design juxtaposes thick, comfortable cushions with a sleek metal frame_.jpeg";
import bg3 from "../../../assets/The Sculptural Lemni Armchair Is a 10 in Style + Comfort.jpeg";
import bg4 from "../../../assets/download.jpeg";
import bg5 from "../../../assets/download (1).jpeg";
import bg6 from "../../../assets/luxury furniture_.jpeg";
import bg7 from "../../../assets/Panton Wire Single.jpeg";
import bg8 from "../../../assets/LOFT MANHATTAN.jpeg";
import bg9 from "../../../assets/ديكور  حديد.jpeg";
import bg10 from "../../../assets/download (2).jpeg";
import bg11 from "../../../assets/Маска.jpeg";
import bg12 from "../../../assets/download (3).jpeg";
import bg13 from "../../../assets/Gallery of The Platypus Cafe _ Radius Interior Design Studio  - 4.jpeg";
import bg14 from "../../../assets/download (4).jpeg";
import bg15 from "../../../assets/HI-MACS® per il nuovo progetto di Fabio Novembre.jpeg";
import Separator from "../../Widgets/Separator/Separator";
import PortfolioCards from "../../Widgets/PortfolioCards/PortfolioCards";

const CustomPortfolio = () => {
  return (
    <section className="custom-portfolio-section">
      <h1>PORTFOLIO</h1>
      <Separator color="#000" opacity={0.4} />
      <div className="custom-portfolio-wrapper">
        <a href="#">
          <div className="custom-portfolio-news-bloc">
            <h2>666</h2>
            <h1>NEWS</h1>
          </div>
        </a>
        <div className="custom-portfolio-column">
          <PortfolioCards
            imageCard={bg1}
            title="title"
            description="description"
          />
          <PortfolioCards
            imageCard={bg11}
            title="title"
            description="description"
          />
          <PortfolioCards
            imageCard={bg13}
            title="title"
            description="description"
          />
          <PortfolioCards
            imageCard={bg2}
            title="title"
            description="description"
          />
          <PortfolioCards
            imageCard={bg9}
            title="title"
            description="description"
          />
          <PortfolioCards
            imageCard={bg3}
            title="title"
            description="description"
          />
          <PortfolioCards
            imageCard={bg10}
            title="title"
            description="description"
          />
          <PortfolioCards
            imageCard={bg4}
            title="title"
            description="description"
          />
          <PortfolioCards
            imageCard={bg12}
            title="title"
            description="description"
          />
          <PortfolioCards
            imageCard={bg5}
            title="title"
            description="description"
          />
          <PortfolioCards
            imageCard={bg6}
            title="title"
            description="description"
          />
          <PortfolioCards
            imageCard={bg7}
            title="title"
            description="description"
          />
          <PortfolioCards
            imageCard={bg8}
            title="title"
            description="description"
          />
          <PortfolioCards
            imageCard={bg14}
            title="title"
            description="description"
          />
          <PortfolioCards
            imageCard={bg15}
            title="title"
            description="description"
          />
        </div>
      </div>
    </section>
  );
};

export default CustomPortfolio;
