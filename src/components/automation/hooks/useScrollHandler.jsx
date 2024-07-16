import { useEffect } from "react";

const useScrollHandler = (containerRef, isActive, scrollDirection) => {
  useEffect(() => {
    if (isActive) {
      if (scrollDirection === "down") {
        containerRef.current.scrollTo(0, 0);
      } else if (scrollDirection === "up") {
        containerRef.current.scrollTo(0, containerRef.current.scrollHeight);
      }
    }
  }, [isActive, scrollDirection, containerRef]);

  useEffect(() => {
    const container = containerRef.current;

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
