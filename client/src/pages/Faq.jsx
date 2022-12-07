import React, { useState } from "react";
import Layout from "../layout";
import CustomAccordion from "../components/CustomAccordion";
import Quotation from "../components/Quotation";

const Faq = () => {
  const [faqData, setFaqData] = useState([
    {
      id: 1,
      title: "Why this App?",
      body: (
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor
          lacus nisi, non suscipit elit rutrum id. Sed pretium diam ut odio
          eleifend, eu gravida magna faucibus. Nunc et tempor sem.
          <br />
          <br />
          Nam et augue eget tortor feugiat accumsan. Curabitur aliquet, odio
          eget commodo pulvinar, erat nunc venenatis justo.
        </p>
      ),
      status: true,
    },
    {
      id: 2,
      title: "Why this App?",
      body: (
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor
          lacus nisi, non suscipit elit rutrum id. Sed pretium diam ut odio
          eleifend, eu gravida magna faucibus. Nunc et tempor sem.
          <br />
          <br />
          Nam et augue eget tortor feugiat accumsan. Curabitur aliquet, odio
          eget commodo pulvinar, erat nunc venenatis justo.
        </p>
      ),
      status: false,
    },
    {
      id: 3,
      title: "Why this App?",
      body: (
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor
          lacus nisi, non suscipit elit rutrum id. Sed pretium diam ut odio
          eleifend, eu gravida magna faucibus. Nunc et tempor sem.
          <br />
          <br />
          Nam et augue eget tortor feugiat accumsan. Curabitur aliquet, odio
          eget commodo pulvinar, erat nunc venenatis justo.
        </p>
      ),
      status: false,
    },
    {
      id: 4,
      title: "Why this App?",
      body: (
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor
          lacus nisi, non suscipit elit rutrum id. Sed pretium diam ut odio
          eleifend, eu gravida magna faucibus. Nunc et tempor sem.
          <br />
          <br />
          Nam et augue eget tortor feugiat accumsan. Curabitur aliquet, odio
          eget commodo pulvinar, erat nunc venenatis justo.
        </p>
      ),
      status: false,
    },
    {
      id: 5,
      title: "Why this App?",
      body: (
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor
          lacus nisi, non suscipit elit rutrum id. Sed pretium diam ut odio
          eleifend, eu gravida magna faucibus. Nunc et tempor sem.
          <br />
          <br />
          Nam et augue eget tortor feugiat accumsan. Curabitur aliquet, odio
          eget commodo pulvinar, erat nunc venenatis justo.
        </p>
      ),
      status: false,
    },
    {
      id: 6,
      title: "Why this App?",
      body: (
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor
          lacus nisi, non suscipit elit rutrum id. Sed pretium diam ut odio
          eleifend, eu gravida magna faucibus. Nunc et tempor sem.
          <br />
          <br />
          Nam et augue eget tortor feugiat accumsan. Curabitur aliquet, odio
          eget commodo pulvinar, erat nunc venenatis justo.
        </p>
      ),
      status: false,
    },
  ]);

  const openAccordion = (id) => {
    setFaqData((prevData) => {
      return prevData.map((mapData) => {
        return (
          (mapData.id === id &&
            mapData.status !== true && {
              ...mapData,
              status: true,
            }) || {
            ...mapData,
            status: false,
          }
        );
      });
    });
  };

  const accordionDiv = (
    <div className="row gy-4">
      {faqData.map((res, i) => {
        return (
          <div className="col-10 mx-auto d-flex flex-column gap-3">
            <CustomAccordion {...res} openAccordion={openAccordion} />
          </div>
        );
      })}
    </div>
  );

  return (
    <>
      <Layout menu>
        <div className="menu_container">
          <div className="container-fluid px-0">
            <div className="main_row row align-items-center">
              <Quotation
                quote="A wise man can learn more from a foolish question than
                a fool can learn from a wise answer."
                author="Bruce Lee"
              />

              {/* SECOND HALF */}
              <div className="col-6 d-none d-lg-flex flex-column gap-5 ps-5">
                {accordionDiv}
              </div>
            </div>
          </div>
        </div>
      </Layout>
      <div className="menu_second_half d-block d-lg-none py-5">
        <div className="container-fluid">{accordionDiv}</div>
      </div>
    </>
  );
};

export default Faq;
