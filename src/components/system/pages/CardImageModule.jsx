import React, { useRef } from "react";
import Details from "../molecules/Details";
import CardImage from "../molecules/CardImage";
import CardImageGroups from "../organisms/CardImageGroups";
import useAnimateChange from "../../automation/hooks/useAnimateChange";
import useUpdateHeight from "../../automation/hooks/useUpdateHeight";

const CardImageModule = ({ data, isActive }) => {
  const containerRef = useRef(null);
  const { currentContent, animateChange, handleMouseEnter, handleMouseLeave } =
    useAnimateChange(data[0], data);

  useUpdateHeight(containerRef);

  return (
    <div className="section visible-nav">
      <Details
        useLink={true}
        content={currentContent}
        animate={animateChange}
      />
      <div
        ref={containerRef}
        className="section-row"
        style={{ overflowY: isActive ? "auto" : "hidden" }}
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
};

export default CardImageModule;
