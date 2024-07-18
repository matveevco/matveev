import { useEffect } from "react";
import Scrollbar from "smooth-scrollbar";

const useScrollStopEffect = (updateDarkSectionOn, scrollRef) => {
  useEffect(() => {
    const container = document.querySelector(".smooth-scroll-container");
    const scrollbar = Scrollbar.get(container);

    if (scrollbar) {
      const onScrollStop = () => {
        scrollRef.current = false;
        updateDarkSectionOn();
      };
      scrollbar.addListener(onScrollStop);
      return () => scrollbar.removeListener(onScrollStop);
    }
  }, [updateDarkSectionOn, scrollRef]);
};

export default useScrollStopEffect;
