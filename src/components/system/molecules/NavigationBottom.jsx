import React from "react";
import { useNavigation } from "../../automation/hooks/useNavigationContext";
import SmallButton from "../atoms/SmallButton";

const NavBottom = () => {
  const { isDarkSectionOn, isApp } = useNavigation();

  return (
    <>
      {isApp && (
        <div className="nav nav-bottom">
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
