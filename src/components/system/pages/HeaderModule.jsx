import React from "react";
import Button from "../atoms/Button";

const HeaderModule = () => {
  return (
    <div className="heading hf s-orange">
      <div className="heading-row">
        <h1>
          Hi, I’m Aleksei a{" "}
          <span className="highlight-gradient-two-text">
            Data-Driven Designer.
          </span>
        </h1>
        <h1>
          My passion is to gather and analyse data to{" "}
          <span className="highlight-gradient-one-text">
            drive products
          </span>{" "}
          and{" "}
          <span className="highlight-gradient-three-text">enhance value</span>{" "}
          of the services a company provides.
        </h1>
      </div>
      <div className="button-row">
        <Button
          title="Download CV"
          link=""
          icon="down"
          additionalClass="bi-dark"
          target="_blank"
          rel="noopener noreferrer"
        />
        <Button
          title="LinkedIn"
          link="https://www.linkedin.com/in/matveevco/"
          icon="rotate"
          additionalClass="bi-dark"
          target="_blank"
          rel="noopener noreferrer"
        />
      </div>
    </div>
  );
};

export default HeaderModule;
