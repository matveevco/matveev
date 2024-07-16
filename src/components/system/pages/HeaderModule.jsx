import React from "react";
import IconArrowDown from "../atoms/IconArrowDown";
import IconArrowRotate from "../atoms/IconArrowRotate";

const HeaderModule = () => {
  return (
    <div className="heading">
      <div className="heading-row">
        <h1>
          Hi, I’m Aleksei a{" "}
          <span className="highlight-text">Data-Driven Designer</span>.
        </h1>
        <h1>
          My passion is to gather and analyse data to{" "}
          <span className="highlight-text">drive products</span> and{" "}
          <span className="highlight-text">enhance value</span> of the services
          a company provides.
        </h1>
      </div>
      <div className="button-row">
        <a className="button" href="" target="_blank" rel="noopener noreferrer">
          Download CV
          <div className="button-icon">
            <IconArrowDown />
          </div>
        </a>
        <a className="button" href="" target="_blank" rel="noopener noreferrer">
          LinkedIn
          <div className="button-icon">
            <IconArrowRotate />
          </div>
        </a>
      </div>
    </div>
  );
};

export default HeaderModule;
