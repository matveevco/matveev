import React from "react";

const HeaderTags = ({ animate, tags }) => {
  const renderTags = () => {
    if (Array.isArray(tags)) {
      return tags.map((tag, index) => (
        <React.Fragment key={index}>
          <div className="bs">{tag}</div>
          {index !== tags.length - 1 && <div className="separator-tag"></div>}
        </React.Fragment>
      ));
    }
    return <div className="bs">{tags}</div>;
  };

  return (
    <div
      className={
        animate ? "animate-end header-tags" : "animate-start header-tags"
      }
    >
      {renderTags()}
    </div>
  );
};

export default HeaderTags;
