import React, { useState, useEffect } from "react";
import styles from "./style.module.css";

import Logo from "../images/Logo.svg";

export const DesktopNavBar = () => {
  const [navSize, setnavSize] = useState("");
  const [navColor, setnavColor] = useState("transparent");
  const listenScrollEvent = () => {
    window.scrollY > 10 ? setnavColor("#07080f") : setnavColor("transparent");
    window.scrollY > 10 ? setnavSize("110px") : setnavSize("90px");
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);
  return (
    <div
      className={styles.container}
      style={{
        backgroundColor: navColor,
        height: navSize,
        transition: "all 0.5s",
      }}
    >
      <div className={styles.logo}>
        <img src={Logo} alt="logo" />
      </div>
      <div className={styles.menuItems}>
        <div className={styles.menuItem}>HOME</div>
        <div className={styles.menuItem}>PROFILE</div>
        <div className={styles.menuItem}>PRODUCTS</div>
        <div className={styles.menuItem}>CLIENTS</div>
        <div className={styles.menuItem}>QUALITY</div>
        <div className={styles.menuItem}>CAREERS</div>
        <div className={`${styles.menuItem} ${styles.lastMenuItem}`}>
          CONTACT US
        </div>
      </div>
    </div>
  );
};
