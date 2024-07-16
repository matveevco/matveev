import React, { useRef } from "react";
import Details from "../molecules/Details";
import CardText from "../molecules/CardText";
import CardTextGroups from "../organisms/CardTextGroups";
import useUpdateHeight from "../../automation/hooks/useUpdateHeight";
import useScrollHandler from "../../automation/hooks/useScrollHandler";
import useAnimateChange from "../../automation/hooks/useAnimateChange";

const CardTextModule = ({ content, isActive, scrollDirection }) => {
  const containerRef = useRef(null);
  const { currentContent, animateChange } = useAnimateChange(
    content[0],
    content,
  );

  useUpdateHeight(containerRef);

  useScrollHandler(containerRef, isActive, scrollDirection);

  return (
    <div className="section section-dark">
      <Details content={currentContent} animate={animateChange} />
      <div
        ref={containerRef}
        className="section-row"
        style={{ overflowY: "auto" }}
      >
        <CardTextGroups cards={currentContent.card} CardComponent={CardText} />
      </div>
    </div>
  );
};

export default CardTextModule;
