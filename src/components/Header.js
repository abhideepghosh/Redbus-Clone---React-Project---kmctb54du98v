import React from "react";
import "./../styles/Header.css";

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-sm bg-danger navbar-dark fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img
              src="https://i.postimg.cc/zXFNsGkg/redbus-white.png"
              alt="redBus"
              width="60px"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#menu-nav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/*   Navbar links    */}
          <div className="collapse navbar-collapse" id="menu-nav">
            {/*   Left-aligned nav (default)    */}
            <div>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link text-white text-uppercase" href="#">
                    Bus Tickets
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white text-uppercase" href="#">
                    Hotels
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white text-uppercase" href="#">
                    Bus Hire
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white text-uppercase" href="#">
                    Pilgrimages
                  </a>
                </li>
              </ul>
            </div>

            {/*   Right-aligned nav    */}
            <div
              className="collapse navbar-collapse justify-content-end"
              id="menu-nav"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link text-white" href="#">
                    Help
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle text-white"
                    href="#"
                    data-toggle="dropdown"
                  >
                    Manage Booking
                  </a>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="#">
                      Link 1
                    </a>
                    <a className="dropdown-item" href="#">
                      Link 2
                    </a>
                    <a className="dropdown-item" href="#">
                      Link 3
                    </a>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle text-white"
                    href="#"
                    data-toggle="dropdown"
                  >
                    <i className="fas fa-user-circle"></i>
                  </a>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="#">
                      Sign In/Sign Up
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      {/*   Main Home Banner and Input Search Container    */}
      <div className="position-relative">
        <div>
          <div className="home-banner"></div>
        </div>

        <div className="input-search-container">
          <form className="d-flex justify-content-center">
            <div className="d-inline-block position-relative">
              <span className="inputIcon">
                <i className="far fa-building"></i>
              </span>
              <label className="inputLabel-default" htmlFor="input-label-from">
                FROM
              </label>
              <input
                id="input-label-from"
                className="inputForm"
                type="text"
                list="input-from-list"
              />
              <datalist id="input-from-list">
                {/*   <option value="Gurgaon"></option>    */}
              </datalist>
            </div>

            <div className="d-inline-block position-relative">
              <span className="inputIcon">
                <i className="far fa-building"></i>
              </span>
              <label className="inputLabel-default" htmlFor="input-label-to">
                TO
              </label>
              <input
                id="input-label-to"
                className="inputForm"
                type="text"
                list="input-to-list"
              />
              <datalist id="input-to-list">
                {/*   <option value="Delhi"></option>    */}
              </datalist>
            </div>

            <div className="d-inline-block position-relative">
              <span className="inputIcon">
                <i className="fas fa-calendar-alt"></i>
              </span>
              <label
                className="inputLabel-default"
                htmlFor="input-label-onward-date"
              ></label>
              <input
                id="input-label-onward-date"
                className="inputForm"
                type="date"
              />
            </div>

            <div className="d-inline-block position-relative">
              <span className="inputIcon">
                <i className="fas fa-calendar-alt"></i>
              </span>
              <label
                className="inputLabel-default"
                htmlFor="input-label-return-date"
              ></label>
              <input
                id="input-label-return-date"
                className="inputForm"
                type="date"
              />
            </div>

            <div className="d-inline-block position-relative">
              <input
                className="btn btn-danger rounded-0 pl-3 pr-3 pb-2"
                type="submit"
                value="Search Buses"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Header;
