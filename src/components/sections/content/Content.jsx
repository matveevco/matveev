import React, { useRef, useEffect, useState } from "react";
import SectionInfo from "./atoms/SectionInfo";
import SectionImg from "./atoms/SectionImg";
import SectionReveal from "./atoms/SectionReveal";
import infoPrismaContent from "../../data/InfoPrisma";

const Content = () => {
  const sectionRowRef = useRef(null); // Ссылка на контейнер для высоты и скролла
  const [currentContent, setCurrentContent] = useState(infoPrismaContent[0]); // Текущий контент для отображения
  const [animateChange, setAnimateChange] = useState(true);

  // Функция для управления прокруткой внутри scrollable-content
  const handleGlobalScroll = (event) => {
    // Ищем элемент scrollable-content внутри section-row
    const scrollableContent = sectionRowRef.current.querySelector(
      ".scrollable-content",
    );
    if (scrollableContent) {
      scrollableContent.scrollTop += event.deltaY; // Прокрутка содержимого
    }
  };

  // Обновление высоты section-row в зависимости от его ширины
  useEffect(() => {
    const updateHeight = () => {
      if (sectionRowRef.current) {
        const width = sectionRowRef.current.offsetWidth;
        sectionRowRef.current.style.height = `${width}px`; // Установка высоты равной ширине
      }
    };

    window.addEventListener("resize", updateHeight); // Обработчик изменения размера окна
    updateHeight(); // Вызов при монтировании
    window.addEventListener("wheel", handleGlobalScroll); // Установка прослушивания прокрутки на уровне window

    return () => {
      window.removeEventListener("resize", updateHeight);
      window.removeEventListener("wheel", handleGlobalScroll);
    };
  }, []);

  // Обработка наведения мыши
  const handleMouseEnter = (content) => {
    console.log("Mouse entered, content should change", content);
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
      setCurrentContent(infoPrismaContent[0]); // Возврат к начальному контенту
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
      <div ref={sectionRowRef} className="section-row section-reveal-row">
        <div className="scrollable-content">
          <SectionImg useLink={true} content={infoPrismaContent[0]} />
          <div className="content-separator"></div>
          <div className="section-img-group section-reveal-group">
            <SectionReveal
              content={infoPrismaContent[1]}
              onMouseEnter={() => handleMouseEnter(infoPrismaContent[1])}
              onMouseLeave={handleMouseLeave}
            />
            <div className="content-separator"></div>
            <SectionReveal
              content={infoPrismaContent[2]}
              onMouseEnter={() => handleMouseEnter(infoPrismaContent[2])}
              onMouseLeave={handleMouseLeave}
            />
          </div>
          <div className="content-separator"></div>
          <SectionReveal
            content={infoPrismaContent[3]}
            onMouseEnter={() => handleMouseEnter(infoPrismaContent[3])}
            onMouseLeave={handleMouseLeave}
          />
        </div>
      </div>
    </div>
  );
};

export default Content;
