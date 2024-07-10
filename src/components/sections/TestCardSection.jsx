import React, { useRef, useState, useEffect } from "react";
import SmoothScrollContainer from "../SmoothScrollContainer";
import MainSection from "./MainSection";
import AboutSection from "./AboutSection";
import Footer from "../navs/Footer";
import ArticleModule from "./content/ArticleModule";
import CardsModule from "./content/CardsModule";
import InfoPrismaContent from "../data/InfoPrisma";
import InfoVTBContent from "../data/InfoVTB";
import InfoLinkmuseContent from "../data/InfoLinkmuse";
import InfoAchievementContent from "../data/InfoAchievement";
import InfoPublicContent from "../data/InfoPublic";
import { addColorChangeEffect } from "./animate/ColorChangeWrapper";

const TestCardSection = () => {
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
            <MainSection />
          </div>
        </div>
        <div ref={(el) => (sectionsRef.current[1] = el)}>
          <div ref={articleModuleRefs[0]}>
            <ArticleModule data={InfoPrismaContent} />
          </div>
        </div>
        <div ref={(el) => (sectionsRef.current[2] = el)}>
          <div ref={articleModuleRefs[1]}>
            <ArticleModule data={InfoVTBContent} />
          </div>
        </div>
        <div ref={(el) => (sectionsRef.current[3] = el)}>
          <div ref={articleModuleRefs[2]}>
            <ArticleModule data={InfoLinkmuseContent} />
          </div>
        </div>
      </div>
      <div>
        <AboutSection />
      </div>
      <div ref={(el) => (sectionsRef.current[4] = el)}>
        <CardsModule content={InfoAchievementContent} />
      </div>
      <div>
        <CardsModule content={InfoPublicContent} />
      </div>
      <div>
        <Footer />
      </div>
    </SmoothScrollContainer>
  );
};

export default TestCardSection;
