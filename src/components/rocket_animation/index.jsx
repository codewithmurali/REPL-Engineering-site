import { useEffect, useState, useRef } from "react";

import styles from "./rocketAnimation.module.css";

import leftFin from "./images/leftFin.png";
import rightFin from "./images/rightFin.png";
import seperatedRocket from "./images/seperatedRocket.png";
import textImg from "./images/textImg.png";

export const RocketAnimation = () => {
  const textImgTargetRef = useRef(null);
  const [isEmptyVisible, setIsTextImgVisible] = useState(false);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 1.0,
    };

    let isEmptyTargetUpdate = false;

    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;

      isEmptyTargetUpdate = entry.isIntersecting;

      if (textImgTargetRef.current) {
        setIsTextImgVisible(isEmptyTargetUpdate);
      }
    }, options);

    if (textImgTargetRef.current) {
      observer.observe(textImgTargetRef.current);
    }

    // return () => {
    //   if (targetRef.current) observer.unobserve(targetRef.current);
    // };
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
        <span className={styles.emptyText} ref={textImgTargetRef}></span>

        {/* rocket left part */}
        <span className={styles.leftPartContainer}>
          <img
            src={leftFin}
            className={`${styles.leftFinImage} ${isEmptyVisible &&
              styles.leftFinScale}`}
            alt=""
          />
          {isEmptyVisible && (
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
                <span className={styles.highlightedPartName}>
                  Missile Sourya
                </span>
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
            className={`${styles.rightFinImage} ${isEmptyVisible &&
              styles.rightFinScale}`}
            alt=""
          />
          {isEmptyVisible && (
            <>
              <span className={styles.partMentionContainer}>
                <span className={styles.circleContainer}>
                  <span className={`${styles.cricle} ${styles.circle1}`}></span>
                  <span className={`${styles.cricle} ${styles.circle3}`}></span>
                </span>
                <span className={`${styles.leftArrowContainer}`}>
                  <span className={styles.innerArrow}></span>
                </span>
                <span className={`${styles.topArrowContainer}`}>
                  <span className={styles.innerArrow}></span>
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
