export const addParallaxEffect = (mainSectionRef, articleModuleRefs) => {
  const handleScroll = (event) => {
    if (!mainSectionRef.current || !articleModuleRefs[0].current) {
      console.log("References are not yet assigned.");
      return;
    }

    const mainSection = mainSectionRef.current;
    const firstArticleModule = articleModuleRefs[0].current;
    const deltaY = event.deltaY;

    console.log("Scrolling with deltaY:", deltaY);

    if (
      mainSection.scrollTop + mainSection.clientHeight <
      mainSection.scrollHeight
    ) {
      mainSection.scrollTop += deltaY;
      console.log(
        "Scrolling mainSection. Current scrollTop:",
        mainSection.scrollTop,
      );
    } else {
      firstArticleModule.scrollTop += deltaY;
      console.log(
        "Scrolling firstArticleModule. Current scrollTop:",
        firstArticleModule.scrollTop,
      );

      if (
        firstArticleModule.scrollTop + firstArticleModule.clientHeight >=
        firstArticleModule.scrollHeight
      ) {
        console.log(
          "Reached end of firstArticleModule. Preventing further scroll.",
        );
        event.preventDefault();
      }
    }
  };

  return handleScroll;
};
