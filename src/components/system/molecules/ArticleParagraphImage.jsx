import React from "react";
import ContentInfo from "./ArticleContent";
import ImageSection from "./ArticleImageSection";

const ParagraphAndImage = ({ imageSRC, title, content, contentList }) => (
  <div className="content-info ci-fix">
    <ContentInfo title={title} content={content} contentList={contentList} />
    <ImageSection imageSRC={imageSRC} />
  </div>
);

export default ParagraphAndImage;
