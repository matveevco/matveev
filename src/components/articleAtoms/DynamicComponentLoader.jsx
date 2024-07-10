import React, { Suspense, lazy } from "react";

const componentMap = {
  HeaderArticle: lazy(() => import("./HeaderArticle")),
  ImageFullArticle: lazy(() => import("./ImageFullArticle")),
  ParagraphFullArticle: lazy(() => import("./ParagraphFullArticle")),
};

const DynamicComponentLoader = ({ componentName, data }) => {
  const Component = componentMap[componentName];

  return (
    <Suspense fallback={<div>Loading...</div>}>
      {Component ? (
        <Component {...data} /> // Распространяем props в загруженный компонент
      ) : (
        <p>Component not found</p>
      )}
    </Suspense>
  );
};

export default DynamicComponentLoader;
