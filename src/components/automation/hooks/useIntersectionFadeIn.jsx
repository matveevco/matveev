import { useEffect } from "react";

const useIntersectionFadeIn = (ref) => {
  useEffect(() => {
    const initializeObserver = () => {
      const element = ref.current;

      if (!element) {
        console.error("Ref is not attached to any element");
        return;
      }

      element.style.opacity = 0; // Initial opacity set to 0

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.style.transition = "opacity 1s";
              entry.target.style.opacity = 1;
            }
          });
        },
        { threshold: 0.1 },
      );

      observer.observe(element);
      console.log("Observer attached to element");

      return () => {
        observer.unobserve(element);
        console.log("Observer detached from element");
      };
    };

    const mutationObserver = new MutationObserver(() => {
      if (ref.current) {
        initializeObserver();
        mutationObserver.disconnect(); // Disconnect the mutation observer after initialization
      }
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      mutationObserver.disconnect();
    };
  }, [ref]);
};

export default useIntersectionFadeIn;
