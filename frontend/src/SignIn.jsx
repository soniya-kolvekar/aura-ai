// src/SignIn.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SignIn.css";

function InputWithIcon({ icon, type="text", placeholder, value, onChange }) {
  return (
    <label className="input-wrap">
      <span className="left-icon" dangerouslySetInnerHTML={{__html: icon}} />
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="text-input"
      />
    </label>
  );
}

export default function SignIn(){
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [pass,setPass] = useState("");

  const userIcon = `<svg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 24 24' fill='none' stroke='#6b6b6b' stroke-width='1.6' stroke-linecap='round' stroke-linejoin='round'><path d='M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2'></path><circle cx='12' cy='7' r='4'></circle></svg>`;
  const mailIcon = `<svg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 24 24' fill='none' stroke='#6b6b6b' stroke-width='1.6' stroke-linecap='round' stroke-linejoin='round'><path d='M4 4h16v16H4z'></path></svg>`;
  const lockIcon = `<svg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 24 24' fill='none' stroke='#6b6b6b' stroke-width='1.6' stroke-linecap='round' stroke-linejoin='round'><rect x='3' y='11' width='18' height='11' rx='2' ry='2'></rect><path d='M7 11V7a5 5 0 0 1 10 0v4'></path></svg>`;

  return (
    <div className="page-wrap">
      <div className="form-center">
        <div className="logo">Aura.ai</div>

        <div className="card">
          <h1 className="card-title">Sign in</h1>

          <InputWithIcon icon={userIcon} placeholder="User Name" value={name} onChange={e=>setName(e.target.value)}/>
          <InputWithIcon icon={mailIcon} type="email" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)}/>
          <InputWithIcon icon={lockIcon} type="password" placeholder="Password" value={pass} onChange={e=>setPass(e.target.value)}/>

          <div className="forgot">Forgot Password</div>

          <div className="or">Or</div>

          <button className="google-btn">
            <span className="g-icon">G</span> sign in with google
          </button>

          <button className="action-btn">sign in</button>

          <div className="foot-note">Don't have an account? <Link to="/signup" className="link">Sign Up</Link></div>
        </div>
      </div>
    </div>
  );
}
