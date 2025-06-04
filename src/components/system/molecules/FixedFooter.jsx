import { useEffect, useState } from "react";
import IconAeee from "../atoms/IconAeee";
import IconHeart from "../atoms/IconHeart";
import IconCaptionDot from "../atoms/IconCaptionDot";

const formatTime = (timeZone) =>
  new Intl.DateTimeFormat("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone,
  }).format(new Date());

const FixedFooter = () => {
  const [times, setTimes] = useState({
    london: formatTime("Europe/London"),
    sf: formatTime("America/Los_Angeles"),
  });

  useEffect(() => {
    const update = () => {
      setTimes({
        london: formatTime("Europe/London"),
        sf: formatTime("America/Los_Angeles"),
      });
    };

    update();

    const now = new Date();
    const delayToNextMinute =
      (60 - now.getSeconds()) * 1000 - now.getMilliseconds();

    const timeout = setTimeout(() => {
      update();
      const interval = setInterval(update, 60000);
      return () => clearInterval(interval);
    }, delayToNextMinute);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="footer-section">
      <p className="caption">
        London {times.london}
        <IconCaptionDot />
        San Francisco {times.sf}
      </p>
      <IconAeee />
      <p className="caption c-end">
        <span>
          Build on React with <IconHeart />
        </span>
        <IconCaptionDot />
        2018 – 2025
      </p>
    </div>
  );
};

export default FixedFooter;
