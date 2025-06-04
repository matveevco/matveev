import React, { useMemo } from "react";
import createScrollContext from "../../automation/hooks/ScrollContextFactory";

const ScrollModuleProvider = React.memo(
  ({ cardData, ModuleComponent, context }) => {
    const { useScroll } = context;
    const { currentSection, isFixed } = useScroll();

    return (
      <>
        {cardData.map((card, index) => (
          <ModuleComponent
            {...card}
            key={index}
            index={index}
            newIndex={currentSection}
            isFixed={isFixed}
          />
        ))}
      </>
    );
  },
);

const context = createScrollContext();

const ScrollModule = ({ cardData, ModuleComponent }) => {
  const { ScrollProvider } = context;

  const memoizedCardData = useMemo(() => cardData, [cardData]);

  return (
    <ScrollProvider sectionCount={memoizedCardData.length}>
      <ScrollModuleProvider
        cardData={memoizedCardData}
        ModuleComponent={ModuleComponent}
        context={context}
      />
    </ScrollProvider>
  );
};

export default ScrollModule;
