import React from "react";
import edit from "../../assets/icons/edit.svg";

const ResponseCard = () => {
  return (
    <div className="response_card d-flex flex-column flex-xl-row justify-content-between align-items-xl-center w-100 p-2 mb-3 gap-2">
      <p className="text-center text-md-start bg_color4 color9 p-2 rounded-3 mb-0">
        10-10-2022
      </p>

      <div className="d-flex justify-content-between align-items-center flex-wrap gap-2 gap-lg-4">
        <p className="mb-0 color3 pink_bg py-1 px-3 border border-dark border-2 f22 rounded-3">
          User Interaction
        </p>
        <p className="mb-0 color3 py-1 px-3 border border-dark border-2 f22 rounded-3">
          Analyse
        </p>
        <p className="mb-0 color3 py-1 px-3 border border-dark border-2 f22 rounded-3 fw-bold">
          1.1
        </p>
        <img className="edit_icon" src={edit} alt="" />
      </div>
    </div>
  );
};

export default ResponseCard;
