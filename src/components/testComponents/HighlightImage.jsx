import React, { useRef } from "react";
import { Squircle } from "corner-smoothing";
import IconArrowRotate from "./IconArrowRotate";

const HighlightImage = ({
  hgLink,
  hgText,
  hgSource,
  hgSourceType,
  hgCount,
}) => {
  const videoRef = useRef(null);

  const WrapperComponent = hgLink ? "a" : "span";
  const wrapperProps = {
    className: "hg-item",
  };

  if (hgLink) {
    wrapperProps.href = hgLink;
    wrapperProps.target = "_blank";
    wrapperProps.rel = "noopener noreferrer";
  }

  const handleMouseEnter = () => {
    if (window.innerWidth > 1000 && videoRef.current) {
      videoRef.current.muted = false;
      // videoRef.current.play(); // Если нужно, раскомментируйте для воспроизведения
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth > 1000 && videoRef.current) {
      // videoRef.current.pause(); // Если нужно, раскомментируйте для паузы
      // videoRef.current.currentTime = 0; // Сброс времени на начало
      videoRef.current.muted = true;
    }
  };

  return (
    <WrapperComponent {...wrapperProps}>
      <span
        className={`highlight-gradient-${hgCount}-text hg-default`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {hgText}{" "}
      </span>
      <div className="hgIcon">
        <IconArrowRotate />
      </div>
      <Squircle className="hg-img" cornerRadius={40} cornerSmoothing={0.8}>
        {hgSourceType === "webm" ? (
          <video
            ref={videoRef}
            width="372"
            height="372"
            autoPlay
            loop
            playsInline
            muted
          >
            <source src={`/images/hgt/${hgSource}.webm`} type="video/webm" />
          </video>
        ) : hgSourceType === "webp" ? (
          <img
            alt="highlight"
            width="372"
            height="372"
            src={`/images/hgt/${hgSource}.webp`}
            loading="lazy"
          />
        ) : null}
      </Squircle>
    </WrapperComponent>
  );
};

export default HighlightImage;
