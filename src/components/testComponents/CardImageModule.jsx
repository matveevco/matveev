import React, { useRef, forwardRef } from "react";
import Details from "../molecules/Details";
import CardImage from "../molecules/CardImage";
import CardImageGroups from "../organisms/CardImageGroups";
import useAnimateChange from "../../automation/hooks/useAnimateChange";
import useScrollHandler from "../../automation/hooks/useScrollHandler";
import useUpdateHeight from "../../automation/hooks/useUpdateHeight";

const CardImageModule = forwardRef(
  (
    {
      data,
      isActive,
      scrollDirection,
      idSection,
      classSection,
      index,
      newIndex,
    },
    ref,
  ) => {
    const rowRef = useRef(null);
    const {
      currentContent,
      animateChange,
      handleMouseEnter,
      handleMouseLeave,
    } = useAnimateChange(data[0], data);

    useUpdateHeight(rowRef);
    useScrollHandler(rowRef, isActive, scrollDirection);

    return (
      <div
        className={`section visible-nav sd ${newIndex === index ? classSection : ""}`}
        id={idSection}
        ref={ref}
        key={index}
        style={{
          opacity: newIndex === index ? 1 : 0,
          zIndex: newIndex === index ? 3 : 2,
        }}
      >
        <Details
          useLink={true}
          content={currentContent}
          animate={animateChange}
          index={index}
          newIndex={newIndex}
        />
        <div ref={rowRef} className={`section-row section-row-${index}`}>
          <CardImage useLink={true} content={data[0]} />
          <div className="content-separator"></div>
          <CardImageGroups
            data={data}
            handleMouseEnter={handleMouseEnter}
            handleMouseLeave={handleMouseLeave}
          />
        </div>
      </div>
    );
  },
);

export default CardImageModule;
