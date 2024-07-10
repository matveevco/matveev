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
    const sectionOffsets = sectionsRef.current.map(
      (section) => section.offsetTop,
    );

    for (let i = sectionOffsets.length - 1; i >= 0; i--) {
      if (scrollPosition >= sectionOffsets[i]) {
        document.body.style.backgroundColor = colors[i];
        break;
      }
    }
  };

  setHandleScroll(() => handleSmoothScroll);
};
