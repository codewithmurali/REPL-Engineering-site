import { useEffect, useState, useRef } from "react";

import styles from "./rocketAnimation.module.css";

import leftFin from "./images/leftFin.png";
import rightFin from "./images/rightFin.png";
import seperatedRocket from "./images/seperatedRocket.png";
import textImg from "./images/textImg.png";

export const RocketAnimation = () => {
  const targetRef = useRef(null);
  const emptyTarget = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isEmptyVisible, setIsEmptyVisible] = useState(false);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 1.0,
    };

    let isTargetUpdate = false;
    let isEmptyTargetUpdate = false;

    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;

      isTargetUpdate = entry.isIntersecting;
      isEmptyTargetUpdate = entry.isIntersecting;
      if (targetRef.current) {
        setIsVisible(isTargetUpdate);
      }
      if (emptyTarget.current) {
        setIsEmptyVisible(isEmptyTargetUpdate);
      }
    }, options);

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }
    if (emptyTarget.current) {
      observer.observe(emptyTarget.current);
    }

    return () => {
      if (targetRef.current) observer.unobserve(targetRef.current);
    };
  }, []);

  return (
    <div className={styles.rocketWrapper}>
      {/* background animated text as image */}
      <div
        className={`${styles.textImgWrapper} ${isEmptyVisible &&
          styles.textImgWrapperScale}`}
      >
        <img src={textImg} alt="" className={styles.textImg} />
      </div>

      <div className={styles.imageContainer}>
        <span className={styles.emptyText} ref={emptyTarget}></span>

        {/* rocket left part */}
        <span className={styles.leftPartContainer}>
          <img
            src={leftFin}
            className={`${styles.leftFinImage} ${emptyTarget &&
              styles.leftFinScale}`}
            alt=""
          />
          {emptyTarget && (
            <>
              <span className={styles.partMentionContainer}>
                <span className={`${styles.leftArrowContainer}`}>
                  <span className={styles.innerArrow}></span>
                </span>
                <span className={`${styles.topArrowContainer}`}>
                  <span className={styles.innerArrow}></span>
                </span>
                <span className={styles.circleContainer}>
                  <span className={`${styles.cricle} ${styles.circle1}`}></span>
                  <span className={`${styles.cricle} ${styles.circle3}`}></span>
                </span>
                <span className={styles.highlightedPartName}>Missile Sourya</span>
              </span>
            </>
          )}
        </span>

        {/* rocket center part */}
        <img src={seperatedRocket} className={styles.seperatedRocket} alt="" />

        {/* rocket right part */}
        <span className={styles.rightPartContainer}>
          <img
            src={rightFin}
            className={`${styles.rightFinImage} ${emptyTarget &&
              styles.rightFinScale}`}
            alt=""
          />
          {emptyTarget && (
            <>
              <span className={styles.partMentionContainer}>
                <span className={`${styles.leftArrowContainer}`}>
                  <span className={styles.innerArrow}></span>
                </span>
                <span className={`${styles.topArrowContainer}`}>
                  <span className={styles.innerArrow}></span>
                </span>
                <span className={styles.circleContainer}>
                  <span className={`${styles.cricle} ${styles.circle1}`}></span>
                  <span className={`${styles.cricle} ${styles.circle3}`}></span>
                </span>
                <span className={styles.highlightedPartName}>Fin</span>
              </span>
            </>
          )}
        </span>
      </div>
    </div>
  );
};
