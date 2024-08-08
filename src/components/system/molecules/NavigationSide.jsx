import React, { useEffect, useMemo } from "react";
import { useNavigation } from "../../automation/hooks/NavigationContext";
import SmallButton from "../atoms/SmallButton";

const NavSide = () => {
  const { isDarkSectionOn, isApp, currentSection } = useNavigation();

  const showSideNav = useMemo(() => {
    const result = currentSection && currentSection.includes("nav-i");
    return result;
  }, [currentSection]);

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
