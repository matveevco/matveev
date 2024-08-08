import { useState, useCallback, useMemo, useEffect, useRef } from "react";

const useCurrentSection = () => {
  const [currentSection, setCurrentSection] = useState(null);
  const [isVisibleNav, setIsVisibleNav] = useState(false);
  const observerRef = useRef(null);

  const updateCurrentSection = useCallback(() => {
    const checkAndInitialize = () => {
      const sections = document.querySelectorAll(".nav-i");

      if (sections.length === 0) {
        console.error("Sections not found in the document");
        return;
      }

      const observerOptions = {
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

        setCurrentSection(
          visibleNavSection ? visibleNavSection.className : null,
        );
        setIsVisibleNav(!!visibleNavSection);
      }, observerOptions);

      sections.forEach((section) => observerRef.current.observe(section));

      return () => observerRef.current && observerRef.current.disconnect();
    };

    const intervalId = setInterval(() => {
      if (document.querySelectorAll(".nav-i").length > 0) {
        clearInterval(intervalId);
        checkAndInitialize();
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const cleanup = updateCurrentSection();
    return cleanup;
  }, [updateCurrentSection]);

  return {
    currentSection,
    isVisibleNav,
    updateCurrentSection,
  };
};

export default useCurrentSection;
