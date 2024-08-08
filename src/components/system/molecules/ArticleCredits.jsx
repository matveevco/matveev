import React, { forwardRef } from "react";
import CardText from "./CardText";
import CardTextGroups from "../organisms/CardTextGroups";

const Credits = forwardRef(({ card }, ref) => (
  <div ref={ref} className="content-info ci-fix compHide">
    <div className="content-info-left cil-fix">
      <h3>Credits</h3>
      <div className="info-body-article">
        Get to know the people who supported and co-operated with each other
        during the development process.
      </div>
    </div>
    <div className="section-row ci-c-row-fix">
      <CardTextGroups cards={card} CardComponent={CardText} />
    </div>
  </div>
));

export default Credits;
