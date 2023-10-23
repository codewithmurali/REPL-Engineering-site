import React, { useState, useEffect, useRef } from "react";
import classNames from "classnames";

import Img1 from "./images/Img1.webp"

import "./slider.css";

const slides = [
  {
    city: "Paris",
    country: "France",
    img: "https://firebasestorage.googleapis.com/v0/b/repl-f5b12.appspot.com/o/Img1.webp?alt=media&token=b179d5a7-b62c-4d04-86b9-b98afb97d3b9",
  },
  {
    city: "Singapore",
    img: "https://firebasestorage.googleapis.com/v0/b/repl-f5b12.appspot.com/o/Img2.webp?alt=media&token=845251db-aa2d-4736-bf44-fe8e595020d8",
  }
];

export const Slider = () => {
  const IMAGE_PARTS = 4;
  const AUTOCHANGE_TIME = 4000;

  const [activeSlide, setActiveSlide] = useState(0);
  const [sliderReady, setSliderReady] = useState(false);
  const changeTO = useRef(null);

  useEffect(() => {
    setSliderReady(true);
    startAutoPlay();

    return () => {
      stopAutoPlay();
    };
  }, []);

  const startAutoPlay = () => {
    changeTO.current = setTimeout(() => {
      changeSlides(1);
    }, AUTOCHANGE_TIME);
  };

  const stopAutoPlay = () => {
    clearTimeout(changeTO.current);
  };

  const changeSlides = (change) => {
    const length = slides.length;
    setActiveSlide((prevSlide) => (prevSlide + change + length) % length);
    startAutoPlay();
  };

  const handleControlClick = (change) => {
    stopAutoPlay();
    changeSlides(change);
  };

  return (
    <div className={classNames("slider", { "s--ready": sliderReady })}>
      {/* <p className="slider__top-heading">Travelers</p> */}
      <div className="slider__slides">
        {slides.map((slide, index) => (
          <div
            className={classNames("slider__slide", {
              "s--active": activeSlide === index,
            })}
            key={slide.city}
          >
            <div className="slider__slide-content">
              <h3 className="slider__slide-subheading">
                {slide.country || slide.city}
              </h3>
              <h2 className="slider__slide-heading">
                {slide.city.split("").map((l, i) => (
                  <span key={i}>{l}</span>
                ))}
              </h2>
              <p className="slider__slide-readmore">read more</p>
            </div>
            <div className="slider__slide-parts">
              {[...Array(IMAGE_PARTS).fill()].map((x, i) => (
                <div className="slider__slide-part" key={i}>
                  <div
                    className="slider__slide-part-inner"
                    style={{ backgroundImage: `url(${slide.img})` }}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="slider__control" onClick={() => handleControlClick(-1)} />
      <div
        className="slider__control slider__control--right"
        onClick={() => handleControlClick(1)}
      />
    </div>
  );
};
