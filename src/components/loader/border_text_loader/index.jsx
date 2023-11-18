import styles from "./loader.module.css";

export const BorderTextLoader = ({ text }) => {
  return (
    <div className={styles.loaderWrapper}>
      <svg>
        <text x="50%" y="50%" dy=".35em" textAnchor="middle">
          {text}
        </text>
      </svg>
    </div>
  );
};
