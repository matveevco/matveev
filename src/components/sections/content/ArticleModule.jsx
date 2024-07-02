import React, { useRef, useEffect, useState } from "react";
import SectionInfo from "./atoms/SectionInfo";
import SectionImg from "./atoms/SectionImg";
import SectionReveal from "./atoms/SectionReveal";

const ArticleModule = ({ data, isActive, scrollDirection }) => {
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

    return () => {
      window.removeEventListener("resize", updateHeight);
    };
  }, []);

  useEffect(() => {
    if (isActive) {
      if (scrollDirection === "down") {
        containerRef.current.scrollTo(0, 0);
      } else if (scrollDirection === "up") {
        containerRef.current.scrollTo(0, containerRef.current.scrollHeight);
      }
    }
  }, [isActive, scrollDirection]);

  useEffect(() => {
    const container = containerRef.current;

    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = container;
      if (scrollTop === 0) {
        container.classList.add("bounce-top");
      } else if (scrollTop + clientHeight >= scrollHeight) {
        container.classList.add("bounce-bottom");
      } else {
        container.classList.remove("bounce-top", "bounce-bottom");
      }
    };

    container.addEventListener("scroll", handleScroll);

    return () => {
      container.removeEventListener("scroll", handleScroll);
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

  const renderSectionRevealGroups = () => {
    const groups = [];

    for (let i = 1; i < data.length; i += 2) {
      // Проверка наличия любых повторяющихся классов у двух подряд идущих элементов в sectionClass
      const classes1 = data[i].sectionClass;
      const classes2 = data[i + 1] ? data[i + 1].sectionClass : [];
      const commonClasses = classes1.filter((cls) => classes2.includes(cls));
      const additionalClass =
        commonClasses.length > 0 ? commonClasses.join(" ") : "";

      groups.push(
        <div
          key={i}
          className={`section-img-group section-reveal-group ${additionalClass}`}
        >
          <SectionReveal
            content={data[i]}
            onMouseEnter={() => handleMouseEnter(data[i])}
            onMouseLeave={handleMouseLeave}
          />
          {i + 1 < data.length && (
            <>
              <div className="content-separator"></div>
              <SectionReveal
                content={data[i + 1]}
                onMouseEnter={() => handleMouseEnter(data[i + 1])}
                onMouseLeave={handleMouseLeave}
              />
            </>
          )}
        </div>,
      );
      if (i + 1 < data.length - 1) {
        groups.push(
          <div key={`separator-${i}`} className="content-separator"></div>,
        );
      }
    }
    return groups;
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
        {renderSectionRevealGroups()}
      </div>
    </div>
  );
};

export default ArticleModule;
