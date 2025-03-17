import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Main from "./Main";
import Navbar from "./Navbar";
import Projects from "./Projects";

import "../styles/profile.css";

function Profile() {
  return (
    <Router>
      <div className="profile">
        <Navbar />
        <Routes>
          <Route path="/projects" element={<Projects />} />
          <Route path="/profile" element={<Main />} />
          <Route path="*" element={<Navigate to="/profile" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default Profile;
