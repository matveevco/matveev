import React from "react";

import HeaderTags from "./HeaderTags";
import SectionInfoCell from "./SectionInfoCell";
import SectionInfoCompany from "./SectionInfoCompany";

const SectionInfo = ({ useLink = true, content, animate }) => {
  const {
    link,
    title,
    tags,
    subTitle,
    awesomeness,
    companyLogos,
    companyName,
    additionalClass,
  } = content;
  const WrapperComponent = link ? "a" : "div";
  const wrapperProps = link
    ? { href: link, className: "section-info" }
    : { className: "section-info" };

  return (
    <WrapperComponent {...wrapperProps}>
      <div className="section-info-top">
        <SectionInfoCompany
          companyLogos={companyLogos}
          companyName={companyName}
          additionalClass={additionalClass}
        />
        <div className="section-info-header">
          <h2 className={animate ? "animate-end" : "animate-start"}>{title}</h2>
          <HeaderTags animate={animate} tags={tags} />
        </div>
      </div>
      <div className="section-info-bottom">
        <h3>{subTitle}</h3>
        <div className="section-info-row">
          {awesomeness.map((text, index) => (
            <SectionInfoCell animate={animate} key={index} awesomeness={text} />
          ))}
        </div>
      </div>
    </WrapperComponent>
  );
};

export default SectionInfo;
