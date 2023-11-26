import styles from "./loader.module.css";
import { FadedText } from "./text";

export const Loader = () => {
  return (
    <div className={styles.loaderWrapper}>
      <div className={styles.spinnerBox}>
        <div className={styles.circleBorder}>
          <div className={styles.circleCore}>
            <div className={styles.faddedText}></div>
          </div>
        </div>
      </div>
      <FadedText />
    </div>
  );
};
