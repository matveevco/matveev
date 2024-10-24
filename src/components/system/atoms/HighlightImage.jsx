import React from "react";
import { Squircle } from "corner-smoothing";

const HighlightImage = ({ hgLink, hgText, hgImage, hgType }) => {
  const WrapperComponent = hgLink ? "a" : "span";
  const wrapperProps = {
    className: "hg-item",
  };

  if (hgLink) {
    wrapperProps.href = hgLink;
    wrapperProps.target = "_blank";
    wrapperProps.rel = "noopener noreferrer";
  }

  return (
    <WrapperComponent {...wrapperProps}>
      <span className={`highlight-gradient-${hgType}-text hg-default`}>
        {hgText}{" "}
      </span>
      <span className={`highlight-gradient-${hgType}-text hg-blur`}>
        {hgText}{" "}
      </span>
      <Squircle className="hg-img" cornerRadius={40} cornerSmoothing={0.8}>
        <img
          alt="highlight"
          width="372"
          height="372"
          src={`/images/hgt/${hgImage}.webp`}
        />
      </Squircle>
    </WrapperComponent>
  );
};

export default HighlightImage;
