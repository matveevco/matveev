import { useMemo } from "react";
import articles from "../../data/articleData";
import selectedWork from "../../data/previewData/selectedWork";

const useHeaderArticleData = (articleID) => {
  const articleComponents = articles[articleID];
  const headerData = selectedWork
    ? selectedWork.find((info) => info.link === articleID)
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
