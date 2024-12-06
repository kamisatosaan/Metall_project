import React from "react";
import "./Separator.css";

const Separator = ({ color, opacity, className }) => {
  return (
    <div
      className={`separator ${className}`}
      style={{ backgroundColor: color, opacity: opacity }}
    ></div>
  );
};

export default Separator;
