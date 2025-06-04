import React from "react";

const CardTextCompany = ({ cardLogos, additionalClass }) => {
  return (
    <div className={`section-info-company-box ${additionalClass.join(" ")}`}>
      {cardLogos.map((logo, index) => (
        <div
          key={index}
          className={`company-logo ${logo.additionalClass.join(" ")}`}
        >
          <img
            className="icon-logo"
            alt={logo.alt}
            src={logo.src}
            width={logo.width}
            height={logo.height}
          />
        </div>
      ))}
    </div>
  );
};

export default CardTextCompany;
