import React, { forwardRef } from "react";
import { Squircle } from "corner-smoothing";

const Image = forwardRef(({ imageSRC, imageWidth, imageHeight }, ref) => {
  const isSvg = imageSRC.toLowerCase().endsWith(".svg");
  const imageClass = `object-image${isSvg ? " full-svg" : ""}`;

  return (
    <div ref={ref} className="compHide">
      <Squircle
        className="section-img"
        cornerRadius={40}
        cornerSmoothing={1}
        preserveSmoothing={true}
      >
        <img
          className={imageClass}
          src={imageSRC}
          width={imageWidth}
          height={imageHeight}
          alt="article image"
          loading="lazy"
        />
      </Squircle>
    </div>
  );
});

export default Image;
