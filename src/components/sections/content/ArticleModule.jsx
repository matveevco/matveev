import React, { useRef, useEffect, useState } from "react";
import SectionInfo from "./atoms/SectionInfo";
import SectionImg from "./atoms/SectionImg";
import SectionReveal from "./atoms/SectionReveal";

const ArticleModule = ({ data }) => {
  const containerRef = useRef(null);
  const [currentContent, setCurrentContent] = useState(data[0]); // Текущий контент для отображения
  const [animateChange, setAnimateChange] = useState(true);

  useEffect(() => {
    const updateHeight = () => {
      if (containerRef.current) {
        const sectionRowWidth = containerRef.current.offsetWidth; // Вычисляем ширину section-row
        const imageHeight = sectionRowWidth; // Устанавливаем высоту изображения равной ширине контейнера
        const viewportHeight = window.innerHeight;
        const padding = (viewportHeight - imageHeight) / 2; // Вычисляем отступ для центрирования первого и последнего изображения

        containerRef.current.style.paddingTop = `${padding}px`;
        containerRef.current.style.paddingBottom = `${padding}px`;
        containerRef.current.style.height = `calc(100vh - ${padding * 2}px)`; // Высота контейнера подгоняется под видимую часть экрана
      }
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);

    const handleGlobalScroll = (event) => {
      if (containerRef.current) {
        containerRef.current.scrollTop += event.deltaY;
      }
    };

    window.addEventListener("wheel", handleGlobalScroll);

    return () => {
      window.removeEventListener("resize", updateHeight);
      window.removeEventListener("wheel", handleGlobalScroll);
    };
  }, []);

  const handleMouseEnter = (content) => {
    if (window.innerWidth > 1000) {
      setAnimateChange(false); // Сначала удаляем анимацию
      setTimeout(() => {
        setCurrentContent(content);
        setAnimateChange(true); // Затем снова активируем анимацию
      }, 100); // Минимальная задержка для повторного применения анимации
    }
  };

  const handleMouseLeave = () => {
    setAnimateChange(false); // Удаление анимации
    setTimeout(() => {
      setCurrentContent(data[0]); // Возврат к начальному контенту
      setAnimateChange(true); // Восстановление анимации
    }, 100);
  };

  return (
    <div className="section">
      <SectionInfo
        useLink={true}
        content={currentContent}
        animate={animateChange}
      />
      <div
        ref={containerRef}
        className="section-row"
        style={{ overflowY: "auto" }}
      >
        <SectionImg useLink={true} content={data[0]} />
        <div className="content-separator"></div>
        <div className="section-img-group section-reveal-group">
          <SectionReveal
            content={data[1]}
            onMouseEnter={() => handleMouseEnter(data[1])}
            onMouseLeave={handleMouseLeave}
          />
          <div className="content-separator"></div>
          <SectionReveal
            content={data[2]}
            onMouseEnter={() => handleMouseEnter(data[2])}
            onMouseLeave={handleMouseLeave}
          />
        </div>
        <div className="content-separator"></div>
        <SectionReveal
          content={data[3]}
          onMouseEnter={() => handleMouseEnter(data[3])}
          onMouseLeave={handleMouseLeave}
        />
      </div>
    </div>
  );
};

export default ArticleModule;
