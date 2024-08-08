import React from "react";
import previewGains from "../data/previewData/extraGains";
import previewPublic from "../data/previewData/extraPublic";
import CardTextModule from "../system/pages/CardTextModule";
import { ScrollProvider, useScroll } from "../automation/hooks/ScrollContext";

const CardTextModuleProvider = ({ cardData }) => {
  const { currentSection } = useScroll();

  console.log("cardData:", cardData);

  return (
    <div className="s-dark">
      <div className="section-container">
        {cardData.map((card, index) => (
          <div
            key={index}
            style={{
              position: "relative",
              opacity: currentSection === index ? 1 : 0,
              zIndex: currentSection === index ? 3 : 2,
              transition: "opacity 0.15s",
            }}
          >
            <CardTextModule
              content={card.data}
              idSection={card.idSection}
              classSection={card.classSection}
              index={index}
              newIndex={currentSection}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const ScrollTextModule = () => {
  const cardData = [
    { data: previewGains, classSection: "section-dark sd" },
    { data: previewPublic, classSection: "section-dark sd" },
  ];

  return (
    <ScrollProvider sectionCount={cardData.length}>
      <CardTextModuleProvider cardData={cardData} />
    </ScrollProvider>
  );
};

export default ScrollTextModule;
