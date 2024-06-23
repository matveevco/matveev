import React from "react";
import ReactDOM from "react-dom/client";
// import SmoothScrollContainer from "./components/SmoothScrollContainer";
import "./global.css";
import "./index.css";
import TopNavigation from "./components/navs/TopNavigation";
import BottomNavigation from "./components/navs/BottomNavigation";
import SideNavigation from "./components/navs/SideNavigation";
import ArticleSection from "./components/sections/ArticleSection";
// import TestComp from "./components/sections/content/TestComp";
// import Footer from "./components/navs/Footer";
// import App from "./components/App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <TopNavigation />
    <BottomNavigation />
    <SideNavigation />
    {/* <TestComp /> */}
    <ArticleSection />
    {/*
    <Footer /> */}
    {/* <SmoothScrollContainer>
      <App />
      <Content />
      <AboutSection />
    </SmoothScrollContainer> */}
  </React.StrictMode>,
);
