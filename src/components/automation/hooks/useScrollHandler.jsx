import { useEffect, useCallback } from "react";

const useScrollHandler = (containerRef, isActive, scrollDirection) => {
  const scrollContainer = useCallback(() => {
    if (containerRef.current) {
      const behavior = "smooth";
      const top =
        scrollDirection === "down" ? 0 : containerRef.current.scrollHeight;
      containerRef.current.scrollTo({ top, behavior });
    }
  }, [scrollDirection, containerRef]);

  useEffect(() => {
    if (isActive) {
      scrollContainer();
    }
  }, [isActive, scrollContainer]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = container;
      if (scrollTop === 0) {
        container.classList.add("bounce-top");
      } else if (scrollTop + clientHeight >= scrollHeight) {
        container.classList.add("bounce-bottom");
      } else {
        container.classList.remove("bounce-top", "bounce-bottom");
      }
    };

    container.addEventListener("scroll", handleScroll);
    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, [containerRef]);
};

export default useScrollHandler;
