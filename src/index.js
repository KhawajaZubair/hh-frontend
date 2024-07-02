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
import App1 from "../src/hospitals/doctor-hospital/App1";
import MedicineDetail from "./pages/MedicineDetail";
import { AuthProvider } from "./context/AuthContext";
import BlogDetail from "./pages/BlogDetail";
import Dermatologists from "./doctors/Dermatologists";
import Nephrologist from "./doctors/Nephrologist";
import Gastroenterologists from "./doctors/Gastroenterologists";
import AllDoctors from "./doctors/AllDoctors";
import DoctorProfile from "./doctors/DoctorProfile";
import Omar from "./hospitals/omar-hospital/omarhospital";
import Shalamar from "./hospitals/shalamar-hospital/shalamarhospital";

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
    path: "medicine/:id",
    element: <MedicineDetail />,
  },
  {
    path: "blog/:id",
    element: <BlogDetail />,
  },
  {
    path: "dermatologists",
    element: <Dermatologists />,
  },
  {
    path: "nephrologist",
    element: <Nephrologist />,
  },
  {
    path: "gastroenterologists",
    element: <Gastroenterologists />,
  },
  {
    path: "all-doctors",
    element: <AllDoctors />,
  },
  {
    path: "doctors/:id",
    element: <DoctorProfile />,
  },
  {
    path: "omar",
    element: <Omar />,
  },
  {
    path: "shalamar",
    element: <Shalamar />,
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
