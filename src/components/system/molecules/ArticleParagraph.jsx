import React, { forwardRef } from "react";
import ContentList from "./ArticleContentList";

const Paragraph = forwardRef(({ title, content, contentList }, ref) => {
  const hasTitle = Boolean(title);
  const hasContentList =
    contentList &&
    (contentList.content || (contentList.list && contentList.list.length > 0));

  const normalizedContent = typeof content === "string" ? [content] : content;

  return (
    <div
      ref={ref}
      className={
        hasTitle ? "content-info ci-fix ci-hor" : "content-info ci-fix"
      }
    >
      <div
        className={
          hasTitle ? "content-info-left" : "content-info-left cil-none"
        }
      >
        {hasTitle && <h3>{title}</h3>}
      </div>
      <div className="content-info-right cir-row">
        {normalizedContent &&
          normalizedContent.map((desc, index) => (
            <div key={index} className="info-body-article">
              {desc}
            </div>
          ))}
        {hasContentList && <ContentList contentList={contentList} />}
      </div>
    </div>
  );
});

export default Paragraph;
