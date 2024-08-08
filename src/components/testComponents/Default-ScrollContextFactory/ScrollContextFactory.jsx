import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useRef,
  useMemo,
  useCallback,
  useLayoutEffect,
} from "react";
import useScrollPositions from "./useScrollPositions";
import useSectionRowRef from "./useSectionRowRef";
import useFakeScroll from "./useFakeScroll";
import useGlobalScroll from "./useGlobalScroll";

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
      containerRef,
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

    useLayoutEffect(() => {
      updateSectionRowRef();
      const unregister = registerEventListeners();
      return () => {
        unregister && unregister();
      };
    }, [currentSection, registerEventListeners, updateSectionRowRef]);

    const value = useMemo(() => ({ currentSection }), [currentSection]);

    return (
      <ScrollContext.Provider value={value}>
        <div ref={containerRef} className="scroll-container">
          {children}
        </div>
      </ScrollContext.Provider>
    );
  };

  const useScroll = () => useContext(ScrollContext);

  return { ScrollProvider, useScroll };
};

export default createScrollContext;
