import { useState, useEffect } from "react";
import { Sling as Hamburger } from "hamburger-react";

import { DropDown } from "./dropdown";

import styles from "./navbar.module.css";
import "./hamburger.override.css";

import Logo from "../images/Logo.svg";
import { Link } from "react-router-dom";

export const SUIMobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [navSize, setNavSize] = useState("");
  const [navColor, setNavColor] = useState("transparent");

  const listenScrollEvent = () => {
    window.scrollY > 10 && setNavColor("black");
    window.scrollY > 10 ? setNavSize("70px") : setNavSize("60px");
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  return (
    <>
      <div
        className={styles.navbrWrapper}
        style={{
          backgroundColor: navColor,
          height: navSize,
          transition: "all 0.5s",
        }}
      >
        <div className={styles.navbrContainer}>
          <div className={styles.leftInfo}>
            <Link to="/" toggle={() => setIsOpen(false)}>
              <img src={Logo} alt="logo" />
            </Link>
          </div>
          <div className={`${styles.rightInfo} hamburgerMenu`}>
            <Hamburger
              direction="right"
              duration={0.7}
              size={29.2}
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
