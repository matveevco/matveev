import React, { useEffect, lazy, Suspense } from "react";
import { addNavigation } from "./automation/functions/addNavigationContext";
import { useColorChangeEffect } from "./automation/functions/addColorChange";
import useNavigationModule from "./automation/hooks/useNavigationModule";
import previewPrisma from "./data/previewData/corePrisma";
import previewVTB from "./data/previewData/coreVTB";
import previewLinkmuse from "./data/previewData/coreLinkmuse";
import previewGains from "./data/previewData/extraGains";
import previewPublic from "./data/previewData/extraPublic";
import HeaderModule from "./system/pages/HeaderModule";

const InfoModule = lazy(() => import("./system/pages/InfoModule"));
const FooterModule = lazy(() => import("./system/pages/FooterModule"));
const CardImageModule = lazy(() => import("./system/pages/CardImageModule"));
const CardTextModule = lazy(() => import("./system/pages/CardTextModule"));

const App = () => {
  const { navRef, setIsApp, resetDarkSectionOn } = addNavigation();

  useEffect(() => {
    setIsApp(true);
    return () => setIsApp(false);
  }, [setIsApp]);

  useEffect(() => {
    resetDarkSectionOn();
  }, [resetDarkSectionOn]);

  useNavigationModule();
  useColorChangeEffect();

  return (
    <>
      <HeaderModule />
      <Suspense fallback={null}>
        <CardImageModule
          data={previewPrisma}
          idSection="works"
          classSection="s-orange"
        />
      </Suspense>
      <Suspense fallback={null}>
        <CardImageModule data={previewVTB} classSection="s-blue" />
      </Suspense>
      <Suspense fallback={null}>
        <CardImageModule data={previewLinkmuse} classSection="s-pink" />
      </Suspense>
      <div className="s-dark" ref={navRef}>
        <Suspense fallback={null}>
          <InfoModule />
        </Suspense>
        <Suspense fallback={null}>
          <CardTextModule content={previewGains} />
        </Suspense>
        <Suspense fallback={null}>
          <CardTextModule content={previewPublic} />
        </Suspense>
        <Suspense fallback={null}>
          <FooterModule />
        </Suspense>
      </div>
    </>
  );
};

export default App;
