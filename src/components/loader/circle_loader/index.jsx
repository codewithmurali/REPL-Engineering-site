import { FadedText } from "./text";

import Logo from "../../../common/Logo/Logo.svg";

import styles from "./loader.module.css";

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
      {/* <FadedText /> */}
      <img src={Logo} alt="logo" />
    </div>
  );
};
