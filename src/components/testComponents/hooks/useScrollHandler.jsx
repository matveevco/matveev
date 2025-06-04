import { useEffect, useCallback, useRef } from "react";

const useScrollHandler = (rowRef) => {
  const isDraggingRef = useRef(false);

  const handleScroll = useCallback(() => {
    const container = rowRef.current;
    if (container && !isDraggingRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = container;

      if (scrollTop === 0) {
        container.classList.add("bounce-top");
        container.classList.remove("bounce-bottom");
      } else if (scrollTop + clientHeight >= scrollHeight) {
        container.classList.add("bounce-bottom");
        container.classList.remove("bounce-top");
      } else {
        container.classList.remove("bounce-top", "bounce-bottom");
      }
    }
  }, [rowRef]);

  const handleMouseDown = useCallback(() => {
    isDraggingRef.current = true;
  }, []);

  const handleMouseUp = useCallback(() => {
    isDraggingRef.current = false;
    handleScroll();
  }, [handleScroll]);

  useEffect(() => {
    const container = rowRef.current;
    if (!container) return;

    const handleResize = () => {
      if (window.innerWidth >= 1000) {
        container.addEventListener("scroll", handleScroll);
        container.addEventListener("mousedown", handleMouseDown);
        container.addEventListener("mouseup", handleMouseUp);
        container.addEventListener("mouseleave", handleMouseUp);
      } else {
        container.removeEventListener("scroll", handleScroll);
        container.removeEventListener("mousedown", handleMouseDown);
        container.removeEventListener("mouseup", handleMouseUp);
        container.removeEventListener("mouseleave", handleMouseUp);
      }
    };

    // Initial check
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      container.removeEventListener("scroll", handleScroll);
      container.removeEventListener("mousedown", handleMouseDown);
      container.removeEventListener("mouseup", handleMouseUp);
      container.removeEventListener("mouseleave", handleMouseUp);
      window.removeEventListener("resize", handleResize);
    };
  }, [handleScroll, handleMouseDown, handleMouseUp, rowRef]);

  return null;
};

export default useScrollHandler;
