import React, { useEffect, useMemo, useState, lazy, Suspense } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import { SUINavbar, TopContainer } from "./components/navbar";
import { PRODUCT_PAGE_URL } from "./pages/product_page/constant";
import { Footer } from "./components/footer";
import { BorderTextLoader } from "./components/loader/border_text_loader";

import "./style.constant.css";

const Home = lazy(() => import("./pages/home_page"));
const Profile = lazy(() => import("./pages/profile_page"));
const Product = lazy(() => import("./pages/product_page"));
const Client = lazy(() => import("./pages/client_page"));
const Quality = lazy(() => import("./pages/quality_page"));
const Careers = lazy(() => import("./pages/careers_page"));
const Contact = lazy(() => import("./pages/contact_page"));

function App() {
  const location = useLocation();

  const [isTextLoader, setIsTextLoader] = useState(false);

  useEffect(() => {
    setIsTextLoader(true);
    setTimeout(() => {
      setIsTextLoader(false);
    }, 1000);
  }, [location]);

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
      {isTextLoader && <BorderTextLoader text="REPL" />}
      {!isTextLoader && (
        <>
          <SUINavbar />
          <TopContainer />

          <Routes>
            <Route
              path="/"
              element={
                <Suspense fallback={<BorderTextLoader text="REPL" />}>
                  <Home />
                </Suspense>
              }
            />
            <Route
              path="/profile"
              element={
                <Suspense fallback={<BorderTextLoader text="REPL" />}>
                  <Profile />{" "}
                </Suspense>
              }
            />
            <Route
              path={productPageUrl}
              element={
                <Suspense fallback={<BorderTextLoader text="REPL" />}>
                  <Product path={productPageUrl} />
                </Suspense>
              }
            />
            <Route
              path="/clients"
              element={
                <Suspense fallback={<BorderTextLoader text="REPL" />}>
                  <Client />
                </Suspense>
              }
            />
            <Route
              path="/clients"
              element={
                <Suspense fallback={<BorderTextLoader text="REPL" />}>
                  <Client />
                </Suspense>
              }
            />
            <Route
              path="/quality"
              element={
                <Suspense fallback={<BorderTextLoader text="REPL" />}>
                  <Quality />
                </Suspense>
              }
            />
            <Route
              path="/careers"
              element={
                <Suspense fallback={<BorderTextLoader text="REPL" />}>
                  <Careers />
                </Suspense>
              }
            />
            <Route
              path="/contact"
              element={
                <Suspense fallback={<BorderTextLoader text="REPL" />}>
                  <Contact />
                </Suspense>
              }
            />
          </Routes>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
