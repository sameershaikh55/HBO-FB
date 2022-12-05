import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// PAGES
import Login from "./pages/Login";
import Home from "./pages/Home";
import KpiDetail from "./pages/KpiDetail";
import Menu from "./pages/Menu";
import WhyThisApp from "./pages/WhyThisApp";
import Participate from "./pages/Participate";
import Admin from "./pages/Admin";
import Interaction from "./pages/Interaction";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/kpi-detail" element={<KpiDetail />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/wta" element={<WhyThisApp />} />
        <Route path="/participate" element={<Participate />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/interaction" element={<Interaction />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
