import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
} from "react";

const ScrollContext = createContext();

export const ScrollProvider = ({ children, sectionCount }) => {
  const [currentSection, setCurrentSection] = useState(0);
  const scrollPositions = useRef(Array(sectionCount).fill(0));
  const fakeScrollPixels = useRef(0);
  const sectionRowRef = useRef(null);
  const fakeScrollThreshold = 600;

  const updateSectionRowRef = useCallback(() => {
    sectionRowRef.current = document.querySelector(
      `.section-row-${currentSection}`,
    );
    if (sectionRowRef.current) {
      sectionRowRef.current.scrollTop = scrollPositions.current[currentSection];
      console.log(
        `Updated sectionRowRef to .section-row-${currentSection} with scrollTop:`,
        sectionRowRef.current.scrollTop,
      );
    } else {
      console.log(`Failed to find .section-row-${currentSection}`);
    }
  }, [currentSection]);

  const handleScroll = useCallback(
    (e) => {
      const sectionContainer = document.querySelector(".section-container");
      if (
        !sectionContainer ||
        !sectionContainer.contains(e.target) ||
        !sectionRowRef.current
      )
        return;

      sectionRowRef.current.scrollTop += e.deltaY;
      e.preventDefault();

      const updatedScrollTop = sectionRowRef.current.scrollTop;
      scrollPositions.current[currentSection] = updatedScrollTop;

      console.log(
        "Scroll Event:",
        e.deltaY,
        "ScrollTop:",
        updatedScrollTop,
        "ScrollHeight:",
        sectionRowRef.current.scrollHeight,
        "ClientHeight:",
        sectionRowRef.current.clientHeight,
        "Current Section:",
        currentSection,
        "FakeScrollPixels:",
        fakeScrollPixels.current,
      );

      if (
        updatedScrollTop + sectionRowRef.current.clientHeight >=
          sectionRowRef.current.scrollHeight &&
        e.deltaY > 0
      ) {
        fakeScrollPixels.current += e.deltaY;
        if (
          fakeScrollPixels.current >= fakeScrollThreshold &&
          currentSection < sectionCount - 1
        ) {
          setCurrentSection((prevSection) => {
            const newSection = prevSection + 1;
            console.log("Incrementing section to:", newSection);
            return newSection;
          });
          fakeScrollPixels.current = 0;
        }
      } else if (updatedScrollTop <= 0 && e.deltaY < 0) {
        fakeScrollPixels.current += e.deltaY;
        if (
          fakeScrollPixels.current <= -fakeScrollThreshold &&
          currentSection > 0
        ) {
          setCurrentSection((prevSection) => {
            const newSection = prevSection - 1;
            console.log("Decrementing section to:", newSection);
            return newSection;
          });
          fakeScrollPixels.current = 0;
        }
      } else {
        if (
          (currentSection === 0 && e.deltaY > 0) ||
          (currentSection === sectionCount - 1 && e.deltaY < 0)
        ) {
          fakeScrollPixels.current = 0;
        }
      }
    },
    [currentSection, sectionCount],
  );

  useEffect(() => {
    scrollPositions.current = Array(sectionCount).fill(0);
    console.log("Reset scrollPositions:", scrollPositions.current);
  }, [sectionCount]);

  useEffect(() => {
    updateSectionRowRef();

    const sectionContainer = document.querySelector(".section-container");
    if (sectionContainer) {
      sectionContainer.addEventListener("wheel", handleScroll);
      return () => {
        sectionContainer.removeEventListener("wheel", handleScroll);
      };
    }
  }, [currentSection, handleScroll, updateSectionRowRef]);

  useEffect(() => {
    if (sectionRowRef.current) {
      sectionRowRef.current.scrollTop = scrollPositions.current[currentSection];
    }
  }, [currentSection]);

  const value = useMemo(() => ({ currentSection }), [currentSection]);

  console.log("sectionCount:", sectionCount);
  console.log("scrollPositions:", scrollPositions);

  return (
    <ScrollContext.Provider value={value}>{children}</ScrollContext.Provider>
  );
};

export const useScroll = () => useContext(ScrollContext);
