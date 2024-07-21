import { useEffect, useRef, useCallback } from "react";

const useNavigationModule = () => {
  const initialScrollStatesRef = useRef([]);
  const lastLoggedGlobalScrollTopRef = useRef(0);
  const lastLoggedContainerScrollTopRef = useRef([]);
  const isScrollingVisibleNavRef = useRef(false);
  const activeSectionIndexRef = useRef(null);

  const handleGlobalScroll = useCallback(() => {
    const globalScrollTop = window.scrollY;

    const visibleNavElements = document.querySelectorAll(".visible-nav");
    visibleNavElements.forEach((visibleNav, index) => {
      const sectionRow = visibleNav.querySelector(".section-row");
      if (!sectionRow) {
        return;
      }

      const containerTop = visibleNav.getBoundingClientRect().top;
      const scrollState = initialScrollStatesRef.current[index];

      if (!scrollState.isInsideVisibleNav && containerTop <= 0) {
        scrollState.isInsideVisibleNav = true;
        scrollState.initialGlobalScrollTop = globalScrollTop;
        scrollState.initialContainerScrollTop = sectionRow.scrollTop;
        isScrollingVisibleNavRef.current = true;
        activeSectionIndexRef.current = index;
      }

      if (scrollState.isInsideVisibleNav) {
        const scrollDistance =
          globalScrollTop -
          scrollState.initialGlobalScrollTop +
          scrollState.initialContainerScrollTop;
        sectionRow.scrollTop = scrollDistance;

        if (
          Math.abs(globalScrollTop - lastLoggedGlobalScrollTopRef.current) >=
          100
        ) {
          lastLoggedGlobalScrollTopRef.current = globalScrollTop;
        }

        if (
          Math.abs(
            sectionRow.scrollTop -
              lastLoggedContainerScrollTopRef.current[index],
          ) >= 100
        ) {
          lastLoggedContainerScrollTopRef.current[index] = sectionRow.scrollTop;
        }

        if (
          sectionRow.scrollHeight - sectionRow.scrollTop ===
          sectionRow.clientHeight
        ) {
          isScrollingVisibleNavRef.current = false;
          activeSectionIndexRef.current = null;
        }
      }

      if (scrollState.isInsideVisibleNav && containerTop > 0) {
        scrollState.isInsideVisibleNav = false;
        isScrollingVisibleNavRef.current = false;
        activeSectionIndexRef.current = null;
      }
    });
  }, []);

  const handleSectionRowScroll = useCallback(() => {
    if (activeSectionIndexRef.current !== null) {
      const visibleNavElements = document.querySelectorAll(".visible-nav");
      const sectionRow =
        visibleNavElements[activeSectionIndexRef.current]?.querySelector(
          ".section-row",
        );

      if (sectionRow) {
        const containerTop =
          visibleNavElements[
            activeSectionIndexRef.current
          ].getBoundingClientRect().top;
        const scrollState =
          initialScrollStatesRef.current[activeSectionIndexRef.current];

        if (sectionRow.scrollTop === 0 && containerTop > 0) {
          scrollState.isInsideVisibleNav = false;
          isScrollingVisibleNavRef.current = false;
          activeSectionIndexRef.current = null;
        }

        if (
          sectionRow.scrollHeight - sectionRow.scrollTop ===
          sectionRow.clientHeight
        ) {
          scrollState.isInsideVisibleNav = false;
          isScrollingVisibleNavRef.current = false;
          activeSectionIndexRef.current = null;
        }
      }
    }
  }, []);

  useEffect(() => {
    const checkAndInitialize = () => {
      const visibleNavElements = document.querySelectorAll(".visible-nav");
      if (visibleNavElements.length === 0) {
        console.error("visible-nav not found in the document");
        return;
      }

      initialScrollStatesRef.current = Array.from(visibleNavElements).map(
        () => ({
          isInsideVisibleNav: false,
          initialGlobalScrollTop: 0,
          initialContainerScrollTop: 0,
        }),
      );
      lastLoggedContainerScrollTopRef.current = Array.from(
        visibleNavElements,
      ).map(() => 0);

      window.addEventListener("scroll", handleGlobalScroll);

      visibleNavElements.forEach((visibleNav, index) => {
        const sectionRow = visibleNav.querySelector(".section-row");
        if (sectionRow) {
          sectionRow.addEventListener("scroll", handleSectionRowScroll);
        }
      });
    };

    const intervalId = setInterval(() => {
      if (document.querySelectorAll(".visible-nav").length > 0) {
        clearInterval(intervalId);
        checkAndInitialize();
      }
    }, 100);

    return () => {
      clearInterval(intervalId);
      window.removeEventListener("scroll", handleGlobalScroll);

      const visibleNavElements = document.querySelectorAll(".visible-nav");
      visibleNavElements.forEach((visibleNav) => {
        const sectionRow = visibleNav.querySelector(".section-row");
        if (sectionRow) {
          sectionRow.removeEventListener("scroll", handleSectionRowScroll);
        }
      });
    };
  }, [handleGlobalScroll, handleSectionRowScroll]);
};

export default useNavigationModule;
