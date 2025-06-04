import React from "react";
import { Squircle } from "corner-smoothing";
import IconArrowDown from "./IconArrowDown";
import IconArrowRotate from "./IconArrowRotate";

const Button = ({ title, link, icon, additionalClass }) => {
  const renderIcon = () => {
    switch (icon) {
      case "down":
        return <IconArrowDown />;
      case "rotate":
        return <IconArrowRotate />;
      default:
        return null;
    }
  };
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="button-link"
    >
      <Squircle className="button" cornerRadius={40} cornerSmoothing={0.8}>
        {title}
        <div className={`button-icon ${additionalClass}`}>{renderIcon()}</div>
      </Squircle>
    </a>
  );
};

export default Button;
