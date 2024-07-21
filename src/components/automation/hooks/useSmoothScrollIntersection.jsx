const smoothScrollIntersection = (container, smoothScrollContainer) => {
  if (!smoothScrollContainer || !container) return;

  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      container.style.overflowY = entry.isIntersecting ? "auto" : "hidden";
    });
  };

  const observer = new IntersectionObserver(handleIntersection, {
    root: smoothScrollContainer,
    rootMargin: "0px",
    threshold: 0.1,
  });

  observer.observe(container);

  return () => {
    observer.disconnect();
  };
};

export default smoothScrollIntersection;
