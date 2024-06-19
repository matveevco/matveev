import React from "react";

const SectionInfoCompany = ({ companyLogos, companyName, additionalClass }) => {
  return (
    <div className="section-info-company">
      <div className={`section-info-company-box ${additionalClass.join(" ")}`}>
        {companyLogos.map((logo, index) => (
          <div
            key={index}
            className={`company-logo ${logo.additionalClass.join(" ")}`}
          >
            <img className="icon-logo" alt={logo.alt} src={logo.src} />
          </div>
        ))}
      </div>
      <div className="section-info-company-name">{companyName}</div>
    </div>
  );
};

export default SectionInfoCompany;
