import React, { useRef, useState, useEffect } from "react";
import { useNavigation } from "../../automation/hooks/useNavigationContext";
import { useParams } from "react-router-dom";
import SmoothScrollContainer from "../../automation/functions/addSmoothScroll";
import ArticleDynamicLoader from "../organisms/ArticleDynamicLoader";
import FooterModule from "../pages/FooterModule";
import articles from "../../data/articleData";
import preview from "../../data/previewData";
import { addColorChangeEffect } from "../../automation/functions/addColorChange";

const ArticleLayout = () => {
  const { navRef, resetDarkSectionOn, handleNavigation } = useNavigation();
  const { articleID } = useParams();
  const articleComponents = articles[articleID];
  const [handleScroll, setHandleScroll] = useState(() => () => {});
  const sectionsRef = useRef([null, null, null, null]);

  useEffect(() => {
    addColorChangeEffect(sectionsRef, setHandleScroll);
  }, [sectionsRef]);

  const headerData = preview
    ? preview.find((info) => info.link === articleID)
    : null;

  const headerArticleFromArticles = articleComponents
    ? articleComponents.find((comp) => comp.componentName === "HeaderArticle")
    : null;

  const headerArticleData =
    headerData && headerArticleFromArticles
      ? {
          componentName: "HeaderArticle",
          ...headerData,
          ...headerArticleFromArticles,
        }
      : null;

  const componentsToLoad = headerArticleData
    ? [
        headerArticleData,
        ...articleComponents.filter(
          (comp) => comp.componentName !== "HeaderArticle",
        ),
      ]
    : [];

  const handleSmoothScroll = ({ offset, limit }) => {
    const scrollEvent = new CustomEvent("smooth-scroll", {
      detail: {
        offset: offset.y,
        limit: limit.y,
      },
    });
    window.dispatchEvent(scrollEvent);
    handleScroll({ offset, limit });
  };

  useEffect(() => {
    resetDarkSectionOn();
  }, [resetDarkSectionOn]);

  if (!articleComponents || !headerData) {
    return null; // You can return a loading spinner or message if you want
  }

  return (
    <SmoothScrollContainer onScroll={handleSmoothScroll}>
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
        <div ref={navRef}>
          <FooterModule />
        </div>
      </div>
    </SmoothScrollContainer>
  );
};

export default ArticleLayout;
