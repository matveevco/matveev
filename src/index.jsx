import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./global.css";
import "./index.css";
import TopNavigation from "./components/navs/TopNavigation";
import BottomNavigation from "./components/navs/BottomNavigation";
import SideNavigation from "./components/navs/SideNavigation";
import TestCardSection from "./components/sections/TestCardSection";
import ArticlePage from "./components/articleAtoms/ArticlePage";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <TopNavigation />
      <SideNavigation />
      <Routes>
        <Route path="/" element={<TestCardSection />} />
        <Route path="/:articleID" element={<ArticlePage />} />
      </Routes>
      <BottomNavigation />
    </BrowserRouter>
  </React.StrictMode>,
);
