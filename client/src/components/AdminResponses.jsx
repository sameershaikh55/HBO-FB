import React from "react";
import ResponseCard from "./cards/ResponseCard";
import InteractionCard from "./cards/InteractionCard";
import up from "../assets/icons/up_arrow.svg";
import down from "../assets/icons/down_arrow.svg";

const AdminResponses = ({ title }) => {
  return (
    <div className="admin_responses_container">
      <h2 className="fw400 color9 mb-3">{title}</h2>
      <div className="admin_responses_inner_container">
        {(title === "Responses" &&
          [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map(() => {
            return <ResponseCard />;
          })) ||
          [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map(() => {
            return <InteractionCard />;
          })}
      </div>
      <div className="d-flex justify-content-end gap-2 mt-3 pointer">
        <img className="arrow" src={up} alt="" />
        <img className="arrow" src={down} alt="" />
      </div>
    </div>
  );
};

export default AdminResponses;
