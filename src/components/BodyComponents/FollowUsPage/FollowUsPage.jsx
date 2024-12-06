import React from "react";
import "./FollowUsPage.css";
import img1 from "../../../assets/Rectangle 10.png";
import img2 from "../../../assets/Rectangle 11.png";
import img3 from "../../../assets/Rectangle 12.png";
import img4 from "../../../assets/Rectangle 13 (4).png";
import img5 from "../../../assets/Rectangle 10 (1).png";
import img6 from "../../../assets/Rectangle 11 (1).png";
import img7 from "../../../assets/Rectangle 12 (1).png";
import img8 from "../../../assets/Rectangle 13 (5).png";
import arrow from "../../../assets/arrow.svg";

const FollowUsPage = () => {
  return (
    <section className="follow-us-section">
      <h2>FOLLOW US</h2>
      <div className="follow-us-column">
        <img src={img1} />
        <img src={img2} />
        <img src={img3} />
        <img src={img4} />
        <img src={img5} />
        <img src={img6} />
        <img src={img7} />
        <img src={img8} />
      </div>
      <div className="follow-us-row">
        <h3>INSTAGRAM</h3>
        <img src={arrow} />
      </div>
    </section>
  );
};

export default FollowUsPage;
