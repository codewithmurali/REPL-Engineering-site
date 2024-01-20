import { useEffect, useState } from "react";

import { IoIosArrowForward } from "react-icons/io";

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
  }, []);

  return (
    <>
      <a href="#visibleContainer" className={`${styles.centerCon} ${isScrolled && styles.fade}`}>
        <div className={`${styles.round}`}>
          <div className={styles.cta}>
            <span
              className={`${styles.arrow} ${styles.primera} ${styles.next} `}
            >
              <IoIosArrowForward className={styles.arrowIcon} />
            </span>
            <span
              className={`${styles.arrow} ${styles.segunda} ${styles.next} `}
            >
              <IoIosArrowForward className={styles.arrowIcon} />
            </span>
          </div>
        </div>
        <p className={styles.text}>Scroll</p>
      </a>
    </>
  );
};
