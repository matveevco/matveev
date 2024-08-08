import React, { useEffect, startTransition } from "react";
import { motion } from "framer-motion";
import { useNavigation } from "./automation/hooks/NavigationContext";
import { useColorChangeEffect } from "./automation/hooks/useColorChange";
import useCardData from "./automation/hooks/useCardData";
import HeaderModule from "./system/pages/HeaderModule";
import CardTextModule from "./system/pages/CardTextModule";
import CardImageModule from "./system/pages/CardImageModule";
import ScrollModule from "./system/pages/ScrollModule";
import InfoModule from "./system/pages/InfoModule";
import FooterModule from "./system/pages/FooterModule";

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
        <ScrollModule
          cardData={cardImageData}
          ModuleComponent={CardImageModule}
        />
      </motion.div>
      <div className="s-dark" ref={navRef}>
        <motion.div className="start-set" id="about">
          <InfoModule />
        </motion.div>
        <motion.div className="start-set nav-i">
          <ScrollModule
            cardData={cardTextData}
            ModuleComponent={CardTextModule}
          />
        </motion.div>
        <motion.div className="end-set" id="contacts">
          <FooterModule />
        </motion.div>
      </div>
    </div>
  );
};

export default App;
