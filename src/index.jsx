import React from "react";
import ReactDOM from "react-dom/client";
import SmoothScrollContainer from "./components/SmoothScrollContainer";
import "./global.css";
import "./index.css";
import TopNavigation from "./components/navs/TopNavigation";
import BottomNavigation from "./components/navs/BottomNavigation";
import SideNavigation from "./components/navs/SideNavigation";
import App from "./components/App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <TopNavigation />
    <BottomNavigation />
    <SideNavigation />
    <SmoothScrollContainer>
      <App />
      {/* <MainSection />
    <AboutSection /> */}
    </SmoothScrollContainer>
  </React.StrictMode>,
);
