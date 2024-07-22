import { useEffect, useCallback } from "react";

export const useColorChangeEffect = (initialColorClass) => {
  const colorClasses = [
    { className: "s-orange", color: "var(--color-tint-orange-100)" },
    { className: "s-blue", color: "var(--color-tint-blue-100)" },
    { className: "s-pink", color: "var(--color-tint-pink-100)" },
    { className: "s-dark", color: "var(--color-dark-100)" },
  ];

  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY;
    let newColor = null;

    for (let i = colorClasses.length - 1; i >= 0; i--) {
      const { className, color } = colorClasses[i];
      const elements = document.querySelectorAll(`.${className}`);

      for (const element of elements) {
        if (element.getBoundingClientRect().top <= 0) {
          newColor = color;
          break;
        }
      }

      if (newColor) {
        break;
      }
    }

    if (newColor) {
      document.body.style.backgroundColor = newColor;
    }
  }, [colorClasses]);

  useEffect(() => {
    if (initialColorClass) {
      const initialColor = colorClasses.find(
        (c) => c.className === initialColorClass,
      )?.color;
      if (initialColor) {
        document.body.style.backgroundColor = initialColor;
      }
    }

    const scrollHandler = () => handleScroll();
    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [handleScroll, initialColorClass, colorClasses]);
};
