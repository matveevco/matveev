import { useState, useEffect } from "react";

const useScrollPositions = (sectionCount) => {
  const [scrollPositions, setScrollPositions] = useState(() =>
    Array(sectionCount).fill(0),
  );

  useEffect(() => {
    setScrollPositions(Array(sectionCount).fill(0));
  }, [sectionCount]);

  return scrollPositions;
};

export default useScrollPositions;
