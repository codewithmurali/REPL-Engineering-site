import { FormValidation } from "./form";
import { SingleBanner } from "../../components/single_banner";
import { ScrollToTop } from "../../components/scrollto_top";
import { AOS_ANIMATION } from "../../constant";

import styles from "./contact.module.css";

import PhoneIcon from "./images/phoneIcon.png";
import MailIcon from "./images/MailIcon.png";
import GoogleMap from "../../components/map";
import contactBannerImage from "./images/contactBannerImage.jpg";
import worldMap from "./images/worldMap.png";

export default function Contact() {
  ScrollToTop();
  return (
    <>
      <SingleBanner content="CONTACT" bgImage={worldMap} />
      <div className={styles.formWrapper}>
        <div className={styles.formDataContainer}>
          <div className={styles.topTitleWapper}>
            <div className={styles.topTitleContainer}>
              <div
                className={styles.title}
                data-aos={AOS_ANIMATION.FADE_UP.TYPE}
                data-aos-duration={AOS_ANIMATION.FADE_UP.DURATION}
              >
                Get In Touch
              </div>
              <div
                className={styles.description}
                data-aos={AOS_ANIMATION.FADE_UP.TYPE}
                data-aos-duration={AOS_ANIMATION.FADE_UP.DURATION}
              >
                Thank you for your interest in GE
              </div>
            </div>
          </div>

          <div className={styles.formContainer}>
            <div className={styles.formSection}>
              <FormValidation />
            </div>
            <div className={styles.contactWrapper}>
              <div className={styles.contentContainer}>
                <div
                  className={styles.title}
                  data-aos={AOS_ANIMATION.FADE_UP.TYPE}
                  data-aos-duration={AOS_ANIMATION.FADE_UP.DURATION}
                >
                  Call us
                </div>
                <div
                  className={`${styles.discription} ${styles.firstDiscripton}`}
                  data-aos={AOS_ANIMATION.FADE_UP.TYPE}
                  data-aos-duration={AOS_ANIMATION.FADE_UP.DURATION}
                >
                  <img
                    src={PhoneIcon}
                    alt="phone"
                    className={styles.phoneIcon}
                  />
                  <span>040-23771229</span>
                </div>
                <div
                  className={` ${styles.discription} ${styles.MailDescription} `}
                  data-aos={AOS_ANIMATION.FADE_UP.TYPE}
                  data-aos-duration={AOS_ANIMATION.FADE_UP.DURATION}
                >
                  <img src={MailIcon} alt="phone" className={styles.mailIcon} />
                  <span>info@revathiengineering.com</span>
                </div>
              </div>

              <div className={styles.contentContainer}>
                <div
                  className={styles.title}
                  data-aos={AOS_ANIMATION.FADE_UP.TYPE}
                  data-aos-duration={AOS_ANIMATION.FADE_UP.DURATION}
                >
                  Mailing Address
                </div>
                <div
                  className={` ${styles.discription} ${styles.firstDiscripton} ${styles.locationDescription} `}
                  data-aos={AOS_ANIMATION.FADE_UP.TYPE}
                  data-aos-duration={AOS_ANIMATION.FADE_UP.DURATION}
                >
                  Plot. no.: S-9, TIE, Phase 2Balanagar, Hyderabad, Telangana
                  State - 500037.
                </div>
              </div>
              <div className={styles.contentContainer}>
                <div
                  className={styles.title}
                  data-aos={AOS_ANIMATION.FADE_UP.TYPE}
                  data-aos-duration={AOS_ANIMATION.FADE_UP.DURATION}
                >
                  Chat us
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.mapWrapper}>
        <div className={styles.mapContainer}>
          <GoogleMap latitude="17.411177" longitude="78.419293" />
        </div>
      </div>
    </>
  );
}
