import { useState, useCallback, useEffect } from "react";

const useDarkSection = (navRef) => {
  const [isDarkSectionOn, setIsDarkSectionOn] = useState(false);

  const handleIntersection = useCallback((entries) => {
    entries.forEach((entry) => {
      const isIntersecting =
        entry.isIntersecting &&
        entry.boundingClientRect.top <= window.innerHeight * 0.05;
      setIsDarkSectionOn(isIntersecting);
    });
  }, []);

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
    if (!navRef.current) return;

    const observerOptions = {
      rootMargin: "-5% 0px 0px 0px",
      threshold: [0, 1],
    };

    const observer = new IntersectionObserver(
      handleIntersection,
      observerOptions,
    );
    observer.observe(navRef.current);

    return () => {
      observer.disconnect();
    };
  }, [navRef, handleIntersection]);

  return {
    isDarkSectionOn,
    updateDarkSectionOn,
    resetDarkSectionOn,
  };
};

export default useDarkSection;
