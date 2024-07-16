import React from "react";
import IconArrowRotate from "../atoms/IconArrowRotate";

const Figma = ({ shareLink, iframeLink }) => (
  <div className="content-info ci-fix">
    <div className="content-info-left cilc-fix">
      <div className="content-info-left-cell">
        <h3>Figma Screens</h3>
        <div className="info-body-article">
          Explore in more detail all the available artefacts, screens and
          scenarios for this task in the Figma preview.
        </div>
      </div>
      <a
        className="button"
        href={shareLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        Open Figma
        <div className="button-icon">
          <IconArrowRotate />
        </div>
      </a>
    </div>
    <div className="section-row">
      <div className="section-img si-figma">
        <iframe
          className="figma"
          style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
          width="760"
          height="760"
          src={iframeLink}
          title="Figma Design Preview"
        ></iframe>
        <div className="figma-link"></div>
      </div>
    </div>
  </div>
);

export default Figma;
