import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./global.css";
import "./index.css";
import NavTop from "./components/system/molecules/NavigationTop";
import NavSide from "./components/system/molecules/NavigationSide";
import NavBottom from "./components/system/molecules/NavigationBottom";
import App from "./components/App";
import ArticleLayout from "./components/system/templates/ArticleLayout";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <NavTop />
      <NavSide />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/:articleID" element={<ArticleLayout />} />
      </Routes>
      <NavBottom />
    </BrowserRouter>
  </React.StrictMode>,
);
