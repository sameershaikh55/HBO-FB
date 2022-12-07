import React from "react";
import { useNavigate } from "react-router-dom";
import back from "../assets/icons/back.svg";

const Quotation = ({ quote, author }) => {
  const navigate = useNavigate();

  return (
    <div className="col-12 col-lg-6">
      <div className="row">
        <div className="col-11 col-md-8 col-lg-9 mx-auto">
          <button
            onClick={() => navigate(-1)}
            className="go_back d-flex float-end align-items-center gap-1 gap-md-3 color1 fw600 text-decoration-underline f18 border-0"
          >
            <img src={back} alt="" />
            Go back
          </button>

          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />

          <div>
            <h1 className="display-5 lh-baseline fw-bold color1">“{quote}”</h1>
            <p className="color1 mt-5 f18">- {author}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quotation;
