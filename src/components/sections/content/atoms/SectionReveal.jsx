import React from "react";
import SectionInfo from "./SectionInfo";
import SectionImg from "./SectionImg";

const SectionReveal = ({ content, onMouseEnter, onMouseLeave }) => {
  const { link } = content;
  const WrapperComponent = link ? "a" : "div";
  const wrapperProps = link
    ? { className: "section-reveal", href: link, onMouseEnter, onMouseLeave }
    : { className: "section-reveal", onMouseEnter, onMouseLeave };

  return (
    <WrapperComponent {...wrapperProps}>
      <SectionInfo useLink={false} content={content} />
      <SectionImg useLink={false} content={content} />
    </WrapperComponent>
  );
};

export default SectionReveal;
