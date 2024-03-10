import React, { useEffect } from "react";
import anime from "animejs";

const AnimatedText = ({ text, className, slideChanged }) => {
  useEffect(() => {
    const textWrapper = document.querySelector(".ml12");
    const animateText = () => {
      textWrapper.innerHTML = textWrapper.textContent.replace(
        /\S/g,
        "<span class='letter'>$&</span>"
      );

      anime
        .timeline({ loop: false })
        .add({
          targets: ".ml12 .letter",
          translateX: [40, 0],
          translateZ: 0,
          opacity: [0, 1],
          easing: "easeOutExpo",
          duration: 1000,
          delay: (el, i) => 200 + 30 * i,
        })
    };

    slideChanged && textWrapper && animateText();

    // Clean up animation on unmount if needed
    return () => {
      anime.remove(".ml12 .letter");
    };
  }, [slideChanged]);

  return <p className={`${className}`}>{text}</p>;
};

export default AnimatedText;
