import React from "react";
import Layout from "../layout";
import avatarD from "../assets/icons/avatarD.svg";
import chartD from "../assets/icons/chartD.svg";
import threeLines from "../assets/icons/threeLines.svg";
import fourDots from "../assets/icons/fourDots.svg";
import language from "../assets/icons/language.svg";
import appearence from "../assets/icons/appearence.svg";
import Checkbox from "../components/Checkbox";
import SelectBox from "../components/SelectBox";
import { Link } from "react-router-dom";

const Menu = () => {
  const menu = [
    {
      checked: false,
      name: "User Interaction",
    },
    {
      checked: false,
      name: "Organisational Processes",
    },
    {
      checked: false,
      name: "Infrastructure",
    },
    {
      checked: false,
      name: "Software",
    },
    {
      checked: false,
      name: "Hardware Interfacing",
    },
  ];

  const menuRightSide = (classes) => (
    <div className={classes}>
      <div className="d-flex flex-column gap-3">
        <Link to="/wta" className="color4 display-5 fw-bold">
          Why this App
        </Link>
        <Link to="/participate" className="color4 display-5 fw-bold">
          How can I participate?
        </Link>
        <Link to="/faq" className="color4 display-5 fw-bold">
          FAQ
        </Link>
      </div>

      <ul className="list-unstyled d-flex gap-4">
        <li className="d-flex gap-2">
          <img className="avatar" src={avatarD} alt="" />
          <div className="color8">
            <h6 className="mb-0">8.549k</h6>
            <p className="f12">views</p>
          </div>
        </li>
        <li className="d-flex gap-2">
          <img className="chart" src={chartD} alt="" />
          <div className="color8">
            <h6 className="mb-0">188</h6>
            <p className="f12">kpi’s</p>
          </div>
        </li>
      </ul>
    </div>
  );

  return (
    <>
      <Layout menu>
        <div className="menu_container mt-5 mt-lg-0">
          <div className="container-fluid px-0">
            <div className="main_row row align-items-center">
              <div className="col-12 col-lg-6">
                <div className="row">
                  <div className="col-11 col-md-8 col-lg-10 mx-auto">
                    <div className="d-flex justify-content-end gap-3">
                      <button className="py-1 px-2 rounded-3 border-0 not_hover">
                        <img src={threeLines} alt="" />
                      </button>
                      <button className="bg_color10 py-1 px-2 rounded-3 border-0 not_hover">
                        <img src={fourDots} alt="" />
                      </button>
                    </div>
                    <div className="mt-3">
                      <h5>Filter on</h5>
                      <div className="filter_container row">
                        <div className="col-12 col-md-6">
                          <h5 className="color9">Architectural layers</h5>
                          <ul className="list-unstyled d-flex flex-column gap-2 mt-3 mb-0">
                            {menu.map((content, i) => {
                              return (
                                <li>
                                  <Checkbox
                                    checked={content.checked}
                                    title={content.name}
                                  />
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                        <div className="col-12 col-md-6 mt-4 mt-md-0">
                          <h5 className="color9">Professional skills</h5>
                          <ul className="list-unstyled d-flex flex-column gap-2 mt-3 mb-0">
                            {menu.map((content, i) => {
                              return (
                                <li>
                                  <Checkbox
                                    checked={content.checked}
                                    title={content.name}
                                  />
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      </div>
                    </div>
                    <br />
                    <br />
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="d-flex align-items-center gap-3">
                        <img src={language} alt="" />
                        <h4 className="mb-0 fw-bold">Language</h4>
                      </div>
                      <div>
                        <SelectBox title="English" />
                      </div>
                    </div>
                    <br />
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="d-flex align-items-center gap-3">
                        <img src={appearence} alt="" />
                        <h4 className="mb-0 fw-bold">App appearances</h4>
                      </div>
                      <div>
                        <SelectBox title="Select" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* SECOND HALF */}
              {menuRightSide(
                "col-6 d-none d-lg-flex flex-column gap-5 ps-lg-5 mt-5 mt-lg-0 py-5 py-lg-0"
              )}
            </div>
          </div>
        </div>
      </Layout>
      <div className="menu_second_half d-block d-lg-none">
        <div className="container-fluid">
          <div className="row">
            {menuRightSide(
              "col-11 mx-auto d-flex flex-column gap-5 ps-lg-5 py-5 py-lg-0"
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
