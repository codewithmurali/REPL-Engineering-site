import styles from "./text.module.css";

export const FadedText = () => {
  return (
    <div className={styles.loading}>
      <div className={styles.loadingText}>
        <span className={styles.loadingTextWord}>R</span>
        <span className={styles.loadingTextWord}>E</span>
        <span className={styles.loadingTextWord}>P</span>
        <span className={styles.loadingTextWord}>L</span>
      </div>
    </div>
  );
};
