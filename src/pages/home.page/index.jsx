import React from "react";

import { Slider } from "../../components/slider";

import styles from "./home.module.css";

import HomeBgBanner from "./images/HomeBgBanner.svg";
import Img1989 from "./images/Img1989.jpeg";

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
          <h1 className={styles.title}>Who We Are</h1>
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
      <Slider />

      {/* ------our journey------ */}
      <div className={styles.ourJourneyContainer}>
        <div className={styles.ourJourneySubContainer}>
          <h1 className={styles.title}>OUR JOURNEY</h1>
          <table>
            <tr>
              <td>
                <div className={styles.yearText}>1982</div>
              </td>
              <td>
                Established in 1982 in Balanagar as SSI Unit.
                <img src={Img1989} alt="Img1989"/>
              </td>
            </tr>
            <tr>
              <td>1996</td>
              <td>
                Registered as Ancillary Unit to BDL, Ministry of defence in
                1996.
              </td>
            </tr>
            <tr>
              <td>1997</td>
              <td>Best Vendor award obtained from BHEL in 1997.</td>
            </tr>
            <tr>
              <td>1998 1999 2000</td>
              <td>
                Best import substitution award for the Products developed in
                1998, 1999 & 2000 from Ministry of Defence.
              </td>
            </tr>
            <tr>
              <td>2001 2002</td>
              <td>Best key Vendor award obtained from HAL in 2001-02.</td>
            </tr>
            <tr>
              <td>2008</td>
              <td>Prime vendor award obtained from GTRE in 2008.</td>
            </tr>
            <tr>
              <td>2015</td>
              <td>
                ISO 9001:2015 Quality Management Systems implemented. Expansion
                in 2008 with additional facilities at Balanagar , Hyderabad.
              </td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
};
