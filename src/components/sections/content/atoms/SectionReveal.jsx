import React from "react";
import SectionInfo from "./SectionInfo";
import SectionImg from "./SectionImg";

const SectionReveal = ({ content, onMouseEnter, onMouseLeave }) => {
  const { link } = content;

  return (
    <a
      className="section-reveal"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      href={link || "#"}
    >
      <SectionInfo useLink={false} content={content} />
      <SectionImg useLink={false} content={content} />
    </a>
  );
};

export default SectionReveal;
