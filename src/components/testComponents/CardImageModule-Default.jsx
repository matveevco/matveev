import React, { useRef, forwardRef } from "react";
import Details from "../molecules/Details";
import CardImage from "../molecules/CardImage";
import CardImageGroups from "../organisms/CardImageGroups";
import useAnimateChange from "../../automation/hooks/useAnimateChange";
// import useScrollHandler from "../../automation/hooks/useScrollHandler";
import useUpdateHeight from "../../automation/hooks/useUpdateHeight";

const CardImageModule = forwardRef(
  (
    {
      data,
      // isActive,
      // scrollDirection,
      idSection,
      classSection,
    },
    ref,
  ) => {
    const containerRef = useRef(null);
    const {
      currentContent,
      animateChange,
      handleMouseEnter,
      handleMouseLeave,
    } = useAnimateChange(data[0], data);

    useUpdateHeight(containerRef);
    // useScrollHandler(containerRef, isActive, scrollDirection);

    return (
      <div
        className={`section visible-nav ${classSection}`}
        id={idSection}
        ref={ref}
      >
        <Details
          useLink={true}
          content={currentContent}
          animate={animateChange}
        />
        <div
          ref={containerRef}
          className="section-row"
          style={{ overflowY: "auto" }}
        >
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
