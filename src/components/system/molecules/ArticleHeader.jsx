import React from "react";
import IconCopy from "../atoms/IconCopy";
import DetailsCompany from "./DetailsCompany";
import DetailsTags from "./DetailsTags";
import useAnimateChange from "../../automation/hooks/useAnimateChange";

const HeaderArticle = ({
  linkButton,
  companyLogos,
  companyName,
  additionalClass,
  title,
  tags,
  animateContent,
}) => {
  const { animateChange } = useAnimateChange(animateContent, [{ title, tags }]);

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
    <div className="content-info">
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
      <div className="content-info-right">
        <a
          className="button"
          href={linkButton}
          target="_blank"
          rel="noopener noreferrer"
        >
          Share
          <div className="button-icon">
            <IconCopy />
          </div>
        </a>
      </div>
    </div>
  );
};

export default HeaderArticle;
