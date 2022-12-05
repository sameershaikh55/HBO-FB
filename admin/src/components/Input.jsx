import React from "react";

const Input = ({ label, icon }) => {
  return (
    <label class="custom-field one">
      {icon && <img className="lock" src={icon} alt="" />}
      <input type="text" placeholder=" " />
      <span class="placeholder">{label}</span>
    </label>
  );
};

export default Input;
