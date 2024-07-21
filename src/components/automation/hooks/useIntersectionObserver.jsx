import { useEffect, useRef } from "react";

const useIntersectionObserver = (navRef, handleIntersection) => {
  const observerRef = useRef(null);

  useEffect(() => {
    if (!navRef?.current || typeof handleIntersection !== "function") {
      return;
    }

    const observerOptions = {
      rootMargin: "-5% 0px 0px 0px",
      threshold: [0, 1],
    };

    observerRef.current = new IntersectionObserver(
      handleIntersection,
      observerOptions,
    );
    observerRef.current.observe(navRef.current);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [navRef, handleIntersection]);
};

export default useIntersectionObserver;
