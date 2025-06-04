import React, { forwardRef } from "react";
import ContentInfo from "./ArticleContent";
import ImageSection from "./ArticleImageSection";

const ParagraphAndImage = forwardRef(
  ({ imageSRC, imageWidth, imageHeight, title, content, contentList }, ref) => (
    <div ref={ref} className="content-info ci-fix compHide">
      <ContentInfo title={title} content={content} contentList={contentList} />
      <ImageSection
        imageSRC={imageSRC}
        imageWidth={imageWidth}
        imageHeight={imageHeight}
      />
    </div>
  ),
);

export default ParagraphAndImage;
