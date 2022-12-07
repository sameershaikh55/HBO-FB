import React from "react";

const GridCard = ({
  id,
  architectuurlaag,
  activiteiten,
  beheersingsniveaus,
  beschrijving,
}) => {
  return (
    <div id={id} className="card">
      <div className="inner-card">
        <div className="card-head">
          <p
            className={`${architectuurlaag.replaceAll(
              " ",
              "_"
            )} color3 fw500 text-decoration-none`}
          >
            {architectuurlaag}
          </p>
        </div>
        <h5 className="architectuurlaag-heading color3 fw-bold">
          {activiteiten}
          <span className="kpi-nummer color3">{beheersingsniveaus}</span>
        </h5>
        <p className="architectuurlaag-paragraaf color3 fw500">
          {beschrijving}
        </p>
      </div>
    </div>
  );
};

export default GridCard;
