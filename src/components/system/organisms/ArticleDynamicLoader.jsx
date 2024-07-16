import React, { Suspense, lazy } from "react";

const componentMap = {
  HeaderArticle: lazy(() => import("../molecules/ArticleHeader")),
  Image: lazy(() => import("../molecules/ArticleImage")),
  Paragraph: lazy(() => import("../molecules/ArticleParagraph")),
  Paragraph_and_Image: lazy(() => import("../molecules/ArticleParagraphImage")),
  Figma: lazy(() => import("../molecules/ArticleFigma")),
  Credits: lazy(() => import("../molecules/ArticleCredits")),
  Separator: lazy(() => import("../molecules/ArticleSeparator")),
};

const ArticleDynamicLoader = ({ componentName, data }) => {
  const Component = componentMap[componentName];

  return (
    <Suspense fallback={<div>Loading component...</div>}>
      {Component ? <Component {...data} /> : <p>Component not found</p>}
    </Suspense>
  );
};

export default ArticleDynamicLoader;
