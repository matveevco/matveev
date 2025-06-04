import React, { useMemo } from "react";
import ContentList from "./ArticleContentList";

const ContentInfo = ({ title, content, contentList }) => {
  const hasContentList = useMemo(
    () => contentList && (contentList.content || contentList.list?.length > 0),
    [contentList],
  );
  const normalizedContent = useMemo(
    () => (typeof content === "string" ? [content] : content),
    [content],
  );

  return (
    <div className="content-info-left cil-fix">
      <h3>{title}</h3>
      <div className="cir-fix">
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
};

export default ContentInfo;
