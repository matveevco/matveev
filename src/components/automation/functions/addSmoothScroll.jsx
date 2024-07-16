import React, { useRef, useEffect } from "react";
import Scrollbar from "smooth-scrollbar";
import OverscrollPlugin from "smooth-scrollbar/plugins/overscroll";

Scrollbar.use(OverscrollPlugin);

const SmoothScrollContainer = ({ children, onScroll }) => {
  const scrollRef = useRef(null);

  useEffect(() => {
    let scrollbar;
    if (scrollRef.current) {
      scrollbar = Scrollbar.init(scrollRef.current, {
        damping: 0.05, // Значение для управления скоростью скролла
        renderByPixels: true,
        alwaysShowTracks: false,
        continuousScrolling: true,
        plugins: {
          overscroll: {
            effect: "bounce",
            damping: 0.1,
            maxOverscroll: 150,
          },
        },
      });

      if (onScroll) {
        scrollbar.addListener(onScroll);
      }
    }

    return () => {
      if (scrollbar) {
        scrollbar.destroy();
      }
    };
  }, [onScroll]);

  return (
    <div ref={scrollRef} className="smooth-scroll-container">
      {children}
    </div>
  );
};

export default SmoothScrollContainer;
