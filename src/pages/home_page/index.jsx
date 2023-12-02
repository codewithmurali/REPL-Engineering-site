import React from "react";

import { TextAnimatedSlider } from "../../components/slider/text_animated_slider";
import { CORE_VALUES } from "./constant";
import { CLIENTS_DATA } from "../client_page/constant";
import { ScrollToTop } from "../../components/scrollto_top";
import { AOS_ANIMATION } from "../../constant/index";
import { SwiperJsSlider } from "../../components/slider/swiper_js_slider";

import styles from "./home.module.css";
import "../../components/animista.css";
import "swiper/css";
import "swiper/css/navigation";

import HomeBgBanner from "./images/HomeBgBanner.svg";
import Img1989 from "./images/Img1989.jpeg";
import earthWide from "./videos/earthWide.mp4";
import earthPortrait from "./videos/earthPortrait.mp4"
import DoubleQuotesStartIcon from "../../components/icons/doubleQuotesStartIcon.png";
import DoubleQuotesEndIcon from "../../components/icons/doubleQuotesEndIcon.png";


export default function Home() {
  ScrollToTop();
  return (
    <>
      {/* ------home-banner----- */}
      <div className={styles.homeBannerContainer}
      >
        <video
          width="100%"
          height="100%"
          src={earthWide}
          autoPlay
          loop
          muted
          playsInline
          className={styles.homeEarthVideoWide}
        ></video>
        <video
          width="100%"
          height="100%"
          src={earthPortrait}
          autoPlay
          loop
          muted
          playsInline
          className={styles.homeEarthVideoPortrait}
        ></video>
        <div className={styles.HomebannerTitleContainer}>
          <div
            className={styles.title1}
            data-aos={AOS_ANIMATION.FADE_UP.TYPE}
            data-aos-duration={AOS_ANIMATION.FADE_UP.DURATION}
          >
            BEYOND EARTH, TOWARD THE STARS
          </div>
          <div
            className={styles.title2}
            data-aos={AOS_ANIMATION.FADE_UP.TYPE}
            data-aos-duration={AOS_ANIMATION.FADE_UP.DURATION}
          >
            Shaping Aerospace and Space Innovation
          </div>
        </div>
      </div>

      {/* ------who-we-are------ */}
      <div className={styles.whoWeAreContainer}>
        <div className={styles.whoWeAreSubContainer}>
          <h1
            className={styles.title}
            data-aos={AOS_ANIMATION.FADE_UP.TYPE}
            data-aos-duration={AOS_ANIMATION.FADE_UP.DURATION}
          >
            WHO WE ARE
          </h1>

          <div className={styles.contentContainer}>
            <div
              className={styles.content1}
              data-aos={AOS_ANIMATION.FADE_UP.TYPE}
              data-aos-duration={AOS_ANIMATION.FADE_UP.DURATION}
            >
              We manufacture precision assemblies and components for the aero
              space sector.
            </div>
            <div
              className={styles.content1}
              data-aos={AOS_ANIMATION.FADE_UP.TYPE}
              data-aos-duration={AOS_ANIMATION.FADE_UP.DURATION}
            >
              We have been here for nearly 4 decades and are one of the prime
              suppliers to the Defense and Aerospace establishments in India.
            </div>
            <div
              className={styles.content1}
              data-aos={AOS_ANIMATION.FADE_UP.TYPE}
              data-aos-duration={AOS_ANIMATION.FADE_UP.DURATION}
            >
              Strong work force with professionals who come from core
              manufacturing and designs background and have expanded creative
              potential of the company.
            </div>
            <div
              className={styles.content2}
              data-aos={AOS_ANIMATION.FADE_UP.TYPE}
              data-aos-duration={AOS_ANIMATION.FADE_UP.DURATION}
            >
              We acknowledge and accept that in pursuing our goals, never
              compromise on the quality. Sticking to delivery schedules is our
              priority
            </div>
          </div>
        </div>
      </div>

      {/* ------slider------ */}
      <TextAnimatedSlider />

      {/* ------our journey------ */}
      <div className={styles.ourJourneyContainer}>
        <div className={styles.ourJourneySubContainer}>
          <h1
            className={styles.title}
            data-aos={AOS_ANIMATION.FADE_UP.TYPE}
            data-aos-duration={AOS_ANIMATION.FADE_UP.DURATION}
          >
            OUR JOURNEY
          </h1>

          <div className={styles.tableWrapper}>
            <table>
              <tr>
                <td>
                  <div className={styles.yearText}>1982</div>
                </td>
                <td>
                  <span
                    data-aos={AOS_ANIMATION.FADE_LEFT.TYPE}
                    data-aos-duration={AOS_ANIMATION.FADE_LEFT.DURATION}
                  >
                    Established in 1982 in Balanagar as SSI Unit.
                  </span>
                  <img
                    data-aos={AOS_ANIMATION.FADE_LEFT.TYPE}
                    data-aos-duration={AOS_ANIMATION.FADE_LEFT.DURATION}
                    src={Img1989}
                    alt="Img1989"
                    className="flip-2-ver-right-1"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <div className={styles.yearText}>1996</div>
                </td>
                <td>
                  <span
                    data-aos={AOS_ANIMATION.FADE_LEFT.TYPE}
                    data-aos-duration={AOS_ANIMATION.FADE_LEFT.DURATION}
                  >
                    Registered as Ancillary Unit to BDL, Ministry of defence in
                    1996.
                  </span>
                  <img
                    data-aos={AOS_ANIMATION.FADE_LEFT.TYPE}
                    data-aos-duration={AOS_ANIMATION.FADE_LEFT.DURATION}
                    src={Img1989}
                    alt="Img1989"
                    className="flip-2-ver-right-1"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <div className={styles.yearText}>1997</div>
                </td>
                <td>
                  <span
                    data-aos={AOS_ANIMATION.FADE_LEFT.TYPE}
                    data-aos-duration={AOS_ANIMATION.FADE_LEFT.DURATION}
                  >
                    Best Vendor award obtained from BHEL in 1997.
                  </span>
                  <img
                    data-aos={AOS_ANIMATION.FADE_LEFT.TYPE}
                    data-aos-duration={AOS_ANIMATION.FADE_LEFT.DURATION}
                    src={Img1989}
                    alt="Img1989"
                    className="flip-2-ver-right-1"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <div className={styles.yearText}>1998 1999 2000</div>
                </td>
                <td>
                  <span
                    data-aos={AOS_ANIMATION.FADE_LEFT.TYPE}
                    data-aos-duration={AOS_ANIMATION.FADE_LEFT.DURATION}
                  >
                    Best import substitution award for the Products developed in
                    1998, 1999 & 2000 from Ministry of Defence.
                  </span>
                  <img
                    data-aos={AOS_ANIMATION.FADE_LEFT.TYPE}
                    data-aos-duration={AOS_ANIMATION.FADE_LEFT.DURATION}
                    src={Img1989}
                    alt="Img1989"
                    className="flip-2-ver-right-1"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <div className={styles.yearText}>2001 2002</div>
                </td>
                <td>
                  <span
                    data-aos={AOS_ANIMATION.FADE_LEFT.TYPE}
                    data-aos-duration={AOS_ANIMATION.FADE_LEFT.DURATION}
                  >
                    Best key Vendor award obtained from HAL in 2001-02.
                  </span>
                  <img
                    data-aos={AOS_ANIMATION.FADE_LEFT.TYPE}
                    data-aos-duration={AOS_ANIMATION.FADE_LEFT.DURATION}
                    src={Img1989}
                    className="flip-2-ver-right-1"
                    alt="Img1989"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <div className={styles.yearText}>2008</div>
                </td>
                <td>
                  <span
                    data-aos={AOS_ANIMATION.FADE_LEFT.TYPE}
                    data-aos-duration={AOS_ANIMATION.FADE_LEFT.DURATION}
                  >
                    Prime vendor award obtained from GTRE in 2008.
                  </span>
                  <img
                    data-aos={AOS_ANIMATION.FADE_LEFT.TYPE}
                    data-aos-duration={AOS_ANIMATION.FADE_LEFT.DURATION}
                    src={Img1989}
                    alt="Img1989"
                    className="flip-2-ver-right-1"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <div className={styles.yearText}>2015</div>
                </td>
                <td>
                  <span
                    data-aos={AOS_ANIMATION.FADE_LEFT.TYPE}
                    data-aos-duration={AOS_ANIMATION.FADE_LEFT.DURATION}
                  >
                    ISO 9001:2015 Quality Management Systems implemented.
                    Expansion in 2008 with additional facilities at Balanagar,
                    Hyderabad.
                  </span>
                  <img
                    data-aos={AOS_ANIMATION.FADE_LEFT.TYPE}
                    data-aos-duration={AOS_ANIMATION.FADE_LEFT.DURATION}
                    src={Img1989}
                    alt="Img1989"
                    className="flip-2-ver-right-1"
                  />
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>

      {/* ------our vision------ */}
      <div className={styles.ourVisionContainer}>
        <div className={styles.ourVisionSubContainer}>
          <h1
            className={styles.title}
            data-aos={AOS_ANIMATION.FADE_UP.TYPE}
            data-aos-duration={AOS_ANIMATION.FADE_UP.DURATION}
          >
            OUR VISION
          </h1>
          <p
            className={styles.content1}
            data-aos={AOS_ANIMATION.FADE_UP.TYPE}
            data-aos-duration={AOS_ANIMATION.FADE_UP.DURATION}
          >
            <img
              src={DoubleQuotesStartIcon}
              alt="double quotes"
              className={styles.doubleQuotesIcon}
            />
            To become the first choice of major PSUs, Aero Space and defense
            establishments in India for manufacture of components and sub
            assemblies. Top most priority to Customer satisfaction. Focus on
            continual improvement, innovation and creativity.{" "}
            <img
              src={DoubleQuotesEndIcon}
              alt="double quotes"
              className={styles.doubleQuotesIcon}
            />
          </p>
        </div>
      </div>

      {/* ------core values------ */}
      <div className={styles.coreValuesWrapper}>
        <div className={styles.coreValuesSubWrapper}>
          <div className={styles.titleContainer}>
            <h1
              className={styles.title}
              data-aos={AOS_ANIMATION.FADE_UP.TYPE}
              data-aos-duration={AOS_ANIMATION.FADE_UP.DURATION}
            >
              CORE VALUES
            </h1>
          </div>

          <div className={styles.coreValuesContainer}>
            {CORE_VALUES.map((item) => {
              return (
                <div className={styles.dataInfo} key="core values">
                  <div className={styles.circleContainer}>
                    <div className={styles.circle1}>
                      <div className={styles.circle2}></div>
                    </div>
                    <img src={item.icon} alt="customerSuccessIcon" />
                  </div>
                  <div className={styles.infoContent}>
                    <div
                      className={styles.content}
                      data-aos={AOS_ANIMATION.FADE_LEFT.TYPE}
                      data-aos-duration={AOS_ANIMATION.FADE_LEFT.DURATION}
                    >
                      {item.title}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ------clients------ */}
      <div className={styles.clientsWrapper}>
        <h1
          className={styles.title}
          data-aos={AOS_ANIMATION.FADE_UP.TYPE}
          data-aos-duration={AOS_ANIMATION.FADE_UP.DURATION}
        >
          OUR CLIENTS
        </h1>

        <SwiperJsSlider dataSource={CLIENTS_DATA} />
      </div>
    </>
  );
}
