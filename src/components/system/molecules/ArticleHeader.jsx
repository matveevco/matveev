import React, { forwardRef } from "react";
import { Title } from "react-head";
import IconCaptionDot from "../atoms/IconCaptionDot";
import UniButtonCopy from "../atoms/UniButtonCopy";

const HeaderArticle = forwardRef(
  ({ content, linkButton, title, tags }, ref) => {
    const normalizedContent = typeof content === "string" ? [content] : content;

    if (!title || !tags || tags.length === 0) {
      return <div>Loading article data...</div>;
    }

    return (
      <div className="db-container">
        <Title>{title} | Aleksei Matveev's Portfolio</Title>
        <div className="db-header">
          <p className="caption">
            {tags.map((tag, index) => (
              <React.Fragment key={index}>
                {tag}
                {index < tags.length - 1 && <IconCaptionDot />}
              </React.Fragment>
            ))}
          </p>
          <h1>{title}</h1>
        </div>
        <div className="db-body">
          {normalizedContent &&
            normalizedContent.map((desc, index) => (
              <div key={index} className="db-body-text">
                {desc}
              </div>
            ))}
        </div>
        <UniButtonCopy text="Copy Link" link={linkButton} />
      </div>
    );
  },
);

export default HeaderArticle;
