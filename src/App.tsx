import React from "react";
import SiteFooter from "./components/footer/SiteFooter";
import SiteNavbar from "./components/navbar/SiteNavbar";

function App() {
  return (
    <div className="site-main-wrapper">
      <div className="site-navbar">
        <SiteNavbar />
      </div>
      <div className="site-main">Main</div>
      <div className="site-footer">
        <SiteFooter />
      </div>
    </div>
  );
}

export default App;
