import React, { useState, useRef, useEffect } from "react";
import "./animista.css";

export const AnimistaImgEffect = ({ image, className }) => {
  const [isInViewport, setIsInViewport] = useState(false);
  const elementRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const rect = elementRef.current?.getBoundingClientRect();
      if (rect) {
        const distance = window.innerHeight - rect.bottom;
        setScrollPosition({
          distanceFromBottom: distance,
          rect: rect,
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleIntersect = (entries) => {
    const entry = entries[0];
    setIsInViewport(
      entry.isIntersecting &&
        scrollPosition.distanceFromBottom > scrollPosition.rect.height / 4
    );
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersect);
    observer.observe(elementRef.current);

    return () => {
      observer.unobserve(elementRef.current);
    };
  }, [scrollPosition]);

  return (
    <img
      ref={elementRef}
      className={`${isInViewport ? "flip-2-ver-right-1" : ""} ${className}`}
      src={image}
      alt="our journey"
    />
  );
};
