import React, { useState, useEffect } from "react";
import { Squircle } from "corner-smoothing";
import IconCopy from "./IconCopy";
import IconCheck from "./IconCheck";

const ButtonCopy = ({ title, link, additionalClass }) => {
  const [copied, setCopied] = useState(false);
  const [isBouncing, setIsBouncing] = useState(false);

  const handleCopy = () => {
    let copyText = link;

    if (link === "/") {
      copyText = window.location.href;
    } else if (link.startsWith("/")) {
      copyText = `${window.location.origin}${link}`;
    }

    navigator.clipboard.writeText(copyText).then(() => {
      setCopied(true);
      setIsBouncing(true);
      setTimeout(() => {
        setCopied(false);
      }, 1000);
    });
  };

  useEffect(() => {
    if (isBouncing) {
      const timeout = setTimeout(() => {
        setIsBouncing(false);
      }, 600);
      return () => clearTimeout(timeout);
    }
  }, [isBouncing]);

  return (
    <div
      onClick={handleCopy}
      className="button-link"
      style={{ cursor: "pointer" }}
    >
      <Squircle className="button" cornerRadius={40} cornerSmoothing={0.8}>
        {copied ? "Copied" : title}
        <div className={`button-icon ${additionalClass}`}>
          {copied ? (
            <IconCheck isBouncing={isBouncing} />
          ) : (
            <IconCopy isBouncing={isBouncing} />
          )}
        </div>
      </Squircle>
    </div>
  );
};

export default ButtonCopy;
