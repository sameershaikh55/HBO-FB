import React from "react";
import Layout from "../layout";
import back from "../assets/icons/back.svg";
import { Link } from "react-router-dom";
import ParticipationForm from "../components/ParticipationForm";

const Participate = () => {
  return (
    <>
      <Layout menu>
        <div className="menu_container">
          <div className="container-fluid px-0">
            <div className="main_row row align-items-center">
              <div className="col-12 col-lg-6">
                <div className="row">
                  <div className="col-11 col-md-8 col-lg-9 mx-auto">
                    <Link
                      to="/"
                      className="go_back d-flex float-end align-items-center gap-1 gap-md-3 color1 fw600 text-decoration-underline f18"
                    >
                      <img src={back} alt="" />
                      Go back
                    </Link>

                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />

                    <div>
                      <h1 className="display-5 lh-baseline fw-bold color1">
                        “No one has ever become poor by giving.”
                      </h1>
                      <p className="color1 mt-5 f18">
                        - Anne Frank, diary of Anne Frank: the play
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* SECOND HALF */}
              <div className="col-6 d-none d-lg-flex flex-column gap-5 ps-5">
                <div className="row">
                  <ParticipationForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
      <div className="menu_container menu_second_half d-block d-lg-none py-5">
        <div className="container-fluid">
          <div className="row">
            <ParticipationForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default Participate;
