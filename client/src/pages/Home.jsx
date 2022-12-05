import React from "react";
import Layout from "../layout";
import GridCard from "../components/cards/GridCard";
import data from "../constant/data/data.json";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Layout showSearch>
      <div className="home_inner_container mt-4 mt-md-5">
        <div className="row gy-4">
          {data.cards.map((content, i) => {
            return (
              <Link to="/kpi-detail" className="col-12 col-sm-6 col-lg-4">
                <GridCard key={i} {...content} />
              </Link>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default Home;
