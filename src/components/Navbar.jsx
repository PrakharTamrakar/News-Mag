import React from "react";

const Navbar = ({ setCategory }) => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary border-bottom border-body"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <span className="badge text-dark fs-4 bg-light">NewsMag</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <li>
                <div className="nav-link" onClick={()=>setCategory('technology')}>Technology</div>
              </li>
              <li>
                <div className="nav-link" onClick={()=>setCategory('business')}>Business</div>
              </li>
              <li>
                <div className="nav-link" onClick={()=>setCategory('health')}>Health</div>
              </li>
              {/* <li>
                <div className="nav-link" onClick={()=>setCategory('science')}>Science</div>
              </li> */}
              <li>
                <div className="nav-link" onClick={()=>setCategory('sports')}>Sports</div>
              </li>
              <li>
                <div className="nav-link" onClick={()=>setCategory('entertainment')}>Entertainment</div>
              </li>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
