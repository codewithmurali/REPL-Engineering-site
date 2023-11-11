import { SingleBanner } from "../../components/single_banner";

import styles from "./quality.module.css";

import DoubleQuotesStartIcon from "./images/doubleQuotesStartIcon.png";
import DoubleQuotesEndIcon from "./images/doubleQuotesEndIcon.png";
import Certifcate from "./images/certifcate.jpeg";
import product1 from "./images/product1.jpeg";
import product2 from "./images/product2.jpeg";

export const Quality = () => {
  return (
    <>
      <SingleBanner
        content="Quality"
        bgImage="https://firebasestorage.googleapis.com/v0/b/repl-f5b12.appspot.com/o/Img2.webp?alt=media&token=845251db-aa2d-4736-bf44-fe8e595020d8"
      />
      <div className={styles.overviewWrapper}>
        <div className={styles.overviewContainer}>
          <img src={Certifcate} alt="certificate" />
          <div className={styles.text}>
            <div>
              <img
                src={DoubleQuotesStartIcon}
                alt="double quotes"
                className={styles.doubleQuotesIcon}
              />{" "}
              All the processes are established and well controlled and the
              parts are monitored at various inspection stages on continuous
              basis.
            </div>
            <div>
              We have trained staff and with the support of highly sophisticated
              measurement and inspection equipment's like CMM and Trimos and
              digital measuring instruments, Hardness and surface finish
              checking equipment we are able to measure to high degree of
              accuracy.
            </div>
            <div>
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
          <img src={product1} alt="product" />
          <img src={product2} alt="product" />
        </div>
      </div>
    </>
  );
};
