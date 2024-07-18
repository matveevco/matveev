import { useState, useEffect } from "react";

export const useScrolling = () => {
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    let timeoutId;

    const handleScroll = () => {
      setIsScrolling(true);

      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsScrolling(false);
      }, 150);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  return { isScrolling };
};
