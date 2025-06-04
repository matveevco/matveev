import { useState, useEffect } from "react";

const UniButton = ({ link, text }) => {
  const [copied, setCopied] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();

    let copyText = link;
    if (link === "/") {
      copyText = window.location.href;
    } else if (link.startsWith("/")) {
      copyText = `${window.location.origin}${link}`;
    }

    navigator.clipboard.writeText(copyText).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1000);
    });
  };

  return (
    <div
      href={link}
      rel="noopener noreferrer"
      className="uni-button"
      onClick={handleClick}
      style={{ cursor: "pointer" }}
    >
      {copied ? "Copied" : text}
    </div>
  );
};

export default UniButton;
