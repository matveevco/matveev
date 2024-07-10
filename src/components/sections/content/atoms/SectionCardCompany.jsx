import React from "react";

const SectionCardCompany = ({ cardLogos, additionalClass }) => {
  return (
    <div className={`section-info-company-box ${additionalClass.join(" ")}`}>
      {cardLogos.map((logo, index) => (
        <div
          key={index}
          className={`company-logo ${logo.additionalClass.join(" ")}`}
        >
          <img className="icon-logo" alt={logo.alt} src={logo.src} />
        </div>
      ))}
    </div>
  );
};

export default SectionCardCompany;
