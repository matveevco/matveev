import React, { forwardRef } from "react";
import { Squircle } from "corner-smoothing";
import Button from "../atoms/Button";

const Figma = forwardRef(({ shareLink, iframeLink }, ref) => (
  <div ref={ref} className="content-info ci-fix compHide">
    <div className="content-info-left cilc-fix">
      <div className="content-info-left-cell">
        <h3>Figma Screens</h3>
        <div className="info-body-article">
          Explore in more detail all the available artefacts, screens and
          scenarios for this task in the Figma preview.
        </div>
      </div>
      <Button
        title="Open Figma"
        link={shareLink}
        additionalClass="bi-dark"
        icon="rotate"
        target="_blank"
        rel="noopener noreferrer"
      />
    </div>
    <div className="section-row ci-f-fix">
      <Squircle
        className="section-img si-figma"
        cornerRadius={40}
        cornerSmoothing={1}
        preserveSmoothing={true}
      >
        <iframe
          className="figma"
          style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
          width="760"
          height="760"
          src={iframeLink}
          title="Figma Design Preview"
        ></iframe>
        {/* <div className="figma-link"></div> */}
      </Squircle>
    </div>
  </div>
));

export default Figma;
