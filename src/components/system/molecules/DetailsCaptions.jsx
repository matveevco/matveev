import React from "react";

const DetailsCaptions = ({ animate, awesomeness }) => {
  return (
    <div className="section-info-cell">
      <div className="info-line"></div>
      <div
        className={
          animate
            ? "animate-end info-body-text"
            : "animate-start info-body-text"
        }
      >
        {awesomeness}
      </div>
    </div>
  );
};

export default DetailsCaptions;
