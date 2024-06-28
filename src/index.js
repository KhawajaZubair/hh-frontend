// src/index.js
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/login";
import Signup from "./components/signup";
import BlogPage from "./pages/BlogPage";
import About from "./pages/About";
import MedicinePage from "./pages/MedicinePage";
import App1 from "./hospitals/App1";
import App2 from "./doctors/App2";
import MedicineDetail from "./pages/MedicineDetail";
import { AuthProvider } from "./context/AuthContext";

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
  {
    path: "app1",
    element: <App1 />,
  },
  {
    path: "app2",
    element: <App2 />,
  },
  {
    path: "medicine/:id",
    element: <MedicineDetail />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);

reportWebVitals();
