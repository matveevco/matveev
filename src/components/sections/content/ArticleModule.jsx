import React, { useRef, useEffect, useState } from "react";
import SectionInfo from "./atoms/SectionInfo";
import SectionImg from "./atoms/SectionImg";
import SectionReveal from "./atoms/SectionReveal";

const ArticleModule = ({ data, isActive }) => {
  const containerRef = useRef(null);
  const [currentContent, setCurrentContent] = useState(data[0]);
  const [animateChange, setAnimateChange] = useState(true);

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

  const renderSectionRevealGroups = () => {
    const groups = [];

    for (let i = 1; i < data.length; i += 2) {
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
        style={{ overflowY: isActive ? "auto" : "hidden" }}
      >
        <SectionImg useLink={true} content={data[0]} />
        <div className="content-separator"></div>
        {renderSectionRevealGroups()}
      </div>
    </div>
  );
};

export default ArticleModule;
