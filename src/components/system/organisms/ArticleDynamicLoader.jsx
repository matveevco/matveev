import { Suspense, lazy } from "react";

const componentMap = {
  HeaderArticle: lazy(() => import("../molecules/ArticleHeader")),
  Image: lazy(() => import("../molecules/ArticleImage")),
  Paragraph: lazy(() => import("../molecules/ArticleParagraph")),
  Credits: lazy(() => import("../molecules/ArticleCredits")),
  Figma: lazy(() => import("../molecules/ArticleFigma")),
};

const ArticleDynamicLoader = ({ componentName, data }) => {
  const Component = componentMap[componentName];

  if (!Component) return null;

  return (
    <Suspense fallback={<div style={{ height: "250px" }}></div>}>
      <Component {...data} />
    </Suspense>
  );
};

export default ArticleDynamicLoader;
