import { useCallback, useEffect } from "react";

const useGlobalScroll = (
  isFixed,
  setIsFixed,
  containerRef,
  updateSectionRowRef,
) => {
  const handleGlobalScroll = useCallback(() => {
    if (isFixed || !containerRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const topInView =
      containerRect.top >= 0 && containerRect.top < window.innerHeight;
    const bottomInView =
      containerRect.bottom <= window.innerHeight && containerRect.bottom > 0;

    if (topInView || bottomInView) {
      setIsFixed(true);
      updateSectionRowRef();
    }
  }, [isFixed, setIsFixed, containerRef, updateSectionRowRef]);

  useEffect(() => {
    window.addEventListener("scroll", handleGlobalScroll);
    return () => {
      window.removeEventListener("scroll", handleGlobalScroll);
    };
  }, [handleGlobalScroll]);

  return { handleGlobalScroll };
};

export default useGlobalScroll;
