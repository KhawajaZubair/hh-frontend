import React from "react";
import "./App.css";
import NavBar from "./components/navbar";
import Home from "./components/home";
import Footer from "./components/footer";

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
