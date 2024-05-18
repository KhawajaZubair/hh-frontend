import React from "react";
import "./App.css";
import NavBar from "./components/navbar";
import Home from "./components/home";
import Footer from "./components/footer";
import Appointment from "./components/appointment";
import Slider from "./components/slider";
import Doctors from "./components/doctorcard";
import Blogs from "./components/blogcard";
import Services from "./components/services";
import Medicine from "./components/medicine";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />

      <Footer />
    </div>
  );
}

export default App;
