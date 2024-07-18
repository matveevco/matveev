import React from "react";
import IconArrowDown from "../atoms/IconArrowDown";
import IconArrowRotate from "../atoms/IconArrowRotate";
import Button from "../atoms/Button";

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
        <Button
          title="Download CV"
          link=""
          icon="down"
          target="_blank"
          rel="noopener noreferrer"
        />
        <Button
          title="LinkedIn"
          link=""
          icon="rotate"
          target="_blank"
          rel="noopener noreferrer"
        />
      </div>
    </div>
  );
};

export default HeaderModule;
