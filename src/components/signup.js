import React, { useState } from "react";
import axios from "axios";
import "../Style/signup.css";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [userType, setUserType] = useState("");
  const [gender, setGender] = useState("");
  const [error, setError] = useState("");

  const validateForm = () => {
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      setError("Invalid email address");
      return false;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      return false;
    }
    if (password !== passwordConfirmation) {
      setError("Passwords do not match");
      return false;
    }
    setError("");
    return true;
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const status = userType === "patient" ? 0 : 1;

    try {
      const response = await fetch(
        "https://holistichlth.000webhostapp.com/api/register",
        {
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
        }
      );

      const data = await response.json();

      if (response.ok) {
        console.log("User registered:", data.user);
      } else {
        setError(data.errors || "Something went wrong!");
      }
    } catch (err) {
      setError("Network error: " + err.message);
    }
  };

  return (
    <div className="container signup-container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card signup-card mt-5">
            <div className="card-body signup-card-body">
              <h3 className="signup-card-title">Sign Up</h3>
              {error && (
                <div className="alert signup-alert-danger">{error}</div>
              )}
              <form onSubmit={handleRegister}>
                <div className="form-group signup-form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    className="form-control signup-form-control"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group signup-form-group">
                  <label htmlFor="email">Email address</label>
                  <input
                    type="email"
                    className="form-control signup-form-control"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group signup-form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control signup-form-control"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group signup-form-group">
                  <label htmlFor="confirmPassword">Confirm Password</label>
                  <input
                    type="password"
                    className="form-control signup-form-control"
                    id="confirmPassword"
                    value={passwordConfirmation}
                    onChange={(e) => setPasswordConfirmation(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group signup-form-group">
                  <label>User Type</label>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="userType"
                      id="patient"
                      value="patient"
                      checked={userType === "patient"}
                      onChange={(e) => setUserType(e.target.value)}
                    />
                    <label
                      className="form-check-label signup-form-check-label"
                      htmlFor="patient"
                    >
                      Patient
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="userType"
                      id="doctor"
                      value="doctor"
                      checked={userType === "doctor"}
                      onChange={(e) => setUserType(e.target.value)}
                    />
                    <label
                      className="form-check-label signup-form-check-label"
                      htmlFor="doctor"
                    >
                      Doctor
                    </label>
                  </div>
                </div>
                <div className="form-group signup-form-group">
                  <label>Gender</label>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gender"
                      id="male"
                      value="male"
                      checked={gender === "male"}
                      onChange={(e) => setGender(e.target.value)}
                    />
                    <label
                      className="form-check-label signup-form-check-label"
                      htmlFor="male"
                    >
                      Male
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gender"
                      id="female"
                      value="female"
                      checked={gender === "female"}
                      onChange={(e) => setGender(e.target.value)}
                    />
                    <label
                      className="form-check-label signup-form-check-label"
                      htmlFor="female"
                    >
                      Female
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gender"
                      id="other"
                      value="other"
                      checked={gender === "other"}
                      onChange={(e) => setGender(e.target.value)}
                    />
                    <label
                      className="form-check-label signup-form-check-label"
                      htmlFor="other"
                    >
                      Other
                    </label>
                  </div>
                </div>
                <button type="submit" className="btn signup-btn btn-block">
                  Sign Up
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
