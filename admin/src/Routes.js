import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// PAGES
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import Interaction from "./pages/Interaction";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/interaction" element={<Interaction />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
