import React, { useEffect, lazy, Suspense, startTransition } from "react";
import { useParams } from "react-router-dom";
import { useNavigation } from "../../automation/hooks/NavigationContext";
import { useColorChangeEffect } from "../../automation/hooks/useColorChange";
import useHeaderArticleData from "../../automation/hooks/useHeaderArticleData";
import ArticleDynamicLoader from "../organisms/ArticleDynamicLoader";

const FooterModule = lazy(() => import("../pages/FooterModule"));

const ArticleLayout = () => {
  const { navRef, resetDarkSectionOn } = useNavigation();
  const { articleID } = useParams();
  const { articleComponents, componentsToLoad } =
    useHeaderArticleData(articleID);

  useColorChangeEffect();

  useEffect(() => {
    startTransition(() => {
      resetDarkSectionOn();
    });
  }, [resetDarkSectionOn]);

  if (!articleComponents) {
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
