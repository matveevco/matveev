import { forwardRef } from "react";

const Figma = forwardRef(({ iframeLink }, ref) => (
  <>
    <div className="db-container">
      <h2>Figma Screens</h2>
      <div className="db-body-text">
        Explore in more detail all the available artefacts, screens and
        scenarios for this task in the Figma preview.
      </div>
    </div>
    <iframe
      className="figma"
      style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
      width="760"
      height="376"
      src={iframeLink}
      title="Figma Design Preview"
    ></iframe>
  </>
));

export default Figma;
