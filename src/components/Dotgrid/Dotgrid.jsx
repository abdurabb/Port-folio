import React, { useEffect, useCallback, useRef } from "react";
import anime from "animejs";

const Dotgrid = () => {
  const timerRef = useRef(null);
  const numberOfDots = 500;

  const animateAllDotsFromClickedWrapper = useCallback((clickedWrapper) => {
    const allDots = document.querySelectorAll(".dot-point");

    if (!clickedWrapper || !allDots.length) return;

    anime({
      targets: allDots,
      scale: [
        { value: 1.35, easing: "easeOutSine", duration: 250 },
        { value: 1, easing: "easeInOutQuad", duration: 500 },
      ],
      translateY: [
        { value: -15, easing: "easeOutSine", duration: 250 },
        { value: 1, easing: "easeInOutQuad", duration: 500 },
      ],
      opacity: [
        { value: 0.7, easing: "easeOutSine", duration: 250 },
        { value: 0.35, easing: "easeInOutQuad", duration: 500 },
      ],
      delay: anime.stagger(100, {
        grid: [25, 20],
        from: clickedWrapper.dataset.index,
      }),
    });
  }, []);

  const startAnimationEvery30Seconds = useCallback(() => {
    const allDots = document.querySelectorAll(".dot-point");

    if (!allDots.length) return;

    const randomDotIndex = Math.floor(Math.random() * allDots.length);

    const randomWrapper = allDots[randomDotIndex].closest(
      ".dotgrid_dotWrapper__Qf5dS"
    );

    animateAllDotsFromClickedWrapper(randomWrapper);

    timerRef.current = setTimeout(() => {
      startAnimationEvery30Seconds();
    }, 20000);
  }, [animateAllDotsFromClickedWrapper]);

  useEffect(() => {
    startAnimationEvery30Seconds();

    return () => {
      clearTimeout(timerRef.current);
    };
  }, [startAnimationEvery30Seconds]);

  const handleDotClick = (e) => {
    const clickedWrapper = e.target.closest(
      ".dotgrid_dotWrapper__Qf5dS"
    );

    if (clickedWrapper) {
      animateAllDotsFromClickedWrapper(clickedWrapper);
    }
  };

  const dotElements = Array.from({ length: numberOfDots }, (_, index) => (
    <div
      className="dotgrid_dotWrapper__Qf5dS"
      data-index={index}
      key={index}
    >
      <div
        className="dotgrid_dot__JnSZ6 dot-point"
        data-index={index}
      />
    </div>
  ));

  return (
    <div
      style={{ gridTemplateColumns: "repeat(25, 21fr)" }}
      className="dotgrid_dotGrid__fIloK"
      onClick={handleDotClick}
    >
      {dotElements}
    </div>
  );
};

export default Dotgrid;