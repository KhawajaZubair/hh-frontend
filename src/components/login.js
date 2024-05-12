import React from "react";
import "../Style/login.css";
import { useForm } from "react-hook-form";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      email: "",
      password: "",
      isAdmin: true,
      createdAt: "",
    },
  });

  const onSubmit = (data) => console.log(data);

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit(onSubmit)} className="form">
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
          <a href="#">Forgot Password?</a>
          <span> | </span>
          <a href="signup">Register Now</a>
        </div>
        <div className="form-group">
          <button type="submit">Login</button>
        </div>

        <div className="extra-links">
          <a href="app">Go Back</a>
        </div>
      </form>
    </div>
  );
}
