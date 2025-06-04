import { forwardRef } from "react";

const Image = forwardRef(
  ({ imageMargin, imageSRC, imageWidth, imageHeight }, ref) => {
    const isSvg = imageSRC.toLowerCase().endsWith(".svg");
    const imageClass = `object-image${isSvg ? " full-svg" : ""} ${imageMargin || ""}`;

    return (
      <img
        className={imageClass}
        src={imageSRC}
        width={imageWidth}
        height={imageHeight}
        alt="article image"
        loading="lazy"
      />
    );
  },
);

export default Image;
