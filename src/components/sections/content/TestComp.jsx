import React, { useRef, useEffect } from "react";

const TestComp = ({ images, isActive, scrollDirection }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const updateHeight = () => {
      if (containerRef.current) {
        const sectionRowWidth = containerRef.current.offsetWidth;
        const imageHeight = sectionRowWidth;
        const viewportHeight = window.innerHeight;
        const padding = (viewportHeight - imageHeight) / 2;

        containerRef.current.style.paddingTop = `${padding}px`;
        containerRef.current.style.paddingBottom = `${padding}px`;
        containerRef.current.style.height = `calc(100vh - ${padding * 2}px)`;
      }
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);

    return () => {
      window.removeEventListener("resize", updateHeight);
    };
  }, []);

  useEffect(() => {
    if (isActive) {
      if (scrollDirection === "down") {
        containerRef.current.scrollTo(0, 0);
      } else if (scrollDirection === "up") {
        containerRef.current.scrollTo(0, containerRef.current.scrollHeight);
      }
    }
  }, [isActive, scrollDirection]);

  useEffect(() => {
    const container = containerRef.current;

    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = container;
      if (scrollTop === 0) {
        container.classList.add("bounce-top");
      } else if (scrollTop + clientHeight >= scrollHeight) {
        container.classList.add("bounce-bottom");
      } else {
        container.classList.remove("bounce-top", "bounce-bottom");
      }
    };

    container.addEventListener("scroll", handleScroll);

    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="section">
      <div className="section-info">Header</div>
      <div
        ref={containerRef}
        className="section-row"
        style={{ overflowY: "auto" }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            className="object-image"
            src={image.src}
            alt={image.alt}
          />
        ))}
      </div>
    </div>
  );
};

export default TestComp;
