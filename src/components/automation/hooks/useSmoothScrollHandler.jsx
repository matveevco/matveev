const smoothScrollHandler = (smoothScrollInstance) => {
  if (!smoothScrollInstance) {
    console.error("smoothScrollInstance is not found");
    return;
  }

  const visibleNavElements = document.querySelectorAll(".visible-nav");
  if (visibleNavElements.length === 0) {
    console.error("visible-nav not found in the document");
    return;
  }

  const initialScrollStates = Array.from(visibleNavElements).map(() => ({
    isInsideVisibleNav: false,
    initialGlobalScrollTop: 0,
    initialContainerScrollTop: 0,
  }));

  const handleGlobalScroll = ({ offset }) => {
    const globalScrollTop = offset.y;

    visibleNavElements.forEach((visibleNav, index) => {
      const sectionRow = visibleNav.querySelector(".section-row");
      if (!sectionRow) {
        console.error("section-row not found inside visible-nav");
        return;
      }

      const containerTop = visibleNav.getBoundingClientRect().top;
      const scrollState = initialScrollStates[index];

      if (!scrollState.isInsideVisibleNav && containerTop <= 0) {
        scrollState.isInsideVisibleNav = true;
        scrollState.initialGlobalScrollTop = globalScrollTop;
        scrollState.initialContainerScrollTop = sectionRow.scrollTop;
        console.log("Entering visible-nav section");
      }

      if (scrollState.isInsideVisibleNav) {
        const scrollDistance =
          globalScrollTop -
          scrollState.initialGlobalScrollTop +
          scrollState.initialContainerScrollTop;
        sectionRow.scrollTop = scrollDistance;
        console.log("Scrolling inside container", {
          containerScrollTop: sectionRow.scrollTop,
        });
      }

      if (scrollState.isInsideVisibleNav && containerTop > 0) {
        scrollState.isInsideVisibleNav = false;
      }
    });
  };

  smoothScrollInstance.addListener(handleGlobalScroll);

  return () => {
    smoothScrollInstance.removeListener(handleGlobalScroll);
  };
};

export default smoothScrollHandler;
