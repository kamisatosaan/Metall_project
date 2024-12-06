import React from "react";
import "./CatalogPage.css";
import img5 from "../../../assets/Rectangle 10.png";
import img6 from "../../../assets/Rectangle 11.png";
import img7 from "../../../assets/Rectangle 12.png";
import img8 from "../../../assets/Rectangle 13 (4).png";
import img1 from "../../../assets/Rectangle 10 (2).png";
import img2 from "../../../assets/Rectangle 11 (1).png";
import img3 from "../../../assets/Rectangle 12 (1).png";
import img4 from "../../../assets/Rectangle 13 (5).png";
import bg1 from "../../../assets/Rectangle 12 (2).png";
import bg2 from "../../../assets/Rectangle 17.png";
import bg3 from "../../../assets/Rectangle 12 (2).png";
import bg4 from "../../../assets/Rectangle 17.png";
import ImageCard from "../../Widgets/ImageCard/ImageCard";
import Carousel from "../../Widgets/Carousel/Carousel";

const CatalogPage = () => {
  const images = [bg1, bg2, bg3, bg4];
  // const images02 = [bg2, bg1, bg4, bg3]; мб пригодится

  return (
    <section className="catalog-section">
      <h1>COLLECTION</h1>
      <div className="catalog-row">
        <div className="catalog-cards-column-01">
          <ImageCard imageCard={img1} title="VELA" subtitle="2022 Nordies" />
          <ImageCard imageCard={img2} title="VELA" subtitle="2022 Nordies" />
          <ImageCard imageCard={img3} title="VELA" subtitle="2022 Nordies" />
          <ImageCard imageCard={img4} title="VELA" subtitle="2022 Nordies" />
        </div>
        <Carousel images={images} />
      </div>
      <div className="catalog-row-02">
        <ImageCard imageCard={img5} title="VELA" subtitle="2022 Nordies" />
        <ImageCard imageCard={img6} title="VELA" subtitle="2022 Nordies" />
        <ImageCard imageCard={img7} title="VELA" subtitle="2022 Nordies" />
        <ImageCard imageCard={img8} title="VELA" subtitle="2022 Nordies" />
        <ImageCard imageCard={img4} title="VELA" subtitle="2022 Nordies" />
        <ImageCard imageCard={img2} title="VELA" subtitle="2022 Nordies" />
        <ImageCard imageCard={img3} title="VELA" subtitle="2022 Nordies" />
        <ImageCard imageCard={img4} title="VELA" subtitle="2022 Nordies" />
      </div>
      <div className="catalog-row">
        <Carousel images={images} />
        <div className="catalog-cards-column-02">
          <ImageCard imageCard={img1} title="VELA" subtitle="2022 Nordies" />
          <ImageCard imageCard={img2} title="VELA" subtitle="2022 Nordies" />
          <ImageCard imageCard={img3} title="VELA" subtitle="2022 Nordies" />
          <ImageCard imageCard={img4} title="VELA" subtitle="2022 Nordies" />
        </div>
      </div>
      <div className="catalog-row-02">
        <ImageCard imageCard={img5} title="VELA" subtitle="2022 Nordies" />
        <ImageCard imageCard={img6} title="VELA" subtitle="2022 Nordies" />
        <ImageCard imageCard={img7} title="VELA" subtitle="2022 Nordies" />
        <ImageCard imageCard={img8} title="VELA" subtitle="2022 Nordies" />
        <ImageCard imageCard={img4} title="VELA" subtitle="2022 Nordies" />
        <ImageCard imageCard={img2} title="VELA" subtitle="2022 Nordies" />
        <ImageCard imageCard={img3} title="VELA" subtitle="2022 Nordies" />
        <ImageCard imageCard={img4} title="VELA" subtitle="2022 Nordies" />
      </div>
    </section>
  );
};

export default CatalogPage;
