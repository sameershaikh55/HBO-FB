import React from "react";
import heart from "../assets/icons/heart.svg";

const Footer = () => {
  return (
    <div className="footer_container pt-2 d-flex justify-content-between text-white">
      <p className="mb-0">v.1.0 Faktor 22 - All rights reserved</p>
      <p className="mb-0">
        Hand-crafted & Made with <img src={heart} alt="" />
      </p>
    </div>
  );
};

export default Footer;
