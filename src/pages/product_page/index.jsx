import { Fragment, useEffect, useState } from "react";

import { SingleBanner } from "../../components/single_banner";
import { PRODUCT_PAGE_DATA, PRODUCT_PAGE_URL } from "./constant";
import ImageLayout from "../../components/image_layout";

import styles from "./product.module.css";

export default function Product({ path }) {
  const [matchedData, setMatchedData] = useState("");

  useEffect(() => {
    switch (path) {
      case PRODUCT_PAGE_URL.STEAM_GAS:
        setMatchedData(PRODUCT_PAGE_URL.STEAM_GAS);
        break;
      case PRODUCT_PAGE_URL.HEAVY_FABRICATION:
        setMatchedData(PRODUCT_PAGE_URL.HEAVY_FABRICATION);
        break;
      case PRODUCT_PAGE_URL.AERO_SUB_ASSEBLIES:
        setMatchedData(PRODUCT_PAGE_URL.AERO_SUB_ASSEBLIES);
        break;
      case PRODUCT_PAGE_URL.PRECISION_COMPONENTS:
        setMatchedData(PRODUCT_PAGE_URL.PRECISION_COMPONENTS);
        break;
      default:
        setMatchedData(PRODUCT_PAGE_URL.DIES_TOOLS);
    }
    window.scrollTo(0, 0);
  }, [path]);

  return (
    <>
      {matchedData && (
        <Fragment>
          <SingleBanner
            bgImage={PRODUCT_PAGE_DATA[matchedData]["bannerBgImage"]}
            content={PRODUCT_PAGE_DATA[matchedData]["bannerContent"]}
          />
          <div className={styles.title}>
           <h2> {PRODUCT_PAGE_DATA[matchedData]["title"]}</h2>
          </div>
          <div className={styles.productWrapper}>
            <div className={styles.productSubWrapper}>
              {PRODUCT_PAGE_DATA[matchedData]["data"].map((data) => {
                return (
                  <div className={styles.itemWrapper} key="product">
                    <ImageLayout
                      image={data["image"]}
                      className={styles.imageLayout}
                    />
                    <div className={styles.productName}>{data["name"]}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </Fragment>
      )}
    </>
  );
}
