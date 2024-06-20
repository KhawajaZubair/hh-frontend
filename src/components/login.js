import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import "../Style/login.css";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      navigate("/app");
    }
  }, [navigate]);

  async function loginapi(data) {
    const { email, password } = data;
    let item = { email, password };
    try {
      let result = await fetch(
        "https://holistichlth.000webhostapp.com/api/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(item),
        }
      );
      result = await result.json();
      localStorage.setItem("user-info", JSON.stringify(result));
      navigate("/app");
    } catch (error) {
      console.error("There was an error logging in:", error);
    }
  }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit(loginapi)} className="form">
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            {...register("email", {
              required: "Email is required",
              maxLength: {
                value: 50,
                message: "Email should have at most 50 characters",
              },
              pattern: {
                value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email && <small>{errors.email.message}</small>}
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password should have at least 8 characters",
              },
            })}
          />
          {errors.password && <small>{errors.password.message}</small>}
        </div>

        <div className="extra-links">
          <Link to="/">Forgot Password?</Link>
          <span> | </span>
          <Link to="/signup">Register Now</Link>
        </div>
        <div className="form-group">
          <button type="submit">Login</button>
        </div>

        <div className="extra-links">
          <Link to="/app">Go Back</Link>
        </div>
      </form>
    </div>
  );
}
