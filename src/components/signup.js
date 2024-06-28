import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Style/signup.css";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [status, setStatus] = useState(""); // 0 for patient, 1 for doctor
  const [gender, setGender] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password !== passwordConfirmation) {
      setError("Passwords do not match!");
      return;
    }

    try {
      const response = await fetch("http://127.0.0.1:8000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
          password_confirmation: passwordConfirmation,
          status,
          gender,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.errors || "Something went wrong!");
      } else {
        console.log("User registered:", data.user);
        setSuccess("Registration successful! Redirecting to login page...");
        setTimeout(() => {
          navigate("/login");
        }, 3000); // Redirect after 3 seconds
      }
    } catch (err) {
      setError("Network error: " + err.message);
    }
  };

  return (
    <div className="registration-container">
      <div className="registration-form">
        <h2>Sign Up</h2>
        <p className="registration-description">
          Create your account. It's free and only takes a minute.
        </p>
        <form onSubmit={handleRegister}>
          <div className="registration-form-group">
            <label>Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="registration-form-group">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="registration-form-group">
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              minLength="8"
              required
            />
          </div>
          <div className="registration-form-group">
            <label>Confirm Password:</label>
            <input
              type="password"
              value={passwordConfirmation}
              onChange={(e) => setPasswordConfirmation(e.target.value)}
              required
            />
          </div>
          <div className="registration-form-group">
            <label>Status:</label>
            <select
              value={status}
              onChange={(e) => setStatus(Number(e.target.value))}
            >
              <option value="">Select</option>
              <option value={0}>Patient</option>
              <option value={1}>Doctor</option>
            </select>
          </div>
          <div className="registration-form-group">
            <label>Gender:</label>
            <select value={gender} onChange={(e) => setGender(e.target.value)}>
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <button type="submit">Register</button>
          <div className="extra-links">
            <Link to="/login">Go Back</Link>
          </div>
        </form>
        {error && <div className="alert alert-danger">{error}</div>}
        {success && <div className="alert alert-success">{success}</div>}
      </div>
    </div>
  );
}

export default SignUp;
