import React, { useMemo } from "react";
import { useNavigation } from "../../automation/hooks/useNavigationContext";
import SmallButton from "../atoms/SmallButton";

const NavBottom = () => {
  const { isDarkSectionOn, isApp, currentSection, isVisibleNav } =
    useNavigation();

  const showBottomNav = useMemo(
    () => currentSection && currentSection.includes("visible-nav"),
    [currentSection],
  );

  const bottomNavClass = "nb-a";

  return (
    <>
      {isApp && (
        <div
          className={`nav nav-bottom ${showBottomNav ? bottomNavClass : ""}`}
          style={{
            opacity: showBottomNav ? 1 : 0,
          }}
        >
          <div
            className={`left-nav-links ${isDarkSectionOn ? "lnl-dark" : ""}`}
          >
            <SmallButton
              href="/"
              title="Aleksei Matveev"
              className="bs-nlt-fix"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default NavBottom;
