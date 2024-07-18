import React from "react";
import { Squircle } from "corner-smoothing";
import IconArrowRotate from "../atoms/IconArrowRotate";
import CardTextCompany from "../molecules/CardTextCompany";
import CardTextPhoto from "../molecules/CardTextPhoto";

const CardText = ({ content }) => {
  const {
    cardLogos = [],
    additionalClass,
    cardTitle,
    cardDescription,
    cardCaption,
    link,
  } = content;

  const isPhotoActive = cardLogos.some((logo) => logo.src.includes("avatars"));

  const WrapperComponent = link ? "a" : "div";
  const wrapperProps = link
    ? {
        href: link,
        className: `section-img si-small ${isPhotoActive ? "credits" : "about"}`,
        target: "_blank",
        rel: "noopener noreferrer",
      }
    : {
        className: `section-img si-small ${isPhotoActive ? "credits-disable" : "about-disable"}`,
      };

  const companyLogos = cardLogos.filter(
    (logo) => !logo.src.includes("avatars"),
  );
  const avatarLogos = cardLogos.filter((logo) => logo.src.includes("avatars"));

  return (
    <Squircle
      as={WrapperComponent}
      {...wrapperProps}
      cornerRadius={40}
      cornerSmoothing={1}
      preserveSmoothing={true}
    >
      <div className="section-img-top">
        {companyLogos.length > 0 && (
          <CardTextCompany
            cardLogos={companyLogos}
            additionalClass={additionalClass}
          />
        )}
        {avatarLogos.map((logo, index) => (
          <CardTextPhoto key={index} src={logo.src} alt={logo.alt} />
        ))}
        <div className="section-img-title">
          <div className="info-body-text ibt-fix">{cardTitle}</div>
          <div className="bs">{cardDescription}</div>
        </div>
      </div>
      <div className={`section-img-button ${isPhotoActive ? "" : "lnl-dark"}`}>
        <div className="bs nav-links-text">{cardCaption}</div>
        <div className={`button-icon ${isPhotoActive ? "bi-dark" : ""}`}>
          <IconArrowRotate />
        </div>
      </div>
    </Squircle>
  );
};

export default CardText;
