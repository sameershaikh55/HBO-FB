import React from "react";
import checkedIcon from "../assets/icons/checked.svg";
import tocheck from "../assets/icons/tocheck.svg";

const Checkbox = ({ checked, title }) => {
  return (
    <div className="d-flex gap-2">
      <div className="pointer">
        {(checked && <img src={checkedIcon} alt="" />) || (
          <img src={tocheck} alt="" />
        )}
      </div>
      <label className="color9 fw500">{title}</label>
    </div>
  );
};

export default Checkbox;
