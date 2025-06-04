import React from "react";

const CardTextGroups = ({ cards, CardComponent }) => {
  const renderCards = () => {
    const groups = [];
    for (let i = 0; i < cards.length; i += 2) {
      const hasSecondCard = i + 1 < cards.length;

      groups.push(
        <div className="section-img-group" key={i}>
          <CardComponent content={cards[i]} />
          {hasSecondCard ? (
            <CardComponent content={cards[i + 1]} />
          ) : (
            <div className="section-img-small-gap"></div>
          )}
        </div>,
      );
    }
    return groups;
  };

  return renderCards();
};

export default CardTextGroups;
