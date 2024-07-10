import React from "react";
import { useParams } from "react-router-dom";
import DynamicComponentLoader from "./DynamicComponentLoader";
import articles from "../articleData"; // Убедись, что путь корректен

const ArticlePage = () => {
  const { articleID } = useParams();
  const articleComponents = articles[articleID];

  if (!articleComponents) {
    return <div>Article not found</div>;
  }

  return (
    <div>
      {articleComponents.map((component, index) => (
        <DynamicComponentLoader
          key={index}
          componentName={component.componentName}
          data={component}
        />
      ))}
    </div>
  );
};

export default ArticlePage;
