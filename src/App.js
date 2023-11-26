import React, { useEffect, useMemo, useState, lazy, Suspense } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import { SUINavbar, TopContainer } from "./components/navbar";
import { PRODUCT_PAGE_URL } from "./pages/product_page/constant";
import { Footer } from "./components/footer";
import { BorderTextLoader } from "./components/loader/border_text_loader";
import { Loader } from "./components/loader/circle_loader";

import "./constant/globalstyle.constant.css";
import "./components/animista.css";
import { ChatBotModel } from "./components/chat_bot";

const Home = lazy(() => import("./pages/home_page"));
const Profile = lazy(() => import("./pages/profile_page"));
const Product = lazy(() => import("./pages/product_page"));
const Client = lazy(() => import("./pages/client_page"));
const Quality = lazy(() => import("./pages/quality_page"));
const Careers = lazy(() => import("./pages/careers_page"));
const Contact = lazy(() => import("./pages/contact_page"));

function App() {
  const location = useLocation();

  const [isLoader, setIsLoader] = useState(false);

  useEffect(() => {
    setIsLoader(true);
    setTimeout(() => {
      setIsLoader(false);
    }, 1500);
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
      {isLoader && <Loader />}
      {!isLoader && (
        <>
          <SUINavbar />
          <TopContainer />
          <ChatBotModel />

          <Routes>
            <Route
              path="/"
              element={
                <Suspense fallback={<Loader />}>
                  <Home />
                </Suspense>
              }
            />
            <Route
              path="/profile"
              element={
                <Suspense fallback={<Loader />}>
                  <Profile />
                </Suspense>
              }
            />
            <Route
              path={productPageUrl}
              element={
                <Suspense fallback={<Loader />}>
                  <Product path={productPageUrl} />
                </Suspense>
              }
            />
            <Route
              path="/clients"
              element={
                <Suspense fallback={<Loader />}>
                  <Client />
                </Suspense>
              }
            />
            <Route
              path="/clients"
              element={
                <Suspense fallback={<Loader />}>
                  <Client />
                </Suspense>
              }
            />
            <Route
              path="/quality"
              element={
                <Suspense fallback={<Loader />}>
                  <Quality />
                </Suspense>
              }
            />
            <Route
              path="/careers"
              element={
                <Suspense fallback={<Loader />}>
                  <Careers />
                </Suspense>
              }
            />
            <Route
              path="/contact"
              element={
                <Suspense fallback={<Loader />}>
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
