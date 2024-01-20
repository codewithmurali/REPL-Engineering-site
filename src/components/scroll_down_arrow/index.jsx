import { useEffect, useState } from "react";

import { SlArrowDown } from "react-icons/sl";

import styles from "./style.module.css";

export const ScrollDownArrow = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY;
      setIsScrolled(scroll >= 1);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Run the effect only once on component mount

  return (
    <>
      <a
        href="#visibleContainer"
        className={`${styles.arrow} ${styles.animated} ${styles.bounce} ${
          isScrolled ? styles.fade : ""
        }`}
      >
        <SlArrowDown className={styles.icon} />
      </a>
    </>
  );
};
