import React, { useRef, useEffect } from "react";
import SectionInfo from "./atoms/SectionInfo";
import SectionCard from "./atoms/SectionCard";

const CardsModule = ({ content, isActive, scrollDirection }) => {
  const containerRef = useRef(null);
  const currentContent = content[0];

  // Обновление высоты и отступов контейнера
  useEffect(() => {
    const updateHeight = () => {
      if (containerRef.current) {
        const sectionRowWidth = containerRef.current.offsetWidth;
        const imageHeight = sectionRowWidth;
        const viewportHeight = window.innerHeight;
        const padding = (viewportHeight - imageHeight) / 2;

        containerRef.current.style.paddingTop = `${padding}px`;
        containerRef.current.style.paddingBottom = `${padding}px`;
        containerRef.current.style.height = `calc(100vh - ${padding * 2}px)`;
      }
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);

    return () => {
      window.removeEventListener("resize", updateHeight);
    };
  }, []);

  // Обработка скролла
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

  // Рендеринг групп карт
  const renderSectionCardsGroups = () => {
    const groups = [];
    const cards = currentContent.card;

    for (let i = 0; i < cards.length; i += 2) {
      groups.push(
        <div className="section-img-group" key={i}>
          <SectionCard content={cards[i]} />
          {i + 1 < cards.length && <SectionCard content={cards[i + 1]} />}
        </div>,
      );
    }
    return groups;
  };

  return (
    <div className="section section-dark">
      <SectionInfo content={currentContent} />
      <div
        ref={containerRef}
        className="section-row"
        style={{ overflowY: "auto" }}
      >
        {renderSectionCardsGroups()}
      </div>
    </div>
  );
};

export default CardsModule;
