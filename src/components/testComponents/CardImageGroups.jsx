import React from "react";
import CardImageReveal from "../molecules/CardImageReveal";

const CardImageGroups = ({ data, handleMouseEnter, handleMouseLeave }) => {
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
        <CardImageReveal
          content={data[i]}
          onMouseEnter={() => handleMouseEnter(data[i])}
          onMouseLeave={handleMouseLeave}
        />
        {i + 1 < data.length && (
          <>
            <div className="content-separator"></div>
            <CardImageReveal
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

export default CardImageGroups;
