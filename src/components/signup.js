import React from "react";
import "../Style/signup.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Signup({ toggleSignUpForm }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const navigate = useNavigate(); // For redirecting to the login page

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        "https://holistichlth.000webhostapp.com/api/register",
        {
          name: data.username,
          email: data.email,
          password: data.password,
          gender: data.gender,
          status: 0,
        }
      );
      console.log("Registration Successful:", response.data);
      navigate("/login"); // Redirect to login page upon successful registration
    } catch (error) {
      console.error("There was an error registering:", error);
      if (error.response) {
        console.error("Server responded with status:", error.response.status);
      } else if (error.request) {
        console.error("No response received:", error.request);
      } else {
        console.error("Error setting up the request:", error.message);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <h2>Sign Up</h2>
      <div className="form-group">
        <label htmlFor="username">Name</label>
        <input
          id="username"
          type="text"
          {...register("username", { required: true })}
        />
        {errors.username && <small>Username is required</small>}
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          {...register("email", { required: true })}
        />
        {errors.email && <small>Email is required</small>}
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          {...register("password", { required: true, minLength: 8 })}
        />
        {errors.password && (
          <small>Password must be at least 8 characters long</small>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          id="confirmPassword"
          type="password"
          {...register("confirmPassword", {
            required: true,
            validate: (value) =>
              value === watch("password") || "Passwords do not match",
          })}
        />
        {errors.confirmPassword && (
          <small>{errors.confirmPassword.message}</small>
        )}
      </div>
      <div className="form-group">
        <label>Gender</label>
        <select {...register("gender", { required: true })}>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="not_specified">Do not specify</option>
        </select>
        {errors.gender && <small>Please select your gender</small>}
      </div>
      <div className="form-group">
        <button type="submit">Sign Up</button>
      </div>
      <div className="extra-links">
        <Link to="/login" onClick={toggleSignUpForm}>
          Back to Login
        </Link>
      </div>
    </form>
  );
}

export default Signup;
