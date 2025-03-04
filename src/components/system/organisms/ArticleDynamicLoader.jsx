import React, { Suspense, lazy, useRef, forwardRef } from "react";
import useIntersectionFadeIn from "../../automation/hooks/useIntersectionFadeIn";

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
  const fadeInRef = useRef(null);
  useIntersectionFadeIn(fadeInRef);

  console.log(fadeInRef);

  if (!Component) {
    return null;
  }

  return (
    <Suspense
      fallback={
        <div className="content-info" style={{ height: "250px" }}></div>
      }
    >
      <Component {...data} ref={fadeInRef} />
    </Suspense>
  );
};

export default ArticleDynamicLoader;
