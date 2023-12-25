import React from "react";

import { AOS_ANIMATION } from "../../constant";

import styles from "./image.module.css";

const ImageLayout = ({ image, className }) => {
  return (
    <div
      className={`${styles.container} ${className}`}
      data-aos={AOS_ANIMATION.FADE_UP.TYPE}
      data-aos-duration={AOS_ANIMATION.FADE_UP.DURATION}
    >
      <div className={styles.corner1}></div>
      <div className={styles.corner2}></div>
      <div className={styles.corner3}></div>
      <div className={styles.corner4}></div>
      <img src={image} alt="layout" />
    </div>
  );
};

export default ImageLayout;
