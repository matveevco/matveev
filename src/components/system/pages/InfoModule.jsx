import React, { forwardRef } from "react";
import IconLogoZero10 from "../atoms/IconLogoZero10";
import IconLogoPrisma from "../atoms/IconLogoPrisma";
import IconLogoCHSL from "../atoms/IconLogoCHSL";
import HighlightImage from "../atoms/HighlightImage";

const InfoModule = forwardRef((props, ref) => (
  <div className="heading heading-about section-dark" ref={ref}>
    <h1>
      I’ve been immersed in design since I was 16, studying applied computer
      science and 3D modeling simultaneously. As I honed my skills, I
      transitioned from consulting to building products used by millions
      worldwide.
    </h1>
    <h1>
      Currently, at <IconLogoZero10 />
      ZERO10, I’m creating innovative{" "}
      <HighlightImage
        hgLink="https://zero10.ar"
        hgText="AR experiences"
        hgSource="iHG2"
        hgSourceType="webm"
        hgCount="two"
      />
      {""}
      in retail. Previously, at <IconLogoPrisma />
      Prisma Labs, I experimented with{" "}
      <HighlightImage
        hgLink="https://prisma-ai.com"
        hgText="AI editors."
        hgSource="iHG3"
        hgSourceType="webp"
        hgCount="one"
      />
      {""}I am fascinated by the possibilities of blending aesthetics
      and functionality into a cohesive whole.
    </h1>
    <h1>
      I also develop my{" "}
      <HighlightImage
        hgText="own products,"
        hgSource="iHG4"
        hgSourceType="webm"
        hgCount="three"
      />
      {""}
      including the <IconLogoCHSL />* app.
    </h1>
    <div className="info-body-text" style={{ color: "var(--color-white-40)" }}>
      *Release date: late 2024
    </div>
  </div>
));

export default InfoModule;
