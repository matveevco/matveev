import { useEffect, useState, useCallback } from "react";

const useIntersectionFadeIn = (ref) => {
  const [lastScrollTop, setLastScrollTop] = useState(0);

  const initializeObserver = useCallback(
    (element) => {
      const handleIntersect = (entries) => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;

        entries.forEach((entry) => {
          const isScrollingDown = scrollTop > lastScrollTop;

          if (entry.isIntersecting) {
            entry.target.classList.add("compVisible");
            entry.target.classList.remove("compHideT");
          } else {
            if (isScrollingDown && entry.boundingClientRect.top > 0) {
              entry.target.classList.add("compHideT");
            } else if (
              !isScrollingDown &&
              entry.boundingClientRect.bottom < window.innerHeight
            ) {
              entry.target.classList.add("compHideT");
            }
            entry.target.classList.remove("compVisible");
          }
        });

        setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop);
      };

      const observer = new IntersectionObserver(handleIntersect, {
        threshold: 0.4,
      });

      observer.observe(element);

      return () => {
        observer.disconnect();
      };
    },
    [lastScrollTop],
  );

  useEffect(() => {
    if (ref.current) {
      initializeObserver(ref.current);
    } else {
      const observer = new MutationObserver(() => {
        if (ref.current) {
          initializeObserver(ref.current);
          observer.disconnect();
        }
      });

      observer.observe(document.body, { childList: true, subtree: true });

      return () => observer.disconnect();
    }
  }, [ref, initializeObserver]);

  return null;
};

export default useIntersectionFadeIn;
