import React from "react";
import Button from "../atoms/Button";
// import HighlightImage from "../atoms/HighlightImage";

const HeaderModule = () => {
  return (
    <div className="heading hf s-orange">
      <div className="heading-row">
        <h1>
          Hey, I’m{" "}
          <span className="highlight-gradient-two-text">Aleksei </span>
          {/* <HighlightImage
            hgLink="https://www.instagram.com/aei.ee/profilecard/"
            hgText="Aleksei"
            hgImage="iHG1"
            hgType="two"
          /> */}
          a Product Designer.
        </h1>
        <h1>
          Building products with a cause and purpose in a{" "}
          <span className="highlight-gradient-one-text">data-driven </span>way.
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
