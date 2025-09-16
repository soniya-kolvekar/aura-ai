
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./home";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
 import './App.css'

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Temporary landing page — your teammate will replace later */}
        <Route
          path="/"
          element={
            <div className="temp-landing">
              <h1 className="temp-title">Landing Page (Temporary)</h1>
              <Link to="/home">
                <button className="temp-btn">Get Started</button>
              </Link>
            </div>
          }
        />
        <Route path="/home" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}
