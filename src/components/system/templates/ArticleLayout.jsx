import React, { useRef, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import SmoothScrollContainer from "../../automation/functions/addSmoothScroll";
import ArticleDynamicLoader from "../organisms/ArticleDynamicLoader";
import FooterModule from "../pages/FooterModule";
import articles from "../../data/articleData";
import preview from "../../data/previewData";
import { addColorChangeEffect } from "../../automation/functions/addColorChange";

const ArticleLayout = () => {
  const { articleID } = useParams();
  const articleComponents = articles[articleID];
  const [handleScroll, setHandleScroll] = useState(() => () => {});
  const sectionsRef = useRef([null, null, null, null]);

  useEffect(() => {
    addColorChangeEffect(sectionsRef, setHandleScroll);
  }, [sectionsRef]);

  const headerData = preview.find((info) => info.link === articleID);

  if (!articleComponents || !headerData) {
    return <div>Loading article data...</div>;
  }

  const headerArticleFromArticles = articleComponents.find(
    (comp) => comp.componentName === "HeaderArticle",
  );

  const headerArticleData = {
    componentName: "HeaderArticle",
    ...headerData,
    ...headerArticleFromArticles,
  };

  const componentsToLoad = [
    headerArticleData,
    ...articleComponents.filter(
      (comp) => comp.componentName !== "HeaderArticle",
    ),
  ];

  return (
    <SmoothScrollContainer onScroll={handleScroll}>
      <div ref={(el) => (sectionsRef.current[0] = el)}>
        <div className="content">
          {componentsToLoad.map((component, index) => (
            <ArticleDynamicLoader
              key={index}
              componentName={component.componentName}
              data={component}
            />
          ))}
        </div>
      </div>
      <div ref={(el) => (sectionsRef.current[4] = el)}>
        <FooterModule />
      </div>
    </SmoothScrollContainer>
  );
};

export default ArticleLayout;
