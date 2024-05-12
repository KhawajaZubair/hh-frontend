import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/login";
import Signup from "./components/signup";
import BlogPage from "./pages/BlogPage";
import About from "./pages/About";
import MedicinePage from "./pages/MedicinePage";
const router = createBrowserRouter([
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "signup",
    element: <Signup />,
  },
  {
    path: "/",
    element: <App />,
  },
  {
    path: "app",
    element: <App />,
  },
  {
    path: "blog-page",
    element: <BlogPage />,
  },
  {
    path: "about-page",
    element: <About />,
  },
  {
     path: "medicine-page",
    element: <MedicinePage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
