import React, { forwardRef } from "react";
import ContentInfo from "./ArticleContent";
import ImageSection from "./ArticleImageSection";

const ParagraphAndImage = forwardRef(
  ({ imageSRC, title, content, contentList }, ref) => (
    <div ref={ref} className="content-info ci-fix">
      <ContentInfo title={title} content={content} contentList={contentList} />
      <ImageSection imageSRC={imageSRC} />
    </div>
  ),
);

export default ParagraphAndImage;
