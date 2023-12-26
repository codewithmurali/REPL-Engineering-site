import { useEffect, useState, useRef } from "react";

import styles from "./rocketAnimation.module.css";

import leftFin from "./images/leftFin.png";
import rightFin from "./images/rightFin.png";
import seperatedRocket from "./images/seperatedRocket.png";

export const RocketAnimation = () => {
  const targetRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 1.0,
    };

    let isUpdate = false;

    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      //   setTimeout(() => {
      setIsVisible(entry.isIntersecting);
      //   }, 0);
      isUpdate = true;
      console.log("in 1111 ", isVisible);
    }, options);

    if (targetRef.current) {
      observer.observe(targetRef.current);
      //   setIsVisible(isUpdate);
    }

    return () => {
      if (targetRef.current) observer.unobserve(targetRef.current);
    };
  }, []);
  console.log("out 1111 ", isVisible);
  return (
    <div className={styles.rocketWrapper}>
      <div className={styles.imageContainer}>
        <img
          src={leftFin}
          className={`${styles.leftFin} ${isVisible && styles.leftFinScale}`}
          alt=""
          ref={targetRef}
        />
        <img src={seperatedRocket} className={styles.seperatedRocket} alt="" />
        <span className={styles.finImgContainer}>
          <img
            src={rightFin}
            className={`${styles.rightFin} ${isVisible &&
              styles.rightFinScale}`}
            alt=""
          />
          {isVisible && (
            <>
              <span className={styles.partMentionContainer}>
                <span className={`${styles.arrow}`}></span>
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
