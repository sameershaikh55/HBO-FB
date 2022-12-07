import React from "react";
import logo from "../assets/images/logo.svg";
import logoDark from "../assets/images/logoDark.svg";
import searchIcon from "../assets/icons/searchIcon.svg";
import hamburger from "../assets/icons/hamburger.svg";
import hamburgerDark from "../assets/icons/hamburgerDark.svg";
import openedHamburger from "../assets/icons/openedHamburger.svg";
import openedHamburgerD from "../assets/icons/openedHamburgerD.svg";
import back from "../assets/icons/back.svg";
import { Link } from "react-router-dom";

const Header = ({ showSearch, kpidetail, menu }) => {
  return (
    <div className="header_container">
      <div className="d-flex justify-content-between gap-1">
        <Link to="/" className="logo">
          {(kpidetail && <img src={logoDark} alt="" />) ||
            (menu && <img src={logoDark} alt="" />) || (
              <img src={logo} alt="" />
            )}
        </Link>

        {showSearch && (
          <div className="inp_container">
            <input
              type="text"
              name=""
              id=""
              placeholder="Search KPI…"
              className="color4"
            />
            <img src={searchIcon} alt="" />
          </div>
        )}

        <div className="hamburger d-flex align-items-center gap-2 gap-md-5">
          {kpidetail && (
            <Link
              to="/"
              className="go_back d-flex align-items-center gap-1 gap-md-3 color1 fw600 text-decoration-underline f18"
            >
              <img src={back} alt="" />
              Go back
            </Link>
          )}
          <Link to="/menu">
            {(kpidetail && <img src={hamburgerDark} alt="" />) ||
              (showSearch && <img src={hamburger} alt="" />) ||
              (menu && (
                <img
                  className="d-none d-lg-block"
                  src={openedHamburger}
                  alt=""
                />
              ))}
            {menu && (
              <img
                className="d-block d-lg-none"
                src={openedHamburgerD}
                alt=""
              />
            )}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
