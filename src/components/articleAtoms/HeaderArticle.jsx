import React from "react";

// Принимаем `linkButton` напрямую вместо `articleData`
const HeaderArticle = ({ linkButton }) => {
  if (!linkButton) {
    return <div>Invalid article data!</div>;
  }

  return (
    <div>
      <a href={linkButton}>Learn more</a>
    </div>
  );
};

export default HeaderArticle;
