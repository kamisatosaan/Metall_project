import React from "react";
import "./NewsPage.css";
import img1 from "../../../assets/Rectangle 7.png";
import img2 from "../../../assets/Rectangle 8.png";
import img3 from "../../../assets/Rectangle 9.png";
import NewsCards from "../../Widgets/NewsCards/NewsCards";

const NewsPage = () => {
  return (
    <section className="news-section">
      <div className="news-column">
        <h1>NEWS</h1>
        <div className="news-row">
          <NewsCards imageSrc={img1} />
          <NewsCards imageSrc={img2} />
          <NewsCards imageSrc={img3} />
        </div>
      </div>
    </section>
  );
};

export default NewsPage;
