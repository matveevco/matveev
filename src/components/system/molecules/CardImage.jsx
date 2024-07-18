import React from "react";
import { Squircle } from "corner-smoothing";
import IconArrowRotate from "../atoms/IconArrowRotate";

const CardImage = ({ content, useLink }) => {
  const { imgClass, link, imageSrc, imageAlt } = content;
  const classes = imgClass.join(" ");

  const WrapperComponent = useLink ? "a" : "div";
  const wrapperProps = useLink
    ? { href: link, className: classes }
    : { className: classes };

  return (
    <Squircle
      as={WrapperComponent}
      {...wrapperProps}
      cornerRadius={40}
      cornerSmoothing={1}
      preserveSmoothing={true}
    >
      <img className="object-image" src={imageSrc} alt={imageAlt} />
      <div className="button-icon bi-dark">
        <IconArrowRotate />
      </div>
    </Squircle>
  );
};

export default CardImage;
