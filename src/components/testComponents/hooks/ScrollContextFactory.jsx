import React, {
  createContext,
  useContext,
  useRef,
  useState,
  useEffect,
  useCallback,
  useMemo,
} from "react";

// useScrollPositions Hook
const useScrollPositions = (sectionCount) => {
  const [scrollPositions, setScrollPositions] = useState(
    Array(sectionCount).fill(0),
  );

  useEffect(() => {
    setScrollPositions(Array(sectionCount).fill(0));
  }, [sectionCount]);

  return scrollPositions;
};

// useSectionRowRef Hook
const useSectionRowRef = (currentSection, containerRef, scrollPositions) => {
  const sectionRowRef = useRef(null);

  const updateSectionRowRef = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    const newSectionRow = container.querySelector(
      `.section-row-${currentSection}`,
    );
    if (newSectionRow) {
      newSectionRow.scrollTop = scrollPositions[currentSection];
      sectionRowRef.current = newSectionRow;
    }
  }, [currentSection, containerRef, scrollPositions]);

  useEffect(() => {
    updateSectionRowRef();
  }, [updateSectionRowRef, currentSection]);

  return { sectionRowRef, updateSectionRowRef };
};

// useScrollHandler Hook
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

// useFakeScroll Hook
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
  const fakeScrollThreshold = useRef(400);

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

// useGlobalScroll Hook
const useGlobalScroll = (
  isFixed,
  setIsFixed,
  containerRef,
  updateSectionRowRef,
) => {
  const handleGlobalScroll = useCallback(() => {
    if (isFixed || !containerRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const topInView =
      containerRect.top >= 0 && containerRect.top < window.innerHeight;
    const bottomInView =
      containerRect.bottom <= window.innerHeight && containerRect.bottom > 0;

    if (topInView || bottomInView) {
      setIsFixed(true);
      updateSectionRowRef();
    }
  }, [isFixed, setIsFixed, containerRef, updateSectionRowRef]);

  useEffect(() => {
    window.addEventListener("scroll", handleGlobalScroll);
    return () => {
      window.removeEventListener("scroll", handleGlobalScroll);
    };
  }, [handleGlobalScroll]);

  return { handleGlobalScroll };
};

const createScrollContext = () => {
  const ScrollContext = createContext();

  const ScrollProvider = ({ children, sectionCount }) => {
    const [currentSection, setCurrentSection] = useState(0);
    const scrollPositions = useRef(useScrollPositions(sectionCount));
    const containerRef = useRef(null);
    const [isFixed, setIsFixed] = useState(true);

    const { sectionRowRef, updateSectionRowRef } = useSectionRowRef(
      currentSection,
      containerRef,
      scrollPositions.current,
    );

    const { handleScroll } = useFakeScroll(
      currentSection,
      setCurrentSection,
      sectionCount,
      isFixed,
      setIsFixed,
      scrollPositions.current,
      sectionRowRef,
    );

    const { handleGlobalScroll } = useGlobalScroll(
      isFixed,
      setIsFixed,
      containerRef,
      updateSectionRowRef,
    );

    const registerEventListeners = useCallback(() => {
      const sectionContainer = containerRef.current;
      if (sectionContainer) {
        sectionContainer.addEventListener("wheel", handleScroll);
        window.addEventListener("scroll", handleGlobalScroll);
        return () => {
          sectionContainer.removeEventListener("wheel", handleScroll);
          window.removeEventListener("scroll", handleGlobalScroll);
        };
      }
    }, [handleScroll, handleGlobalScroll]);

    useEffect(() => {
      updateSectionRowRef();
      const unregister = registerEventListeners();
      return () => {
        unregister && unregister();
      };
    }, [currentSection, registerEventListeners, updateSectionRowRef]);

    const value = useMemo(
      () => ({
        currentSection,
        isFixed,
        setIsFixed: (value) => {
          setIsFixed(value);
        },
      }),
      [currentSection, isFixed],
    );

    return (
      <ScrollContext.Provider value={value}>
        <div
          ref={containerRef}
          className="scroll-container"
          onMouseEnter={() => {
            if (!isFixed) {
              setIsFixed(true);
              updateSectionRowRef();
            }
          }}
        >
          {children}
        </div>
      </ScrollContext.Provider>
    );
  };

  const useScroll = () => useContext(ScrollContext);

  return { ScrollProvider, useScroll };
};

export default createScrollContext;
