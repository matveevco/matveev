import { useState, useEffect, useCallback } from "react";

const useAnimateChange = (initialContent, data) => {
  const [currentContent, setCurrentContent] = useState(initialContent);
  const [animateChange, setAnimateChange] = useState(true);

  const handleMouseEnter = useCallback((content) => {
    if (window.innerWidth > 1000) {
      setAnimateChange(false);
      requestAnimationFrame(() => {
        setCurrentContent(content);
        setAnimateChange(true);
      });
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    setAnimateChange(false);
    requestAnimationFrame(() => {
      setCurrentContent(data[0]);
      setAnimateChange(true);
    });
  }, [data]);

  return {
    currentContent,
    animateChange,
    handleMouseEnter,
    handleMouseLeave,
  };
};

export default useAnimateChange;
