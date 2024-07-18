import React, { useState } from "react";
import { Squircle } from "corner-smoothing";
import IconCopy from "./IconCopy";
import IconCheck from "./IconCheck";

const ButtonCopy = ({ title, link, additionalClass }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    let copyText = link;

    if (link.startsWith("/")) {
      copyText = `${window.location.origin}${link}`;
    }

    navigator.clipboard.writeText(copyText).then(() => {
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 1000);
    });
  };

  return (
    <div
      onClick={handleCopy}
      className="button-link"
      style={{ cursor: "pointer" }}
    >
      <Squircle className="button" cornerRadius={40} cornerSmoothing={0.8}>
        {copied ? "Copied" : title}
        <div className={`button-icon ${additionalClass}`}>
          {copied ? <IconCheck /> : <IconCopy />}
        </div>
      </Squircle>
    </div>
  );
};

export default ButtonCopy;
