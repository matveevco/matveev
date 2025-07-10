import React, { forwardRef, useEffect, useRef } from "react";
import { Title } from "react-head";
import IconCaptionDot from "../atoms/IconCaptionDot";
import UniButtonCopy from "../atoms/UniButtonCopy";

const HeaderArticle = forwardRef(
  ({ content, linkButton, title, tags }, ref) => {
    const normalizedContent = typeof content === "string" ? [content] : content;
    const titleSetRef = useRef(false);

    useEffect(() => {
      if (!title || titleSetRef.current) return;

      const pageTitle = `${title} | Aleksei Matveev's Portfolio`;

      const setTitle = () => {
        document.title = pageTitle;
        const titleElements = document.querySelectorAll(
          'title:empty, title[data-rh="true"]:empty',
        );
        titleElements.forEach((el) => el.remove());
        titleSetRef.current = true;
      };

      setTitle();
      const timeoutId = setTimeout(setTitle, 0);

      return () => {
        clearTimeout(timeoutId);
        titleSetRef.current = false;
      };
    }, [title]);

    if (!title || !tags || tags.length === 0) {
      return <div>Loading article data...</div>;
    }

    return (
      <div className="db-container" ref={ref}>
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

HeaderArticle.displayName = "HeaderArticle";

export default HeaderArticle;
