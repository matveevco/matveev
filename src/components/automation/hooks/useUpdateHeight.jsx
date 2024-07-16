import { useEffect } from "react";

const useUpdateHeight = (containerRef) => {
  useEffect(() => {
    const updateHeight = () => {
      if (containerRef.current) {
        const sectionRowWidth = containerRef.current.offsetWidth;
        const imageHeight = sectionRowWidth;
        const viewportHeight = window.innerHeight;
        const padding = (viewportHeight - imageHeight) / 2;

        containerRef.current.style.paddingTop = `${padding}px`;
        containerRef.current.style.paddingBottom = `${padding}px`;
        containerRef.current.style.height = `calc(100vh - ${padding * 2}px)`;
      }
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);

    return () => {
      window.removeEventListener("resize", updateHeight);
    };
  }, [containerRef]);
};

export default useUpdateHeight;
