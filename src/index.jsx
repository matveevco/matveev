import React from "react";
import ReactDOM from "react-dom/client";
// import SmoothScrollContainer from "./components/SmoothScrollContainer";
import "./global.css";
import "./index.css";
import TopNavigation from "./components/navs/TopNavigation";
import BottomNavigation from "./components/navs/BottomNavigation";
import SideNavigation from "./components/navs/SideNavigation";
// import TestSection from "./components/sections/TestSection";
import ArticleSection from "./components/sections/ArticleSection";
// import Footer from "./components/navs/Footer";
// import App from "./components/App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <TopNavigation />
    <BottomNavigation />
    <SideNavigation />
    {/* <TestSection /> */}
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
