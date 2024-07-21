import React, { useMemo } from "react";
import { addNavigation } from "../../automation/functions/addNavigationContext";
import SmallButton from "../atoms/SmallButton";

const NavSide = () => {
  const { isDarkSectionOn, isApp, currentSection } = addNavigation();

  const showSideNav = useMemo(
    () => currentSection && currentSection.includes("visible-nav"),
    [currentSection],
  );

  const sideNavClass = "nr-a";

  return (
    <>
      {isApp && (
        <div
          className={`nav nav-right ${showSideNav ? sideNavClass : ""}`}
          style={{
            opacity: showSideNav ? 1 : 0,
          }}
        >
          <div
            className={`left-nav-links lnf-fix ${
              isDarkSectionOn ? "lnl-dark" : ""
            }`}
          >
            <SmallButton title="Based in London, UK" />
            <div className="separator sw"></div>
            <SmallButton title="Working Remotely" />
          </div>
        </div>
      )}
    </>
  );
};

export default NavSide;
