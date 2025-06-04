import { forwardRef } from "react";
import UniButtonArrow from "../atoms/UniButtonArrow";

const Credits = forwardRef(({ card }, ref) => (
  <>
    <div className="db-container">
      <h2>Credits</h2>
      <div className="db-body-text">
        Get to know the people who supported and co-operated with each other
        during the development process.
      </div>
    </div>

    <div className="dbg-3">
      {card.map((content, index) => {
        const {
          cardLogos = [],
          cardTitle,
          cardDescription,
          cardCaption,
          link,
        } = content;
        const logo = cardLogos[0] || {};
        return (
          <div key={index} className="db-credits-card">
            <img
              className="dbcc-image"
              alt={logo.alt}
              src={logo.src}
              width={logo.width}
              height={logo.height}
            />
            <div className="dbcc-text">
              <div className="dbcc-top">
                <h3>{cardTitle}</h3>
                <div className="caption">{cardDescription}</div>
              </div>
              <UniButtonArrow link={link} text={cardCaption} />
            </div>
          </div>
        );
      })}
    </div>
  </>
));

export default Credits;
