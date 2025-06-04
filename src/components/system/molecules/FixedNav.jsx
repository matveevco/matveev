import { useLocation } from "react-router-dom";
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

  const defaultText = "Multidisciplinary Designer";
  const hoverText = isHome ? "Refresh Page" : "Back to Main Page";
  const IconComponent = isHome ? IconRefresh : IconBack;

  return (
    <div className="fn-body">
      <div
        style={{
          backgroundImage:
            "linear-gradient(180deg, #fff, rgba(255, 255, 255, 0.3) 40%, rgba(255, 255, 255, 0))",
          position: "absolute",
          top: 0,
          height: "100%",
          width: "100%",
          left: 0,
          zIndex: -1,
        }}
      >
        {/* <LinearBlur
          side="bottom"
          strength={40}
          falloffStart={0}
          falloffEnd={60}
        /> */}
        <LinearBlur
          side="bottom"
          strength={10}
          falloffStart={0}
          falloffEnd={60}
        />
      </div>
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
      <div className="button-group">
        <div className="uni-button-group">
          <UniButton
            text="CV"
            link="/Aleksei_Matveev_(Product_Designer).pdf?v=10"
          />
          <UniButton
            text="LinkedIn"
            link="https://www.linkedin.com/in/aeeeae/"
          />
          <UniButtonEmail text="Email" link="matveev.dsgn@gmail.com" />
        </div>
        <UniButtonArrow
          text="Let's talk"
          link="https://calendly.com/matveev-dsgn/30min"
        />
      </div>
    </div>
  );
};

export default FixedNav;
