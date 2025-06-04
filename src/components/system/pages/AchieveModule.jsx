import IconCaptionDot from "../atoms/IconCaptionDot";
import selectedGains from "../../data/previewData/selectedGains";
import selectedPublic from "../../data/previewData/selectedPublic";
import { Fragment } from "react";

const renderTags = (tags) =>
  tags?.map((tag, index) => (
    <Fragment key={index}>
      {tag}
      {index < tags.length - 1 && <IconCaptionDot />}
    </Fragment>
  ));

const AchieveModule = () => {
  return (
    <div className="achieve-section">
      <div></div>

      <div className="achieve-card">
        <div className="usmb-wrap">
          <div className="uni-sm-button">Achievements</div>
        </div>
        <div className="achieve-card-column">
          {selectedGains.map(({ title, tags, link }, index) => {
            const Tag = link ? "a" : "div";
            const isLast = index === selectedGains.length - 1;

            return (
              <Fragment key={index}>
                <Tag
                  href={link || undefined}
                  target="_blank"
                  className="achieve-card-text"
                >
                  <p className="text-title text-hl">{title}</p>
                  <p className="caption">{renderTags(tags)}</p>
                </Tag>
                {!isLast && <div className="achieve-divider" />}
              </Fragment>
            );
          })}
        </div>
      </div>

      <div className="achieve-card">
        <div className="usmb-wrap">
          <div className="uni-sm-button">Contribution</div>
        </div>
        <div className="achieve-card-column">
          {selectedPublic.map(({ title, tags, link }, index) => {
            const Tag = link ? "a" : "div";
            const isLast = index === selectedPublic.length - 1;

            return (
              <Fragment key={index}>
                <Tag
                  href={link || undefined}
                  target="_blank"
                  className="achieve-card-text"
                >
                  <p className="text-title text-hl">{title}</p>
                  <p className="caption">{renderTags(tags)}</p>
                </Tag>
                {!isLast && <div className="achieve-divider" />}
              </Fragment>
            );
          })}
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default AchieveModule;
