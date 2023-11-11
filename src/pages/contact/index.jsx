import { FormValidation } from "./form";
import { SingleBanner } from "../../components/single_banner";

import styles from "./contact.module.css";

import PhoneIcon from "./images/phoneIcon.png";
import MailIcon from "./images/MailIcon.png";
import GoogleMap from "../../components/map";

export const Contact = () => {
  return (
    <>
      <SingleBanner
        content="Contact"
        bgImage="https://firebasestorage.googleapis.com/v0/b/repl-f5b12.appspot.com/o/Img2.webp?alt=media&token=845251db-aa2d-4736-bf44-fe8e595020d8"
      />
      <div className={styles.formWrapper}>
        <div className={styles.topTitleContainer}>
          <div className={styles.title}>Get In Touch</div>
          <div className={styles.description}>
            Thank you for your interest in GE
          </div>
        </div>

        <div className={styles.formContainer}>
          <FormValidation />
          <div className={styles.contactWrapper}>
            <div className={styles.contentContainer}>
              <div className={styles.title}>Call us</div>
              <div className={styles.discription}>
                <img src={PhoneIcon} alt="phone" className={styles.phoneIcon} />
                040-23771229
              </div>
              <div
                className={` ${styles.discription} ${styles.MailDescription} `}
              >
                <img src={MailIcon} alt="phone" className={styles.mailIcon} />
                info@revathiengineering.com
              </div>
            </div>

            <div className={styles.contentContainer}>
              <div className={styles.title}>Mailing Address</div>
              <div
                className={` ${styles.discription} ${styles.locationDescription} `}
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
      <div className={styles.mapWrapper}>
        <div className={styles.mapContainer}>
          <GoogleMap latitude="17.411177" longitude="78.419293" />
        </div>
      </div>
    </>
  );
};
