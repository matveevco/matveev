import React, { useMemo } from "react";
import { useNavigation } from "../../automation/hooks/useNavigationContext";
import SmallButton from "../atoms/SmallButton";

const NavSide = () => {
  const { isDarkSectionOn, isApp, currentSection } = useNavigation();

  const showSideNav = useMemo(
    () => currentSection && currentSection.includes("visible-nav"),
    [currentSection],
  );

  return (
    <>
      {isApp && (
        <div
          className="nav nav-right"
          style={{
            opacity: showSideNav ? 1 : 0,
            transition: "opacity 0.5s ease",
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
