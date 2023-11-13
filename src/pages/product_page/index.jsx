import { Fragment, useEffect, useState } from "react";
import { SingleBanner } from "../../components/single_banner";
import styles from "./style.module.css";
import { PRODUCT_PAGE_DATA, PRODUCT_PAGE_URL } from "./constant";

export const Product = ({ path }) => {
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
            {PRODUCT_PAGE_DATA[matchedData]["title"]}
          </div>
          <div className={styles.productWrapper}>
            <div className={styles.productSubWrapper}>
              {PRODUCT_PAGE_DATA[matchedData]["data"].map((data) => {
                return (
                  <div className={styles.itemWrapper}>
                    <img src={data["image"]} alt="product" />
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
};