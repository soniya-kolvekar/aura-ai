import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SignUp.css";

function InputWithIcon({ icon, type = "text", placeholder, value, onChange }) {
  return (
    <label className="input-wrap">
      <span
        className="left-icon"
        dangerouslySetInnerHTML={{ __html: icon }}
      />
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="input-field"
      />
    </label>
  );
}

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [conf, setConf] = useState("");

  const userIcon = `<svg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 24 24' fill='none' stroke='#6b6b6b' stroke-width='1.6' stroke-linecap='round' stroke-linejoin='round'><path d='M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2'></path><circle cx='12' cy='7' r='4'></circle></svg>`;
  const mailIcon = `<svg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 24 24' fill='none' stroke='#6b6b6b' stroke-width='1.6' stroke-linecap='round' stroke-linejoin='round'><path d='M4 4h16v16H4z'></path></svg>`;
  const lockIcon = `<svg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 24 24' fill='none' stroke='#6b6b6b' stroke-width='1.6' stroke-linecap='round' stroke-linejoin='round'><rect x='3' y='11' width='18' height='11' rx='2' ry='2'></rect><path d='M7 11V7a5 5 0 0 1 10 0v4'></path></svg>`;

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h1 className="signup-header">Sign Up</h1>

        <InputWithIcon
          icon={userIcon}
          placeholder="User Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <InputWithIcon
          icon={mailIcon}
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputWithIcon
          icon={lockIcon}
          type="password"
          placeholder="Password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />
        <InputWithIcon
          icon={lockIcon}
          type="password"
          placeholder="Confirm Password"
          value={conf}
          onChange={(e) => setConf(e.target.value)}
        />

        <div className="or">Or</div>

        <button className="google-btn">
  <img src="https://www.gstatic.com/images/branding/product/1x/gsa_512dp.png" alt="Google" />
  Continue with Google
</button>


        <button className="signup-btn">Sign Up</button>

        <div className="signin-link">
          Already have an account?{" "}
          <Link to="/signin">
            <span>Sign In</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

