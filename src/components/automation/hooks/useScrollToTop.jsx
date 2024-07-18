import { useCallback, useRef, useEffect } from "react";
import Scrollbar from "smooth-scrollbar";

export const useScroll = () => {
  const containerRef = useRef(null);
  const scrollbarRef = useRef(null);
  const timeoutIdRef = useRef(null);

  useEffect(() => {
    containerRef.current = document.querySelector(".smooth-scroll-container");
    scrollbarRef.current = Scrollbar.get(containerRef.current);

    return () => {
      if (timeoutIdRef.current) {
        clearTimeout(timeoutIdRef.current);
      }
    };
  }, []);

  const scrollToTop = useCallback(() => {
    if (scrollbarRef.current) {
      scrollbarRef.current.scrollTo(0, 0, 600);
      timeoutIdRef.current = setTimeout(() => {}, 600);
    }
  }, []);

  return { scrollToTop };
};
