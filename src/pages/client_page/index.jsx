import MyComponent from "../../components/image_layout";
import { ScrollToTop } from "../../components/scrollto_top";
import { SingleBanner } from "../../components/single_banner";
import { CLIENTS_DATA } from "./constant";

import styles from "./client.module.css";

import clientBanner from "./images/banner_image/clientBanner.jpeg";

export default function Client() {
  ScrollToTop();
  return (
    <>
      <SingleBanner bgImage={clientBanner} content="CLIENTS" />
      <div className={styles.clientsWrapper}>
        <div className={styles.clientsContainer}>
          {CLIENTS_DATA.map((item) => {
            return (
              <div className={styles.cardInfoContainer} key="client">
                <img src={item.img} alt={item.name} />
                {/* <div className={styles.textInfo}>{item.name}</div> */}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
