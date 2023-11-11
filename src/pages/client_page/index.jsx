import { SingleBanner } from "../../components/single_banner";
import { CLIENTS_DATA } from "../home_page/constant";

import styles from "./client.module.css";

export const Client = () => {
  return (
    <>
      <SingleBanner
        bgImage="https://firebasestorage.googleapis.com/v0/b/repl-f5b12.appspot.com/o/Img2.webp?alt=media&token=845251db-aa2d-4736-bf44-fe8e595020d8"
        content="Client"
      />
      <div className={styles.clientsWrapper}>
        <div className={styles.clientsContainer}>
          {CLIENTS_DATA.map((item) => {
            return (
              <div className={styles.cardInfoContainer}>
                <img src={item.img} alt={item.name} />
                <div className={styles.textInfo}>{item.name}</div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
