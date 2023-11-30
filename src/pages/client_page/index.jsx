import MyComponent from "../../components/image_layout";
import { ScrollToTop } from "../../components/scrollto_top";
import { SingleBanner } from "../../components/single_banner";
import { CLIENTS_DATA } from "./constant";
import { SwiperJsSlider } from "../../components/slider/swiper_js_slider";

import styles from "./client.module.css";

import clientBanner from "./images/banner_image/clientBanner.jpeg";

export default function Client() {
  ScrollToTop();
  return (
    <>
      <SingleBanner bgImage={clientBanner} content="CLIENTS" />
      <div className={styles.clientsWrapper}>
        <SwiperJsSlider dataSource={CLIENTS_DATA} />
      </div>
    </>
  );
}
