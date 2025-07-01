import { useState, useEffect } from "react";
import IconScroll from "../atoms/IconScroll.jsx";
import CardShow from "../atoms/CardShow.jsx";
import CardControls from "../atoms/CardControls.jsx";
import CardKeys from "../atoms/CardKeys.jsx";
import CardTextOne from "../atoms/CardTextOne.jsx";
import CardTextTwo from "../atoms/CardTextTwo.jsx";
import CardTextThree from "../atoms/CardTextThree.jsx";

const HeroModule = () => {
  const [columns, setColumns] = useState([[], [], []]);

  const cards = [
    { component: <CardShow id="card-show" />, key: "show" },
    { component: <CardTextTwo id="card-text-two" />, key: "text-two" },
    { component: <CardTextOne id="card-text-one" />, key: "text-one" },
    { component: <CardKeys id="card-keys" />, key: "keys" },
    { component: <CardControls id="card-controls" />, key: "controls" },
    { component: <CardTextThree id="card-text-three" />, key: "text-three" },
  ];

  const distributeCards = () => {
    const width = window.innerWidth;

    if (width > 834) {
      setColumns([
        [cards[0], cards[1]], // CardShow, CardTextTwo
        [cards[2], cards[3]], // CardTextOne, CardKeys
        [cards[4], cards[5]], // CardControls, CardTextThree
      ]);
    } else if (width > 440) {
      setColumns([
        [cards[0], cards[5], cards[3]], // CardShow, CardTextTwo, CardControls
        [cards[2], cards[1], cards[4]], // CardTextOne, CardKeys, CardTextThree
      ]);
    } else {
      setColumns([
        [cards[0], cards[2], cards[1], cards[4], cards[5], cards[3]],
      ]);
    }
  };

  useEffect(() => {
    distributeCards();
    window.addEventListener("resize", distributeCards);
    return () => window.removeEventListener("resize", distributeCards);
  }, []);

  return (
    <div className="hero-section">
      <h1 className="gc-28">
        Let's <span className="line-hl">get to know</span> each other.
      </h1>
      <div className="flex-row gc-28">
        {columns.map((column, columnIndex) => (
          <div key={columnIndex} className="flex-column">
            {column.map((card) => (
              <div key={card.key}>{card.component}</div>
            ))}
          </div>
        ))}
      </div>
      <div className="caption gc-28">
        <IconScroll />
        Scroll down to see the selected works
      </div>
    </div>
  );
};

export default HeroModule;
