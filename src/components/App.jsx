import React, { useRef, useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";
import MainSection from "./sections/MainSection";
import AboutSection from "./sections/AboutSection";

const App = () => {
  const mainSectionRef = useRef(null);
  const aboutSectionRef = useRef(null);
  const [scrollable, setScrollable] = useState("auto");

  const [{ backgroundColor, opacityMain, opacityAbout }, set] = useSpring(
    () => ({
      backgroundColor: "var(--color-tint-orange-100)",
      opacityMain: 1,
      opacityAbout: 0,
    }),
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setScrollable("hidden"); // Блокировка скролла
            const isMainSection = entry.target.id === "mainSection";

            // Установка фона и прозрачности с индивидуальными настройками
            set({
              backgroundColor: entry.target.getAttribute("data-bg-color"),
              config: { duration: 500, delay: 0 }, // настройка для изменения фона
            });

            set({
              opacityMain: isMainSection ? 1 : 0,
              opacityAbout: isMainSection ? 0 : 1,
              onRest: () => setScrollable("auto"), // Восстановление скролла
              config: {
                duration: 400, // Плавная анимация прозрачности
                delay: isMainSection ? 0 : 0, // Различные задержки для разных секций
              },
            });

            // Доскролл до активной секции
            window.scrollTo({
              top: entry.target.offsetTop,
              behavior: "smooth",
            });
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.05,
      },
    );

    if (mainSectionRef.current) {
      observer.observe(mainSectionRef.current);
    }
    if (aboutSectionRef.current) {
      observer.observe(aboutSectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <animated.div style={{ overflow: scrollable, backgroundColor }}>
      <animated.div
        style={{ opacity: opacityMain }}
        ref={mainSectionRef}
        id="mainSection"
        data-bg-color="var(--color-tint-orange-100)"
      >
        <MainSection />
      </animated.div>
      <animated.div
        style={{ opacity: opacityAbout }}
        ref={aboutSectionRef}
        id="aboutSection"
        data-bg-color="var(--color-dark-100)"
      >
        <AboutSection />
      </animated.div>
    </animated.div>
  );
};

export default App;
