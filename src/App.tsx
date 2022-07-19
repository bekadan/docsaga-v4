import React from "react";
import SiteFooter from "./components/footer/SiteFooter";
import SiteNavbar from "./components/navbar/SiteNavbar";

function App() {
  return (
    <div className="site-main-wrapper">
      <div className="site-navbar">
        <SiteNavbar />
      </div>
      <div className="site-main">
        <div className="home-title">
          <h1>
            <b>Every tool you need to work with PDFs in one place</b>
          </h1>
          <h6>
            Every tool you need to use PDFs, at your fingertips. All are 100%
            FREE and easy to use! Merge, split, compress, convert, rotate,
            unlock and watermark PDFs with just a few clicks.
          </h6>
        </div>
        <div className="container">
          <div className="tool-main">
            <div className="tool-box">asdsad</div>
            <div className="tool-box">asdsad</div>
            <div className="tool-box">asdsad</div>
            <div className="tool-box">asdsad</div>
            <div className="tool-box">asdsad</div>
            <div className="tool-box">asdsad</div>
            <div className="tool-box">asdsad</div>
            <div className="tool-box">asdsad</div>
            <div className="tool-box">asdsad</div>
            <div className="tool-box">asdsad</div>
            <div className="tool-box">asdsad</div>
            <div className="tool-box">asdsad</div>
            <div className="tool-box">asdsad</div>
            <div className="tool-box">asdsad</div>
            <div className="tool-box">asdsad</div>
            <div className="tool-box">asdsad</div>
            <div className="tool-box">asdsad</div>
            <div className="tool-box">asdsad</div>
          </div>
        </div>
      </div>
      <div className="site-footer">
        <SiteFooter />
      </div>
    </div>
  );
}

export default App;
