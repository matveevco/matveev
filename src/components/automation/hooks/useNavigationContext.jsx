import React, {
  createContext,
  useContext,
  useRef,
  useState,
  useEffect,
} from "react";
import useDarkSection from "./useDarkSection";
import useScroll from "./useScroll";
import useNavigationHandler from "./useNavigationHandler";
import useIntersectionObserver from "./useIntersectionObserver";
import useCurrentSection from "./useCurrentSection";
import useScrollStopEffect from "./useScrollStopEffect";
import usePopStateEffect from "./usePopStateEffect";

const NavigationContext = createContext();

export const useNavigation = () => useContext(NavigationContext);

export const NavigationProvider = ({ children }) => {
  const [isApp, setIsApp] = useState(false);
  const navRef = useRef(null);

  const {
    isDarkSectionOn,
    handleIntersection,
    updateDarkSectionOn,
    resetDarkSectionOn,
    scrollRef,
  } = useDarkSection(navRef);
  const { scrollToTop, scrollToSection } = useScroll(
    updateDarkSectionOn,
    scrollRef,
  );
  const handleNavigation = useNavigationHandler(scrollToSection);
  const { currentSection, updateCurrentSection } = useCurrentSection();

  useIntersectionObserver(navRef, handleIntersection);
  useScrollStopEffect(updateDarkSectionOn, scrollRef);
  usePopStateEffect(resetDarkSectionOn);

  useEffect(() => {
    const sectionsRef = {
      current: document.querySelectorAll(".section"),
    };
    updateCurrentSection(sectionsRef);
  }, [updateCurrentSection]);

  return (
    <NavigationContext.Provider
      value={{
        isDarkSectionOn,
        isApp,
        setIsApp,
        navRef,
        scrollToTop,
        scrollToSection,
        handleNavigation,
        resetDarkSectionOn,
        currentSection,
        updateCurrentSection,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
};
