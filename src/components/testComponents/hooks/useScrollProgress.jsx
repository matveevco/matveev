import { useState, useEffect, useCallback } from "react";

const useScrollProgress = () => {
  const [scrollWidth, setScrollWidth] = useState(0);

  const handleScroll = useCallback(() => {
    const bodyTrack = document.querySelector(".body-track");
    if (bodyTrack) {
      const { scrollTop, scrollHeight, clientHeight } = bodyTrack;
      const totalHeight = scrollHeight - clientHeight;
      const scrolledHeight = scrollTop;
      const width = (scrolledHeight / totalHeight) * 100;
      setScrollWidth(width);
    }
  }, []);

  useEffect(() => {
    let ticking = false;

    const handleScrollThrottled = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    const bodyTrack = document.querySelector(".body-track");
    if (bodyTrack) {
      bodyTrack.addEventListener("scroll", handleScrollThrottled);
    }

    return () => {
      if (bodyTrack) {
        bodyTrack.removeEventListener("scroll", handleScrollThrottled);
      }
    };
  }, [handleScroll]);

  return scrollWidth;
};

export default useScrollProgress;
