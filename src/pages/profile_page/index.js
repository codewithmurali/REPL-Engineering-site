import { ScrollToTop } from "../../components/scrollto_top";
import { Slider } from "../../components/slider";
import { PROFILE_DATA } from "./constant";
import { AOS_ANIMATION } from "../../constant";

import styles from "./profile.module.css";

export default function Profile() {
  ScrollToTop();
  return (
    <>
      <Slider className={styles.slider} />
      <div className={styles.profileWrapper}>
        <div className={styles.profileSubWrapper}>
          <div
            className={styles.title}
            data-aos={AOS_ANIMATION.FADE_UP.TYPE}
            data-aos-duration={AOS_ANIMATION.FADE_UP.DURATION}
          >
            PROFILE
          </div>
          <div className={styles.contentContainer}>
            {PROFILE_DATA.map((item) => {
              return (
                <div
                  className={styles.content}
                  key="Profile data"
                  data-aos={AOS_ANIMATION.FADE_UP.TYPE}
                  data-aos-duration={AOS_ANIMATION.FADE_UP.DURATION}
                >
                  {item}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
