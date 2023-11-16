import { useMemo } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import { SUINavbar, TopContainer } from "./components/navbar";
import { Home } from "./pages/home_page";
import { Footer } from "./components/footer";
import { Profile } from "./pages/profile_page";
import { PRODUCT_PAGE_URL } from "./pages/product_page/constant";
import { Product } from "./pages/product_page";
import { Client } from "./pages/client_page";
import { Quality } from "./pages/quality_page";
import { Careers } from "./pages/careers_page";
import { Contact } from "./pages/contact_page";

import "./style.constant.css";
import { DropdownMenu } from "./components/navbar/mobile/mobile";

function App() {
  const location = useLocation();

  const productPageUrl = useMemo(() => {
    let matchedUrl = "";
    switch (location.pathname) {
      case PRODUCT_PAGE_URL.STEAM_GAS:
        matchedUrl = PRODUCT_PAGE_URL.STEAM_GAS;
        break;
      case PRODUCT_PAGE_URL.HEAVY_FABRICATION:
        matchedUrl = PRODUCT_PAGE_URL.HEAVY_FABRICATION;
        break;
      case PRODUCT_PAGE_URL.AERO_SUB_ASSEBLIES:
        matchedUrl = PRODUCT_PAGE_URL.AERO_SUB_ASSEBLIES;
        break;
      case PRODUCT_PAGE_URL.PRECISION_COMPONENTS:
        matchedUrl = PRODUCT_PAGE_URL.PRECISION_COMPONENTS;
        break;
      default:
        matchedUrl = PRODUCT_PAGE_URL.DIES_TOOLS;
    }
    return matchedUrl;
  }, [location]);

  return (
    <>
      <SUINavbar />
      <TopContainer />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route
          path={productPageUrl}
          element={<Product path={productPageUrl} />}
        />
        <Route path="/clients" element={<Client />} />
        <Route path="/clients" element={<Client />} />
        <Route path="/quality" element={<Quality />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/dd" element={<DropdownMenu />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
