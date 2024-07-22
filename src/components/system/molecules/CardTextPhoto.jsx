import React from "react";

const CardTextPhoto = ({ src, alt, width, height }) => {
  return (
    <div className="image-container">
      <img
        className="icon-photo"
        loading="lazy"
        alt={alt}
        src={src}
        width={width}
        height={height}
      />
    </div>
  );
};

export default CardTextPhoto;
