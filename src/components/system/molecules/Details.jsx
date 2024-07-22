import React from "react";
import DetailsCompany from "./DetailsCompany";
import DetailsTags from "./DetailsTags";
import DetailsCaptions from "./DetailsCaptions";

const Details = ({ useLink = true, content, animate }) => {
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

  const WrapperComponent = useLink && link ? "a" : "div";
  const wrapperProps =
    useLink && link
      ? { href: `article/${link}`, className: "section-info" }
      : { className: "section-info" };

  return (
    <WrapperComponent {...wrapperProps}>
      <div className="section-info-top">
        <DetailsCompany
          companyLogos={companyLogos}
          companyName={companyName}
          additionalClass={additionalClass}
        />
        <div className="section-info-header">
          <h2 className={animate ? "animate-end" : "animate-start"}>{title}</h2>
          <DetailsTags animate={animate} tags={tags} />
        </div>
      </div>
      <div className="section-info-bottom">
        <h3>{subTitle}</h3>
        <div className="section-info-row">
          {awesomeness.map((text, index) => (
            <DetailsCaptions animate={animate} key={index} awesomeness={text} />
          ))}
        </div>
      </div>
    </WrapperComponent>
  );
};

export default Details;
