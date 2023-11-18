import React, { useState } from "react";
import { Sling as Hamburger } from "hamburger-react";

import { DropDown } from "./dropdown";

import styles from "./navbar.module.css";

import Logo from "../images/Logo.svg";
import { Link } from "react-router-dom";

export const SUIMobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className={styles.navbrWrapper}>
        <div className={styles.navbrContainer}>
          <div className={styles.leftInfo}>
            <Link to="/" toggle={() => setIsOpen(false)}>
              <img src={Logo} alt="logo" />
            </Link>
          </div>
          <div className={styles.rightInfo}>
            <Hamburger
              direction="right"
              duration={0.7}
              size={30}
              toggled={isOpen}
              toggle={() => setIsOpen(!isOpen)}
            />
          </div>
        </div>
      </div>
      <div
        className={`${styles.dropDownWrapper} ${isOpen && styles.dropDownHide}`}
      >
        <DropDown setIsOpen={setIsOpen} />
      </div>
    </>
  );
};
