import React from "react";
import { Route, Routes } from "react-router-dom";
import SiteFooter from "./components/footer/SiteFooter";
import SiteNavbar from "./components/navbar/SiteNavbar";
import Home from "./pages/Home";
import Merge from "./pages/pdf-tools/Merge";

function App() {
  return (
    <div className="site-main-wrapper">
      <div className="site-navbar">
        <SiteNavbar />
      </div>
      <div className="site-main">
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Merge />} path="/merge-pdf" />
        </Routes>
      </div>
      <div className="site-footer">
        <SiteFooter />
      </div>
    </div>
  );
}

export default App;
