import React, { useState } from "react";
import { Squircle } from "corner-smoothing";
import IconArrowRotate from "../atoms/IconArrowRotate";
import { PulseRingsThree } from "react-svg-spinners";

const CardImage = ({ content, useLink }) => {
  const { imgClass, link, imageSrc, imageAlt, imageWidth, imageHeight } =
    content;
  const classes = imgClass.join(" ");

  const [isLoading, setIsLoading] = useState(true);

  const WrapperComponent = useLink ? "a" : "div";
  const wrapperProps = useLink
    ? { href: `article/${link}`, className: classes }
    : { className: classes };

  return (
    <div>
      <Squircle
        as={WrapperComponent}
        {...wrapperProps}
        cornerRadius={40}
        cornerSmoothing={1}
        preserveSmoothing={true}
      >
        <img
          className={`object-image ${isLoading ? "hidden" : ""}`}
          loading="lazy"
          src={imageSrc}
          alt={imageAlt}
          width={imageWidth}
          height={imageHeight}
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
        <div className="button-icon bi-dark">
          <IconArrowRotate />
        </div>
      </Squircle>
    </div>
  );
};

export default CardImage;
