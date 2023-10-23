import React from "react";

import styles from "./home.module.css";

import HomeBgBanner from "./images/HomeBgBanner.svg";
import { Slider } from "../../components/slider";

export const Home = () => {
  return (
    <>
      {/* ------home-banner----- */}
      <div
        className={styles.homeBannerContainer}
        style={{
          backgroundImage: `url(${HomeBgBanner})`,
          backgroundSize: "cover",
        }}
      >
        <div className={styles.HomebannerTitleContainer}>
          <div className={styles.title1}>Beyond Earth, Toward the Stars</div>
          <div className={styles.title2}>
            Shaping Aerospace and Space Innovation
          </div>
        </div>
      </div>

      {/* ------who-we-are------ */}
      <div className={styles.whoWeAreContainer}>
        <div className={styles.whoWeAreSubContainer}>
          <div className={styles.title}>Who We Are</div>
          <div className={styles.contentContainer}>
            <div className={styles.content1}>
              We make, so the world can fly!
            </div>
            <div className={styles.content2}>
              We are manufacturers, innovators and creators of the some of the
              most precise components, assemblies and sub assemblies that go
              into aircrafts and aerospace vehicles and carriers. And we love
              what we do.
            </div>
          </div>
        </div>
      </div>

      {/* ------slider------ */}
      <div>
        <div>
            <Slider/>
        </div>
      </div>
    </>
  );
};
