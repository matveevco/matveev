import React, { forwardRef } from "react";
import IconLogoZero10 from "../atoms/IconLogoZero10";
import IconLogoPrisma from "../atoms/IconLogoPrisma";
import IconLogoCHSL from "../atoms/IconLogoCHSL";
import HighlightImage from "../atoms/HighlightImage";

const InfoModule = forwardRef((props, ref) => (
  <div className="heading heading-about section-dark" ref={ref}>
    <h1>
      I've been immersed in design since 16, studying applied computer science
      and 3D modelling at the same time. Gradually improving, I moved from
      consulting to building products used by millions of people worldwide.
    </h1>
    <h1>
      Thus, at <IconLogoZero10 />
      ZERO10 I was creating new{" "}
      <HighlightImage
        hgLink="https://zero10.ar"
        hgText="AR Experience"
        hgImage="iHG2"
        hgType="two"
      />
      in retail, and at <IconLogoPrisma />
      Prisma Labs, I was experimenting with{" "}
      <HighlightImage
        hgLink="https://prisma-ai.com"
        hgText="AI Editors."
        hgImage="iHG3"
        hgType="one"
      />
      Btw, I'm fascinated by the possibilities of combining the aesthetics of
      form and functionality into a cohesive whole.
    </h1>
    <h1>
      Also as my products{" "}
      <HighlightImage hgText="I develop" hgImage="iHG4" hgType="three" />
      some apps, one of them is the <IconLogoCHSL />*
    </h1>
    <div className="info-body-text" style={{ color: "var(--color-white-40)" }}>
      *Release date: late 2024
    </div>
  </div>
));

export default InfoModule;
