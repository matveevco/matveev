import React, { useRef, useState, useEffect } from "react";
import SmoothScrollContainer from "./automation/functions/addSmoothScroll";
import HeaderModule from "./system/pages/HeaderModule";
import InfoModule from "./system/pages/InfoModule";
import FooterModule from "./system/pages/FooterModule";
import CardImageModule from "./system/pages/CardImageModule";
import CardTextModule from "./system/pages/CardTextModule";
import previewPrisma from "./data/previewData/corePrisma";
import previewVTB from "./data/previewData/coreVTB";
import previewLinkmuse from "./data/previewData/coreLinkmuse";
import previewGains from "./data/previewData/extraGains";
import previewPublic from "./data/previewData/extraPublic";
import { addColorChangeEffect } from "./automation/functions/addColorChange";

const App = () => {
  const [handleScroll, setHandleScroll] = useState(() => () => {});

  const mainSectionRef = useRef(null);
  const articleModuleRefs = [useRef(null), useRef(null), useRef(null)];
  const sectionsRef = useRef([null, null, null, null]);

  useEffect(() => {
    addColorChangeEffect(sectionsRef, setHandleScroll);
  }, [sectionsRef]);

  return (
    <SmoothScrollContainer onScroll={handleScroll}>
      <div>
        <div ref={(el) => (sectionsRef.current[0] = el)}>
          <div ref={mainSectionRef}>
            <HeaderModule />
          </div>
        </div>
        <div ref={(el) => (sectionsRef.current[1] = el)}>
          <div ref={articleModuleRefs[0]}>
            <CardImageModule data={previewPrisma} />
          </div>
        </div>
        <div ref={(el) => (sectionsRef.current[2] = el)}>
          <div ref={articleModuleRefs[1]}>
            <CardImageModule data={previewVTB} />
          </div>
        </div>
        <div ref={(el) => (sectionsRef.current[3] = el)}>
          <div ref={articleModuleRefs[2]}>
            <CardImageModule data={previewLinkmuse} />
          </div>
        </div>
      </div>
      <div>
        <InfoModule />
      </div>
      <div ref={(el) => (sectionsRef.current[4] = el)}>
        <CardTextModule content={previewGains} />
      </div>
      <div>
        <CardTextModule content={previewPublic} />
      </div>
      <div>
        <FooterModule />
      </div>
    </SmoothScrollContainer>
  );
};

export default App;
