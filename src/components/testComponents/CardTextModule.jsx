import React, { useRef, forwardRef } from "react";
import Details from "../molecules/Details";
import CardText from "../molecules/CardText";
import CardTextGroups from "../organisms/CardTextGroups";
import useUpdateHeight from "../../automation/hooks/useUpdateHeight";
import useScrollHandler from "../../automation/hooks/useScrollHandler";
import useAnimateChange from "../../automation/hooks/useAnimateChange";

const CardTextModule = forwardRef(
  (
    {
      content,
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
    const { currentContent, animateChange } = useAnimateChange(
      content[0],
      content,
    );

    useUpdateHeight(rowRef);
    useScrollHandler(rowRef, isActive, scrollDirection);

    return (
      <div
        className={`section visible-nav sd ${classSection}`}
        id={idSection}
        ref={ref}
        style={{
          opacity: newIndex === index ? 1 : 0,
          zIndex: newIndex === index ? 3 : 2,
        }}
      >
        <Details
          content={currentContent}
          animate={animateChange}
          index={index}
          newIndex={newIndex}
        />
        <div ref={rowRef} className={`section-row section-row-${index}`}>
          <CardTextGroups
            cards={currentContent.card}
            CardComponent={CardText}
          />
        </div>
      </div>
    );
  },
);

export default CardTextModule;
