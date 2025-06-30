import { useEffect, useState } from "react";
import IconCaptionDot from "./IconCaptionDot";

const formatTime = (timeZone) =>
  new Intl.DateTimeFormat("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone,
  }).format(new Date());

const TimeZones = () => {
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

  const renderTime = (timeString) => {
    const [hours, minutes] = timeString.split(":");
    return (
      <>
        {hours}
        <span className="blinking-colon">:</span>
        {minutes}
      </>
    );
  };

  return (
    <p className="caption">
      London <span>{renderTime(times.london)}</span>
      <IconCaptionDot />
      San Francisco <span>{renderTime(times.sf)}</span>
    </p>
  );
};

export default TimeZones;
