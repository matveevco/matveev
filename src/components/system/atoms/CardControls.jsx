import { useState } from "react";
import IconBarCity from "./IconBarCity";
import IconBarFun from "./IconBarFun";
import IconBarGift from "./IconBarGift";
import IconBarMap from "./IconBarMap";

const CardControls = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    "/images/hero/photo.png",
    "/images/hero/green.png",
    "/images/hero/red.png",
    "/images/hero/yellow.png",
  ];

  const icons = [
    <IconBarMap />,
    <IconBarFun />,
    <IconBarCity />,
    <IconBarGift />,
  ];

  const handleClick = (index) => {
    const clickSound = new Audio("/sounds/click.mp3");
    clickSound.play();

    setActiveIndex(index);
  };

  return (
    <div className="card-view">
      <img
        loading="lazy"
        alt="image"
        width="816px"
        height="816px"
        src={images[activeIndex]}
      />
      <div className="card-control">
        {icons.map((icon, index) => (
          <div
            key={index}
            className={`cc-button ${activeIndex === index ? "ccb-on" : ""}`}
            onClick={() => handleClick(index)}
          >
            {icon}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardControls;
