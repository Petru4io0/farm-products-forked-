import React from "react";
import PageWrapper from "/src/components/layout/page-wrapper/page-wrapper";
import BuyPage from "/src/components/pages/buy-page/buy-page";
import MainPage from "/src/components/pages/main-page/main-page";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import products from "/src/mocks/products";
import advantagesList from "/src/mocks/advantagesList";
import { GlobalStyle } from "./styles";
import { AppRoute } from "/src/const";
import ScrollToTop from "/src/components/UI/scroll-top/scroll-top";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path={AppRoute.MAIN} element={<PageWrapper />}>
            <Route index element={<MainPage advantages={advantagesList} />} />
            <Route
              path={AppRoute.BUY.replace(AppRoute.MAIN, "")}
              element={<BuyPage products={products} />}
            />
          </Route>
        </Routes>
      </Router>
    </>
  );
}
