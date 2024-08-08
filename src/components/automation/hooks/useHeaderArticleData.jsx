import { useMemo } from "react";
import articles from "../../data/articleData";
import preview from "../../data/previewData";

const useHeaderArticleData = (articleID) => {
  const articleComponents = articles[articleID];
  const headerData = preview
    ? preview.find((info) => info.link === articleID)
    : null;

  const headerArticleFromArticles = articleComponents
    ? articleComponents.find((comp) => comp.componentName === "HeaderArticle")
    : null;

  const headerArticleData = useMemo(() => {
    if (headerData && headerArticleFromArticles) {
      return {
        componentName: "HeaderArticle",
        ...headerData,
        ...headerArticleFromArticles,
      };
    }
    return null;
  }, [headerData, headerArticleFromArticles]);

  const componentsToLoad = useMemo(() => {
    if (headerArticleData) {
      return [
        headerArticleData,
        ...articleComponents.filter(
          (comp) => comp.componentName !== "HeaderArticle",
        ),
      ];
    }
    return [];
  }, [headerArticleData, articleComponents]);

  return { articleComponents, headerArticleData, componentsToLoad };
};

export default useHeaderArticleData;
