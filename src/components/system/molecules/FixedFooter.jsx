import { useState, useEffect, Fragment } from "react";
import IconAeee from "../atoms/IconAeee";
import TimeZones from "../atoms/TimeZones";
import CreatedBy from "../atoms/CreatedBy";

const FixedFooter = () => {
  const [columns, setColumns] = useState([[], [], []]);

  const items = [
    { component: <TimeZones />, key: "timezones" },
    { component: <IconAeee />, key: "icon" },
    { component: <CreatedBy />, key: "created" },
  ];

  const distributeItems = () => {
    const width = window.innerWidth;

    if (width > 440) {
      setColumns([
        [items[0]], // TimeZones
        [items[1]], // IconAeee
        [items[2]], // CreatedBy
      ]);
    } else {
      setColumns([[items[1]], [items[0]], [items[2]]]);
    }
  };

  useEffect(() => {
    distributeItems();
    window.addEventListener("resize", distributeItems);
    return () => window.removeEventListener("resize", distributeItems);
  }, []);

  return (
    <div className="footer-section">
      {columns.flatMap((column) =>
        column.map((item) => (
          <Fragment key={item.key}>{item.component}</Fragment>
        )),
      )}
    </div>
  );
};

export default FixedFooter;
