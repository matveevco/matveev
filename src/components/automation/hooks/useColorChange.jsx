import { useEffect, useCallback, useMemo } from "react";

export const useColorChangeEffect = (initialColorClass) => {
  const colorClasses = useMemo(
    () => [
      { className: "s-orange", color: "var(--color-tint-orange-100)" },
      { className: "s-blue", color: "var(--color-tint-blue-100)" },
      { className: "s-pink", color: "var(--color-tint-pink-100)" },
      { className: "s-dark", color: "var(--color-dark-100)" },
    ],
    [],
  );

  const updateBackgroundColor = useCallback(() => {
    const bodyTrack = document.querySelector(".body-track");
    if (!bodyTrack) return;

    let newColor = null;
    for (let i = colorClasses.length - 1; i >= 0; i--) {
      const { className, color } = colorClasses[i];
      const elements = bodyTrack.querySelectorAll(`.${className}`);
      for (const element of elements) {
        if (element.getBoundingClientRect().top <= 0) {
          newColor = color;
          break;
        }
      }
      if (newColor) break;
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

    const handleScrollThrottled = () => {
      window.requestAnimationFrame(updateBackgroundColor);
    };

    const bodyTrack = document.querySelector(".body-track");
    if (bodyTrack) {
      bodyTrack.addEventListener("scroll", handleScrollThrottled);
    }

    const observer = new MutationObserver((mutationsList) => {
      for (const mutation of mutationsList) {
        if (
          mutation.type === "attributes" &&
          mutation.attributeName === "class"
        ) {
          updateBackgroundColor();
          break;
        }
      }
    });

    if (bodyTrack) {
      observer.observe(bodyTrack, {
        attributes: true,
        subtree: true,
        attributeFilter: ["class"],
      });
    }

    updateBackgroundColor(); // Initial call to set the background color based on initial state

    return () => {
      if (bodyTrack) {
        bodyTrack.removeEventListener("scroll", handleScrollThrottled);
      }
      observer.disconnect();
    };
  }, [initialColorClass, colorClasses, updateBackgroundColor]);
};
