import React, { forwardRef, useRef } from "react";
import ButtonCopy from "../atoms/ButtonCopy";
import DetailsCompany from "./DetailsCompany";
import DetailsTags from "./DetailsTags";
import useAnimateChange from "../../automation/hooks/useAnimateChange";

const HeaderArticle = forwardRef(
  (
    {
      linkButton,
      companyLogos,
      companyName,
      additionalClass,
      title,
      tags,
      animateContent,
    },
    ref,
  ) => {
    const { animateChange } = useAnimateChange(animateContent, [
      { title, tags },
    ]);

    if (
      !title ||
      !companyName ||
      !companyLogos ||
      companyLogos.length === 0 ||
      !tags ||
      tags.length === 0
    ) {
      return <div>Loading article data...</div>;
    }

    return (
      <div className="content-info compHide " ref={ref}>
        <div className="section-info-top content-info-left">
          <DetailsCompany
            companyLogos={companyLogos || []}
            companyName={companyName}
            additionalClass={additionalClass || []}
          />
          <div className="section-info-header">
            <h2 className={animateChange ? "animate-end" : "animate-start"}>
              {title}
            </h2>
            <DetailsTags animate={animateChange} tags={tags} />
          </div>
        </div>
        <div className="content-info-right cir-b-fix">
          <ButtonCopy
            title="Share"
            link={linkButton}
            target="_blank"
            rel="noopener noreferrer"
          />
        </div>
      </div>
    );
  },
);

export default HeaderArticle;
