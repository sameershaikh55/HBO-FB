import React from "react";
import logo from "../assets/images/logo.svg";
import i1 from "../assets/sidebarNav/i1.svg";
import i2 from "../assets/sidebarNav/i2.svg";
import i3 from "../assets/sidebarNav/i3.svg";
import activeNav from "../assets/icons/activeNav.svg";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();

  const nav = [
    {
      link: "/admin",
      icon: i1,
    },
    {
      link: "/interaction",
      icon: i2,
    },
    {
      link: "/",
      icon: i3,
    },
  ];

  return (
    <div className="sidebar_container">
      <div className="d-flex flex-column justify-content-between align-items-center h-100">
        <div className="d-flex flex-column align-items-center">
          <div className="pt-4 pb-5">
            <img className="logo" src={logo} alt="" />
          </div>

          <ul className="list-unstyled">
            {nav.map((content, i) => {
              return (
                <Link to={content.link} key={i}>
                  <li
                    className={`py-4 nav_click ${
                      content.link === location.pathname && "active"
                    }`}
                  >
                    <img className="icon" src={content.icon} alt="" />
                    {content.link === location.pathname && (
                      <img className="active" src={activeNav} alt="" />
                    )}
                  </li>
                </Link>
              );
            })}
          </ul>
        </div>

        <p className="pb-2 text-white f18">v.1.0</p>
      </div>
    </div>
  );
};

export default Sidebar;
