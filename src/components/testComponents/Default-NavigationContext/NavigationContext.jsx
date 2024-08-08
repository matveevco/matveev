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

export const addNavigation = () => useContext(NavigationContext);

export const NavigationProvider = ({ children }) => {
  const [isApp, setIsApp] = useState(false);
  const navRef = useRef(null);

  const {
    isDarkSectionOn,
    handleIntersection,
    updateDarkSectionOn,
    resetDarkSectionOn,
  } = useDarkSection(navRef);
  const { scrollToTop, scrollToSection } = useScroll(updateDarkSectionOn);
  const handleNavigation = useNavigationHandler(scrollToSection);
  const { currentSection, updateCurrentSection } = useCurrentSection();

  useIntersectionObserver(navRef, handleIntersection);
  useScrollStopEffect(updateDarkSectionOn);
  usePopStateEffect(resetDarkSectionOn);

  useEffect(() => {
    updateCurrentSection();
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
