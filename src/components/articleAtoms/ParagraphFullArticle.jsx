import React from "react";

// Принимаем `titleGroup` и `descriptionGroup` напрямую вместо `articleData`
const ParagraphFullArticle = ({ titleGroup, descriptionGroup }) => {
  return (
    <div>
      <h1>{titleGroup}</h1>
      {descriptionGroup.map((desc, index) => (
        <p key={index}>{desc}</p>
      ))}
    </div>
  );
};

export default ParagraphFullArticle;
