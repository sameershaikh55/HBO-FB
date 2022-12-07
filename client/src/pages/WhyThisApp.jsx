import React from "react";
import Layout from "../layout";
import share from "../assets/icons/share.svg";
import linkdin from "../assets/icons/linkdin.svg";
import Quotation from "../components/Quotation";

const WhyThisApp = () => {
  const rightText = (
    <div className="row">
      <div className="col-10 mx-auto d-flex flex-column gap-3">
        <h4 className="color4 fw-bold">Why this App</h4>
        <p className="color4 f18">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor
          lacus nisi, non suscipit elit rutrum id. Sed pretium diam ut odio
          eleifend, eu gravida magna faucibus. Nunc et tempor sem.
        </p>
        <p className="color4 f18">
          Nam et augue eget tortor feugiat accumsan. Curabitur aliquet, odio
          eget commodo pulvinar, erat nunc venenatis justo, at scelerisque est
          turpis vel neque. Cras a ante nulla. Morbi et tristique elit. Donec
          feugiat pretium erat ut pharetra. Ut tellus nisi, convallis ac dolor
          vel, gravida mattis arcu. Etiam laoreet egestas scelerisque.
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
  );

  return (
    <>
      <Layout menu>
        <div className="menu_container">
          <div className="container-fluid px-0">
            <div className="main_row row align-items-center">
              <Quotation
                quote="He who has a why to live can bear almost any how."
                author="Friedrich Nietzsche"
              />

              {/* SECOND HALF */}
              <div className="col-6 d-none d-lg-flex flex-column gap-5 ps-5">
                {rightText}
              </div>
            </div>
          </div>
        </div>
      </Layout>
      <div className="menu_second_half d-block d-lg-none py-5">
        <div className="container-fluid">{rightText}</div>
      </div>
    </>
  );
};

export default WhyThisApp;
