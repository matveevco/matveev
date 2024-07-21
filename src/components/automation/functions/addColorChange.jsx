export const addColorChangeEffect = (setHandleScroll) => {
  const colorClasses = [
    { className: "s-orange", color: "var(--color-tint-orange-100)" },
    { className: "s-blue", color: "var(--color-tint-blue-100)" },
    { className: "s-pink", color: "var(--color-tint-pink-100)" },
    { className: "s-dark", color: "var(--color-dark-100)" },
  ];

  const handleSmoothScroll = ({ offset }) => {
    if (!offset) return;

    const scrollPosition = offset.y;
    let newColor = null;

    for (let i = colorClasses.length - 1; i >= 0; i--) {
      const { className, color } = colorClasses[i];
      const elements = document.querySelectorAll(`.${className}`);

      for (const element of elements) {
        if (element.offsetTop <= scrollPosition) {
          newColor = color;
          break;
        }
      }

      if (newColor) {
        break;
      }
    }

    if (newColor) {
      document.body.style.backgroundColor = newColor;
    }
  };

  setHandleScroll(() => handleSmoothScroll);
};
