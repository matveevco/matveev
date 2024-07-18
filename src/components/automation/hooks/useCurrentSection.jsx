import { useState, useEffect, useCallback, useMemo } from "react";

const useCurrentSection = () => {
  const [currentSection, setCurrentSection] = useState(null);

  const updateCurrentSection = useCallback((sectionsRef) => {
    if (!sectionsRef.current) return;

    const observerOptions = {
      rootMargin: "-50% 0px -50% 0px",
      threshold: [0, 0.5, 1],
    };

    const observer = new IntersectionObserver((entries) => {
      const intersectingSections = entries
        .filter((entry) => entry.isIntersecting)
        .map((entry) => entry.target.id || entry.target.className);

      if (intersectingSections.length > 0) {
        setCurrentSection(intersectingSections[0]);
      } else {
        setCurrentSection(null);
      }
    }, observerOptions);

    sectionsRef.current.forEach((section) => {
      if (section) {
        observer.observe(section);
        const nestedSections = section.querySelectorAll(".visible-nav");
        nestedSections.forEach((nestedSection) =>
          observer.observe(nestedSection),
        );
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const memoizedUpdateCurrentSection = useMemo(
    () => updateCurrentSection,
    [updateCurrentSection],
  );

  return { currentSection, updateCurrentSection: memoizedUpdateCurrentSection };
};

export default useCurrentSection;
