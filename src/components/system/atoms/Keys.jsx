import { useState } from "react";

const Keys = () => {
  const [changeLetter, setChangeLetter] = useState("X");

  const handleClickChange = () => {
    const sound = new Audio("/sounds/key-2.mp3");
    sound.play().catch((e) => console.error("Audio error:", e));

    setChangeLetter((prev) => (prev === "X" ? "I" : "X"));
  };

  const handleClickStatic = () => {
    const sound = new Audio("/sounds/key-1.mp3");
    sound.play().catch((e) => console.error("Audio error:", e));
  };

  return (
    <div className="key-group">
      <div className="key" onClick={handleClickStatic}>
        <div className="key-click">
          <div className="key-outline">
            <div className="key-text">U</div>
          </div>
        </div>
      </div>

      <div className="key" onClick={handleClickChange}>
        <div className="key-click">
          <div className="key-outline">
            <div className="key-text">{changeLetter}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Keys;
