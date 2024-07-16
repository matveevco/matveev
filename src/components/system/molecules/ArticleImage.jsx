import React from "react";

const Image = ({ imageSRC }) => {
  const isSvg = imageSRC.toLowerCase().endsWith(".svg");
  const imageClass = `object-image${isSvg ? " full-svg" : ""}`;

  return (
    <div className="section-img">
      <img className={imageClass} src={imageSRC} alt="article image" />
    </div>
  );
};

export default Image;
