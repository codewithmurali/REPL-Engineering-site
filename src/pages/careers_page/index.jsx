import { FormValidation } from "./form";
import { SingleBanner } from "../../components/single_banner";

import styles from "./careers.module.css";
import { ScrollToTop } from "../../components/scrollto_top";

export default function Careers() {
  ScrollToTop();
  return (
    <>
      <SingleBanner
        content="Careers"
        bgImage="https://firebasestorage.googleapis.com/v0/b/repl-f5b12.appspot.com/o/Img2.webp?alt=media&token=845251db-aa2d-4736-bf44-fe8e595020d8"
      />
      <div className={styles.appointmentWrapper}>
        <div className={styles.appointmentContainer}>
          <div className={styles.titleWrapper}>
            <div className={styles.title}>Explore career opportunities</div>
            <div className={styles.description}>
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
