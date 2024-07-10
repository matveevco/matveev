import React from "react";
import IconArrowRotate from "../../../icons/IconArrowRotate";
import SectionCardCompany from "./SectionCardCompany";

const SectionCard = ({ content }) => {
  const {
    cardLogos,
    additionalClass,
    cardTitle,
    cardDescription,
    cardCaption,
    link,
  } = content;

  const WrapperComponent = link ? "a" : "div";
  const wrapperProps = link
    ? { href: link, className: "section-img si-small about", target: "_blank" }
    : { className: "section-img si-small about-disable" };

  return (
    <WrapperComponent {...wrapperProps}>
      <div className="section-img-top">
        {cardLogos && cardLogos.length > 0 && (
          <SectionCardCompany
            cardLogos={cardLogos}
            additionalClass={additionalClass}
          />
        )}
        <div className="section-img-title">
          <div className="info-body-text ibt-fix">{cardTitle}</div>
          <div className="bs">{cardDescription}</div>
        </div>
      </div>
      <div className="section-img-button lnl-dark">
        <div className="bs nav-links-text">{cardCaption}</div>
        <div className="button-icon">
          <IconArrowRotate />
        </div>
      </div>
    </WrapperComponent>
  );
};

export default SectionCard;
