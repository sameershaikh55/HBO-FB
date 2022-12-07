import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// PAGES
import Home from "./pages/Home";
import KpiDetail from "./pages/KpiDetail";
import Menu from "./pages/Menu";
import WhyThisApp from "./pages/WhyThisApp";
import Participate from "./pages/Participate";
import ParticipentFormSubmission from "./pages/ParticipentFormSubmission";
import Faq from "./pages/Faq";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kpi-detail" element={<KpiDetail />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/wta" element={<WhyThisApp />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/participate" element={<Participate />} />
        <Route path="/thank-you" element={<ParticipentFormSubmission />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
