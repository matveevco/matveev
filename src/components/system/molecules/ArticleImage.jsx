import React from "react";
import { Squircle } from "corner-smoothing";

const Image = ({ imageSRC }) => {
  const isSvg = imageSRC.toLowerCase().endsWith(".svg");
  const imageClass = `object-image${isSvg ? " full-svg" : ""}`;

  return (
    <Squircle
      className="section-img"
      cornerRadius={40}
      cornerSmoothing={1}
      preserveSmoothing={true}
    >
      <img className={imageClass} src={imageSRC} alt="article image" />
    </Squircle>
  );
};

export default Image;
