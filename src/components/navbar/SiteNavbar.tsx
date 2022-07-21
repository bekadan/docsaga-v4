import React from "react";

const SiteNavbar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-md bg-white">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src={process.env.PUBLIC_URL+"/icons/logo.svg"} height={20} />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-0 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Merge
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Split
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Compress
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Edit
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">
                eSignature
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">
                File Sharing
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default SiteNavbar;
