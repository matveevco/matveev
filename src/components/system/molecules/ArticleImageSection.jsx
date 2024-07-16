import React from "react";

const ImageSection = ({ imageSRC }) => (
  <div className="section-row">
    <div className="section-img">
      <img
        className="object-image full-oi"
        src={imageSRC}
        alt="article image"
      />
    </div>
  </div>
);

export default ImageSection;
