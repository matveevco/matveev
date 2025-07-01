import { useEffect, useRef, useMemo } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollReveal = ({
  children,
  scrollContainerRef,
  enableBlur = true,
  baseOpacity = 0.1,
  baseRotation = 0,
  blurStrength = 0,
  containerClassName = "",
  textClassName = "",
  rotationEnd = "bottom center",
  wordAnimationEnd = "bottom center",
}) => {
  const containerRef = useRef(null);
  const triggersRef = useRef([]);

  const splitText = useMemo(() => {
    const text = typeof children === "string" ? children : children.toString();
    return text.split(/(\s+)/).map((word, index) => {
      if (word.match(/^\s+$/)) return word;
      return (
        <span className="word" key={index}>
          {word}
        </span>
      );
    });
  }, [children]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Очистка предыдущих триггеров
    triggersRef.current.forEach((trigger) => trigger.kill());
    triggersRef.current = [];

    const scroller =
      scrollContainerRef && scrollContainerRef.current
        ? scrollContainerRef.current
        : window;

    const wordElements = el.querySelectorAll(".word");
    if (wordElements.length === 0) return;

    // ПРИНУДИТЕЛЬНЫЙ RESET всех значений перед анимацией
    gsap.set(el, {
      transformOrigin: "0% 50%",
      rotate: baseRotation,
      force3D: true,
      clearProps: "all", // Очистка всех предыдущих свойств
    });

    gsap.set(wordElements, {
      opacity: baseOpacity,
      filter: enableBlur ? `blur(${blurStrength}px)` : "none",
      force3D: true,
      clearProps: "transform", // Очистка transform свойств
    });

    // Небольшая задержка для Safari
    const initAnimation = () => {
      // Rotation animation
      const rotationTrigger = gsap.fromTo(
        el,
        { rotate: baseRotation },
        {
          ease: "none",
          rotate: 0,
          scrollTrigger: {
            trigger: el,
            scroller,
            start: "top 65%",
            end: rotationEnd,
            scrub: true,
            refreshPriority: -1,
            invalidateOnRefresh: true, // Пересчет на каждом refresh
          },
        },
      );

      triggersRef.current.push(rotationTrigger.scrollTrigger);

      // Создание timeline для слов
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          scroller,
          start: "top 65%",
          end: wordAnimationEnd,
          scrub: true,
          refreshPriority: -1,
          invalidateOnRefresh: true,
          onRefresh: () => {
            // Принудительный reset при refresh
            gsap.set(wordElements, {
              opacity: baseOpacity,
              filter: enableBlur ? `blur(${blurStrength}px)` : "none",
            });
          },
        },
      });

      // Opacity animation
      tl.fromTo(
        wordElements,
        { opacity: baseOpacity },
        {
          ease: "none",
          opacity: 1,
          stagger: 0.05,
          duration: 1,
        },
        0,
      );

      // Blur animation
      if (enableBlur && blurStrength > 0) {
        const supportsBlur = CSS.supports("filter", "blur(1px)");

        if (supportsBlur) {
          tl.fromTo(
            wordElements,
            { filter: `blur(${blurStrength}px)` },
            {
              ease: "none",
              filter: "blur(0px)",
              stagger: 0.05,
              duration: 1,
            },
            0,
          );
        }
      }

      triggersRef.current.push(tl.scrollTrigger);
    };

    // Небольшая задержка для Safari
    const timer = setTimeout(initAnimation, 16);

    return () => {
      clearTimeout(timer);
      // Очистка только своих триггеров
      triggersRef.current.forEach((trigger) => {
        if (trigger && trigger.kill) {
          trigger.kill();
        }
      });
      triggersRef.current = [];

      // Принудительная очистка состояний для Safari
      if (el && wordElements.length > 0) {
        gsap.set([el, ...wordElements], { clearProps: "all" });
      }
    };
  }, [
    scrollContainerRef,
    enableBlur,
    baseRotation,
    baseOpacity,
    rotationEnd,
    wordAnimationEnd,
    blurStrength,
  ]);

  return (
    <h2 ref={containerRef} className={`scroll-reveal ${containerClassName}`}>
      <p className={`scroll-reveal-text ${textClassName}`}>{splitText}</p>
    </h2>
  );
};

export default ScrollReveal;
