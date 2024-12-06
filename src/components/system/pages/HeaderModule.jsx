import React from "react";
import Button from "../atoms/Button";
// import HighlightImage from "../atoms/HighlightImage";

const HeaderModule = () => {
  return (
    <div className="heading hf s-orange">
      <div className="heading-row">
        <h1>
          Hey, I’m{" "}
          <span className="highlight-gradient-two-text">Aleksei,</span> a
          Product Designer.
        </h1>
        <h1>
          Passionate about building products that matter,{" "}
          <span className="highlight-gradient-one-text">driven by data.</span>
        </h1>
      </div>
      <div className="button-row">
        <Button
          title="Download CV"
          link="/Aleksei_Matveev_(Product_Designer).pdf?v=5"
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
