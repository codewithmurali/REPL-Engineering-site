import React, { useState, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";

import { MENU_LIST } from "../constant";
import { SubMenuItem } from "./submenu";

import styles from "./style.module.css";

import Logo from "../images/Logo.svg";

export const DesktopNavBar = () => {
  const [navSize, setnavSize] = useState("");
  const [navColor, setnavColor] = useState("transparent");

  const [isChildVisible, setIsChildVisible] = useState(false);

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

  const handleParentMouseEnter = () => {
    setIsChildVisible(true);
  };

  const handleParentMouseLeave = () => {
    setIsChildVisible(false);
  };

  return (
    <>
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
          {MENU_LIST.map((item) => {
            return (
              item?.menuItem && (
                <React.Fragment>
                  <div
                    className={styles.menuItemInfo}
                    onMouseEnter={
                      item["menuItem"]?.subMenuList && handleParentMouseEnter
                    }
                  >
                    <div className={styles.menuItem}>
                      <Link to={item["menuItem"]?.path}>
                        {item["menuItem"].label}
                      </Link>
                    </div>

                    {item["menuItem"]?.subMenuList && isChildVisible && (
                      <div
                        className={styles.subMenuList}
                        onMouseLeave={handleParentMouseLeave}
                      >
                        <SubMenuItem
                          subMenuList={item["menuItem"].subMenuList}
                        />
                      </div>
                    )}
                  </div>
                </React.Fragment>
              )
            );
          })}
          <div className={`${styles.menuItem} ${styles.lastMenuItem}`}>
            <Link to="contact"> CONTACT US</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export const TopContainer = () => {
  return (
    <Fragment>
      <div className={styles.navbarTopContainer}></div>
    </Fragment>
  );
};
