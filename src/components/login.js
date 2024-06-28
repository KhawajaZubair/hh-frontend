// src/components/Login.js
import "../Style/login.css";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState(""); // 0 for patient, 1 for doctor
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://127.0.0.1:8000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          status,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.errors || "Invalid email password or status!");
      } else {
        console.log("User logged in:", data.user);
        localStorage.setItem("token", data.token); // Store the token in localStorage
        login(data.user); // Update the global authentication state
        navigate("/app");
      }
    } catch (err) {
      setError("Network error: " + err.message);
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login</h2>
        <p className="login-description">
          Enter your credentials to access your account.
        </p>
        <form onSubmit={handleLogin}>
          <div className="login-form-group">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="login-form-group">
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="login-form-group">
            <label>Status:</label>
            <select
              value={status}
              onChange={(e) => setStatus(Number(e.target.value))}
            >
              <option>Select</option>
              <option value={0}>Patient</option>
              <option value={1}>Doctor</option>
            </select>
          </div>
          <button type="submit">Login</button>
          <div className="extra-links">
            <Link to="/signup">Register Now</Link>
            <br />
            <Link to="/app">Go Back</Link>
          </div>
        </form>
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    </div>
  );
}

export default Login;
