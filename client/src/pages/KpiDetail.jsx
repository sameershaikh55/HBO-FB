import React from "react";
import Layout from "../layout";
import { Line } from "rc-progress";
import copy from "../assets/icons/copy.svg";
import copyD from "../assets/icons/copyD.svg";
import avatar from "../assets/icons/avatar.svg";
import chart from "../assets/icons/chart.svg";
import bottomArrow from "../assets/icons/bottomArrow.svg";
import scroller from "../assets/icons/scroller.svg";
import Accordion from "../components/Accordion";

const KpiDetail = () => {
  const analyse = [
    {
      views: "567",
      icon: avatar,
      type: "views",
    },
    {
      views: "5",
      icon: chart,
      type: "responses",
    },
  ];

  return (
    <Layout kpidetail>
      <div className="kpidetail_container">
        <div>
          <label className="color5 f14 opacity-75">User Interaction</label>
          <Line
            percent={25}
            strokeWidth={3}
            strokeColor="#EAB1B8"
            trailWidth={3}
            trailColor="#FFFFFF"
          />
        </div>
        <div className="analyse_container d-flex gap-2">
          <div>
            <h1 className="color3 fw600">Analyse</h1>
            <p className="color3 fw500 lh-lg">
              Identificeren van de kernelementen van een externe opdracht
              waarbij verduidelijking wordt gezocht bij opdrachtgever,
              gebruikers en deskundigen.
            </p>
          </div>
          <div className="kpidetail_right bg_color4 rounded-3 p-3">
            <div className="copy text-white d-flex justify-content-center align-items-center gap-2 rounded-3 px-2 py-1">
              <p className="fw600 f18">1.1</p>
              <img className="pointer" src={copy} alt="" />
            </div>
            <ul className="list-unstyled container-fluid px-0 mt-3 mb-0">
              {analyse.map((content, i) => {
                const { icon, type, views } = content;
                return (
                  <li key={i} className="row align-items-center mt-1">
                    <div className="col-5 pe-0">
                      <img className="w-100" src={icon} alt="" />
                    </div>
                    <div className="col-7 ps-1">
                      <h5 className="mb-0 color3 f16">{views}</h5>
                      <p className="f10">{type}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="user_interaction_container bg-white mt-4 rounded-3 p-3">
          <div className="scroll_content d-flex align-items-start gap-2">
            <div>
              <h6 className="fw600 color3">User Interaction | Analyse 1.1</h6>
              <p className="color3 f14">
                Ik voer een benchmark onderzoek uit, waarbij ik twee soorten
                digitale scrum software vergelijk op basis van twee
                functionaliteiten: het aanmaken van een project en het aanmaken
                van een sprint. Het doel van dit onderzoek is om uiteindelijk
                als team de juiste keuze in software te maken.
              </p>

              <div className="mt-4">
                {[1, 1].map((content, i) => {
                  return (
                    <div className="mt-3">
                      <Accordion title="Bewijs" paragraph="Bewijs" keytp={i} />
                    </div>
                  );
                })}
              </div>

              <p className="uploaded_container d-flex justify-content-between mt-3 bg_color6 f12 px-2 py-1 rounded-3">
                <p className="opacity-50 mb-0">
                  Uploaded on: 31-10-2022 | By: Anoniem | Semester: S3 |
                  University: Fontys
                </p>
                <img className="pointer" src={copyD} alt="" />
              </p>

              <div className="mt-4">
                <h6 className="fw600 color3">User Interaction | Analyse 1.2</h6>
                <p className="color3 f14">
                  Aan de hand van user stories definieer ik de
                  acceptatiecriteria voor de functionele eisen.
                </p>
              </div>
            </div>
            <img className="scroller" src={scroller} alt="" />
          </div>
        </div>

        <div className="mt-4 d-flex justify-content-center">
          <img src={bottomArrow} alt="" />
        </div>

        <div className="kpidetail_bottom text-center color7 f18">
          <div className="d-flex justify-content-center flex-wrap gap-1">
            Press <div className="btn_shortcut mx-1">Command</div> +{" "}
            <div className="btn_shortcut mx-2">Enter</div> to go to the next
            KPI.
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default KpiDetail;
