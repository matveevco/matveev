import React from "react";
import IconArrowRotate from "../icons/IconArrowRotate";
import IconArrowDown from "../icons/IconArrowDown";
import IconCopy from "../icons/IconCopy";

const Footer = () => (
  <div class="heading section-dark">
    <div class="heading-row">
      <h1>
        Get <span class="highlight-text">in touch</span>.
      </h1>
      <h1>Aleksei Matveev.</h1>
      <h1>Copyrights 2018-24.</h1>
    </div>
    <div class="button-row">
      <a class="button" href="s" target="_blank">
        Download CV
        <div class="button-icon bi-dark">
          <IconArrowDown />
        </div>
      </a>
      <a class="button" href="s" target="_blank">
        LinkedIn
        <div class="button-icon bi-dark">
          <IconArrowRotate />
        </div>
      </a>
      <a class="button" href="s" target="_blank">
        Email
        <div class="button-icon bi-dark">
          <IconCopy />
        </div>
      </a>
    </div>
  </div>
);

export default Footer;
