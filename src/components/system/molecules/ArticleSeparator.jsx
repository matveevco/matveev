import React, { forwardRef } from "react";

const Separator = forwardRef((props, ref) => (
  <div ref={ref} className="content-separator"></div>
));

export default Separator;
