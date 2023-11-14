import React from "react";
import styles from "./image.module.css";

const ImageLayout = ({ image, className }) => {
  return (
    <div className={`${styles.container} ${className}`}>
      <div className={styles.corner1}></div>
      <div className={styles.corner2}></div>
      <div className={styles.corner3}></div>
      <div className={styles.corner4}></div>
      <img src={image} alt="layout" />
    </div>
  );
};

export default ImageLayout;
