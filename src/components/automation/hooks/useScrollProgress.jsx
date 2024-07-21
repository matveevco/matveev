import { useState, useEffect, useCallback } from "react";

const useScrollProgress = () => {
  const [scrollWidth, setScrollWidth] = useState(0);

  const handleScroll = useCallback(() => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    const totalHeight = scrollHeight - clientHeight;
    const scrolledHeight = scrollTop;
    const width = (scrolledHeight / totalHeight) * 100;
    setScrollWidth(width);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return scrollWidth;
};

export default useScrollProgress;
