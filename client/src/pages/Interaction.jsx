import React from "react";
import AdminResponses from "../components/AdminResponses";
import Sidebar from "../components/Sidebar";
import SideDataAdmin2 from "../components/SideDataAdmin2";

const Interaction = () => {
  return (
    <div className="d-flex">
      <Sidebar />
      <SideDataAdmin2 />
      <AdminResponses title="User Interaction" />
    </div>
  );
};

export default Interaction;
