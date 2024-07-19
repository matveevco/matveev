import React, { useMemo } from "react";
import { useNavigation } from "../../automation/hooks/useNavigationContext";
import useScrollProgress from "../../automation/hooks/useScrollProgress";
import SmallButton from "../atoms/SmallButton";

const NavTop = () => {
  const {
    isDarkSectionOn,
    isApp,
    navRef,
    scrollToTop,
    handleNavigation,
    currentSection,
  } = useNavigation();
  const scrollWidth = useScrollProgress();

  const showTopNav = useMemo(
    () => currentSection && currentSection.includes("visible-nav"),
    [currentSection],
  );

  const showSeparator = "s-a";
  const showNavLinkHide = "nl-hide-a";
  const showNavLinkVis = "nl-vis-a";

  return (
    <div
      ref={navRef}
      className={`nav ${
        isApp ? "" : `nav-content ${isDarkSectionOn ? "nc-dark" : ""}`
      }`}
    >
      <div className={`left-nav-links ${isDarkSectionOn ? "lnl-dark" : ""}`}>
        <div
          className={`nav-link-hide ${showTopNav ? showNavLinkHide : ""}`}
          style={{
            opacity: showTopNav ? 0 : 1,
          }}
        >
          <SmallButton
            href="/"
            title="Aleksei Matveev"
            className="bs-nlt-fix"
          />
          <div
            className={`separator s-a-default ${showTopNav ? showSeparator : ""}`}
          ></div>
        </div>
        <div className={`nav-link-vis ${showTopNav ? showNavLinkVis : ""}`}>
          <SmallButton
            onClick={() => handleNavigation("works")}
            title="Works"
            className="bs-nlt-fix"
          />
          <SmallButton
            onClick={() => handleNavigation("about")}
            title="About"
            className="bs-nlt-fix"
          />
          <SmallButton
            onClick={() => handleNavigation("contacts")}
            title="Contacts"
            className="bs-nlt-fix"
          />
        </div>
      </div>
      {!isApp && (
        <div
          className={`left-nav-links right-nav-links ${
            isDarkSectionOn ? "lnl-dark" : ""
          }`}
        >
          <div className="scroll">
            <div
              className="scroll-line"
              style={{ width: `${scrollWidth}%` }}
            ></div>
          </div>
          <SmallButton
            onClick={scrollToTop}
            title="Back to Top"
            className="bs-nlt-fix"
          />
        </div>
      )}
    </div>
  );
};

export default NavTop;
