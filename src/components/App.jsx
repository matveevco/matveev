import React, { useRef, useState, useEffect } from "react";
import { useNavigation } from "./automation/hooks/useNavigationContext";
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

const NavWrapper = React.forwardRef(({ children }, ref) => (
  <div ref={ref}>{children}</div>
));

const App = () => {
  const { navRef, setIsApp, updateCurrentSection } = useNavigation();
  const [handleScroll, setHandleScroll] = useState(() => () => {});
  const sectionsRef = useRef([null, null, null, null, null]);

  useEffect(() => {
    setIsApp(true);
    return () => setIsApp(false);
  }, [setIsApp]);

  useEffect(() => {
    addColorChangeEffect(sectionsRef, setHandleScroll);
    updateCurrentSection(sectionsRef);
  }, [sectionsRef, updateCurrentSection]);

  return (
    <SmoothScrollContainer onScroll={handleScroll}>
      <div>
        <div ref={(el) => (sectionsRef.current[0] = el)}>
          <HeaderModule />
        </div>
        <div id="works" ref={(el) => (sectionsRef.current[1] = el)}>
          <CardImageModule data={previewPrisma} />
        </div>
        <div ref={(el) => (sectionsRef.current[2] = el)}>
          <CardImageModule data={previewVTB} />
        </div>
        <div ref={(el) => (sectionsRef.current[3] = el)}>
          <CardImageModule data={previewLinkmuse} />
        </div>
      </div>
      <div ref={(el) => (sectionsRef.current[4] = el)}>
        <NavWrapper ref={navRef}>
          <InfoModule />
          <CardTextModule content={previewGains} />
          <CardTextModule content={previewPublic} />
          <FooterModule />
        </NavWrapper>
      </div>
    </SmoothScrollContainer>
  );
};

export default App;
