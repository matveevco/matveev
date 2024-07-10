import React from "react";

// Принимаем `imageSRC` напрямую вместо `articleData`
const ImageFullArticle = ({ imageSRC }) => {
  return (
    <div>
      <img src={imageSRC} alt="article" />
    </div>
  );
};

export default ImageFullArticle;
