import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import DermatoligistList from "./DermatoligistList";


function App2() {
  return (
    <>
      <NavBar />
      <div className="container mt-5">
        <DermatoligistList />
      </div>
      <Footer />
    </>
  );
}

export default App2;
