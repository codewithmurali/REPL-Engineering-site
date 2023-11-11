import { Slider } from "../../components/slider";
import { PROFILE_DATA } from "./constant";

import styles from "./profile.module.css";

export const Profile = () => {
  return (
    <>
      <Slider className={styles.slider} />
      <div className={styles.profileWrapper}>
        <div className={styles.profileSubWrapper}>
          <div className={styles.title}>Overview</div>
          <div className={styles.contentContainer}>
            {PROFILE_DATA.map((item) => {
              return <div className={styles.content}>{item}</div>;
            })}
          </div>
        </div>
      </div>
    </>
  );
};
