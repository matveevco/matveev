import React from "react";

const SmallButton = ({ href, onClick, title, className }) => {
  const classes = `bs nav-links-text ${className || ""}`;

  if (href) {
    return (
      <a className={classes} href={href} onClick={onClick}>
        {title}
      </a>
    );
  }
  return (
    <div className={classes} onClick={onClick}>
      {title}
    </div>
  );
};

export default SmallButton;
