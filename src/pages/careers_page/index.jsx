import { FormValidation } from "./form";
import { SingleBanner } from "../../components/single_banner";
import { AOS_ANIMATION } from "../../constant";
import { ScrollToTop } from "../../components/scrollto_top";

import styles from "./careers.module.css";

import contactBannerImage from "./images/careersBgImage.jpeg";

export default function Careers() {
  ScrollToTop();
  return (
    <>
      <SingleBanner content="CAREERS" bgImage={contactBannerImage} />
      <div className={styles.appointmentWrapper}>
        <div className={styles.appointmentContainer}>
          <div className={styles.titleWrapper}>
            <div
              className={styles.title}
              data-aos={AOS_ANIMATION.FADE_UP.TYPE}
              data-aos-duration={AOS_ANIMATION.FADE_UP.DURATION}
            >
              Explore career opportunities
            </div>
            <div
              className={styles.description}
              data-aos={AOS_ANIMATION.FADE_UP.TYPE}
              data-aos-duration={AOS_ANIMATION.FADE_UP.DURATION}
            >
              We Are Hiring !!! Apply Below To Join Us
            </div>
          </div>

          <div className={styles.FormWrapper}>
            <div className={styles.FormContainer}>
              <FormValidation />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
