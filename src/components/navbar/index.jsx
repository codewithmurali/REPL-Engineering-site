import { SUIDeskNavbar } from "./desktop/index.jsx";
import { SUIMobileNavbar } from "./mobile/index.jsx";

import styles from "./navbar.module.css";

export const SUINavbar = ({
  className,
  menuItemColor,
  menuItemHoverColor,
  bgColor,
}) => {
  return (
    <div>
      <SUIDeskNavbar
        className={className}
        menuItemColor={menuItemColor}
        menuItemHoverColor={menuItemHoverColor}
        DesktopBgColor={bgColor}
      />
      <SUIMobileNavbar
        className={className}
        menuItemColor={menuItemColor}
        menuItemHoverColor={menuItemHoverColor}
        MobileBgColor={bgColor}
      />
    </div>
  );
};

export const TopContainer = () => {
  return <div className={styles.navbarTopContainer}></div>;
};
