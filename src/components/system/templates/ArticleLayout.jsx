import { useParams } from "react-router-dom";
import useHeaderArticleData from "../../automation/hooks/useHeaderArticleData";
import ArticleDynamicLoader from "../organisms/ArticleDynamicLoader";
import CtaModule from "../pages/CtaModule";
import FixedFooter from "../molecules/FixedFooter";

const ArticleLayout = () => {
  const { articleID } = useParams();
  const { articleComponents, componentsToLoad } =
    useHeaderArticleData(articleID);

  if (!articleComponents) {
    return null;
  }

  return (
    <>
      <div className="dynamyc-body">
        {componentsToLoad.map((component, index) => (
          <ArticleDynamicLoader
            key={index}
            componentName={component.componentName}
            data={component}
          />
        ))}
      </div>
      <CtaModule />
      <FixedFooter />
    </>
  );
};

export default ArticleLayout;
