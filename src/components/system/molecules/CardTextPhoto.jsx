import React from "react";

const CardTextPhoto = ({ src, alt }) => {
  return (
    <div className="image-container">
      <img className="icon-photo" alt={alt} src={src} />
    </div>
  );
};

export default CardTextPhoto;
