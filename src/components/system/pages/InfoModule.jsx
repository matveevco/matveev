import React, { forwardRef } from "react";

const InfoModule = forwardRef((props, ref) => (
  <div id="about" className="heading heading-about section-dark" ref={ref}>
    <h1>
      I've been designing since I was a teenager and from 16 I was already
      working in design studios, gradually moving into product development.
      After a while, of working at Prisma Labs and VTB Bank, I made significant
      contributions and launched products used by{" "}
      <span className="highlight-text">millions of people</span>.
    </h1>
    <h1>
      As a product designer, I always strive to offer{" "}
      <span className="highlight-text">the most valuable solution</span>, not
      only based on logic and data but also by{" "}
      <span className="highlight-text">listening to people</span>.
    </h1>
    <h1>
      In my free time, I code, develop the{" "}
      <span className="highlight-text">CHSL</span> app for a great time with
      friends and <span className="highlight-text">TaxKeeper</span> for small
      businesses in the UK, being Co-founder and CEO of Wisart Ltd.
    </h1>
  </div>
));

export default InfoModule;
