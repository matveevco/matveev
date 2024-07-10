import React from "react";
import IconArrowRotate from "../icons/IconArrowRotate";
import IconArrowDown from "../icons/IconArrowDown";
import IconCopy from "../icons/IconCopy";

const Footer = () => (
  <div className="heading section-dark">
    <div className="heading-row">
      <h1>
        Get <span className="highlight-text">in touch</span>.
      </h1>
      <h1>Aleksei Matveev.</h1>
      <h1>Copyrights 2018-24.</h1>
    </div>
    <div className="button-row">
      <a className="button" href="" target="_blank" rel="noopener noreferrer">
        Download CV
        <div className="button-icon bi-dark">
          <IconArrowDown />
        </div>
      </a>
      <a className="button" href="" target="_blank" rel="noopener noreferrer">
        LinkedIn
        <div className="button-icon bi-dark">
          <IconArrowRotate />
        </div>
      </a>
      <a className="button" href="" target="_blank" rel="noopener noreferrer">
        Email
        <div className="button-icon bi-dark">
          <IconCopy />
        </div>
      </a>
    </div>
  </div>
);

export default Footer;
