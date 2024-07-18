import { useEffect } from "react";

const useIntersectionObserver = (navRef, handleIntersection) => {
  useEffect(() => {
    if (
      !navRef ||
      !navRef.current ||
      typeof handleIntersection !== "function"
    ) {
      return;
    }

    const observerOptions = {
      rootMargin: "0px 0px -95% 0px",
      threshold: [0, 1], // Combine both thresholds
    };

    const observer = new IntersectionObserver(
      handleIntersection,
      observerOptions,
    );

    const navElement = navRef.current;
    observer.observe(navElement);

    return () => {
      observer.disconnect();
    };
  }, [navRef, handleIntersection]);
};

export default useIntersectionObserver;
