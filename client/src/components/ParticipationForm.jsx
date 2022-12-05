import React from "react";
import incognito from "../assets/icons/incognito.svg";
import Input from "./Input";
import SelectBox2 from "./SelectBox2";
import Textarea from "./Textarea";

const ParticipationForm = () => {
  return (
    <div className="col-10 mx-auto d-flex flex-column gap-3">
      <h2 className="color4 fw-bold">Participate</h2>
      <div className="row gy-3">
        <div className="col-12 col-md-6">
          <Input label="Name" icon={incognito} />
        </div>
        <div className="col-12 col-md-6">
          <Input label="E-mail" />
        </div>
        <div className="col-12 col-md-6">
          <SelectBox2 label="University" title="Fontys" />
        </div>
        <div className="col-12 col-md-6">
          <SelectBox2 label="Semester" title="S3" />
        </div>
        <div className="col-12 col-md-4">
          <SelectBox2 label="Architecture" title="Software" />
        </div>
        <div className="col-12 col-md-4">
          <SelectBox2 label="Activities" title="Analyse" />
        </div>
        <div className="col-12 col-md-4">
          <SelectBox2 label="Level" title="1.1" />
        </div>
        <div className="col-12">
          <Textarea label="KPI" />
        </div>
        <div className="col-12 col-md-6">
          <Textarea label="Bewijs" />
        </div>
        <div className="col-12 col-md-6">
          <Textarea label="Motivatie" />
        </div>
        <div className="col-12">
          <button
            style={{ height: "48.27px" }}
            className="bg_color4 w-100 btn f18 border-0"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ParticipationForm;
