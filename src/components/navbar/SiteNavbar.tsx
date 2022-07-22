import React from "react";

const SiteNavbar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-md bg-white">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src={process.env.PUBLIC_URL + "/icons/logo.svg"} height={20} />
        </a>
        <div>
          <button className="btn">Login</button>
          <button className="btn">Login</button>
        </div>
      </div>
    </nav>
  );
};

export default SiteNavbar;
