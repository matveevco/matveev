import React, { useEffect } from "react";
import { useNavigation } from "../../automation/hooks/NavigationContext";
import { useColorChangeEffect } from "../../automation/hooks/useColorChange";

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
