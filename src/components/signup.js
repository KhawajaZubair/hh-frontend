import React from "react";
import "../Style/signup.css";
import { useForm } from "react-hook-form";

function Signup({ toggleSignUpForm }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const onSubmit = (data) => {
    // Handle sign-up form submission
    console.log("Sign Up Data: ", data);
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
          <option value="female">Do not specify</option>
        </select>
        {errors.gender && <small>Please select your status</small>}
      </div>
      <div className="form-group">
        <button type="submit">Sign Up</button>
      </div>
      <div className="extra-links">
        <a href="login" onClick={toggleSignUpForm}>
          Back to Login
        </a>
      </div>
    </form>
  );
}

export default Signup;
