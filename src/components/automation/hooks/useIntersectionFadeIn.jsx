import { useEffect, useState } from "react";

const useIntersectionFadeIn = (ref) => {
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const initializeObserver = () => {
      const element = ref.current;

      if (!element) {
        console.error("Ref is not attached to any element");
        return;
      }

      const handleIntersect = (entries) => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;

        entries.forEach((entry) => {
          const isScrollingDown = scrollTop > lastScrollTop;

          if (entry.isIntersecting) {
            entry.target.classList.add("compVisible");
            entry.target.classList.remove("compHideT");
          } else {
            if (isScrollingDown) {
              if (entry.boundingClientRect.top < 0) {
                entry.target.classList.add("compHideT");
              }
              entry.target.classList.remove("compVisible");
            } else {
              if (entry.boundingClientRect.bottom > window.innerHeight) {
                entry.target.classList.remove("compVisible", "compHideT");
              } else {
                entry.target.classList.remove("compVisible");
              }
            }
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
    };

    const mutationObserver = new MutationObserver(() => {
      if (ref.current) {
        initializeObserver();
        mutationObserver.disconnect();
      }
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      mutationObserver.disconnect();
    };
  }, [ref, lastScrollTop]);

  return null;
};

export default useIntersectionFadeIn;
