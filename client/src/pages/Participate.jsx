import React from "react";
import Layout from "../layout";
import ParticipationForm from "../components/ParticipationForm";
import Quotation from "../components/Quotation";

const Participate = () => {
  const formContainer = (
    <div className="row">
      <ParticipationForm />
    </div>
  );

  return (
    <>
      <Layout menu>
        <div className="menu_container">
          <div className="container-fluid px-0">
            <div className="main_row row align-items-center">
              <Quotation
                quote="No one has ever become poor by giving."
                author="Anne Frank, diary of Anne Frank: the play"
              />

              {/* SECOND HALF */}
              <div className="col-6 d-none d-lg-flex flex-column gap-5 ps-5">
                {formContainer}
              </div>
            </div>
          </div>
        </div>
      </Layout>
      <div className="menu_container menu_second_half d-block d-lg-none py-5">
        <div className="container-fluid">{formContainer}</div>
      </div>
    </>
  );
};

export default Participate;
