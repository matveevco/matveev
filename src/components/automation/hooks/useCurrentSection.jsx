import { useState, useEffect, useCallback, useMemo } from "react";

const useCurrentSection = () => {
  const [currentSection, setCurrentSection] = useState(null);
  const [isVisibleNav, setIsVisibleNav] = useState(false);

  const updateCurrentSection = useCallback(() => {
    const sections = document.querySelectorAll(".section, .visible-nav");

    const observerOptions = {
      rootMargin: "-50% 0px -50% 0px",
      threshold: [0, 0.5, 1],
    };

    const observer = new IntersectionObserver((entries) => {
      const intersectingSections = entries
        .filter((entry) => entry.isIntersecting)
        .map((entry) => entry.target);

      const visibleNavSection = intersectingSections.find((section) =>
        section.classList.contains("visible-nav"),
      );

      if (visibleNavSection) {
        setCurrentSection(visibleNavSection.className);
        setIsVisibleNav(true);
      } else {
        setCurrentSection(null);
        setIsVisibleNav(false);
      }
    }, observerOptions);

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const memoizedUpdateCurrentSection = useMemo(
    () => updateCurrentSection,
    [updateCurrentSection],
  );

  return {
    currentSection,
    isVisibleNav,
    updateCurrentSection: memoizedUpdateCurrentSection,
  };
};

export default useCurrentSection;
