import React, { useEffect, lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import "./global.css";
import "./index.css";
import NavTop from "./components/system/molecules/NavigationTop";

const NavSide = lazy(
  () => import("./components/system/molecules/NavigationSide"),
);
const NavBottom = lazy(
  () => import("./components/system/molecules/NavigationBottom"),
);

import App from "./components/App";
import ArticleLayout from "./components/system/templates/ArticleLayout";
import {
  NavigationProvider,
  addNavigation,
} from "./components/automation/functions/addNavigationContext";

const MainApp = () => {
  const location = useLocation();
  const { setIsApp } = addNavigation();
  const isAppRoute = location.pathname === "/";

  useEffect(() => {
    setIsApp(isAppRoute);
  }, [isAppRoute, setIsApp]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <NavTop />
      <Suspense fallback={null}>
        <NavSide />
      </Suspense>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/:articleID" element={<ArticleLayout />} />
      </Routes>
      <Suspense fallback={null}>
        <NavBottom />
      </Suspense>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <NavigationProvider>
        <MainApp />
      </NavigationProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
