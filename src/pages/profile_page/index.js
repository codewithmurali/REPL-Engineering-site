import { ScrollToTop } from "../../components/scrollto_top";
import { Slider } from "../../components/slider";
import { PROFILE_DATA } from "./constant";

import styles from "./profile.module.css";

export const Profile = () => {
  ScrollToTop();
  return (
    <>
      <Slider className={styles.slider} />
      <div className={styles.profileWrapper}>
        <div className={styles.profileSubWrapper}>
          <div className={styles.title}>Profile</div>
          <div className={styles.contentContainer}>
            {PROFILE_DATA.map((item) => {
              return (
                <div className={styles.content} key="Profile data">
                  {item}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
