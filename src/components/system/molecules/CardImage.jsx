import React from "react";
import IconArrowRotate from "../atoms/IconArrowRotate";

const CardImage = ({ content, useLink }) => {
  const { imgClass, link, imageSrc, imageAlt } = content;
  const classes = imgClass.join(" ");

  const WrapperComponent = useLink ? "a" : "div";
  const wrapperProps = useLink
    ? { href: link, className: classes }
    : { className: classes };

  return (
    <WrapperComponent {...wrapperProps}>
      <img className="object-image" src={imageSrc} alt={imageAlt} />
      <div className="button-icon bi-dark">
        <IconArrowRotate />
      </div>
    </WrapperComponent>
  );
};

export default CardImage;
