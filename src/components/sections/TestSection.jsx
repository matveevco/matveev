import React, { useRef, useState, useEffect } from "react";
import TestComp from "./content/TestComp";

const TestSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const isScrolling = useRef(false);
  const direction = useRef("down");

  const handleGlobalScroll = (event) => {
    const deltaY = event.deltaY;
    const sections = document.querySelectorAll(".section-row");
    const currentSection = sections[activeIndex];

    if (!currentSection) return;

    const { scrollTop, scrollHeight, clientHeight } = currentSection;

    if (deltaY > 0 && scrollTop + clientHeight >= scrollHeight) {
      if (!isScrolling.current && activeIndex < sections.length - 1) {
        direction.current = "down";
        isScrolling.current = true;
        setTimeout(() => {
          setActiveIndex((prevIndex) => prevIndex + 1);
          isScrolling.current = false;
        }, 800);
      }
    } else if (deltaY < 0 && scrollTop <= 0) {
      if (!isScrolling.current && activeIndex > 0) {
        direction.current = "up";
        isScrolling.current = true;
        setTimeout(() => {
          setActiveIndex((prevIndex) => prevIndex - 1);
          isScrolling.current = false;
        }, 800);
      }
    } else {
      currentSection.scrollTop += deltaY;
    }

    event.preventDefault();
  };

  useEffect(() => {
    window.addEventListener("wheel", handleGlobalScroll, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleGlobalScroll);
    };
  }, [activeIndex]);

  const colors = [
    "var(--color-tint-orange-100)",
    "var(--color-tint-blue-100)",
    "var(--color-tint-pink-100)",
  ];
  const modulesData = [
    [
      { src: "images/previews/pw1-prisma.png", alt: "Image 1" },
      { src: "images/previews/pw2-prisma.png", alt: "Image 2" },
      { src: "images/previews/pw3-prisma.png", alt: "Image 3" },
      { src: "images/previews/pw4-prisma.png", alt: "Image 4" },
    ],
    [
      { src: "images/previews/pw1-vtb.png", alt: "Image 1" },
      { src: "images/previews/pw2-vtb.png", alt: "Image 2" },
      { src: "images/previews/pw3-vtb.png", alt: "Image 3" },
      { src: "images/previews/pw4-vtb.png", alt: "Image 4" },
    ],
    [
      { src: "images/previews/pw1-lm.png", alt: "Image 1" },
      { src: "images/previews/pw2-lm.png", alt: "Image 2" },
      { src: "images/previews/pw3-lm.png", alt: "Image 3" },
      { src: "images/previews/pw4-lm.png", alt: "Image 4" },
    ],
  ];

  return (
    <div style={{ position: "relative", height: "100vh" }}>
      {modulesData.map((data, index) => (
        <div
          key={index}
          className="section"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity:
              index === activeIndex ||
              (index === modulesData.length - 1 &&
                activeIndex === modulesData.length - 1)
                ? 1
                : 0,
            transition: "opacity 1s",
            pointerEvents: index === activeIndex ? "auto" : "none",
            backgroundColor: colors[index],
            zIndex: index === activeIndex ? 1 : 0, // Ensure active section is on top
          }}
        >
          <TestComp
            isActive={index === activeIndex}
            images={data}
            scrollDirection={direction.current}
          />
        </div>
      ))}
    </div>
  );
};

export default TestSection;
