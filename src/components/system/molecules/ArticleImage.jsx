import React, { forwardRef, useState } from "react";
import { Squircle } from "corner-smoothing";
import { PulseRingsThree } from "react-svg-spinners";

const Image = forwardRef(({ imageSRC, imageWidth, imageHeight }, ref) => {
  const isSvg = imageSRC.toLowerCase().endsWith(".svg");
  const imageClass = `object-image${isSvg ? " full-svg" : ""}`;

  const [isLoading, setIsLoading] = useState(true);

  return (
    <div ref={ref} className="compHide">
      <Squircle
        className="section-img"
        cornerRadius={40}
        cornerSmoothing={1}
        preserveSmoothing={true}
      >
        <img
          className={`${imageClass} ${isLoading ? "hidden" : ""}`}
          src={imageSRC}
          width={imageWidth}
          height={imageHeight}
          alt="article image"
          loading="lazy"
          onLoad={() => setIsLoading(false)}
        />
        {isLoading && (
          <div className="spinner">
            <PulseRingsThree
              width="32"
              height="32"
              color="rgba(13, 13, 13, 1)"
              dur="1.5"
            />
          </div>
        )}
      </Squircle>
    </div>
  );
});

export default Image;
