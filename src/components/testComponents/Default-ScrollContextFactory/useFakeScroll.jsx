import { useRef, useEffect, useMemo } from "react";
import useScrollHandler from "./useScrollHandler";

const useFakeScroll = (
  currentSection,
  setCurrentSection,
  sectionCount,
  isFixed,
  setIsFixed,
  scrollPositions,
  sectionRowRef,
) => {
  const fakeScrollPixels = useRef(0);
  const fakeScrollThreshold = useRef(800);

  const handleScroll = useScrollHandler({
    currentSection,
    setCurrentSection,
    sectionCount,
    isFixed,
    setIsFixed,
    scrollPositions,
    sectionRowRef,
    fakeScrollPixels,
    fakeScrollThreshold,
  });

  useEffect(() => {
    const container = sectionRowRef.current;
    if (container) {
      container.addEventListener("wheel", handleScroll);
      return () => {
        container.removeEventListener("wheel", handleScroll);
      };
    }
  }, [handleScroll, sectionRowRef]);

  useEffect(() => {
    if (sectionRowRef.current) {
      sectionRowRef.current.scrollTop = scrollPositions[currentSection] || 0;
    }
  }, [currentSection, sectionRowRef, scrollPositions]);

  return { handleScroll };
};

export default useFakeScroll;
