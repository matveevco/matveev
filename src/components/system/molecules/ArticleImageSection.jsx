import React, { useState } from "react";
import { Squircle } from "corner-smoothing";
import { PulseRingsThree } from "react-svg-spinners";

const ImageSection = ({ imageSRC, imageWidth, imageHeight }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="section-row">
      <Squircle
        className="section-img"
        cornerRadius={40}
        cornerSmoothing={1}
        preserveSmoothing={true}
      >
        <img
          className={`object-image full-oi ${isLoading ? "hidden" : ""}`}
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
};

export default ImageSection;
