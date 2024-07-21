import React, { forwardRef } from "react";
import { Squircle } from "corner-smoothing";

const Image = forwardRef(({ imageSRC }, ref) => {
  const isSvg = imageSRC.toLowerCase().endsWith(".svg");
  const imageClass = `object-image${isSvg ? " full-svg" : ""}`;

  return (
    <Squircle
      className="section-img"
      cornerRadius={40}
      cornerSmoothing={1}
      preserveSmoothing={true}
    >
      <img
        className={imageClass}
        src={imageSRC}
        alt="article image"
        ref={ref}
      />
    </Squircle>
  );
});

export default Image;
