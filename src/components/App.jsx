import React, { useEffect, lazy, Suspense, startTransition } from "react";
import { motion } from "framer-motion";
import { useNavigation } from "./automation/hooks/NavigationContext";
import { useColorChangeEffect } from "./automation/hooks/useColorChange";
import useCardData from "./automation/hooks/useCardData";
import HeaderModule from "./system/pages/HeaderModule";
import CardTextModule from "./system/pages/CardTextModule";
import CardImageModule from "./system/pages/CardImageModule";

const ScrollModule = lazy(() => import("./system/pages/ScrollModule"));
const InfoModule = lazy(() => import("./system/pages/InfoModule"));
const FooterModule = lazy(() => import("./system/pages/FooterModule"));

const App = () => {
  const { navRef, resetDarkSectionOn } = useNavigation();
  const { cardImageData, cardTextData } = useCardData();

  useEffect(() => {
    startTransition(() => {
      resetDarkSectionOn();
    });
  }, [resetDarkSectionOn]);

  useColorChangeEffect();

  return (
    <div className="body-track">
      <motion.div className="start-set">
        <HeaderModule />
      </motion.div>
      <motion.div className="start-set nav-i">
        <Suspense fallback={null}>
          <ScrollModule
            cardData={cardImageData}
            ModuleComponent={CardImageModule}
          />
        </Suspense>
      </motion.div>
      <div className="s-dark" ref={navRef}>
        <motion.div className="start-set" id="about">
          <Suspense fallback={null}>
            <InfoModule />
          </Suspense>
        </motion.div>
        <motion.div className="start-set nav-i">
          <Suspense fallback={null}>
            <ScrollModule
              cardData={cardTextData}
              ModuleComponent={CardTextModule}
            />
          </Suspense>
        </motion.div>
        <motion.div className="end-set" id="contacts">
          <Suspense fallback={null}>
            <FooterModule />
          </Suspense>
        </motion.div>
      </div>
    </div>
  );
};

export default App;
