import { useCallback, useRef } from "react";
import Scrollbar from "smooth-scrollbar";

const useScroll = (updateDarkSectionOn, scrollRef) => {
  const scrollToTop = useCallback(() => {
    const container = document.querySelector(".smooth-scroll-container");
    const scrollbar = Scrollbar.get(container);

    if (scrollbar) {
      scrollRef.current = true;
      scrollbar.scrollTo(0, 0, 600);
      setTimeout(() => {
        scrollRef.current = false;
        updateDarkSectionOn();
      }, 600);
    }
  }, [updateDarkSectionOn]);

  const scrollToSection = useCallback(
    (sectionId) => {
      const container = document.querySelector(".smooth-scroll-container");
      const scrollbar = Scrollbar.get(container);
      const section = document.getElementById(sectionId);

      if (scrollbar && section) {
        const targetY =
          section.getBoundingClientRect().top + scrollbar.offset.y;
        scrollRef.current = true;
        scrollbar.scrollTo(0, targetY, 600);
        setTimeout(() => {
          scrollRef.current = false;
          updateDarkSectionOn();
        }, 600);
      }
    },
    [updateDarkSectionOn],
  );

  return { scrollToTop, scrollToSection };
};

export default useScroll;
