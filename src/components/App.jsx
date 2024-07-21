import React, { useRef, useState, useEffect, useCallback } from "react";
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
import useNavigationModule from "./automation/hooks/useNavigationModule";

const App = () => {
  const { navRef, setIsApp } = useNavigation();
  const [handleScroll, setHandleScroll] = useState(() => () => {});

  const [smoothScrollInstance, setSmoothScrollInstance] = useState(null);

  useEffect(() => {
    setIsApp(true);
    return () => setIsApp(false);
  }, [setIsApp]);

  useEffect(() => {
    addColorChangeEffect(setHandleScroll);
  }, []);

  const handleSmoothScrollInit = useCallback((scrollInstance) => {
    setSmoothScrollInstance(scrollInstance);
  }, []);

  useEffect(() => {
    if (smoothScrollInstance) {
      const cleanUpHandler = useNavigationModule(smoothScrollInstance);
      return () => {
        if (cleanUpHandler) {
          cleanUpHandler();
        }
      };
    }
  }, [smoothScrollInstance]);

  return (
    <SmoothScrollContainer
      onScroll={handleScroll}
      onInit={handleSmoothScrollInit}
    >
      <HeaderModule />
      <CardImageModule
        data={previewPrisma}
        idSection="works"
        classSection="s-orange"
      />
      <CardImageModule data={previewVTB} classSection="s-blue" />
      <CardImageModule data={previewLinkmuse} classSection="s-pink" />
      <div className="s-dark" ref={navRef}>
        <InfoModule />
        <CardTextModule content={previewGains} />
        <CardTextModule content={previewPublic} />
        <FooterModule />
      </div>
    </SmoothScrollContainer>
  );
};

export default App;
