import React, {
  useRef,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from "react";
import Scrollbar from "smooth-scrollbar";
import OverscrollPlugin from "smooth-scrollbar/plugins/overscroll";

Scrollbar.use(OverscrollPlugin);

const SmoothScrollContainer = forwardRef(
  ({ children, onScroll, onInit }, ref) => {
    const scrollRef = useRef(null);
    const scrollbarInstance = useRef(null);

    useEffect(() => {
      if (!scrollbarInstance.current) {
        scrollbarInstance.current = Scrollbar.init(scrollRef.current, {
          damping: 0.05,
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
          scrollbarInstance.current.addListener(({ offset, limit }) => {
            onScroll({ offset, limit });
          });
        }

        if (onInit) {
          onInit(scrollbarInstance.current);
        }
      }

      return () => {
        if (scrollbarInstance.current) {
          scrollbarInstance.current.destroy();
          scrollbarInstance.current = null;
        }
      };
    }, [onScroll, onInit]);

    useImperativeHandle(ref, () => ({
      scrollbar: scrollbarInstance.current,
    }));

    return (
      <div ref={scrollRef} className="smooth-scroll-container">
        {children}
      </div>
    );
  },
);

export default SmoothScrollContainer;
