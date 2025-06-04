import { forwardRef } from "react";
import ContentList from "./ArticleContentList";

const Paragraph = forwardRef(({ title, content, contentList }, ref) => {
  const hasTitle = Boolean(title);
  const hasContentList =
    contentList &&
    (contentList.content || (contentList.list && contentList.list.length > 0));

  const normalizedContent = typeof content === "string" ? [content] : content;

  return (
    <div className="db-container">
      <h2 className={!hasTitle ? "h2-hide" : undefined}>{title}</h2>
      <div className="db-body">
        {normalizedContent &&
          normalizedContent.map((desc, index) => (
            <div key={index} className="db-body-text">
              {desc}
            </div>
          ))}
        {hasContentList && <ContentList contentList={contentList} />}
      </div>
    </div>
  );
});

export default Paragraph;
