import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import "./global.css";
import "./index.css";
import NavTop from "./components/system/molecules/NavigationTop";
import NavSide from "./components/system/molecules/NavigationSide";
import NavBottom from "./components/system/molecules/NavigationBottom";
import App from "./components/App";
import ArticleLayout from "./components/system/templates/ArticleLayout";
import {
  NavigationProvider,
  useNavigation,
} from "./components/automation/hooks/useNavigationContext";

const MainApp = () => {
  const location = useLocation();
  const { setIsApp } = useNavigation();
  const isAppRoute = location.pathname === "/";

  useEffect(() => {
    setIsApp(isAppRoute);
  }, [isAppRoute, setIsApp]);

  return (
    <>
      <NavTop />
      <NavSide />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/:articleID" element={<ArticleLayout />} />
      </Routes>
      <NavBottom />
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
