import React from "react";
import { Squircle } from "corner-smoothing";

const ImageSection = ({ imageSRC, imageWidth, imageHeight }) => (
  <div className="section-row">
    <Squircle
      className="section-img"
      cornerRadius={40}
      cornerSmoothing={1}
      preserveSmoothing={true}
    >
      <img
        className="object-image full-oi"
        src={imageSRC}
        width={imageWidth}
        height={imageHeight}
        alt="article image"
        loading="lazy"
      />
    </Squircle>
  </div>
);

export default ImageSection;
