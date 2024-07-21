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

  let lastLoggedGlobalScrollTop = 0;
  let lastLoggedContainerScrollTop = Array.from(visibleNavElements).map(
    () => 0,
  );

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
        console.log(`Entering visible-nav section ${index}`);
        console.log(
          `Initial position of section-row: ${scrollState.initialContainerScrollTop}`,
        );
      }

      if (scrollState.isInsideVisibleNav) {
        const scrollDistance =
          globalScrollTop -
          scrollState.initialGlobalScrollTop +
          scrollState.initialContainerScrollTop;
        sectionRow.scrollTop = scrollDistance;

        if (Math.abs(globalScrollTop - lastLoggedGlobalScrollTop) >= 100) {
          lastLoggedGlobalScrollTop = globalScrollTop;
          console.log(`Global scroll position: ${globalScrollTop}`);
        }

        if (
          Math.abs(
            sectionRow.scrollTop - lastLoggedContainerScrollTop[index],
          ) >= 100
        ) {
          lastLoggedContainerScrollTop[index] = sectionRow.scrollTop;
          console.log(
            `Section-row scroll position for visible-nav ${index}: ${sectionRow.scrollTop}`,
          );
        }
      }

      if (scrollState.isInsideVisibleNav && containerTop > 0) {
        scrollState.isInsideVisibleNav = false;
        console.log(`Exiting visible-nav section ${index}`);
        console.log(`Final position of section-row: ${sectionRow.scrollTop}`);
      }
    });
  };

  smoothScrollInstance.addListener(handleGlobalScroll);

  return () => {
    smoothScrollInstance.removeListener(handleGlobalScroll);
  };
};

export default smoothScrollHandler;
