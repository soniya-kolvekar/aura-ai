
import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <div className="page-wrap">
      <div className="center-card">
        <div className="logo">Aura.ai</div>
        <div className="tagline">Your personal Health Guide, Always with you</div>

        <h2 className="get-started">GET STARTED</h2>

        <div className="btn-column">
          <Link to="/signup"><button className="pill-btn big">Sign Up</button></Link>
          <Link to="/signin"><button className="pill-btn big outline">Sign in</button></Link>
        </div>
      </div>
    </div>
  );
}


