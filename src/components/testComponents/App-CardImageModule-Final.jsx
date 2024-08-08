import React from "react";
import previewPrisma from "../data/previewData/corePrisma";
import previewVTB from "../data/previewData/coreVTB";
import previewLinkmuse from "../data/previewData/coreLinkmuse";
import CardImageModule from "../system/pages/CardImageModule";
import { ScrollProvider, useScroll } from "../automation/hooks/ScrollContext";

const CardImageModuleProvider = ({ cardData }) => {
  const { currentSection } = useScroll();

  console.log("cardData:", cardData);

  return (
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
          <CardImageModule
            data={card.data}
            idSection={card.idSection}
            classSection={card.classSection}
            index={index}
            newIndex={currentSection}
          />
        </div>
      ))}
    </div>
  );
};

const ScrollImageModule = () => {
  const cardData = [
    { data: previewPrisma, idSection: "works", classSection: "s-orange" },
    { data: previewVTB, classSection: "s-blue" },
    { data: previewLinkmuse, classSection: "s-pink" },
  ];

  return (
    <ScrollProvider sectionCount={cardData.length}>
      <CardImageModuleProvider cardData={cardData} />
    </ScrollProvider>
  );
};

export default ScrollImageModule;
