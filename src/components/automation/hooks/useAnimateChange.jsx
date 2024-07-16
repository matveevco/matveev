import { useState, useEffect } from "react";

const useAnimateChange = (initialContent, data) => {
  const [currentContent, setCurrentContent] = useState(initialContent);
  const [animateChange, setAnimateChange] = useState(true);

  const handleMouseEnter = (content) => {
    if (window.innerWidth > 1000) {
      setAnimateChange(false);
      setTimeout(() => {
        setCurrentContent(content);
        setAnimateChange(true);
      }, 100);
    }
  };

  const handleMouseLeave = () => {
    setAnimateChange(false);
    setTimeout(() => {
      setCurrentContent(data[0]);
      setAnimateChange(true);
    }, 100);
  };

  return {
    currentContent,
    animateChange,
    handleMouseEnter,
    handleMouseLeave,
  };
};

export default useAnimateChange;
