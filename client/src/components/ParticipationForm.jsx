import React, { useState } from "react";
import incognito from "../assets/icons/incognito.svg";
import Input from "./Input";
import SelectBox2 from "./SelectBox2";
import Textarea from "./Textarea";
import { Link } from "react-router-dom";

const ParticipationForm = () => {
  const [agSkill, setAgSkill] = useState(false);

  return (
    <div className="participation_form col-10 mx-auto d-flex flex-column gap-3">
      <div className="d-flex justify-content-between align-items-center">
        <h2 className="color4 fw-bold">Participate</h2>
        <div className="ag_skill_switch rounded-3">
          <button
            onClick={() => setAgSkill(!agSkill)}
            className={`${!agSkill && "bg_color10"} border-0 not_hover`}
          >
            Architectural
          </button>
          <button
            onClick={() => setAgSkill(!agSkill)}
            className={`${agSkill && "bg_color10"} border-0 not_hover`}
          >
            Skills
          </button>
        </div>
      </div>
      <div className="row gy-3">
        <div className="col-12 col-md-6">
          <Input label="Name" icon={incognito} />
        </div>
        <div className="col-12 col-md-6">
          <Input label="E-mail" />
        </div>
        <div className="col-12 col-md-4">
          <SelectBox2 label="University" title="Fontys" />
        </div>
        <div className="col-12 col-md-4">
          <SelectBox2 label="Semester" title="S3" />
        </div>
        <div className="col-12 col-md-4">
          <SelectBox2 label="Language" title="S3" />
        </div>
        {!agSkill && (
          <div className="col-12 col-md-4">
            <SelectBox2 label="Architecture" title="Software" />
          </div>
        )}
        {!agSkill && (
          <div className="col-12 col-md-4">
            <SelectBox2 label="Activities" title="Analyse" />
          </div>
        )}
        {agSkill && (
          <div className="col-12 col-md-6">
            <SelectBox2 label="Professional Skills" title="Analyse" />
          </div>
        )}
        <div className={`col-12 ${(agSkill && "col-md-6") || "col-md-4"}`}>
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
          <Link to="/thank-you">
            <button
              style={{ height: "48.27px" }}
              className="bg_color11 text-white w-100 rounded-3 f18 border-0"
            >
              Submit
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ParticipationForm;
