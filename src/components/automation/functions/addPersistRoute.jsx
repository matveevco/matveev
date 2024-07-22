import React, { useRef } from "react";
import { Route } from "react-router-dom";

const PersistRoute = ({ element: Component, ...rest }) => {
  const elementRef = useRef(null);

  return <Route {...rest} element={<Component ref={elementRef} />} />;
};

export default PersistRoute;
