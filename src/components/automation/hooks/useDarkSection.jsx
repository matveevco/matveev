import { useState, useRef, useCallback } from "react";

const useDarkSection = (navRef) => {
  const [isDarkSectionOn, setIsDarkSectionOn] = useState(false);
  const scrollRef = useRef(false);

  const handleIntersection = (entries) => {
    if (!scrollRef.current) {
      entries.forEach((entry) => {
        const isIntersecting = entry.isIntersecting;
        setIsDarkSectionOn(isIntersecting);
      });
    }
  };

  const updateDarkSectionOn = useCallback(() => {
    const navElement = navRef.current;
    if (navElement) {
      const boundingRect = navElement.getBoundingClientRect();
      const isIntersecting =
        boundingRect.top < window.innerHeight && boundingRect.bottom >= 0;
      setIsDarkSectionOn(isIntersecting);
    }
  }, [navRef]);

  const resetDarkSectionOn = useCallback(() => {
    setIsDarkSectionOn(false);
    document.body.style.backgroundColor = "var(--color-tint-orange-100)";
    setTimeout(updateDarkSectionOn, 100);
  }, [updateDarkSectionOn]);

  return {
    isDarkSectionOn,
    handleIntersection,
    updateDarkSectionOn,
    resetDarkSectionOn,
    scrollRef,
  };
};

export default useDarkSection;
