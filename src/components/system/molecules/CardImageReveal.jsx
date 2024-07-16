import React from "react";
import Details from "./Details";
import CardImage from "./CardImage";

const CardImageReveal = ({ content, onMouseEnter, onMouseLeave }) => {
  const { link } = content;
  const WrapperComponent = link ? "a" : "div";
  const wrapperProps = link
    ? { className: "section-reveal", href: link, onMouseEnter, onMouseLeave }
    : { className: "section-reveal", onMouseEnter, onMouseLeave };

  return (
    <WrapperComponent {...wrapperProps}>
      <Details useLink={false} content={content} />
      <CardImage useLink={false} content={content} />
    </WrapperComponent>
  );
};

export default CardImageReveal;
