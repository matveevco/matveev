import { useCallback } from "react";

const useScrollHandler = ({
  currentSection,
  setCurrentSection,
  sectionCount,
  isFixed,
  setIsFixed,
  scrollPositions,
  sectionRowRef,
  fakeScrollPixels,
  fakeScrollThreshold,
}) => {
  return useCallback(
    (e) => {
      if (!sectionRowRef.current || !isFixed) return;

      const deltaY = e.deltaY;
      const section = sectionRowRef.current;
      const { clientHeight, scrollHeight } = section;
      const updatedScrollTop = section.scrollTop + deltaY;

      section.scrollTop = updatedScrollTop;
      e.preventDefault();

      scrollPositions[currentSection] = updatedScrollTop;

      const isAtBottom = updatedScrollTop + clientHeight >= scrollHeight;
      const isAtTop = updatedScrollTop <= 0;

      fakeScrollPixels.current += deltaY;

      if (isAtBottom && deltaY > 0) {
        if (
          fakeScrollPixels.current >= fakeScrollThreshold.current &&
          currentSection < sectionCount - 1
        ) {
          setCurrentSection((prevSection) => prevSection + 1);
          fakeScrollPixels.current = 0;
        } else if (currentSection === sectionCount - 1) {
          setIsFixed(false);
          fakeScrollPixels.current = 0;
          window.scrollBy(0, deltaY);
        }
      } else if (isAtTop && deltaY < 0) {
        if (
          fakeScrollPixels.current <= -fakeScrollThreshold.current &&
          currentSection > 0
        ) {
          setCurrentSection((prevSection) => prevSection - 1);
          fakeScrollPixels.current = 0;
        } else if (currentSection === 0) {
          setIsFixed(false);
          fakeScrollPixels.current = 0;
          window.scrollBy(0, deltaY);
        }
      } else {
        fakeScrollPixels.current = 0;
      }
    },
    [
      currentSection,
      sectionCount,
      isFixed,
      scrollPositions,
      sectionRowRef,
      setCurrentSection,
      setIsFixed,
      fakeScrollPixels,
      fakeScrollThreshold,
    ],
  );
};

export default useScrollHandler;
