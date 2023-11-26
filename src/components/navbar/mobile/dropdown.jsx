import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import { GoArrowRight, GoArrowLeft } from "react-icons/go";

import styles from "./dropdown.module.css";
import "./csstransition.override.css";

export const DropDown = ({ setIsOpen }) => {
  const [activeMenu, setActiveMenu] = useState("main");

  function DropdownItem({ goToMenu, children, to = "" }) {
    let LinkNode = useMemo(() => {
      return to ? Link : "div";
    }, [to]);
    const onClicked = () => {
      if (goToMenu === "backToMain") {
        goToMenu = "main";
      }
      goToMenu && setActiveMenu(goToMenu);
      if (to) {
        setIsOpen(false);
      }
    };
    return (
      <LinkNode to={to} className={styles.dropdownItem} onClick={onClicked}>
        {children}
        {goToMenu && goToMenu === "products" && (
          <div className={styles.arrowIcon}>
            <GoArrowRight />
          </div>
        )}
      </LinkNode>
    );
  }

  return (
    <div className={styles.dropdownWrapper}>
      <CSSTransition
        in={activeMenu === "main"}
        timeout={500}
        classNames="menu-primary"
        unmountOnExit
      >
        <div className={styles.dropdownContainer}>
          <DropdownItem to="/">HOME</DropdownItem>
          <DropdownItem to="profile">PROFILE</DropdownItem>
          <DropdownItem goToMenu="products">PRODUCTS</DropdownItem>
          <DropdownItem to="clients">CLIENTS</DropdownItem>
          <DropdownItem to="quality">QUALITY</DropdownItem>
          <DropdownItem to="careers">CAREERS</DropdownItem>
          <div className={styles.lastMenuItemWrapper}>
          <Link to="contact">
          <div className={styles.lastMenuItem}>CONTACT</div>
          </Link>
          </div>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "products"}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
      >
        <div className={styles.dropdownContainer}>
          <DropdownItem goToMenu="backToMain">
            <div className={styles.backToContainer}>
              <div className={styles.backArrowIcon}>
                <GoArrowLeft />
              </div>
              PRODUCTS
            </div>
          </DropdownItem>
          <DropdownItem to="/products/steam-gas-turbine-blades">
            STEAM & GAS TURBINE BLADES
          </DropdownItem>
          <DropdownItem to="/products/precision-components">
            PRECISION COMPONENTS
          </DropdownItem>
          <DropdownItem to="/products/heavy-fabrication">
            HEAVY FABRICATION
          </DropdownItem>
          <DropdownItem to="/products/dies-tools">DIES AND TOOLS</DropdownItem>
          <DropdownItem to="/products/aero-sub-assemblies">
            AERO SUB ASSEMBLIES
          </DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
};
