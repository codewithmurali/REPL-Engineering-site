import React from "react";
import { DesktopNavBar } from "./desktop";
import { MobileNavbar } from "./mobile";

export const Navbar = () => {
  return (
    <>
      <DesktopNavBar />
      <MobileNavbar />
    </>
  );
};
