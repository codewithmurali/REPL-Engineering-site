import { FormValidation } from "./form";
import { SingleBanner } from "../../components/single_banner";

import styles from "./contact.module.css";

import PhoneIcon from "./images/phoneIcon.png";
import MailIcon from "./images/MailIcon.png";
import GoogleMap from "../../components/map";
import { ScrollToTop } from "../../components/scrollto_top";

export default function Contact() {
  ScrollToTop();
  return (
    <>
      <SingleBanner
        content="Contact"
        bgImage="https://firebasestorage.googleapis.com/v0/b/repl-f5b12.appspot.com/o/Img2.webp?alt=media&token=845251db-aa2d-4736-bf44-fe8e595020d8"
      />
      <div className={styles.formWrapper}>
        <div className={styles.formDataContainer}>
          <div className={styles.topTitleWapper}>
            <div className={styles.topTitleContainer}>
              <div className={styles.title}>Get In Touch</div>
              <div className={styles.description}>
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
                <div className={styles.title}>Call us</div>
                <div
                  className={`${styles.discription} ${styles.firstDiscripton}`}
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
                >
                  <img src={MailIcon} alt="phone" className={styles.mailIcon} />
                  <span>info@revathiengineering.com</span>
                </div>
              </div>

              <div className={styles.contentContainer}>
                <div className={styles.title}>Mailing Address</div>
                <div
                  className={` ${styles.discription} ${styles.firstDiscripton} ${styles.locationDescription} `}
                >
                  Plot. no.: S-9, TIE, Phase 2Balanagar, Hyderabad, Telangana
                  State - 500037.
                </div>
              </div>
              <div className={styles.contentContainer}>
                <div className={styles.title}>Chat us</div>
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
