import { useEffect, useCallback } from "react";

const useScrollStopEffect = (updateDarkSectionOn) => {
  const handleScrollStop = useCallback(() => {
    updateDarkSectionOn();
  }, [updateDarkSectionOn]);

  useEffect(() => {
    window.addEventListener("scroll", handleScrollStop);
    return () => {
      window.removeEventListener("scroll", handleScrollStop);
    };
  }, [handleScrollStop]);
};

export default useScrollStopEffect;
