import React, { forwardRef } from "react";
import Button from "../atoms/Button";
import ButtonCopy from "../atoms/ButtonCopy";

const FooterModule = forwardRef((props, ref) => (
  <div id="contacts" className="heading section-dark" ref={ref}>
    <div className="heading-row">
      <h1>
        Get <span className="highlight-text">in touch</span>.
      </h1>
      <h1>Aleksei Matveev.</h1>
      <h1>Copyrights 2018-24.</h1>
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
        link=""
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
