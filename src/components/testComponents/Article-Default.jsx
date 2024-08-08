import React, { useEffect, lazy, Suspense, startTransition } from "react";
import { useParams } from "react-router-dom";
import { useNavigation } from "../../automation/hooks/NavigationContext";
import { useColorChangeEffect } from "../../automation/hooks/useColorChange";
import articles from "../../data/articleData";
import preview from "../../data/previewData";
import ArticleDynamicLoader from "../organisms/ArticleDynamicLoader";

const FooterModule = lazy(() => import("../pages/FooterModule"));

const ArticleLayout = () => {
  const { navRef, resetDarkSectionOn, handleNavigation } = useNavigation();
  const { articleID } = useParams();
  const articleComponents = articles[articleID];

  useColorChangeEffect();

  useEffect(() => {
    startTransition(() => {
      resetDarkSectionOn();
    });
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
    <div className="body-track">
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
    </div>
  );
};

export default ArticleLayout;
