import React, { useEffect } from "react";
import { addNavigation } from "../../automation/functions/addNavigationContext";
import { useColorChangeEffect } from "../../automation/functions/addColorChange";

const NoMatch = () => {
  useColorChangeEffect("s-dark");

  return (
    <div className="PNF">
      <h1>
        This page{" "}
        <span className="highlight-gradient-one-text">doesn't exist.</span>
      </h1>
    </div>
  );
};

export default NoMatch;
