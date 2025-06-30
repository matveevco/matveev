import { useState, useEffect } from "react";
import IconCopyNew from "./IconCopyNew";
import IconCheckNew from "./IconCheckNew";

const UniButtonCopy = ({ link, text }) => {
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
      className="uni-button uni-button-icon"
      style={{
        cursor: "pointer",
        width: "6.02rem",
        justifyContent: "space-between",
      }}
    >
      {copied ? "Copied" : text}
      <div>
        {copied ? (
          <IconCheckNew isBouncing={isBouncing} />
        ) : (
          <IconCopyNew isBouncing={isBouncing} />
        )}
      </div>
    </div>
  );
};

export default UniButtonCopy;
