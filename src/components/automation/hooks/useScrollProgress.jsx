import { useState, useEffect } from "react";

const useScrollProgress = () => {
  const [scrollWidth, setScrollWidth] = useState(0);

  const handleScroll = (e) => {
    const { offset, limit } = e.detail;
    const totalHeight = limit;
    const scrolledHeight = offset;
    const width = (scrolledHeight / totalHeight) * 100;
    setScrollWidth(width);
  };

  useEffect(() => {
    window.addEventListener("smooth-scroll", handleScroll);

    return () => {
      window.removeEventListener("smooth-scroll", handleScroll);
    };
  }, []);

  return scrollWidth;
};

export default useScrollProgress;
