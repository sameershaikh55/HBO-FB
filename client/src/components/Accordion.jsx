import React from "react";

const Accordion = ({ title, paragraph, keytp }) => {
  return (
    <div className="accordion">
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
          <button
            className="accordion-button collapsed color3 color6"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={`#${title && title.replace(/[" "#]/g, "-") + keytp}`}
            aria-expanded="true"
            aria-controls={`${title && title.replace(/[" "#]/g, "-") + keytp}`}
          >
            {title}
          </button>
        </h2>
        <div
          id={`${title && title.replace(/[" "#]/g, "-") + keytp}`}
          className="accordion-collapse collapse color3"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">{paragraph}</div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
