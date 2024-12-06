import React from "react";
import "./IntroducePage.css";
import DiscoverButton from "../../Widgets/DiscoverButton/DiscoverButton";

const IntroducePage = () => {
  return (
    <section className="introduce-section">
      <div className="content">
        <h2>2023 NAME COLLECTION</h2>
        <h1>
          The eternity of Metal, the
          <br /> uniqueness of the finishings
        </h1>
        <DiscoverButton />
      </div>
    </section>
  );
};

export default IntroducePage;
