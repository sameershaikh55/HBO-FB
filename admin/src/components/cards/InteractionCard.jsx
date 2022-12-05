import React from "react";
import chart from "../../assets/icons/chart.svg";
import edit from "../../assets/icons/edit.svg";

const InteractionCard = () => {
  return (
    <div className="response_card d-flex flex-column flex-xl-row justify-content-between align-items-xl-center w-100 p-2 mb-3 gap-2">
      <div className="d-flex">
        <p className="color9 px-2 rounded-3 mb-0 f22 fw-bold">1.1</p>
        <p className="color9 px-4 rounded-3 mb-0 f22">Analyse</p>
      </div>

      <div className="d-flex justify-content-between align-items-center flex-wrap gap-2 gap-lg-4">
        <p className="d-flex gap-2 mb-0 color3 px-2 border border-dark border-2 f22 rounded-3 fw-bold">
          <img src={chart} alt="" />5
        </p>
        <img className="edit_icon" src={edit} alt="" />
      </div>
    </div>
  );
};

export default InteractionCard;
