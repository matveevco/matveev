export const addColorChangeEffect = (sectionsRef, setHandleScroll) => {
  const colors = [
    "var(--color-tint-orange-100)",
    "var(--color-tint-orange-100)",
    "var(--color-tint-blue-100)",
    "var(--color-tint-pink-100)",
    "var(--color-dark-100)",
  ];

  const handleSmoothScroll = ({ offset }) => {
    const scrollPosition = offset.y;
    const indexedSections = sectionsRef.current.map((section, index) => [
      index,
      section,
    ]);
    const validSections = indexedSections.filter(
      ([, section]) => section !== null,
    );
    const sectionOffsets = validSections.map(
      ([, section]) => section.offsetTop,
    );

    for (let i = validSections.length - 1; i >= 0; i--) {
      const [originalIndex, section] = validSections[i];
      if (scrollPosition >= section.offsetTop) {
        document.body.style.backgroundColor =
          colors[originalIndex % colors.length];
        break;
      }
    }
  };

  setHandleScroll(() => handleSmoothScroll);
};
