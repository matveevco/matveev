import React, { useRef, useState, useEffect } from "react";
import ArticleModule from "./content/ArticleModule";
import InfoPrismaContent from "../data/InfoPrisma";
import InfoVTBContent from "../data/InfoVTB";
import InfoLinkmuseContent from "../data/InfoLinkmuse";

const ArticleSection = () => {
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
          setTimeout(() => {
            isScrolling.current = false;
          }, 1000); // Увеличенный таймаут для предотвращения быстрого проскальзывания
        }, 700);
      }
    } else if (deltaY < 0 && scrollTop <= 0) {
      if (!isScrolling.current && activeIndex > 0) {
        direction.current = "up";
        isScrolling.current = true;
        setTimeout(() => {
          setActiveIndex((prevIndex) => prevIndex - 1);
          setTimeout(() => {
            isScrolling.current = false;
          }, 1000); // Увеличенный таймаут для предотвращения быстрого проскальзывания
        }, 700);
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

  const modulesData = [InfoPrismaContent, InfoVTBContent, InfoLinkmuseContent];

  return (
    <div style={{ position: "relative", height: "100vh" }}>
      {modulesData.map((data, index) => (
        <div
          key={index}
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
          <ArticleModule
            isActive={index === activeIndex}
            data={data}
            scrollDirection={direction.current}
          />
        </div>
      ))}
    </div>
  );
};

export default ArticleSection;
