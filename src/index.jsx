import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavigationProvider } from "./components/automation/hooks/NavigationContext";
import useRouteState from "./components/automation/hooks/useRouteState";
import "./global.css";
import "./index.css";
import "./mobile.css";
import App from "./components/App";
import ArticleLayout from "./components/system/templates/ArticleLayout";
import NoMatch from "./components/system/templates/NoMatch";
import NavTop from "./components/system/molecules/NavigationTop";

const NavSide = lazy(
  () => import("./components/system/molecules/NavigationSide"),
);
const NavBottom = lazy(
  () => import("./components/system/molecules/NavigationBottom"),
);

const General = () => {
  useRouteState();

  return (
    <>
      <NavTop />
      <Suspense fallback={null}>
        <NavSide />
      </Suspense>
      <Suspense fallback={null}>
        <NavBottom />
      </Suspense>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/article/:articleID" element={<ArticleLayout />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
      <Analytics />
      <SpeedInsights />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <NavigationProvider>
        <General />
      </NavigationProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
