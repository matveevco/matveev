import { useMemo } from "react";
import previewGains from "../../data/previewData/extraGains";
import previewPublic from "../../data/previewData/extraPublic";
import previewPrisma from "../../data/previewData/corePrisma";
import previewVTB from "../../data/previewData/coreVTB";
import previewLinkmuse from "../../data/previewData/coreLinkmuse";

const useCardData = () => {
  const cardImageData = useMemo(
    () => [
      { data: previewPrisma, classSection: "s-orange", idSection: "works" },
      { data: previewVTB, classSection: "s-blue" },
      { data: previewLinkmuse, classSection: "s-pink" },
    ],
    [],
  );

  const cardTextData = useMemo(
    () => [
      { content: previewGains, classSection: "section-dark" },
      { content: previewPublic, classSection: "section-dark" },
    ],
    [],
  );

  return { cardImageData, cardTextData };
};

export default useCardData;
