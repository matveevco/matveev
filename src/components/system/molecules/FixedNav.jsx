import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { LinearBlur } from "progressive-blur";
import IconDot from "../atoms/IconDot";
import IconRefresh from "../atoms/IconRefresh";
import IconBack from "../atoms/IconBack";
import UniButton from "../atoms/UniButton";
import UniButtonArrow from "../atoms/UniButtonArrow";
import UniButtonEmail from "../atoms/UniButtonEmail";

const FixedNav = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 440);
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  const defaultText = "Multidisciplinary Designer";
  const hoverText = isHome ? "Refresh Page" : "Back to Main Page";
  const IconComponent = isHome ? IconRefresh : IconBack;

  // Выносим button-group в переменную
  const buttonGroup = (
    <div className="button-group">
      <div className="uni-button-group">
        <UniButton
          text="CV"
          link="/Aleksei_Matveev_(Product_Designer).pdf?v=10"
        />
        <UniButton text="LinkedIn" link="https://www.linkedin.com/in/aeeeae/" />
        <UniButtonEmail text="Email" link="matveev.dsgn@gmail.com" />
      </div>
      <UniButtonArrow
        text="Let's talk"
        link="https://calendly.com/aeee/30min"
      />
    </div>
  );

  return (
    <>
      <div className="fn-body">
        <LinearBlur
          side="bottom"
          strength={10}
          topOffset={30}
          style={{
            height: "116px",
            position: "fixed",
            top: 0,
            left: 0,
            zIndex: -1,
          }}
        />
        <a href="/" className="fn-profile">
          <div className="profile-photo">
            <img src="/images/am-photo.webp" width={132} height={132} />
            <IconComponent />
          </div>
          <div className="profile-text">
            <div className="profile-name">
              Aleksei Matveev
              <div className="tag-available">
                <IconDot />
                Available
              </div>
            </div>
            <div className="profile-role">
              <div className="role-default">{defaultText}</div>
              <div className="role-hover">{hoverText}</div>
            </div>
          </div>
        </a>
        {!isMobile && buttonGroup}
      </div>
      {isMobile && buttonGroup}
    </>
  );
};

export default FixedNav;
