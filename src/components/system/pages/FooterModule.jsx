import React, { forwardRef } from "react";
import Button from "../atoms/Button";
import ButtonCopy from "../atoms/ButtonCopy";

const FooterModule = forwardRef((props, ref) => (
  <div className="heading section-dark hf" ref={ref}>
    <div className="heading-row">
      <h1>
        Imagine the{" "}
        <span className="highlight-gradient-one-text">incredible things</span>{" "}
        <span className="line-break">we could create together.</span>
      </h1>
    </div>
    <div className="button-row">
      <Button
        title="Download CV"
        link="/Aleksei_Matveev_CV.pdf?v=3"
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
      <ButtonCopy
        title="Email"
        link="matveev.dsgn@gmail.com"
        additionalClass="bi-dark"
        target="_blank"
        rel="noopener noreferrer"
      />
    </div>
  </div>
));

export default FooterModule;
