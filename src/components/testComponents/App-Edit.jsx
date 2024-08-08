import React, { useEffect, lazy, Suspense } from "react";
import HeaderModule from "./system/pages/HeaderModule";
const InfoModule = lazy(() => import("./system/pages/InfoModule"));
const FooterModule = lazy(() => import("./system/pages/FooterModule"));
// import useParallaxScroll from "./automation/hooks/useParallaxScroll";
import { addNavigation } from "./automation/functions/addNavigationContext";
import { useColorChangeEffect } from "./automation/functions/addColorChange";
import ScrollModule from "./system/pages/ScrollModule";
import CardTextModule from "./system/pages/CardTextModule";
import CardImageModule from "./system/pages/CardImageModule";
import previewGains from "./data/previewData/extraGains";
import previewPublic from "./data/previewData/extraPublic";
import previewPrisma from "./data/previewData/corePrisma";
import previewVTB from "./data/previewData/coreVTB";
import previewLinkmuse from "./data/previewData/coreLinkmuse";

const App = () => {
  const { navRef, resetDarkSectionOn } = addNavigation();

  const cardImageData = [
    { data: previewPrisma, classSection: "s-orange", idSection: "works" },
    { data: previewVTB, classSection: "s-blue" },
    { data: previewLinkmuse, classSection: "s-pink" },
  ];

  const cardTextData = [
    { content: previewGains, classSection: "section-dark" },
    { content: previewPublic, classSection: "section-dark" },
  ];

  useEffect(() => {
    resetDarkSectionOn();
  }, [resetDarkSectionOn]);

  useColorChangeEffect();

  // useParallaxScroll();

  const { scrollY } = useScroll();
  const fixSetRef = useRef(null);
  const [fixSetHeight, setFixSetHeight] = useState(0);
  useEffect(() => {
    if (fixSetRef.current) {
      setFixSetHeight(fixSetRef.current.offsetHeight);
    }
  }, []);

  const yFixSet = useTransform(
    scrollY,
    [fixSetHeight - window.innerHeight, fixSetHeight],
    [0, window.innerHeight],
  );

  return (
    <div className="body-page" style={{ position: "relative" }}>
      <div className="first-set">
        <HeaderModule />
        <ScrollModule
          cardData={cardImageData}
          ModuleComponent={CardImageModule}
        />
      </div>
      <div className="s-dark second-set" ref={navRef}>
        <Suspense fallback={<div>Loading...</div>}>
          <InfoModule />
          <ScrollModule
            cardData={cardTextData}
            ModuleComponent={CardTextModule}
          />
          <FooterModule />
        </Suspense>
      </div>
    </div>
  );
};

export default App;
