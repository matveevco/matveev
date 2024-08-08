import { useEffect, useRef, useCallback } from "react";

const useUpdateHeight = (rowRef) => {
  const resizeObserverRef = useRef(null);

  const updateHeight = useCallback(() => {
    if (rowRef.current) {
      const sectionRowWidth = rowRef.current.offsetWidth;
      const imageHeight = sectionRowWidth;
      const viewportHeight = window.innerHeight;
      const padding = (viewportHeight - imageHeight) / 2;

      rowRef.current.style.paddingTop = `${padding}px`;
      rowRef.current.style.paddingBottom = `${padding}px`;
      rowRef.current.style.height = `calc(100vh - ${padding * 2}px)`;
      rowRef.current.style.overflowY = "auto";
    }
  }, [rowRef]);

  const handleResize = useCallback(() => {
    if (window.innerWidth >= 1000) {
      window.requestAnimationFrame(updateHeight);
    }
  }, [updateHeight]);

  useEffect(() => {
    const handleWindowResize = () => {
      if (window.innerWidth >= 1000) {
        updateHeight();
        window.addEventListener("resize", handleResize);
      } else {
        window.removeEventListener("resize", handleResize);
      }
    };

    handleWindowResize();

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize, updateHeight]);

  useEffect(() => {
    if (rowRef.current) {
      resizeObserverRef.current = new ResizeObserver(() => {
        if (window.innerWidth >= 1000) {
          updateHeight();
        }
      });
      resizeObserverRef.current.observe(rowRef.current);

      return () => {
        if (resizeObserverRef.current) {
          resizeObserverRef.current.disconnect();
        }
      };
    }
  }, [updateHeight, rowRef]);

  return null;
};

export default useUpdateHeight;
