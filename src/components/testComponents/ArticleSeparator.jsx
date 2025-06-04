import React, { forwardRef } from "react";

const Separator = forwardRef((props, ref) => {
  return <div ref={ref} className="content-separator compHide"></div>;
});

export default Separator;
