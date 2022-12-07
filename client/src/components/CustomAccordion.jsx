import React from "react";
import minus from "../assets/icons/minus.svg";
import plus from "../assets/icons/plus.svg";

const CustomAccordion = ({ id, title, body, status, openAccordion }) => {
  return (
    <div
      style={{
        maxHeight: status ? "250px" : window.innerWidth < 768 ? "45px" : "54px",
      }}
      className="custom_accordion"
    >
      <div className="d-flex justify-content-between mb-3">
        <h4 className="mb-0 fw600 text-white">{title}</h4>
        <button
          onClick={() => openAccordion(id)}
          className="bg-transparent border-0 not_hover"
        >
          {(status && (
            <div style={{ width: "39px" }}>
              <img src={minus} alt="" />
            </div>
          )) || <img src={plus} alt="" />}
        </button>
      </div>
      <div className="body text-white">{body}</div>
    </div>
  );
};

export default CustomAccordion;
