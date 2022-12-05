import React from "react";
import Layout from "../layout";
import share from "../assets/icons/share.svg";
import linkdin from "../assets/icons/linkdin.svg";
import back from "../assets/icons/back.svg";
import { Link } from "react-router-dom";

const WhyThisApp = () => {
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
                    <br />
                    <br />

                    <div>
                      <h1 className="display-5 lh-baseline fw-bold color1">
                        “He who has a why to live can bear almost any how.”
                      </h1>
                      <p className="color1 mt-5 f18">- Friedrich Nietzsche</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* SECOND HALF */}
              <div className="col-6 d-none d-lg-flex flex-column gap-5 ps-5">
                <div className="row">
                  <div className="col-10 mx-auto d-flex flex-column gap-3">
                    <h4 className="color4 fw-bold">Why this App</h4>
                    <p className="color4 f18">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Donec auctor lacus nisi, non suscipit elit rutrum id. Sed
                      pretium diam ut odio eleifend, eu gravida magna faucibus.
                      Nunc et tempor sem.
                    </p>
                    <p className="color4 f18">
                      Nam et augue eget tortor feugiat accumsan. Curabitur
                      aliquet, odio eget commodo pulvinar, erat nunc venenatis
                      justo, at scelerisque est turpis vel neque. Cras a ante
                      nulla. Morbi et tristique elit. Donec feugiat pretium erat
                      ut pharetra. Ut tellus nisi, convallis ac dolor vel,
                      gravida mattis arcu. Etiam laoreet egestas scelerisque.
                    </p>

                    <br />
                    <br />
                    <br />
                    <br />

                    <div className="d-flex gap-3">
                      <img src={share} alt="" />
                      <img src={linkdin} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
      <div className="menu_second_half d-block d-lg-none py-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto d-flex flex-column gap-3">
              <h4 className="color4 fw-bold">Why this App</h4>
              <p className="color4 f18">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                auctor lacus nisi, non suscipit elit rutrum id. Sed pretium diam
                ut odio eleifend, eu gravida magna faucibus. Nunc et tempor sem.
              </p>
              <p className="color4 f18">
                Nam et augue eget tortor feugiat accumsan. Curabitur aliquet,
                odio eget commodo pulvinar, erat nunc venenatis justo, at
                scelerisque est turpis vel neque. Cras a ante nulla. Morbi et
                tristique elit. Donec feugiat pretium erat ut pharetra. Ut
                tellus nisi, convallis ac dolor vel, gravida mattis arcu. Etiam
                laoreet egestas scelerisque.
              </p>

              <br />
              <br />
              <br />
              <br />

              <div className="d-flex gap-3">
                <img src={share} alt="" />
                <img src={linkdin} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyThisApp;
