import React from "react";
import Sidebar from "./Sidebar";
import SideDataAdmin from "./SideDataAdmin";

const Layout = ({ children }) => {
  return (
    <div className="d-flex">
      <Sidebar />
      <SideDataAdmin />
      {children}
    </div>
  );
};

export default Layout;
