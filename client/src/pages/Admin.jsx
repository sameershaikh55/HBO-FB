import React from "react";
import AdminResponses from "../components/AdminResponses";
import Sidebar from "../components/Sidebar";
import SideDataAdmin from "../components/SideDataAdmin";

const Admin = () => {
  return (
    <div className="d-flex">
      <Sidebar />
      <SideDataAdmin />
      <AdminResponses title="Responses" />
    </div>
  );
};

export default Admin;
