import { useEffect } from "react";

const usePopStateEffect = (resetDarkSectionOn) => {
  useEffect(() => {
    const handlePopState = () => {
      if (typeof resetDarkSectionOn === "function") {
        resetDarkSectionOn();
      }
    };
    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [resetDarkSectionOn]);
};

export default usePopStateEffect;
