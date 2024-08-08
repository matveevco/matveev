import { useRef, useEffect, useCallback } from "react";

const useSectionRowRef = (currentSection, containerRef, scrollPositions) => {
  const sectionRowRef = useRef(null);

  const updateSectionRowRef = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    const newSectionRow = container.querySelector(
      `.section-row-${currentSection}`,
    );
    if (newSectionRow) {
      newSectionRow.scrollTop = scrollPositions[currentSection];
      sectionRowRef.current = newSectionRow;
    }
  }, [currentSection, containerRef, scrollPositions]);

  useEffect(() => {
    updateSectionRowRef();
  }, [updateSectionRowRef, currentSection]);

  return { sectionRowRef, updateSectionRowRef };
};

export default useSectionRowRef;
