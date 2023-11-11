import styles from "./banner.module.css";

export const SingleBanner = ({ content, bgImage }) => {
  return (
    <div className={styles.bannerWrapper}>
      <div
        className={styles.bannerSubWrapper}
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>
      <div className={styles.text}>{content}</div>
    </div>
  );
};
