import React, { forwardRef } from "react";

const InfoModule = forwardRef((props, ref) => (
  <div className="heading heading-about section-dark" ref={ref}>
    <h1>
      I’ve been deep into design since my teenage years. At 16, I started
      working in design studios and slowly transitioned into product
      development. Along the way, I had the chance to work at ZERO10, Prisma
      Labs, and VTB Bank, where I launched products that{" "}
      <span className="highlight-gradient-one-text">millions use today.</span>
    </h1>
    <h1>
      As a product designer, my goal is always to deliver{" "}
      <span className="highlight-gradient-two-text">top-notch solutions</span>{" "}
      by combining logic, data, and user feedback.
    </h1>
    <h1>
      In my free time, I{" "}
      <span className="highlight-gradient-three-text">love coding.</span> I'm
      developing the CHSL app for fun times with friends and TaxKeeper for small
      businesses in the UK.
    </h1>
  </div>
));

export default InfoModule;
