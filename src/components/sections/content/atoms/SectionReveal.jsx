import React from "react";
import SectionInfo from "./SectionInfo";
import SectionImg from "./SectionImg";

const SectionReveal = ({ content, onMouseEnter, onMouseLeave }) => {
  const { link } = content;

  return link ? (
    <a
      className="section-reveal"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      href={link}
    >
      <SectionInfo useLink={false} content={content} />
      <SectionImg useLink={false} content={content} />
    </a>
  ) : (
    <div
      className="section-reveal"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <SectionInfo useLink={false} content={content} />
      <SectionImg useLink={false} content={content} />
    </div>
  );
};

export default SectionReveal;
