import React, {
  createContext,
  useContext,
  useRef,
  useState,
  useEffect,
  useCallback,
} from "react";
import { useNavigate, useLocation } from "react-router-dom";

// Create Navigation Context
const NavigationContext = createContext();

// Hook to use Navigation Context
export const useNavigation = () => useContext(NavigationContext);

// Dark Section Hook
const useDarkSection = (navRef) => {
  const [isDarkSectionOn, setIsDarkSectionOn] = useState(false);

  const updateDarkSectionOn = useCallback(() => {
    const navElement = navRef.current;
    if (navElement) {
      const boundingRect = navElement.getBoundingClientRect();
      const isIntersecting =
        boundingRect.top <= window.innerHeight * 0.05 &&
        boundingRect.bottom >= 0;
      setIsDarkSectionOn(isIntersecting);
    }
  }, [navRef]);

  const resetDarkSectionOn = useCallback(() => {
    setIsDarkSectionOn(false);
    setTimeout(updateDarkSectionOn, 100);
  }, [updateDarkSectionOn]);

  useEffect(() => {
    updateDarkSectionOn();
  }, [navRef, updateDarkSectionOn]);

  return {
    isDarkSectionOn,
    updateDarkSectionOn,
    resetDarkSectionOn,
  };
};

// Scroll Hook
const useScroll = (updateDarkSectionOn) => {
  const scrollToTop = useCallback(() => {
    const container = document.querySelector(".body-track");
    if (container) {
      container.scrollTo({ top: 0, behavior: "smooth" });

      const handleScrollEnd = () => {
        if (container.scrollTop === 0) {
          updateDarkSectionOn();
          container.removeEventListener("scroll", handleScrollEnd);
        }
      };

      container.addEventListener("scroll", handleScrollEnd);
    }
  }, [updateDarkSectionOn]);

  const scrollToSection = useCallback(
    (sectionId) => {
      const container = document.querySelector(".body-track");
      const section = container
        ? container.querySelector(`#${sectionId}`)
        : null;
      if (section && container) {
        const targetY =
          section.getBoundingClientRect().top + container.scrollTop;
        container.scrollTo({ top: targetY, behavior: "smooth" });

        const handleScrollEnd = () => {
          if (Math.abs(container.scrollTop - targetY) < 1) {
            updateDarkSectionOn();
            container.removeEventListener("scroll", handleScrollEnd);
          }
        };

        container.addEventListener("scroll", handleScrollEnd);
      }
    },
    [updateDarkSectionOn],
  );

  return { scrollToTop, scrollToSection };
};

// Navigation Handler Hook
const useNavigationHandler = (scrollToSection) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleNavigation = useCallback(
    (sectionId) => {
      if (pathname === "/") {
        scrollToSection(sectionId);
      } else {
        navigate(`/#${sectionId}`);
        setTimeout(() => {
          scrollToSection(sectionId);
        }, 100);
      }
    },
    [navigate, pathname, scrollToSection],
  );

  return handleNavigation;
};

// Current Section Hook
const useCurrentSection = () => {
  const [currentSection, setCurrentSection] = useState(null);
  const observerRef = useRef(null);

  const updateCurrentSection = useCallback(() => {
    const container = document.querySelector(".body-track");
    const sections = container ? container.querySelectorAll(".nav-i") : [];

    const observerOptions = {
      root: container,
      rootMargin: "-50% 0px -50% 0px",
      threshold: [0, 0.5, 1],
    };

    observerRef.current = new IntersectionObserver((entries) => {
      const intersectingSections = entries
        .filter((entry) => entry.isIntersecting)
        .map((entry) => entry.target);

      const visibleNavSection = intersectingSections.find((section) =>
        section.classList.contains("nav-i"),
      );

      setCurrentSection(visibleNavSection ? visibleNavSection.className : null);
    }, observerOptions);

    sections.forEach((section) => observerRef.current.observe(section));

    return () => observerRef.current && observerRef.current.disconnect();
  }, []);

  useEffect(() => {
    const cleanup = updateCurrentSection();
    return cleanup;
  }, [updateCurrentSection]);

  return {
    currentSection,
    updateCurrentSection,
  };
};

// Scroll Stop Effect Hook
const useScrollStopEffect = (updateDarkSectionOn) => {
  const handleScrollStop = useCallback(() => {
    updateDarkSectionOn();
  }, [updateDarkSectionOn]);

  useEffect(() => {
    const container = document.querySelector(".body-track");
    if (container) {
      container.addEventListener("scroll", handleScrollStop);
      return () => {
        container.removeEventListener("scroll", handleScrollStop);
      };
    }
  }, [handleScrollStop]);
};

// Pop State Effect Hook
const usePopStateEffect = (resetDarkSectionOn) => {
  useEffect(() => {
    const handlePopState = () => {
      if (typeof resetDarkSectionOn === "function") {
        resetDarkSectionOn();
      }
    };
    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [resetDarkSectionOn]);
};

// Combined Navigation Provider
export const NavigationProvider = ({ children }) => {
  const [isApp, setIsApp] = useState(false);
  const navRef = useRef(null);

  const { isDarkSectionOn, updateDarkSectionOn, resetDarkSectionOn } =
    useDarkSection(navRef);
  const { scrollToTop, scrollToSection } = useScroll(updateDarkSectionOn);
  const handleNavigation = useNavigationHandler(scrollToSection);
  const { currentSection, updateCurrentSection } = useCurrentSection();

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
