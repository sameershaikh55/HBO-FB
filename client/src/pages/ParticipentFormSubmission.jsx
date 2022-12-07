import React from "react";
import Layout from "../layout";

const ParticipentFormSubmission = () => {
  return (
    <Layout kpidetail>
      <div className="participentFormSubmission_container">
        <div className="page_container">
          <div className="p_form_submission">
            <h1 className="fw600">
              Thank you <span className="color11">Anonymous!</span>
            </h1>
            <br />
            <h1 className="fw600">
              Your response is a gift that we will always value.{" "}
            </h1>
            <br />
            <p className="fw400 f20">
              If you have any suggestions/improvements for us, don’t hesitate to
              email us!
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ParticipentFormSubmission;
