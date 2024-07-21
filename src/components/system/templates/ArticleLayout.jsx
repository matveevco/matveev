import React, { useEffect, lazy, Suspense } from "react";
import { useParams } from "react-router-dom";
import { addNavigation } from "../../automation/functions/addNavigationContext";
import { useColorChangeEffect } from "../../automation/functions/addColorChange";
import articles from "../../data/articleData";
import preview from "../../data/previewData";
import ArticleDynamicLoader from "../organisms/ArticleDynamicLoader";

const FooterModule = lazy(() => import("../pages/FooterModule"));

const ArticleLayout = () => {
  const { navRef, resetDarkSectionOn, handleNavigation } = addNavigation();
  const { articleID } = useParams();
  const articleComponents = articles[articleID];

  useColorChangeEffect();

  useEffect(() => {
    resetDarkSectionOn();
  }, [resetDarkSectionOn]);

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

  if (!articleComponents || !headerData) {
    return null;
  }

  return (
    <>
      <div className="content s-orange">
        {componentsToLoad.map((component, index) => (
          <ArticleDynamicLoader
            key={index}
            componentName={component.componentName}
            data={component}
          />
        ))}
      </div>
      <div className="s-dark" ref={navRef}>
        <Suspense fallback={null}>
          <FooterModule />
        </Suspense>
      </div>
    </>
  );
};

export default ArticleLayout;
