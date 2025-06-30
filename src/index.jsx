import React from "react";
import ReactDOM from "react-dom/client";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HeadProvider } from "react-head";

import "./mobile.css";
import "./ae-global.css";
import "./ae-index.css";
import "./ae-index-mobile.css";

import App from "./components/App";
import ArticleLayout from "./components/system/templates/ArticleLayout";
import NoMatch from "./components/system/templates/NoMatch";
import FixedNav from "./components/system/molecules/FixedNav";

const General = () => {
  return (
    <>
      <FixedNav />
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
    <HeadProvider>
      <BrowserRouter
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <General />
      </BrowserRouter>
    </HeadProvider>
  </React.StrictMode>,
);
