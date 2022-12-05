import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children, showSearch, kpidetail, menu }) => {
  return (
    <div
      className={`layout_container ${showSearch && "bg_color1"} ${
        kpidetail && "bg_color2"
      } ${menu && "menu_gradient"}`}
    >
      <Header showSearch={showSearch} kpidetail={kpidetail} menu={menu} />
      {children}
      {showSearch && <Footer />}
    </div>
  );
};

export default Layout;
