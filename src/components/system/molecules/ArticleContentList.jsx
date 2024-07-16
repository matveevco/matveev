import React from "react";

const ContentList = ({ contentList }) => (
  <div className="content-info-right-cell">
    {contentList.content && (
      <div className="info-body-article">{contentList.content}</div>
    )}
    {contentList.list?.length > 0 && (
      <ul className="info-body-article-ul">
        {contentList.list.map((item, index) => (
          <li key={index} className="info-body-article">
            {item}
          </li>
        ))}
      </ul>
    )}
  </div>
);

export default ContentList;
