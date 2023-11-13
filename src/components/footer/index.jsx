import React from "react";

import { FOOTER_MENU_LINKS, SOCIAL_MEDIA_LINKS } from "./constant";

import styles from "./footer.module.css";

import footerLogo from "./images/footerLogo.png";

export const Footer = () => {
  return (
    <div className={styles.footerWrapper}>
      <div className={styles.footerContainer}>
        <div className={styles.topInfo}>
          <div className={styles.logoContainerInfo}>
            <img src={footerLogo} alt="footerLogo" className={styles.logo} />
            <div className={styles.companyName}>
              Revathi Engineering Pvt. Ltd
            </div>
            <div className={styles.slogan}>We make, so world can fly</div>
            <div className={styles.mediaIconContainer}>
              {SOCIAL_MEDIA_LINKS.map((item) => {
                return <a href={item.link}>{item.icon}</a>;
              })}
            </div>
          </div>

          {FOOTER_MENU_LINKS.map((item) => {
            return (
              <div className={styles.menuLinksContainer}>
                <div className={styles.title}>{item.title}</div>
                {item["links"].map((data) => {
                  return (
                    <a
                      className={styles.linkInfo}
                      href={data?.isUrl && data?.url}
                    >
                      {data.name}
                    </a>
                  );
                })}
              </div>
            );
          })}
        </div>
        <div className={styles.copyRightsContainer}>
          <div className={styles.leftInfo}>
            All Rights Reserved Revathi Engineering
          </div>
          <div className={styles.rightInfo}>
            Designed by<a href="https://skynoveau.in/"> Skynoveau Technology</a>
          </div>
        </div>
      </div>
    </div>
  );
};
