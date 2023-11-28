import { SingleBanner } from "../../components/single_banner";
import { ScrollToTop } from "../../components/scrollto_top";
import { AOS_ANIMATION } from "../../constant";

import styles from "./quality.module.css";

import DoubleQuotesStartIcon from "../../components/icons/doubleQuotesStartIcon.png";
import DoubleQuotesEndIcon from "../../components/icons/doubleQuotesEndIcon.png";
import Certifcate from "./images/certifcate.jpeg";
import product1 from "./images/product1.png";
import product2 from "./images/product2.jpeg";
import qualityBgImage from "./images/qualityBgImage.jpeg";

export default function Quality() {
  ScrollToTop();
  return (
    <>
      <SingleBanner content="QUALITY" bgImage={qualityBgImage} />
      <div className={styles.overviewWrapper}>
        <div className={styles.overviewContainer}>
          <img src={Certifcate} alt="certificate" />
          <div className={styles.text}>
            <div
              data-aos={AOS_ANIMATION.FADE_UP.TYPE}
              data-aos-duration={AOS_ANIMATION.FADE_UP.DURATION}
            >
              <img
                src={DoubleQuotesStartIcon}
                alt="double quotes"
                className={styles.doubleQuotesIcon}
              />{" "}
              All the processes are established and well controlled and the
              parts are monitored at various inspection stages on continuous
              basis.
            </div>
            <div
              data-aos={AOS_ANIMATION.FADE_UP.TYPE}
              data-aos-duration={AOS_ANIMATION.FADE_UP.DURATION}
            >
              We have trained staff and with the support of highly sophisticated
              measurement and inspection equipment's like CMM and Trimos and
              digital measuring instruments, Hardness and surface finish
              checking equipment we are able to measure to high degree of
              accuracy.
            </div>
            <div
              data-aos={AOS_ANIMATION.FADE_UP.TYPE}
              data-aos-duration={AOS_ANIMATION.FADE_UP.DURATION}
            >
              We have a QMS in place and follow it to deliver the right product
              to the customer.{" "}
              <img
                src={DoubleQuotesEndIcon}
                alt="double quotes"
                className={styles.doubleQuotesIcon}
              />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.galleryWrapper}>
        <div className={styles.galleryContainer}>
          <div className={styles.imgWrapper}>
            <img src={product1} alt="product" />
          </div>
          <div className={styles.imgWrapper}>
            <img src={product2} alt="product" />
          </div>
        </div>
      </div>
    </>
  );
}
