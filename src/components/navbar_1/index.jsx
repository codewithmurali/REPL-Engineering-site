import React from "react";
import { DesktopNavBar } from "./desktop";
import { MobileNavbar } from "./mobile";

import styles from "./navbar.module.css";

export const Navbar = () => {
  return (
    <>
      <DesktopNavBar />
      <MobileNavbar />
    </>
  );
};


