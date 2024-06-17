import React, { useRef, useEffect } from "react";
import Scrollbar from "smooth-scrollbar";

const SmoothScrollContainer = ({ children }) => {
  const scrollRef = useRef(null);

  useEffect(() => {
    let scrollbar;
    if (scrollRef.current) {
      scrollbar = Scrollbar.init(scrollRef.current, {
        damping: 0.3, // Значение инерции скролла, можно настроить по желанию
        renderByPixels: true, // Рендерить ли пиксели
        alwaysShowTracks: false, // Показывать ли полосы прокрутки всегда
        continuousScrolling: true, // Прокрутка без остановки
        overscrollEffect: "bounce", // Эффект упругости при достижении краёв
        overscrollDamping: 0.3, // Уровень демпфирования эффекта упругости
        maxOverscroll: 150, // Максимальное значение эффекта упругости
      });
    }

    return () => {
      if (scrollbar) {
        scrollbar.destroy();
      }
    };
  }, []);

  return <div ref={scrollRef}>{children}</div>;
};

export default SmoothScrollContainer;
