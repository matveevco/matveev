import { useCallback } from "react";

const useScroll = (updateDarkSectionOn) => {
  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    const handleScrollEnd = () => {
      if (window.scrollY === 0) {
        updateDarkSectionOn();
        window.removeEventListener("scroll", handleScrollEnd);
      }
    };

    window.addEventListener("scroll", handleScrollEnd);
  }, [updateDarkSectionOn]);

  const scrollToSection = useCallback(
    (sectionId) => {
      const section = document.getElementById(sectionId);
      if (section) {
        const targetY = section.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top: targetY, behavior: "smooth" });

        const handleScrollEnd = () => {
          if (Math.abs(window.scrollY - targetY) < 1) {
            updateDarkSectionOn();
            window.removeEventListener("scroll", handleScrollEnd);
          }
        };

        window.addEventListener("scroll", handleScrollEnd);
      }
    },
    [updateDarkSectionOn],
  );

  return { scrollToTop, scrollToSection };
};

export default useScroll;
